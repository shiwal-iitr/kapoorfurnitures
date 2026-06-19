const fs = require('fs');
const scraped = require('./data/scraped_products.json');

const productsFilePath = './data/products.js';
let content = fs.readFileSync(productsFilePath, 'utf8');

// The original products end at id: 54. Let's find id: 54.
// Let's find the closing brace of id: 54
const id54Index = content.indexOf('id: 54,');
const id54EndIndex = content.indexOf('  },', id54Index) + 4; // gets past `  },`

// Keep everything up to id: 54
let newContent = content.slice(0, id54EndIndex);

// Add the scraped products
const marker = '\n\n  // ========================\n  //  PIYESTRA SCRAPED PRODUCTS\n  // ========================\n';
newContent += marker;

scraped.forEach(p => {
  newContent += `  {
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

// Close the products array
newContent += '];\n\n';

// Add the helper functions
const helperFunctions = `// ========================
//  HELPER FUNCTIONS
// ========================

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug) || null;
}

export function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.isFeatured);
}

export function getRelatedProducts(productId, limit = 4) {
  const currentProduct = products.find((product) => product.id === productId);
  if (!currentProduct) return [];

  return products
    .filter(
      (product) =>
        product.category === currentProduct.category &&
        product.id !== productId
    )
    .slice(0, limit);
}
`;

newContent += helperFunctions;

fs.writeFileSync(productsFilePath, newContent);
console.log('Fixed products.js!');
