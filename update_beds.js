const fs = require('fs');

const dataPath = 'd:\\summer project\\websites\\kapoor-furnitures\\data\\products.js';
let content = fs.readFileSync(dataPath, 'utf8');

// The file exports categories and products. We'll parse the products array out, modify it, and put it back.
// Since it's a JS file and not JSON, it might be tricky to parse. But we can use regex to replace specific name fields.

// 1. Rename "ATHENA HYDRAULIC KING BED" to "ATHENA HYDRAULIC BED"
content = content.replace(/"name":\s*"ATHENA HYDRAULIC KING BED"/g, '"name": "ATHENA HYDRAULIC BED"');
// 2. Rename "AUSTIN HYDRAULIC KING BED" to "AUSTIN HYDRAULIC BED"
content = content.replace(/"name":\s*"AUSTIN HYDRAULIC KING BED"/g, '"name": "AUSTIN HYDRAULIC BED"');

// 3. Remove "ATHENA HYDRAULIC QUEEN BED" and "AUSTIN HYDRAULIC QUEEN BED"
// We can find the start of the object and remove it. But since it's JS, we can just replace the object blocks.
// Better yet, let's just evaluate the file, filter the array, and reconstruct. 
// Actually, no, evaluating a JS file with exports in Node requires some setup.

// Let's do it via regex removal for the specific blocks.
// Since there might be multiple, we can use a regex to match the object.
const removePattern1 = /\{\s*"id":\s*\d+,\s*"name":\s*"ATHENA HYDRAULIC QUEEN BED"[\s\S]*?\},\s*/g;
const removePattern2 = /\{\s*"id":\s*\d+,\s*"name":\s*"AUSTIN HYDRAULIC QUEEN BED"[\s\S]*?\},\s*/g;

content = content.replace(removePattern1, '');
content = content.replace(removePattern2, '');

fs.writeFileSync(dataPath, content, 'utf8');
console.log('Products updated successfully.');
