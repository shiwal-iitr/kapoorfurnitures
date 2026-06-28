import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '../data/products';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products Component moved below Category Showcase */}

      {/* Category Showcase */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container-custom text-center py-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-tight" style={{ marginBottom: '98px' }}>Offering furniture that makes you feel home</h2>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 md:gap-24 lg:gap-[100px] max-w-7xl mx-auto">
            {[
              {
                name: 'Bedroom',
                href: '/products?category=beds',
                icon: 'https://piyestraindia.com/wp-content/uploads/2022/08/bed.png'
              },
              {
                name: 'Living',
                href: '/products?category=living-room',
                icon: 'https://piyestraindia.com/wp-content/uploads/2022/08/sofa-01.png'
              },
              {
                name: 'Dining',
                href: '/products?category=dining',
                icon: 'https://piyestraindia.com/wp-content/uploads/2022/08/dinig.png'
              },
              {
                name: 'Office',
                href: '/products?category=piyestra-office',
                icon: 'https://piyestraindia.com/wp-content/uploads/2022/08/study.png'
              },
              {
                name: 'Study',
                href: '/products?category=piyestra-study',
                icon: 'https://piyestraindia.com/wp-content/uploads/2022/08/study-3.png'
              }
            ].map((cat, index) => (
              <Link
                key={index}
                href={cat.href}
                className="group block text-center transition-transform hover:-translate-y-1"
              >
                <img 
                  src={cat.icon} 
                  alt={cat.name} 
                  className="w-[72px] h-[72px] mx-auto mb-4 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <span className="text-sm font-semibold text-gray-900 tracking-wide">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />
      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-heading">Why Choose Kapoor Furnitures</h2>
          <div className="gold-line" />
          <p className="section-subheading">
            We believe in delivering excellence at every step
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
                title: 'Free Delivery',
                desc: 'Complimentary delivery and assembly on all orders across the city',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                title: '10-Year Warranty',
                desc: 'Rest easy with our comprehensive warranty on all furniture pieces',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: '24/7 Support',
                desc: 'Our dedicated team is always ready to help via WhatsApp or call',
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
