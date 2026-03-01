export default function HeroSection() {
  const handleScrollToEmpire = () => {
    const el = document.querySelector('#empire');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

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
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 hero-overlay" />
        {/* Subtle gold vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, oklch(0.08 0 0 / 0.6) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Pre-launch Badge */}
        <div className="flex justify-center mb-8">
          <span className="pre-launch-badge text-xs font-body font-medium tracking-[0.3em] uppercase px-5 py-2 rounded-sm inline-flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: 'oklch(0.72 0.12 85)' }}
            />
            Exclusive Pre-Launch Phase
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-none tracking-tight mb-6">
          <span className="block text-ivory mb-2">Luminia Group</span>
          <span className="block shimmer-gold font-semibold">
            Defining the Gold Standard.
          </span>
        </h1>

        {/* Gold Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="divider-gold w-24 sm:w-40" />
          <div
            className="w-2 h-2 rotate-45 border"
            style={{ borderColor: 'oklch(0.72 0.12 85)' }}
          />
          <div className="divider-gold w-24 sm:w-40" />
        </div>

        {/* Subheadline */}
        <p className="font-body text-base sm:text-lg md:text-xl font-light tracking-wide text-ivory-dim max-w-3xl mx-auto leading-relaxed mb-4">
          Based in West Bengal and operating on a global vision, Luminia Group is an{' '}
          <span className="text-gold font-medium">elite multi-sector conglomerate</span>{' '}
          architecting a future where luxury meets logic.
        </p>

        {/* Manifesto */}
        <p className="font-display text-xl sm:text-2xl md:text-3xl font-light italic text-gold-light mt-6 mb-12 tracking-wide">
          "We don't just launch brands — we curate lifestyles."
        </p>

        {/* CTA */}
        <button
          onClick={handleScrollToEmpire}
          className="group inline-flex items-center gap-3 px-8 py-4 border font-body text-sm font-medium tracking-[0.2em] uppercase text-gold hover:text-obsidian transition-all duration-500 relative overflow-hidden"
          style={{ borderColor: 'oklch(0.72 0.12 85)' }}
        >
          <span className="relative z-10">Explore Our Empire</span>
          <span
            className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            style={{ backgroundColor: 'oklch(0.72 0.12 85)' }}
          />
          <svg
            className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-ivory-dim">Scroll</span>
        <div
          className="w-px h-12 relative overflow-hidden"
          style={{ backgroundColor: 'oklch(0.55 0.09 85 / 0.3)' }}
        >
          <div
            className="absolute top-0 left-0 w-full animate-bounce"
            style={{
              height: '40%',
              background: 'linear-gradient(to bottom, oklch(0.72 0.12 85), transparent)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
