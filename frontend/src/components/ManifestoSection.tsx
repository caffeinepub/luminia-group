export default function ManifestoSection() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10 relative overflow-hidden" style={{ backgroundColor: 'oklch(0.11 0 0)' }}>
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, oklch(0.72 0.12 85) 0, oklch(0.72 0.12 85) 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-6">
          Our Vision
        </p>
        <blockquote className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-ivory leading-tight mb-8">
          From{' '}
          <span className="gradient-gold-text font-semibold">high-end tech</span>
          {' '}to{' '}
          <span className="gradient-gold-text font-semibold">premium travel</span>
          ,<br className="hidden sm:block" />
          {' '}we don't just launch brands —
          <br className="hidden sm:block" />
          {' '}we curate lifestyles.
        </blockquote>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="divider-gold w-16" />
          <div
            className="w-1.5 h-1.5 rotate-45 border"
            style={{ borderColor: 'oklch(0.72 0.12 85)' }}
          />
          <div className="divider-gold w-16" />
        </div>

        <p className="font-body text-sm text-ivory-dim tracking-widest uppercase">
          Luminia Group — West Bengal, India
        </p>
      </div>
    </section>
  );
}
