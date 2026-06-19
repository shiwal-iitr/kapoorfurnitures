const fs = require('fs');

let content = fs.readFileSync('data/products.js', 'utf8');

// The original arrays are:
// 9100: ['/images/dining_raw/extra/img_p0_1.png', '/images/dining_raw/extra/img_p1_1.png', '/images/dining_raw/extra/img_p2_1.png']
// 9101: ['/images/dining_raw/extra/img_p3_1.png', '/images/dining_raw/extra/img_p4_1.png', '/images/dining_raw/extra/img_p5_1.png']
// 9102: ['/images/dining_raw/extra/img_p6_1.png', '/images/dining_raw/extra/img_p7_1.png', '/images/dining_raw/extra/img_p8_1.png']

content = content.replace(
  /gallery:\s*\[\s*'\/images\/dining_raw\/extra\/img_p0_1\.png',\s*'\/images\/dining_raw\/extra\/img_p1_1\.png',\s*'\/images\/dining_raw\/extra\/img_p2_1\.png'\s*\]/g,
  "gallery: ['/images/dining_raw/extra/img_p0_1.png']"
);

content = content.replace(
  /gallery:\s*\[\s*'\/images\/dining_raw\/extra\/img_p3_1\.png',\s*'\/images\/dining_raw\/extra\/img_p4_1\.png',\s*'\/images\/dining_raw\/extra\/img_p5_1\.png'\s*\]/g,
  "gallery: ['/images/dining_raw/extra/img_p1_1.png']"
);

content = content.replace(
  /gallery:\s*\[\s*'\/images\/dining_raw\/extra\/img_p6_1\.png',\s*'\/images\/dining_raw\/extra\/img_p7_1\.png',\s*'\/images\/dining_raw\/extra\/img_p8_1\.png'\s*\]/g,
  "gallery: ['/images/dining_raw/extra/img_p2_1.png']"
);

// We also need to fix the `image:` property for 9101 and 9102
content = content.replace(
  /(id:\s*9101,[\s\S]*?image:\s*)'[^']+'/g,
  "$1'/images/dining_raw/extra/img_p1_1.png'"
);

content = content.replace(
  /(id:\s*9102,[\s\S]*?image:\s*)'[^']+'/g,
  "$1'/images/dining_raw/extra/img_p2_1.png'"
);


fs.writeFileSync('data/products.js', content);
console.log("Galleries fixed!");
