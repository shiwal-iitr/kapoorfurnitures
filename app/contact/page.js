import Link from 'next/link';

export const metadata = {
  title: 'Contact Us',
  description:
    'Visit our showroom, call us, or reach out on WhatsApp. Kapoor Furnitures is here to help you find the perfect furniture.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="pt-12 pb-8 px-4">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <div className="gold-line" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Visit our showroom, give us a call,
            or send us a message on WhatsApp.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/919935411101?text=Hi! I'm interested in your furniture collection."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-black transition-all duration-300 group text-center block"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-500 text-sm mb-4">
                Quick responses, share images
              </p>
              <span className="text-[#25D366] font-medium text-sm group-hover:underline">
                Chat with us →
              </span>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+919076647555"
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-black transition-all duration-300 group text-center block"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors duration-300">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-500 text-sm mb-4">
                Mon-Sun: 10:30 AM - 8:30 PM
              </p>
              <span className="text-black font-medium text-sm group-hover:underline">
                +91-9076647555
              </span>
            </a>

            {/* Email Card */}
            <a
              href="mailto:Himanshukapoor2000@gmail.com"
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-black transition-all duration-300 group text-center block"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-500 text-sm mb-4">
                We reply within 24 hours
              </p>
              <span className="text-blue-400 font-medium text-sm group-hover:underline">
                Himanshukapoor2000@gmail.com
              </span>
            </a>
          </div>

          <div className="h-16 md:h-32 w-full"></div>

          {/* Store Info & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Store Details */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center lg:text-left">
                Visit Our Showroom
              </h2>
              <div className="gold-line-left" />

              <div className="space-y-12 mt-10">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">Address</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      124/c/234 ,govind nagar,<br />
                      kanpur - 208006
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium mb-2">Business Hours</h4>
                    <div className="space-y-1.5">
                      <div className="flex justify-between gap-8 text-sm">
                        <span className="text-gray-600">Monday - Sunday</span>
                        <span className="text-gray-900 font-medium">10:30 AM - 8:30 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Parking */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">Amenities</h4>
                    <p className="text-gray-600 text-sm">
                      Free parking available • AC showroom • Home delivery &amp; assembly
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 border border-gray-200 rounded-2xl overflow-hidden min-h-[400px] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Store Location
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto">
                    124/c/234 ,govind nagar, kanpur - 208006
                  </p>
                  <a
                    href="https://maps.app.goo.gl/RJRL9KUegEu8KHpcA?g_st=iw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    Open in Google Maps
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl">
          <h2 className="section-heading text-2xl md:text-3xl mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <div className="gold-line" />

          <div className="space-y-4 mt-12">
            {[
              {
                q: 'Do you offer home delivery?',
                a: 'Yes! We offer free delivery and assembly within the city limits. For outstation deliveries, nominal charges apply based on distance.',
              },
              {
                q: 'Can I customize furniture dimensions or colors?',
                a: 'Absolutely! We offer customization on most of our products. Speak to our team on WhatsApp for customization options and timelines.',
              },
              {
                q: 'What is your warranty policy?',
                a: 'All our furniture comes with a 10-year structural warranty. Upholstery and fabrics carry a 2-year warranty against manufacturing defects.',
              },
              {
                q: 'Do you accept EMI payments?',
                a: 'Yes, we offer no-cost EMI options on select products through major banks. Ask our team for details during your visit or on WhatsApp.',
              },
              {
                q: 'How long does delivery take?',
                a: 'In-stock items are delivered within 3-5 business days. Custom orders typically take 3-4 weeks depending on the complexity.',
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white border border-gray-200 rounded-xl group"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-gray-900 font-medium pr-8">{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-black transform transition-transform group-open:rotate-180 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
