import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { openWhatsApp, buildBookingMessage, buildGovernmentServiceMessage } from '../lib/whatsapp';

// Hardcoded deploy timestamp — badge is visible for 48 hours from this moment
const DEPLOY_TIMESTAMP = new Date('2026-03-02T00:00:00Z').getTime();
const isNewBadgeVisible = () => Date.now() - DEPLOY_TIMESTAMP < 48 * 60 * 60 * 1000;

const techServices = [
  { title: 'Web Development', desc: 'Modern, responsive websites and web applications.' },
  { title: 'Mobile Apps', desc: 'Native and cross-platform mobile solutions.' },
  { title: 'UI/UX Design', desc: 'Intuitive interfaces that delight users.' },
  { title: 'Cloud Solutions', desc: 'Scalable infrastructure for growing businesses.' },
  { title: 'AI Integration', desc: 'Smart automation and machine learning solutions.' },
  { title: 'IT Consulting', desc: 'Strategic technology guidance for your business.' },
];

const governmentServices = [
  {
    title: 'Voter ID Update',
    desc: 'Hassle-free assistance for Voter ID card corrections, address updates, name changes, and new voter registration.',
    icon: '🗳️',
  },
  {
    title: 'Aadhaar Update / Correction',
    desc: 'Expert support for Aadhaar data corrections including name, date of birth, address, mobile number, and biometric updates.',
    icon: '🪪',
  },
  {
    title: 'Government Application Assistance',
    desc: 'End-to-end help with government certificates, forms, and applications — income certificates, caste certificates, domicile, and more.',
    icon: '📝',
  },
];

export default function LuminiaTechLabsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: govHeaderRef, isVisible: govHeaderVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: govCardsRef, isVisible: govCardsVisible } = useScrollAnimation({ threshold: 0.1 });

  const showNewBadge = isNewBadgeVisible();

  const handleBookClick = () => {
    openWhatsApp(buildBookingMessage('Luminia TechLabs'));
  };

  const handleGovCardClick = (serviceTitle: string) => {
    openWhatsApp(buildGovernmentServiceMessage(serviceTitle));
  };

  const handleGovInquiryClick = () => {
    openWhatsApp(buildGovernmentServiceMessage('Government Services'));
  };

  return (
    <section
      id="luminia-techlabs"
      className="py-24"
      style={{ background: 'oklch(0.09 0.01 60)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* ── TechLabs Header ── */}
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
            Luminia Group · Division III
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl mb-4"
            style={{ color: 'oklch(0.78 0.12 75)' }}
          >
            Luminia TechLabs
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
            Engineering Tomorrow — innovative technology solutions that power the future of business.
          </p>
        </div>

        {/* TechLabs Banner Image */}
        <div
          className="w-full h-64 md:h-80 overflow-hidden mb-12"
          style={{ border: '1px solid oklch(0.78 0.12 75 / 0.2)' }}
        >
          <img
            src="/assets/generated/luminia-techlabs-banner.dim_1200x400.png"
            alt="Luminia TechLabs"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content with image */}
        <div
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
          }}
        >
          <div className="overflow-hidden" style={{ border: '1px solid oklch(0.78 0.12 75 / 0.2)' }}>
            <img
              src="/assets/generated/luminia-techlabs-dev.dim_600x400.png"
              alt="TechLabs Development"
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <h3
              className="font-serif text-2xl mb-4"
              style={{ color: 'oklch(0.78 0.12 75)' }}
            >
              Why Choose TechLabs?
            </h3>
            <ul className="space-y-3">
              {[
                'End-to-end digital transformation',
                'Agile development methodology',
                'Dedicated support & maintenance',
                'Competitive pricing for startups',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ color: 'oklch(0.78 0.12 75)' }}>◆</span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: 'oklch(0.85 0.01 60 / 0.7)' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* TechLabs Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {techServices.map((service, idx) => (
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

        {/* TechLabs CTA */}
        <div className="text-center mb-24">
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
            Start a Project
          </button>
        </div>

        {/* ── Divider ── */}
        <div className="flex items-center gap-6 mb-24">
          <div className="flex-1 h-px" style={{ background: 'oklch(0.78 0.12 75 / 0.2)' }} />
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rotate-45" style={{ background: 'oklch(0.78 0.12 75 / 0.5)' }} />
            <span
              className="font-serif italic text-xs tracking-[0.25em] uppercase"
              style={{ color: 'oklch(0.78 0.12 75 / 0.4)' }}
            >
              Citizen Services
            </span>
            <div className="w-1.5 h-1.5 rotate-45" style={{ background: 'oklch(0.78 0.12 75 / 0.5)' }} />
          </div>
          <div className="flex-1 h-px" style={{ background: 'oklch(0.78 0.12 75 / 0.2)' }} />
        </div>

        {/* ── Government Services Sub-section ── */}
        <div
          ref={govHeaderRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-16"
          style={{
            opacity: govHeaderVisible ? 1 : 0,
            transform: govHeaderVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <p
            className="font-serif italic text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'oklch(0.78 0.12 75 / 0.6)' }}
          >
            Luminia TechLabs · Citizen Services
          </p>
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2
              className="font-serif text-4xl md:text-5xl"
              style={{ color: 'oklch(0.78 0.12 75)' }}
            >
              Government Services
            </h2>
            {showNewBadge && (
              <span
                className="font-serif italic text-xs tracking-widest uppercase px-2 py-1 self-center"
                style={{
                  border: '1px solid oklch(0.78 0.12 75 / 0.5)',
                  color: 'oklch(0.78 0.12 75 / 0.9)',
                  background: 'oklch(0.78 0.12 75 / 0.12)',
                }}
              >
                New
              </span>
            )}
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24" style={{ background: 'oklch(0.78 0.12 75 / 0.4)' }} />
            <div className="w-2 h-2 rotate-45" style={{ background: 'oklch(0.78 0.12 75)' }} />
            <div className="h-px w-24" style={{ background: 'oklch(0.78 0.12 75 / 0.4)' }} />
          </div>
          <p
            className="font-serif italic text-lg max-w-2xl mx-auto"
            style={{ color: 'oklch(0.78 0.12 75 / 0.7)' }}
          >
            Empowering Citizens — seamless assistance for all your government documentation and application needs.
          </p>
        </div>

        {/* Government Services — Why Choose */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <h3
              className="font-serif text-2xl mb-4"
              style={{ color: 'oklch(0.78 0.12 75)' }}
            >
              Why Choose Our Government Services?
            </h3>
            <ul className="space-y-3">
              {[
                'Experienced team with deep knowledge of government processes',
                'End-to-end document preparation and submission support',
                'Fast turnaround with regular status updates',
                'Affordable, transparent service charges',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ color: 'oklch(0.78 0.12 75)' }}>◆</span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: 'oklch(0.85 0.01 60 / 0.7)' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="p-8 flex flex-col items-center justify-center gap-4"
            style={{
              border: '1px solid oklch(0.78 0.12 75 / 0.2)',
              background: 'oklch(0.10 0.01 60)',
            }}
          >
            <div className="text-6xl mb-2">🏛️</div>
            <p
              className="font-serif italic text-center text-sm"
              style={{ color: 'oklch(0.78 0.12 75 / 0.7)' }}
            >
              "We bridge the gap between citizens and government — making every process simple, swift, and stress-free."
            </p>
          </div>
        </div>

        {/* Government Service Cards */}
        <div
          ref={govCardsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          style={{
            opacity: govCardsVisible ? 1 : 0,
            transform: govCardsVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
          }}
        >
          {governmentServices.map((service, idx) => (
            <div
              key={idx}
              className="p-8 text-center cursor-pointer transition-all duration-300"
              style={{
                border: '1px solid oklch(0.78 0.12 75 / 0.2)',
                background: 'oklch(0.10 0.01 60)',
              }}
              onClick={() => handleGovCardClick(service.title)}
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

        {/* Government Services CTA */}
        <div className="text-center">
          <button
            type="button"
            onClick={handleGovInquiryClick}
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
            Enquire About Government Services
          </button>
        </div>
      </div>
    </section>
  );
}
