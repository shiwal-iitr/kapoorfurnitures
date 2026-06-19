const fs = require('fs');

let content = fs.readFileSync('data/products.js', 'utf8');

for (let id = 1; id <= 18; id++) {
  const imageIndex = id - 1;
  const newImagePath = `/images/beds_raw/img_p${imageIndex}_1.png`;
  
  const idRegex = new RegExp(`(id:\\s*${id},[\\s\\S]*?image:\\s*)'[^']+'`, 'g');
  content = content.replace(idRegex, `$1'${newImagePath}'`);
}

fs.writeFileSync('data/products.js', content);
console.log('Beds images updated.');
