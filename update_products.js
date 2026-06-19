const fs = require('fs');
const scraped = require('./data/scraped_products.json');

const productsFilePath = 'd:/summer project/websites/kapoor-furnitures/data/products.js';
let productsJs = fs.readFileSync(productsFilePath, 'utf8');

// Add categories if not exist
const newCategories = [
  { id: 'piyestra-bedroom', name: 'Piyestra Bedroom', description: 'Piyestra Bedroom Collection', image: '/images/placeholder.svg' },
  { id: 'piyestra-office', name: 'Piyestra Office', description: 'Piyestra Office Collection', image: '/images/placeholder.svg' },
  { id: 'piyestra-study', name: 'Piyestra Study', description: 'Piyestra Study Collection', image: '/images/placeholder.svg' },
  { id: 'piyestra-entertainment', name: 'Piyestra Entertainment', description: 'Piyestra Entertainment Collection', image: '/images/placeholder.svg' }
];

let categoriesString = '';
newCategories.forEach(cat => {
   categoriesString += `  { id: '${cat.id}', name: '${cat.name}', description: '${cat.description}', image: '${cat.image}' },\n`;
});

// Insert categories
productsJs = productsJs.replace(/export const categories = \[/, `export const categories = [\n${categoriesString}`);

// Convert scraped products to JS string
let newProductsString = '\n  // ========================\n  //  PIYESTRA SCRAPED PRODUCTS\n  // ========================\n';
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

// Append products before the last closing bracket of products array
const lastBracketIndex = productsJs.lastIndexOf('];');
productsJs = productsJs.slice(0, lastBracketIndex) + newProductsString + productsJs.slice(lastBracketIndex);

fs.writeFileSync(productsFilePath, productsJs);
console.log('Successfully updated products.js');
