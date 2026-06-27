import { products, categories } from '../data/products';

const SITE_URL = 'https://www.kapoorfurnitures.com';

// Collect every category + subcategory id so each filtered collection page is discoverable.
function collectCategoryIds(cats, acc = []) {
  for (const cat of cats) {
    acc.push(cat.id);
    if (cat.subcategories) collectCategoryIds(cat.subcategories, acc);
  }
  return acc;
}

export default function sitemap() {
  const staticRoutes = [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/products`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const categoryRoutes = collectCategoryIds(categories).map((id) => ({
    url: `${SITE_URL}/products?category=${id}`,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const productRoutes = products.map((product) => ({
    url: `${SITE_URL}/products/${product.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
