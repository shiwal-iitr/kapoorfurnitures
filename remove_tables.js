const fs = require('fs');

const dataFile = 'data/products.js';
let content = fs.readFileSync(dataFile, 'utf8');

// We need to parse products, filter it, and then stringify it
// Then replace the products array string in the file.
const { products } = require('./data/products.js');

const filteredProducts = products.filter(p => ![9202, 9203, 9208].includes(p.id));

// Convert to string and clean up formatting
const productsStr = JSON.stringify(filteredProducts, null, 2)
  .replace(/"([^"]+)":/g, '$1:');

const startTag = 'export const products = [';
const endTag = '];\n\n// ========================';

const startIdx = content.indexOf(startTag);
const endIdx = content.indexOf(endTag);

if (startIdx !== -1 && endIdx !== -1) {
  const newContent = content.slice(0, startIdx) + 'export const products = ' + productsStr + ';\n\n// ========================' + content.slice(endIdx + endTag.length);
  fs.writeFileSync(dataFile, newContent);
  console.log('Successfully removed tables.');
} else {
  console.log('Could not find start or end tags.');
}
