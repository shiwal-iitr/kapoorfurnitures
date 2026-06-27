import Link from 'next/link';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
  { name: 'Visit Showroom', href: '/contact' },
  { name: 'FAQs', href: '/contact' },
];

const categories = [
  { name: 'Living Room', href: '/products?category=living-room' },
  { name: 'Bedroom', href: '/products?category=bedroom' },
  { name: 'Dining Room', href: '/products?category=dining' },
  { name: 'Office', href: '/products?category=piyestra-office' },
  { name: 'Study', href: '/products?category=piyestra-study' },
];



export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-600">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-serif text-black mb-8">
              Kapoor <span className="text-gray-500">Furnitures</span>
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              Crafting timeless furniture pieces that transform your house into a home.
              We blend traditional craftsmanship with modern design to deliver furniture
              that speaks elegance, comfort, and sophistication.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-black text-lg font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-black transition-colors duration-200 hover:pl-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h4 className="text-black text-lg font-semibold uppercase tracking-wider mb-4">
              Categories
            </h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    href={cat.href}
                    className="text-sm hover:text-black transition-colors duration-200 hover:pl-1"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-black text-lg font-semibold uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-black mt-0.5">📍</span>
                <span>
                  124/c/234 ,govind nagar,<br />
                  kanpur - 208006
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-black">📞</span>
                <a
                  href="tel:+919076647555"
                  className="hover:text-black transition-colors duration-200"
                >
                  9076647555 [only call]
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-black">💬</span>
                <a
                  href="https://wa.me/919935411101"
                  className="hover:text-black transition-colors duration-200"
                >
                  WhatsApp: 9935411101 , 9076638555
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-black">✉️</span>
                <a
                  href="mailto:Himanshukapoor2000@gmail.com"
                  className="hover:text-black transition-colors duration-200"
                >
                  Himanshukapoor2000@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-black">🕒</span>
                <span>
                  Timings: 10:30 am - 8:30 pm
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Kapoor Furnitures. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-black transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
