const fs = require('fs');

let content = fs.readFileSync('data/products.js', 'utf8');

// For 9100 + 0 (Table A)
content = content.replace(
  /gallery:\s*\[\s*"\/images\/dining_raw\/extra\/img_p0_1\.png",\s*"\/images\/dining_raw\/extra\/img_p1_1\.png",\s*"\/images\/dining_raw\/extra\/img_p2_1\.png"\s*\]/g,
  'gallery: ["/images/dining_raw/extra/img_p0_1.png"]'
);

// For 9100 + 1 (Table B)
content = content.replace(
  /gallery:\s*\[\s*"\/images\/dining_raw\/extra\/img_p3_1\.png",\s*"\/images\/dining_raw\/extra\/img_p4_1\.png",\s*"\/images\/dining_raw\/extra\/img_p5_1\.png"\s*\]/g,
  'gallery: ["/images/dining_raw/extra/img_p1_1.png"]'
);

// For 9100 + 2 (Table C)
content = content.replace(
  /gallery:\s*\[\s*"\/images\/dining_raw\/extra\/img_p6_1\.png",\s*"\/images\/dining_raw\/extra\/img_p7_1\.png",\s*"\/images\/dining_raw\/extra\/img_p8_1\.png"\s*\]/g,
  'gallery: ["/images/dining_raw/extra/img_p2_1.png"]'
);

// Also fix image fields
// 9101 image
content = content.replace(
  /(id:\s*9100\s*\+\s*1,[\s\S]*?image:\s*)"\/images\/dining_raw\/extra\/img_p3_1\.png"/g,
  '$1"/images/dining_raw/extra/img_p1_1.png"'
);

// 9102 image
content = content.replace(
  /(id:\s*9100\s*\+\s*2,[\s\S]*?image:\s*)"\/images\/dining_raw\/extra\/img_p6_1\.png"/g,
  '$1"/images/dining_raw/extra/img_p2_1.png"'
);

fs.writeFileSync('data/products.js', content);
console.log("Galleries fixed properly!");
