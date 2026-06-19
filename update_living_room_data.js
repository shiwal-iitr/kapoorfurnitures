const fs = require('fs');

let content = fs.readFileSync('data/products.js', 'utf8');

// 1. Update categories array
const oldSofaCategory = `{ id: 'sofa-sets', name: 'Sofa Sets', description: 'Luxurious seating comfort', image: '/images/products/maharaja-7-seater-sofa-set.jpg' },`;
const newLivingRoomCategory = `{ 
    id: 'living-room', 
    name: 'Living Room', 
    description: 'Living room furniture', 
    image: '/images/sofas_raw/img_p0_1.png',
    subcategories: [
      { id: 'sofa-sets', name: 'Sofa Sets', description: 'Luxurious seating comfort' },
      { id: 'centre-tables', name: 'Centre Tables', description: 'Elegant centre tables' }
    ]
  },`;

if (content.includes("id: 'sofa-sets', name: 'Sofa Sets'")) {
  content = content.replace(oldSofaCategory, newLivingRoomCategory);
}

// 2. Update existing sofa images
// The sofa IDs are 37 to 54. We will replace their image lines.
for (let id = 37; id <= 54; id++) {
  const imageIndex = id - 37;
  const newImagePath = `/images/sofas_raw/img_p${imageIndex}_1.png`;
  
  // We need to find the product object for this ID and replace its image
  // This regex matches the block for the specific id up to its image
  const idRegex = new RegExp(`(id:\\s*${id},[\\s\\S]*?image:\\s*)'[^']+'`, 'g');
  content = content.replace(idRegex, `$1'${newImagePath}'`);
}

// 3. Add centre tables
let newProducts = ``;
for (let i = 0; i < 11; i++) {
  newProducts += `
  {
    id: 9200 + ${i},
    name: "Elegant Centre Table " + (${i} + 1),
    slug: "elegant-centre-table-" + (${i} + 1),
    category: 'centre-tables',
    price: 8000 + (${i} * 500),
    originalPrice: 10000 + (${i} * 500),
    description: "A beautiful centre table to perfectly complement your living room seating. Features a sturdy design with a premium finish.",
    features: ["Sturdy Construction", "Premium Finish", "Modern Design"],
    dimensions: "Standard Centre Table Size",
    material: "Premium Wood / Glass",
    image: "/images/centre_tables_raw/img_p${i}_1.png",
    isFeatured: ${i === 0 ? 'true' : 'false'},
    isNew: true,
    rating: 4.6,
    reviews: 15
  },`;
}

// Insert before the closing bracket of the products array
content = content.replace(/export const products = \[/, `export const products = [${newProducts}`);

fs.writeFileSync('data/products.js', content);
console.log('Categories and products updated.');
