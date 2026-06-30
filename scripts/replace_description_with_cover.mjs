// One-shot transform: for every product, set `gallery` to [cover image].
// Skips products whose gallery is already exactly [cover image].
// Re-serializes data/products.js, preserving categories block and helper functions.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(here, '..', 'data', 'products.js');

const mod = await import(pathToFileURL(dataPath).href);
const { categories, products } = mod;

const original = readFileSync(dataPath, 'utf8');
const helpersIdx = original.indexOf('// ========================');
if (helpersIdx < 0) throw new Error('Could not locate helpers section');
const helpers = original.slice(helpersIdx);

const report = { total: products.length, updated: 0, unchanged: 0, errors: [], samples: [] };

for (const p of products) {
  try {
    const cover = p.image;
    if (!cover) {
      report.errors.push({ id: p.id, slug: p.slug, reason: 'missing cover image' });
      continue;
    }
    const existing = Array.isArray(p.gallery) ? p.gallery : null;
    if (existing && existing.length === 1 && existing[0] === cover) {
      report.unchanged++;
      continue;
    }
    p.gallery = [cover];
    report.updated++;
    if (report.samples.length < 5) {
      report.samples.push({ id: p.id, slug: p.slug, cover });
    }
  } catch (e) {
    report.errors.push({ id: p?.id, slug: p?.slug, reason: e.message });
  }
}

const out =
  `export const categories = ${JSON.stringify(categories, null, 2)};\n\n` +
  `export const products = ${JSON.stringify(products, null, 2)};\n\n` +
  helpers;

writeFileSync(dataPath, out, 'utf8');

console.log(JSON.stringify(report, null, 2));
