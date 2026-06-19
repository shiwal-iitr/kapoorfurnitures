'use client';

import { categories as sourceCategories } from '../data/products';

export default function CategoryFilter({ activeCategory, onCategoryChange }) {
  const mainCategories = [
    { id: 'all', name: 'All' },
    ...sourceCategories
  ];

  // Find the active parent category if it has subcategories
  let activeParentCategory = null;
  let isParentActive = false;

  for (const cat of sourceCategories) {
    if (cat.subcategories) {
      if (activeCategory === cat.id || cat.subcategories.some(s => s.id === activeCategory)) {
        activeParentCategory = cat;
        isParentActive = true;
        break;
      }
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 py-6 px-4">
      <div className="flex items-center justify-center gap-3 overflow-x-auto scrollbar-hide w-full max-w-full">
        {mainCategories.map((category) => {
          // It's active if it is directly selected, or if it's a parent category and one of its subcategories is selected
          const isMainActive = activeCategory === category.id || (activeParentCategory && activeParentCategory.id === category.id);
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                px-4 py-2 transition-all duration-300 cursor-pointer whitespace-nowrap text-sm uppercase tracking-widest relative
                ${
                  isMainActive
                    ? 'text-black font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black'
                    : 'text-gray-500 hover:text-black'
                }
              `}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
