// Restore original names for products in any piyestra category from the
// pre-bulk-rename version of products.js (HEAD~1 at the time this was run,
// which was the commit immediately before "Rename every catalog item to
// Premium <type> <N>"). Slugs are the join key.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(here, '..', 'data', 'products.js');
const beforePath = path.join(here, '_products_before.js');

const PIYESTRA_CATEGORIES = new Set([
  'piyestra-bedroom-beds',
  'piyestra-bedroom-wardrobes',
  'piyestra-bedroom-centre-tables',
  'piyestra-office',
  'piyestra-study',
  'piyestra-entertainment',
]);

// Load both versions. Use file URLs to avoid stale module cache issues.
const before = await import(pathToFileURL(beforePath).href + '?v=before');
const current = await import(pathToFileURL(dataPath).href + '?v=current');

const slugToOriginalName = new Map();
for (const p of before.products) {
  if (PIYESTRA_CATEGORIES.has(p.category)) {
    slugToOriginalName.set(p.slug, p.name);
  }
}

const original = readFileSync(dataPath, 'utf8');
const helpersIdx = original.indexOf('// ========================');
if (helpersIdx < 0) throw new Error('Could not locate helpers section');
const helpers = original.slice(helpersIdx);

const report = { piyestraTotal: 0, restored: 0, unchanged: 0, missingInBefore: [] };

for (const p of current.products) {
  if (!PIYESTRA_CATEGORIES.has(p.category)) continue;
  report.piyestraTotal++;
  const orig = slugToOriginalName.get(p.slug);
  if (!orig) {
    report.missingInBefore.push({ slug: p.slug, currentName: p.name });
    continue;
  }
  if (p.name === orig) {
    report.unchanged++;
    continue;
  }
  p.name = orig;
  report.restored++;
}

const out =
  `export const categories = ${JSON.stringify(current.categories, null, 2)};\n\n` +
  `export const products = ${JSON.stringify(current.products, null, 2)};\n\n` +
  helpers;

writeFileSync(dataPath, out, 'utf8');
console.log(JSON.stringify(report, null, 2));
