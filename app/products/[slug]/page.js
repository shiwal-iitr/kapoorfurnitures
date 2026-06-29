import Link from 'next/link';
import Image from 'next/image';
import { products, categories, getProductBySlug, getRelatedProducts } from '../../../data/products';
import ProductCard from '../../../components/ProductCard';
import ProductGallery from '../../../components/ProductGallery';
import WhatsAppEnquireButton from '../../../components/WhatsAppEnquireButton';
import BackButton from '../../../components/BackButton';

function getCategoryName(categoryId) {
  const search = (cats) => {
    for (const cat of cats) {
      if (cat.id === categoryId) return cat.name;
      if (cat.subcategories) {
        const found = search(cat.subcategories);
        if (found) return found;
      }
    }
    return null;
  };
  return search(categories) || categoryId;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const slug = params?.slug;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  const imageUrl = product.image
    ? `https://www.kapoorfurnitures.com${product.image}`
    : '/og-image.png';

  return {
    title: `${product.name} - ${product.material}`,
    description: product.description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.description,
      url: `https://www.kapoorfurnitures.com/products/${product.slug}`,
      type: 'website',
      images: [{ url: imageUrl, alt: product.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: [imageUrl],
    },
  };
}

export default async function ProductDetailPage(props) {
  const params = await props.params;
  const slug = params?.slug;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The product you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/products" className="btn-primary">
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const stars = Array.from({ length: 5 }, (_, i) =>
    i < Math.floor(product.rating) ? '★' : '☆'
  );

  // WhatsApp message logic moved to client component WhatsAppEnquireButton

  return (
    <div className="min-h-screen pt-8">
      {/* Breadcrumb */}
      <div className="container-custom py-6">
        <BackButton />
        <nav className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
          <Link href="/" className="hover:text-[#c9a96e] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#c9a96e] transition-colors">
            Products
          </Link>
          <span>/</span>
          <Link
            href={`/products?category=${product.category}`}
            className="hover:text-[#c9a96e] transition-colors capitalize"
          >
            {getCategoryName(product.category)}
          </Link>
          <span>/</span>
          <span className="text-gray-600 truncate max-w-[200px]">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <section className="container-custom pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image Gallery */}
          <ProductGallery product={product} />

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            {/* Category */}
            <span className="text-[#c9a96e] text-sm uppercase tracking-[0.2em] font-medium mb-3">
              {getCategoryName(product.category)}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex text-[#c9a96e] text-lg">
                {stars.map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <span className="text-gray-500 text-sm">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>



            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              {product.description}
            </p>

            {/* Specs */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8">
              <h3 className="text-gray-900 font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#c9a96e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-500 text-sm">Material</span>
                  <span className="text-gray-900 text-sm font-medium">{product.material}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-500 text-sm">Dimensions</span>
                  <span className="text-gray-900 text-sm font-medium">{product.dimensions}</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-gray-900 font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#c9a96e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="text-[#c9a96e] mt-0.5 flex-shrink-0">✦</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <WhatsAppEnquireButton />
              <Link
                href="/contact"
                className="btn-secondary flex-1 min-w-[200px] justify-center"
              >
                Visit Store
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="section-heading text-2xl md:text-3xl">
              You May Also Like
            </h2>
            <div className="gold-line" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* JSON-LD for Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: product.description,
            category: getCategoryName(product.category),
            sku: String(product.id),
            image: product.image
              ? `https://www.kapoorfurnitures.com${product.image}`
              : undefined,
            brand: {
              '@type': 'Brand',
              name: 'Kapoor Furnitures',
            },
            material: product.material,
            offers: {
              '@type': 'Offer',
              url: `https://www.kapoorfurnitures.com/products/${product.slug}`,
              availability: 'https://schema.org/InStock',
              priceCurrency: 'INR',
              price: product.price,
              seller: {
                '@type': 'Organization',
                name: 'Kapoor Furnitures',
              },
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: product.rating,
              reviewCount: product.reviews,
            },
          }),
        }}
      />
    </div>
  );
}
