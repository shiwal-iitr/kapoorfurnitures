const fs = require('fs');

let content = fs.readFileSync('data/products.js', 'utf8');

// 1. Update Dining Table Images
// Table 9100: p0, p6, p7
content = content.replace(
  /(id:\s*9100,[\s\S]*?image:\s*)'[^']+'([\s\S]*?gallery:\s*\[\s*)'[^']+',\s*'[^']+',\s*'[^']+'(\s*\])/,
  `$1'/images/dining_raw/extra/img_p0_1.png'$2'/images/dining_raw/extra/img_p0_1.png', '/images/dining_raw/extra/img_p6_1.png', '/images/dining_raw/extra/img_p7_1.png'$3`
);

// Table 9101: p1, p4, p5
content = content.replace(
  /(id:\s*9101,[\s\S]*?image:\s*)'[^']+'([\s\S]*?gallery:\s*\[\s*)'[^']+',\s*'[^']+',\s*'[^']+'(\s*\])/,
  `$1'/images/dining_raw/extra/img_p1_1.png'$2'/images/dining_raw/extra/img_p1_1.png', '/images/dining_raw/extra/img_p4_1.png', '/images/dining_raw/extra/img_p5_1.png'$3`
);

// Table 9102: p2, p3, p8
content = content.replace(
  /(id:\s*9102,[\s\S]*?image:\s*)'[^']+'([\s\S]*?gallery:\s*\[\s*)'[^']+',\s*'[^']+',\s*'[^']+'(\s*\])/,
  `$1'/images/dining_raw/extra/img_p2_1.png'$2'/images/dining_raw/extra/img_p2_1.png', '/images/dining_raw/extra/img_p3_1.png', '/images/dining_raw/extra/img_p8_1.png'$3`
);

// 2. Update Piyestra Subcategory Images
const products = require('./data/products.js').products;

const piyestraCategories = ['piyestra-bedroom', 'piyestra-office', 'piyestra-study', 'piyestra-entertainment'];
piyestraCategories.forEach(cat => {
  const firstProduct = products.find(p => p.category === cat && p.image);
  if (firstProduct) {
    const imageUrl = firstProduct.image;
    const catRegex = new RegExp(`(id:\\s*'${cat}',[\\s\\S]*?image:\\s*)'[^']+'`, 'g');
    content = content.replace(catRegex, `$1'${imageUrl}'`);
  }
});

fs.writeFileSync('data/products.js', content);
console.log('Fixed dining tables and piyestra subcategory images.');
