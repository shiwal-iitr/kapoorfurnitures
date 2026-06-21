'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, categories } from '../../data/products';
import ProductCard from '../../components/ProductCard';
import CategoryFilter from '../../components/CategoryFilter';

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = require('next/navigation').useRouter();
  
  const activeCategory = searchParams.get('category') || 'all';
  const setActiveCategory = (catId) => {
    if (catId === 'all') {
      router.push('/products', { scroll: false });
    } else {
      router.push(`/products?category=${catId}`, { scroll: false });
    }
  };

  const [sortBy, setSortBy] = useState('featured');

  const activeCategoryNode = useMemo(() => {
    if (activeCategory === 'all') return null;
    let found = null;
    const search = (cats) => {
      for (const c of cats) {
        if (c.id === activeCategory) found = c;
        if (!found && c.subcategories) search(c.subcategories);
      }
    };
    search(categories);
    return found;
  }, [activeCategory]);

  const subcategoriesToShow = activeCategoryNode?.subcategories || null;

  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (activeCategory !== 'all' && activeCategoryNode) {
      // Gather all subcategory IDs recursively
      const gatherIds = (node) => {
        let ids = [node.id];
        if (node.subcategories) {
          for (const sub of node.subcategories) {
            ids = ids.concat(gatherIds(sub));
          }
        }
        return ids;
      };
      const validIds = gatherIds(activeCategoryNode);
      filtered = products.filter(p => validIds.includes(p.category));
    }

    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered = [...filtered].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        filtered = [...filtered].sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    return filtered;
  }, [activeCategory, activeCategoryNode, sortBy]);

  return (
    <div className="min-h-screen pt-8">
      {/* Page Header */}
      <section className="section-padding pb-4 relative">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 uppercase">
            {activeCategoryNode ? activeCategoryNode.name : 'Our Collection'}
          </h1>
          <div className="gold-line" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
            Explore our curated collection of premium furniture, handcrafted to
            perfection for your dream home.
          </p>
        </div>
        
        {/* Back button aligned bottom left of header */}
        {activeCategoryNode && (
          <div className="container-custom flex justify-start">
            <button onClick={() => window.history.back()} className="text-sm text-gray-500 hover:text-black cursor-pointer flex items-center gap-1 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </button>
          </div>
        )}
      </section>

      {/* Filters & Sort */}
      <section className="pb-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Category Filter */}
            <CategoryFilter
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {/* Sort Dropdown */}
            {(!activeCategoryNode || (
              activeCategoryNode.id !== 'dining' &&
              activeCategoryNode.id !== 'piyestra' &&
              activeCategoryNode.id !== 'living-room' &&
              !['sofa-sets', 'centre-tables', 'piyestra-bedroom', 'piyestra-bedroom-beds', 'piyestra-bedroom-wardrobes', 'piyestra-office', 'piyestra-study', 'piyestra-entertainment'].includes(activeCategoryNode.id)
            )) && (
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 text-sm focus:outline-none focus:border-black transition-colors cursor-pointer appearance-none min-w-[160px]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                  }}
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            )}
          </div>

          {/* Results count removed per user request */}
        </div>
      </section>

      {/* Visual Subcategories Grid */}
      {subcategoriesToShow && subcategoriesToShow.length > 0 && (
        <section className="pb-12 pt-6">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-8">
              {subcategoriesToShow.map((sub) => (
                <div 
                  key={sub.id}
                  onClick={() => setActiveCategory(sub.id)}
                  className={`relative h-64 md:h-80 w-full sm:w-[45%] lg:w-[30%] min-w-[280px] rounded-2xl overflow-hidden cursor-pointer group ${activeCategory === sub.id ? 'ring-4 ring-black ring-offset-2' : ''}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={sub.image && sub.image.includes('piyestraindia.com') ? `${sub.image}?v=1` : (sub.image || '/images/placeholder.svg')} 
                    alt={sub.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide drop-shadow-md">
                      {sub.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Product Grid */}
      {(!subcategoriesToShow || subcategoriesToShow.length === 0) && (
        <section className="pb-24 pt-8">
        <div className="container-custom">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center pt-8 bg-white">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
