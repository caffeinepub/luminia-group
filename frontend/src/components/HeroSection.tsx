import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const scrollToSubsidiaries = () => {
    const el = document.getElementById('assured-tours');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Multi-layer overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'oklch(0.08 0.01 60 / 0.75)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 30%, oklch(0.08 0.01 60 / 0.6) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 1.2s ease, transform 1.2s ease',
        }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/assets/image-6.png"
            alt="Luminia Group Conglomerate"
            className="h-28 md:h-36 lg:h-44 object-contain"
          />
        </div>

        {/* Tagline */}
        <p
          className="font-serif italic text-sm md:text-base tracking-[0.3em] uppercase mb-6"
          style={{ color: 'oklch(0.78 0.12 75 / 0.7)' }}
        >
          Est. 2026 · India
        </p>

        {/* Diamond Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div
            className="h-px w-24"
            style={{ background: 'oklch(0.78 0.12 75 / 0.5)' }}
          />
          <div
            className="w-2 h-2 rotate-45"
            style={{ background: 'oklch(0.78 0.12 75)' }}
          />
          <div
            className="h-px w-24"
            style={{ background: 'oklch(0.78 0.12 75 / 0.5)' }}
          />
        </div>

        {/* Subtitle */}
        <p
          className="font-serif italic text-xl md:text-2xl mb-12"
          style={{ color: 'oklch(0.78 0.12 75 / 0.7)' }}
        >
          A Legacy of Excellence Across Industries
        </p>

        {/* CTA Button */}
        <button
          type="button"
          onClick={scrollToSubsidiaries}
          className="px-10 py-4 font-serif text-base tracking-widest uppercase cursor-pointer transition-all duration-300"
          style={{
            border: '1px solid oklch(0.78 0.12 75)',
            color: 'oklch(0.78 0.12 75)',
            background: 'transparent',
            letterSpacing: '0.2em',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              'oklch(0.78 0.12 75 / 0.1)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
          }}
        >
          Explore Our Empire
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div
          className="w-px h-16"
          style={{
            background:
              'linear-gradient(to bottom, oklch(0.78 0.12 75), transparent)',
            animation: 'scrollLine 2s ease infinite',
          }}
        />
      </div>
    </section>
  );
}
