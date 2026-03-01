import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    title: 'GST Registration',
    desc: 'Quick and hassle-free GST registration for businesses of all sizes.',
    icon: '📋',
  },
  {
    title: 'GST Filing',
    desc: 'Timely and accurate GST return filing to keep you compliant.',
    icon: '📊',
  },
  {
    title: 'Tax Consulting',
    desc: 'Expert advice to optimize your tax strategy and minimize liability.',
    icon: '💼',
  },
];

export default function GSTServicesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="gst-services"
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
            Luminia Group · Financial Services
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl mb-4"
            style={{ color: 'oklch(0.78 0.12 75)' }}
          >
            GST Services
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
            Compliance Made Simple — expert GST solutions tailored for your business needs.
          </p>
        </div>

        {/* Banner Image */}
        <div
          className="w-full h-64 md:h-80 overflow-hidden mb-12"
          style={{ border: '1px solid oklch(0.78 0.12 75 / 0.2)' }}
        >
          <img
            src="/assets/generated/gst-services-banner.dim_1200x400.png"
            alt="GST Services"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Service Cards */}
        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          style={{
            opacity: cardsVisible ? 1 : 0,
            transform: cardsVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
          }}
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 text-center cursor-pointer transition-all duration-300"
              style={{
                border: '1px solid oklch(0.78 0.12 75 / 0.2)',
                background: 'oklch(0.10 0.01 60)',
              }}
              onClick={handleContactClick}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.78 0.12 75 / 0.5)';
                (e.currentTarget as HTMLDivElement).style.background = 'oklch(0.12 0.02 60)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.78 0.12 75 / 0.2)';
                (e.currentTarget as HTMLDivElement).style.background = 'oklch(0.10 0.01 60)';
              }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3
                className="font-serif text-xl mb-3"
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
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
