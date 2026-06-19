const fs = require('fs');

const filePath = 'data/products.js';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add 'dining' category to categories array
if (!content.includes("id: 'dining'")) {
  const categoryStr = `\n  { id: 'dining', name: 'Dining', description: 'Elegant and durable dining tables for your home', image: '/images/dining_raw/main/img_p1_1.png' },`;
  content = content.replace(/export const categories = \[/, `export const categories = [${categoryStr}`);
}

// 2. Add products
const mainPages = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12]; // these correspond to pages 2,3,4,5,6,7,8,9,11,13

let newProducts = ``;

// Add main PDF tables
mainPages.forEach((pageIdx, i) => {
  newProducts += `
  {
    id: 9000 + ${i},
    name: "Classic Dining Table " + (${i} + 1),
    slug: "classic-dining-table-" + (${i} + 1),
    category: 'dining',
    price: 15000 + (${i} * 1000),
    originalPrice: 18000 + (${i} * 1000),
    description: "A beautifully crafted dining table, perfect for your family meals. Designed with elegance and durability in mind.",
    features: ["Solid Wood Construction", "Spacious Tabletop", "Elegant Finish"],
    dimensions: "Standard Dining Size",
    material: "Premium Wood",
    image: "/images/dining_raw/main/img_p${pageIdx}_1.png",
    isFeatured: ${i === 0 ? 'true' : 'false'},
    isNew: true,
    rating: 4.5,
    reviews: 12
  },`;
});

// Add Extra PDF tables
const extraGroups = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
];

extraGroups.forEach((group, i) => {
  newProducts += `
  {
    id: 9100 + ${i},
    name: "Premium Dining Table Collection " + String.fromCharCode(65 + ${i}),
    slug: "premium-dining-table-" + String.fromCharCode(65 + ${i}).toLowerCase(),
    category: 'dining',
    price: 25000,
    originalPrice: 30000,
    description: "A premium multi-view dining table setting that elevates any dining space. See multiple angles to appreciate its fine craftsmanship.",
    features: ["Premium Wood Construction", "Multi-angle Views Available", "Modern Design"],
    dimensions: "Standard Dining Size",
    material: "Premium Wood & Glass",
    image: "/images/dining_raw/extra/img_p${group[0]}_1.png",
    gallery: [
      "/images/dining_raw/extra/img_p${group[0]}_1.png",
      "/images/dining_raw/extra/img_p${group[1]}_1.png",
      "/images/dining_raw/extra/img_p${group[2]}_1.png"
    ],
    isFeatured: true,
    isNew: true,
    rating: 4.8,
    reviews: 24
  },`;
});

// Insert new products before the end of the array
// We will replace `export const products = [` with `export const products = [ ...newProducts `
content = content.replace(/export const products = \[/, `export const products = [${newProducts}`);

fs.writeFileSync(filePath, content);
console.log('Dining category and products added successfully.');
