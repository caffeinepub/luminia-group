import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ManifestoSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.15 });
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation<HTMLQuoteElement>({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="py-28 lg:py-40 px-6 lg:px-10 relative overflow-hidden"
      style={{ backgroundColor: 'oklch(0.095 0.003 82)' }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.74 0.135 82 / 0.04) 0%, transparent 70%)',
        }}
      />

      {/* Horizontal rule top */}
      <div className="absolute top-0 left-0 right-0 divider-gold-subtle" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Label */}
        <p
          className={`font-body text-xs tracking-[0.5em] uppercase text-gold mb-8 animate-on-scroll ${sectionVisible ? 'is-visible' : ''}`}
        >
          Our Vision
        </p>

        {/* Quote */}
        <blockquote
          ref={quoteRef}
          className={`font-display font-light text-ivory leading-tight mb-10 animate-on-scroll animate-delay-200 ${quoteVisible ? 'is-visible' : ''}`}
          style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)', letterSpacing: '-0.01em', lineHeight: '1.15' }}
        >
          From{' '}
          <span className="gradient-gold-text font-semibold">high-end tech</span>
          {' '}to{' '}
          <span className="gradient-gold-text font-semibold">premium travel</span>
          ,<br className="hidden sm:block" />
          {' '}we don't just launch brands —
          <br className="hidden sm:block" />
          {' '}we curate lifestyles.
        </blockquote>

        {/* Divider */}
        <div
          className={`flex items-center justify-center gap-5 mb-10 animate-on-scroll animate-delay-300 ${sectionVisible ? 'is-visible' : ''}`}
        >
          <div className="divider-gold w-20" />
          <div
            className="w-2 h-2 rotate-45 flex-shrink-0"
            style={{
              background: 'oklch(0.74 0.135 82)',
              boxShadow: '0 0 8px oklch(0.74 0.135 82 / 0.7)',
            }}
          />
          <div className="divider-gold w-20" />
        </div>

        {/* Location */}
        <p
          className={`font-body text-xs text-ivory-faint tracking-[0.4em] uppercase animate-on-scroll animate-delay-400 ${sectionVisible ? 'is-visible' : ''}`}
        >
          Luminia Group — West Bengal, India
        </p>
      </div>

      {/* Horizontal rule bottom */}
      <div className="absolute bottom-0 left-0 right-0 divider-gold-subtle" />
    </section>
  );
}
