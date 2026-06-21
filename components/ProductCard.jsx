import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  const isPiyestra = product.category && product.category.startsWith('piyestra');

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    return (
      <span className="text-yellow-500 text-sm">
        {'★'.repeat(fullStars)}
        {hasHalf && '★'}
        {'☆'.repeat(emptyStars)}
      </span>
    );
  };

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
        {/* Image container */}
        <div className="relative w-full bg-gray-50 overflow-hidden">
          {product.image && product.image !== '/images/placeholder.svg' ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.image.includes('piyestraindia.com') ? `${product.image}?v=1` : product.image}
              alt={product.name}
              className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="flex items-center justify-center p-12">
              <span className="text-6xl font-serif text-gray-300 select-none group-hover:scale-110 transition-transform duration-500">
                {product.name?.charAt(0) || 'F'}
              </span>
            </div>
          )}

          {/* New badge */}
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
              New
            </span>
          )}
        </div>

        {/* Card body */}
        <div className="p-5 space-y-3">
          {/* Category label */}
          {product.category && (
            <span className="text-gray-500 text-xs uppercase tracking-wider">
              {product.category.replace('piyestra-', '')}
            </span>
          )}

          {/* Product name */}
          <h3 className="text-gray-900 font-medium text-lg truncate">
            {product.name}
          </h3>

          {/* Star rating */}
          {product.rating !== undefined && (
            <div className="flex items-center gap-2">
              {renderStars(product.rating)}
              <span className="text-gray-500 text-sm">({product.rating})</span>
            </div>
          )}


        </div>
      </div>
    </Link>
  );
}
