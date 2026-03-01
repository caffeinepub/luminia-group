import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { openWhatsApp, buildBookingMessage } from '../lib/whatsapp';

const services = [
  { title: 'Wedding Photography', desc: 'Timeless captures of your most cherished day.' },
  { title: 'Portrait Sessions', desc: 'Professional portraits that tell your story.' },
  { title: 'Event Coverage', desc: 'Comprehensive documentation of every milestone.' },
  { title: 'Studio Shoots', desc: 'State-of-the-art studio for flawless results.' },
  { title: 'Videography', desc: 'Cinematic films that bring memories to life.' },
  { title: 'Photo Editing', desc: 'Expert post-production for stunning finishes.' },
];

export default function LuminiaCapturesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleBookClick = () => {
    openWhatsApp(buildBookingMessage('Luminia Captures Photography'));
  };

  return (
    <section
      id="luminia-captures"
      className="py-24"
      style={{ background: 'oklch(0.08 0.01 60)' }}
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
            Luminia Group · Division II
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl mb-4"
            style={{ color: 'oklch(0.78 0.12 75)' }}
          >
            Luminia Captures
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
            Moments Immortalized — where light and artistry converge to create lasting memories.
          </p>
        </div>

        {/* Banner Image */}
        <div
          className="w-full h-64 md:h-80 overflow-hidden mb-12"
          style={{ border: '1px solid oklch(0.78 0.12 75 / 0.2)' }}
        >
          <img
            src="/assets/generated/luminia-captures-banner.dim_1200x400.png"
            alt="Luminia Captures"
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
              src="/assets/generated/luminia-captures-wedding.dim_600x400.png"
              alt="Wedding Photography"
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden" style={{ border: '1px solid oklch(0.78 0.12 75 / 0.2)' }}>
            <img
              src="/assets/generated/luminia-captures-studio.dim_600x400.png"
              alt="Studio Photography"
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
            onClick={handleBookClick}
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
            Book a Session
          </button>
        </div>
      </div>
    </section>
  );
}
