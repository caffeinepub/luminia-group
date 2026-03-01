import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  { title: 'Flight Bookings', desc: 'Domestic & international flights at the best prices.' },
  { title: 'Train Reservations', desc: 'Hassle-free train bookings across India.' },
  { title: 'Hotel Stays', desc: 'Curated luxury and budget accommodations.' },
  { title: 'Tour Packages', desc: 'All-inclusive packages for every traveller.' },
  { title: 'Visa Assistance', desc: 'Expert guidance for visa applications worldwide.' },
  { title: 'Travel Insurance', desc: 'Comprehensive coverage for peace of mind.' },
];

export default function AssuredToursSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="assured-tours"
      className="py-24"
      style={{ background: 'oklch(0.09 0.01 60)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <p
            className="font-serif italic text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'oklch(0.78 0.12 75 / 0.6)' }}
          >
            Luminia Group · Division I
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl mb-4"
            style={{ color: 'oklch(0.78 0.12 75)' }}
          >
            Assured Tours & Travels
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24" style={{ background: 'oklch(0.78 0.12 75 / 0.4)' }} />
            <div className="w-2 h-2 rotate-45" style={{ background: 'oklch(0.78 0.12 75)' }} />
            <div className="h-px w-24" style={{ background: 'oklch(0.78 0.12 75 / 0.4)' }} />
          </div>
          <p
            className="font-serif italic text-lg max-w-2xl mx-auto"
            style={{ color: 'oklch(0.78 0.12 75 / 0.7)' }}
          >
            Journey Beyond Boundaries — where every destination becomes a story worth telling.
          </p>
        </div>

        {/* Banner Image */}
        <div
          className="w-full h-64 md:h-80 overflow-hidden mb-12"
          style={{ border: '1px solid oklch(0.78 0.12 75 / 0.2)' }}
        >
          <img
            src="/assets/generated/assured-tours-banner.dim_1200x400.png"
            alt="Assured Tours & Travels"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image Pair */}
        <div
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
          }}
        >
          <div className="overflow-hidden" style={{ border: '1px solid oklch(0.78 0.12 75 / 0.2)' }}>
            <img
              src="/assets/generated/assured-tours-flight.dim_600x400.png"
              alt="Flight Services"
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden" style={{ border: '1px solid oklch(0.78 0.12 75 / 0.2)' }}>
            <img
              src="/assets/generated/assured-tours-train.dim_600x400.png"
              alt="Train Services"
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 cursor-pointer transition-all duration-300"
              style={{
                border: '1px solid oklch(0.78 0.12 75 / 0.2)',
                background: 'oklch(0.10 0.01 60)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.78 0.12 75 / 0.5)';
                (e.currentTarget as HTMLDivElement).style.background = 'oklch(0.12 0.02 60)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.78 0.12 75 / 0.2)';
                (e.currentTarget as HTMLDivElement).style.background = 'oklch(0.10 0.01 60)';
              }}
            >
              <h3
                className="font-serif text-lg mb-2"
                style={{ color: 'oklch(0.78 0.12 75)' }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'oklch(0.85 0.01 60 / 0.6)' }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            type="button"
            onClick={handleContactClick}
            className="px-10 py-4 font-serif text-sm tracking-widest uppercase cursor-pointer transition-all duration-300"
            style={{
              border: '1px solid oklch(0.78 0.12 75)',
              color: 'oklch(0.78 0.12 75)',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.78 0.12 75 / 0.1)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
            }}
          >
            Book Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
