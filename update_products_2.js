const fs = require('fs');
const path = require('path');

const filePath = 'd:\\summer project\\websites\\kapoor-furnitures\\data\\products.js';
let content = fs.readFileSync(filePath, 'utf8');

// The objects to remove. We'll use regex to remove everything from '{' to '  },' starting with a specific ID.
const idsToRemove = [400003, 400007, 400008, 400009, 400011];

for (const id of idsToRemove) {
  const regex = new RegExp(`\\s*\\{\\s*"id":\\s*${id},[\\s\\S]*?\\},`, 'g');
  content = content.replace(regex, '');
}

// Rename 400010 "AVON HYDRAULIC KING BED" to "AVON HYDRAULIC BED"
content = content.replace(/"name":\s*"AVON HYDRAULIC KING BED"/g, '"name": "AVON HYDRAULIC BED"');

// Fix Sofa Set 3 gallery. Remove "/images/sofas_raw/img_p9_1.png"
content = content.replace(/"\/images\/sofas_raw\/img_p8_1\.png",\s*"\/images\/sofas_raw\/img_p9_1\.png"/, '"/images/sofas_raw/img_p8_1.png"');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update complete');
