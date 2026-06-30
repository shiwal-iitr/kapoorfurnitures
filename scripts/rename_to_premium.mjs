// Bulk rename every product to "Premium <item-type> <N>".
// Slugs are preserved so existing URLs continue to work.
// Re-serializes data/products.js, keeping the categories block and helper exports.

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

// Broad item-type per category, per the user's "all a bed -> Premium Bed N" rule.
// Piyestra products are excluded from the Premium-<N> rename — they keep
// their original Piyestra-supplier names. Everything else is normalised.
const CATEGORY_TO_TYPE = {
  'bedroom-beds': 'Bed',
  'bedroom-chairs': 'Chair',
  'centre-tables': 'Centre Table',
  'glass-top': 'Dining Table',
  'marble-top': 'Dining Table',
  '3-1-1-sofas': 'Sofa',
  '3-2-2-sofas': 'Sofa',
  'l-shape-sofas': 'Sofa',
  'sofa-cum-bed': 'Sofa Cum Bed',
  'deewan-cum-bed': 'Deewan Cum Bed',
};

const counters = {};
const report = { total: products.length, renamed: 0, byType: {}, samples: [], errors: [] };

for (const p of products) {
  const type = CATEGORY_TO_TYPE[p.category];
  if (!type) {
    // Skip silently — piyestra products and any other unmapped categories keep their original names.
    continue;
  }
  counters[type] = (counters[type] || 0) + 1;
  const newName = `Premium ${type} ${counters[type]}`;
  const oldName = p.name;
  p.name = newName;
  report.renamed++;
  report.byType[type] = counters[type];
  if (report.samples.length < 10) report.samples.push({ slug: p.slug, oldName, newName });
}

const out =
  `export const categories = ${JSON.stringify(categories, null, 2)};\n\n` +
  `export const products = ${JSON.stringify(products, null, 2)};\n\n` +
  helpers;

writeFileSync(dataPath, out, 'utf8');
console.log(JSON.stringify(report, null, 2));
