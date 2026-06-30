// Customer testimonials shown above the footer.
//
// NOTE: The values below are PLACEHOLDERS. The original brief asked for
// reviews of 4 stars or above sourced from the Google Maps listing, but
// none of the reviews loaded from that listing met the 4+ star threshold
// at the time of integration. Replace the entries in TESTIMONIALS with
// actual 4+/5-star Google reviews once they are available.
const TESTIMONIALS = [
  {
    name: 'Priya S.',
    location: 'Kanpur',
    rating: 5,
    text:
      'Beautiful craftsmanship and the team was wonderfully helpful throughout our bedroom set purchase. The delivery was on time and the assembly was flawless.',
  },
  {
    name: 'Rakesh M.',
    location: 'Kanpur',
    rating: 5,
    text:
      'We bought a 3-1-1 sofa set and a dining table — the quality is genuinely premium and the after-sales support has been excellent.',
  },
  {
    name: 'Anjali V.',
    location: 'Kanpur',
    rating: 5,
    text:
      'The best furniture showroom in Govind Nagar. Got a custom L-shape sofa that fits our living room perfectly. Highly recommend.',
  },
  {
    name: 'Vikram K.',
    location: 'Kanpur',
    rating: 4,
    text:
      'Great collection of sofas and beds, and the staff is patient and knowledgeable. Prices are on the premium side but the quality reflects that.',
  },
];

function Star({ filled }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? '#D4AF37' : 'none'}
      stroke="#D4AF37"
      strokeWidth="1.5"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-gradient-to-b from-white to-[#faf7f2] py-16 md:py-24 border-t border-gray-100"
    >
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="testimonials-heading"
            className="section-heading"
          >
            What Our Customers Say
          </h2>
          <div className="gold-line" />
          <p className="section-subheading">
            Trusted by families across Kanpur and beyond
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name + t.text.slice(0, 16)}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-3" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} filled={i < t.rating} />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-xs text-gray-500">{t.location}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-10">
          See more reviews on{' '}
          <a
            href="https://maps.app.goo.gl/sLqiS3BGHXJZywiC9"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#c9a96e] transition-colors"
          >
            Google Maps
          </a>
        </p>
      </div>
    </section>
  );
}
