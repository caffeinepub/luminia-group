import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  const handleScrollToEmpire = () => {
    const el = document.querySelector('#empire');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const transition = (delay: number, duration = 0.9) =>
    `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.jpg"
          alt=""
          className="w-full h-full object-cover object-center scale-105"
          aria-hidden="true"
          style={{ filter: 'brightness(0.75) saturate(0.9)' }}
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 hero-overlay" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 20%, oklch(0.07 0 0 / 0.5) 70%, oklch(0.07 0 0 / 0.85) 100%)',
          }}
        />
        {/* Subtle vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 120% 100% at 50% 0%, transparent 40%, oklch(0.07 0 0 / 0.3) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full"
      >
        {/* Pre-launch Badge */}
        <div
          className="flex justify-center mb-10"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(16px)',
            transition: transition(0.15, 0.7),
          }}
        >
          <span className="pre-launch-badge text-xs font-body font-medium tracking-[0.28em] uppercase px-6 py-2.5 inline-flex items-center gap-2.5">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
              style={{ backgroundColor: 'oklch(0.74 0.135 82)', boxShadow: '0 0 6px oklch(0.74 0.135 82 / 0.8)' }}
            />
            Exclusive Pre-Launch Phase
          </span>
        </div>

        {/* Main Headline */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(36px)',
            transition: transition(0.35),
          }}
        >
          <h1 className="font-display font-light leading-none tracking-tight mb-0">
            <span
              className="block text-ivory mb-3"
              style={{ fontSize: 'clamp(3.2rem, 7.5vw, 6.5rem)', letterSpacing: '-0.02em' }}
            >
              Luminia Group
            </span>
            <span
              className="block shimmer-gold font-semibold animate-gold-pulse-glow"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3rem)', letterSpacing: '0.04em' }}
            >
              Defining the Gold Standard.
            </span>
          </h1>
        </div>

        {/* Gold Divider */}
        <div
          className="flex items-center justify-center gap-5 my-10"
          style={{
            opacity: loaded ? 1 : 0,
            transition: `opacity 0.8s ease-out 0.6s`,
          }}
        >
          <div className="divider-gold w-28 sm:w-44" />
          <div
            className="w-2 h-2 rotate-45 flex-shrink-0"
            style={{
              background: 'oklch(0.74 0.135 82)',
              boxShadow: '0 0 10px oklch(0.74 0.135 82 / 0.8)',
            }}
          />
          <div className="divider-gold w-28 sm:w-44" />
        </div>

        {/* Subheadline */}
        <p
          className="font-body text-base sm:text-lg font-light tracking-wide text-ivory-dim max-w-2xl mx-auto leading-relaxed mb-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: transition(0.75),
          }}
        >
          Based in West Bengal and operating on a global vision, Luminia Group is an{' '}
          <span className="text-gold font-medium">elite multi-sector conglomerate</span>{' '}
          architecting a future where luxury meets logic.
        </p>

        {/* Manifesto Quote */}
        <p
          className="font-display font-light italic text-gold-light mt-5 mb-12 tracking-wide"
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: transition(0.9),
          }}
        >
          "We don't just launch brands — we curate lifestyles."
        </p>

        {/* CTA */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
            transition: transition(1.05),
          }}
        >
          <button
            onClick={handleScrollToEmpire}
            className="group inline-flex items-center justify-center gap-3 font-body text-xs font-medium tracking-[0.25em] uppercase relative overflow-hidden"
            style={{
              padding: '1rem 2.5rem',
              border: '1px solid oklch(0.74 0.135 82)',
              color: 'oklch(0.74 0.135 82)',
              transition: 'color 0.5s ease, box-shadow 0.5s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px oklch(0.74 0.135 82 / 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span
              className="relative z-10 transition-colors duration-500 group-hover:text-obsidian"
              style={{ letterSpacing: '0.25em' }}
            >
              Explore Our Empire
            </span>
            <span
              className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
              style={{ backgroundColor: 'oklch(0.74 0.135 82)' }}
            />
            <svg
              className="relative z-10 w-4 h-4 transition-all duration-400 group-hover:translate-x-1.5 group-hover:text-obsidian"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        style={{
          opacity: loaded ? 0.55 : 0,
          transition: 'opacity 1.2s ease-out 1.5s',
        }}
      >
        <span className="font-body text-xs tracking-[0.35em] uppercase text-ivory-faint">Scroll</span>
        <div
          className="w-px h-14 relative overflow-hidden"
          style={{ backgroundColor: 'oklch(0.52 0.09 82 / 0.25)' }}
        >
          <div
            className="absolute top-0 left-0 w-full h-1/2 animate-scroll-line"
            style={{
              background: 'linear-gradient(to bottom, transparent, oklch(0.74 0.135 82), transparent)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
