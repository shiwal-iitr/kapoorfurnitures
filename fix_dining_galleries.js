const fs = require('fs');

let content = fs.readFileSync('data/products.js', 'utf8');

// Replace the gallery lines for the 3 tables to remove them or just have one image
content = content.replace(
  /(id:\s*9100,[\s\S]*?gallery:\s*\[)\s*'[^']+',\s*'[^']+',\s*'[^']+'\s*(\])/,
  `$1'/images/dining_raw/extra/img_p0_1.png'$2`
);

content = content.replace(
  /(id:\s*9101,[\s\S]*?gallery:\s*\[)\s*'[^']+',\s*'[^']+',\s*'[^']+'\s*(\])/,
  `$1'/images/dining_raw/extra/img_p1_1.png'$2`
);

content = content.replace(
  /(id:\s*9102,[\s\S]*?gallery:\s*\[)\s*'[^']+',\s*'[^']+',\s*'[^']+'\s*(\])/,
  `$1'/images/dining_raw/extra/img_p2_1.png'$2`
);

fs.writeFileSync('data/products.js', content);
console.log('Fixed galleries for dining tables');
