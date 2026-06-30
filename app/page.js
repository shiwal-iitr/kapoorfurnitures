import HeroSection from '../components/HeroSection';
import FeaturedSlideshow from '../components/FeaturedSlideshow';
import Link from 'next/link';

const CATEGORY_ICONS = [
  {
    name: 'Bed',
    href: '/products?category=bedroom-beds',
    svg: (
      <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
        <path d="M6 22h22v8H6zM30 14h28v16H30z" />
        <path d="M4 30h56v10H4zM4 40h4v10H4zM56 40h4v10h-4z" />
      </svg>
    ),
  },
  {
    name: 'Sofa',
    href: '/products?category=sofa-sets',
    svg: (
      <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
        <path d="M10 26c0-4 2-6 6-6h32c4 0 6 2 6 6v6H10z" />
        <path d="M6 30c-2 0-4 2-4 4v8c0 2 2 4 4 4s4-2 4-4v-8c0-2-2-4-4-4zM58 30c-2 0-4 2-4 4v8c0 2 2 4 4 4s4-2 4-4v-8c0-2-2-4-4-4z" />
        <path d="M10 34h44v8H10zM12 42h4v8h-4zM48 42h4v8h-4z" />
      </svg>
    ),
  },
  {
    name: 'Center Table',
    href: '/products?category=centre-tables',
    svg: (
      <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
        <ellipse cx="32" cy="24" rx="22" ry="6" />
        <path d="M16 28c-2 6-6 14-8 18l4 2c2-4 6-12 8-18zM48 28c2 6 6 14 8 18l-4 2c-2-4-6-12-8-18z" />
        <path d="M28 28h8v22h-8z" />
      </svg>
    ),
  },
  {
    name: 'Dining',
    href: '/products?category=dining',
    svg: (
      <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
        <circle cx="32" cy="14" r="3" />
        <path d="M32 18c-10 0-18 6-18 14h36c0-8-8-14-18-14z" />
        <path d="M4 34h56v4H4zM12 38h4v18h-4zM48 38h4v18h-4z" />
      </svg>
    ),
  },
  {
    name: 'Chairs',
    href: '/products?category=chairs',
    svg: (
      <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
        <path d="M20 8h24v22H20z" />
        <path d="M16 30h32v8H16z" />
        <path d="M18 38h4v18h-4zM42 38h4v18h-4z" />
      </svg>
    ),
  },
  {
    name: 'Study',
    href: '/products?category=piyestra-study',
    svg: (
      <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
        <path d="M14 10h8v18h-8z" />
        <path d="M18 28h22v6H18z" />
        <path d="M4 36h56v6H4z" />
        <path d="M8 42h4v14H8zM52 42h4v14h-4z" />
      </svg>
    ),
  },
  {
    name: 'Others',
    href: '/products?category=others',
    svg: (
      <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
        <rect x="6" y="14" width="52" height="14" rx="3" />
        <rect x="6" y="32" width="52" height="10" rx="3" />
        <path d="M8 42h4v10H8zM52 42h4v10h-4z" />
      </svg>
    ),
  },
  {
    name: 'More Items',
    href: '/products',
    svg: (
      <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
        <path d="M4 16h56L32 52z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Collection (slideshow) */}
      <FeaturedSlideshow />

      {/* Category Showcase */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container-custom text-center py-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-tight mb-12 md:mb-16">Offering furniture that makes you feel home</h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3 sm:gap-5 max-w-6xl mx-auto">
            {CATEGORY_ICONS.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group flex flex-col items-center justify-center aspect-square bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-900 transition-all duration-300 p-3 sm:p-4"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 text-black flex items-center justify-center">
                  {cat.svg}
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-900 text-center leading-tight">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-heading">Why Choose Kapoor Furnitures</h2>
          <div className="gold-line" />
          <p className="section-subheading">
            We believe in delivering excellence at every step
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Premium Quality',
                desc: 'Handcrafted from the finest materials with meticulous attention to detail',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8h4l3 4v4a1 1 0 01-1 1h-1" />
                  </svg>
                ),
                title: 'All India Delivery',
                desc: 'We deliver our furniture pan India with careful packaging and reliable logistics',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: 'On Call Support',
                desc: 'Reach our team directly by phone for product queries, orders and after-sales help',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-8 text-center card-hover group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gray-100 flex items-center justify-center text-black group-hover:bg-gray-200 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 mb-16 relative overflow-hidden bg-gray-50">
        <div className="container-custom relative text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Visit our showroom or browse our complete collection online.
            Let us help you create the home of your dreams.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/products" className="btn-primary">
              Browse Collection
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-secondary">
              Visit Showroom
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FurnitureStore',
            '@id': 'https://www.kapoorfurnitures.com/#store',
            name: 'Kapoor Furnitures',
            description:
              'Premium furniture store in Kanpur offering handcrafted beds, sofa sets, dining tables, wardrobes and bedroom furniture.',
            url: 'https://www.kapoorfurnitures.com',
            image: 'https://www.kapoorfurnitures.com/og-image.png',
            telephone: '+91-9076647555',
            email: 'Himanshukapoor2000@gmail.com',
            priceRange: '₹₹',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '124/C/234, Govind Nagar',
              addressLocality: 'Kanpur',
              addressRegion: 'Uttar Pradesh',
              postalCode: '208006',
              addressCountry: 'IN',
            },
            hasMap: 'https://maps.app.goo.gl/RJRL9KUegEu8KHpcA',
            areaServed: 'Kanpur',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
                ],
                opens: '10:30',
                closes: '20:30',
              },
            ],
          }),
        }}
      />
    </>
  );
}
