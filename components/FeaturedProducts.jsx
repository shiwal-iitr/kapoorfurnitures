import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../data/products';
import Link from 'next/link';

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section id="featured" className="py-24 px-4 bg-transparent scroll-mt-20">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Featured Collection
          </h2>
          <div className="gold-line" />
          <p className="section-subheading">
            Handpicked pieces that define luxury and comfort
          </p>
        </div>

        {/* Products Slider */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {featuredProducts.map((product) => (
            <div key={product.id} className="w-[60vw] sm:w-[35vw] md:w-[25vw] lg:w-[20vw] flex-shrink-0 snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12 md:mt-32">
          <Link
            href="/products"
            className="inline-block px-16 py-4 bg-black text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/20"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
