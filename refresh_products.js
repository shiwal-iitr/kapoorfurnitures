const fs = require('fs');
const scraped = require('./data/scraped_products.json');

const productsFilePath = './data/products.js';
let productsJs = fs.readFileSync(productsFilePath, 'utf8');

const marker = '\n  // ========================\n  //  PIYESTRA SCRAPED PRODUCTS\n  // ========================\n';
const markerStartIdx = productsJs.indexOf('// ========================', productsJs.indexOf('PIYESTRA SCRAPED PRODUCTS') - 40);

if (markerStartIdx !== -1) {
  // Find where the `products` array closes, which is `];` after the marker
  const endOfProductsArray = productsJs.indexOf('];', markerStartIdx);
  
  if (endOfProductsArray !== -1) {
    // We chop out everything between the markerStartIdx and endOfProductsArray
    const before = productsJs.slice(0, markerStartIdx);
    const after = productsJs.slice(endOfProductsArray);
    
    // Construct new products string
    let newProductsString = marker;
    scraped.forEach(p => {
       newProductsString += `  {
        id: ${p.id},
        name: ${JSON.stringify(p.name)},
        slug: ${JSON.stringify(p.slug + '-' + p.id)},
        category: '${p.category}',
        price: ${p.price},
        originalPrice: ${p.originalPrice},
        description: ${JSON.stringify(p.description)},
        features: ${JSON.stringify(p.features)},
        dimensions: '${p.dimensions}',
        material: '${p.material}',
        image: '${p.image}',
        isFeatured: ${p.isFeatured},
        isNew: ${p.isNew},
        rating: ${p.rating},
        reviews: ${p.reviews},
      },\n`;
    });
    
    productsJs = before + newProductsString + after;
    fs.writeFileSync(productsFilePath, productsJs);
    console.log('Successfully updated products.js with new scraped data!');
  } else {
    console.log('Could not find the end of products array!');
  }
} else {
  console.log('Could not find the marker!');
}
