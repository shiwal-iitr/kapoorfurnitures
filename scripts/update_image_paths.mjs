import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { products } from '../data/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const productsPath = path.join(__dirname, '../data/products.js');

let productsContent = fs.readFileSync(productsPath, 'utf8');
let matchCount = 0;

for (const p of products) {
  const newImagePath = `/images/products/${p.slug}.jpg`;
  const absoluteImagePath = path.join(__dirname, `../public${newImagePath}`);
  
  if (fs.existsSync(absoluteImagePath)) {
    // Corrected regex to match numeric IDs without quotes
    const regex = new RegExp(`(id:\\s*${p.id},[\\s\\S]*?image:\\s*['"])([^'"]+)(['"])`);
    
    if (regex.test(productsContent)) {
      productsContent = productsContent.replace(regex, `$1${newImagePath}$3`);
      matchCount++;
    } else {
      console.log(`Failed to match regex for product ${p.name}`);
    }
  }
}

fs.writeFileSync(productsPath, productsContent);
console.log(`Updated products.js! Replaced ${matchCount} images.`);
