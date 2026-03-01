import { useEffect, useRef, useState } from 'react';

export default function PlaceholderPage() {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-obsidian text-ivory flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Subtle radial gold glow background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.72 0.14 85 / 0.07) 0%, transparent 70%)',
        }}
      />

      {/* Top decorative line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, oklch(0.72 0.14 85 / 0.5), transparent)' }}
      />

      {/* Bottom decorative line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, oklch(0.72 0.14 85 / 0.5), transparent)' }}
      />

      {/* Main content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Logo */}
        <div className="mb-10">
          <img
            src="/assets/generated/luminia-logo-correct.dim_400x120.png"
            alt="Luminia Group Conglomerate"
            className="h-16 w-auto mx-auto"
            style={{ filter: 'brightness(1.1)' }}
          />
        </div>

        {/* Gold diamond divider */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px w-16 bg-gold-dim opacity-50" />
          <div
            className="w-2 h-2 rotate-45 bg-gold-bright"
            style={{ boxShadow: '0 0 8px oklch(0.72 0.14 85 / 0.6)' }}
          />
          <div className="h-px w-16 bg-gold-dim opacity-50" />
        </div>

        {/* Heading */}
        <h1
          className="font-display text-4xl md:text-5xl font-light tracking-widest text-ivory mb-6 uppercase"
          style={{ letterSpacing: '0.2em' }}
        >
          Coming Soon
        </h1>

        {/* Subheading */}
        <p className="font-display text-lg md:text-xl text-gold-bright font-light tracking-wider mb-6">
          Luminia Group
        </p>

        {/* Divider */}
        <div className="h-px w-24 bg-gold-dim opacity-40 mb-8" />

        {/* Message */}
        <p className="text-ivory-faint text-sm md:text-base font-light leading-relaxed tracking-wide max-w-md">
          We are currently refining our digital presence. Our website will return shortly, elevated and renewed.
        </p>

        {/* Bottom gold diamond divider */}
        <div className="flex items-center gap-3 mt-12">
          <div className="h-px w-10 bg-gold-dim opacity-40" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold-dim opacity-60" />
          <div className="h-px w-10 bg-gold-dim opacity-40" />
        </div>
      </div>

      {/* Footer attribution */}
      <div
        className="absolute bottom-6 left-0 right-0 flex justify-center"
        style={{
          opacity: visible ? 0.5 : 0,
          transition: 'opacity 1.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s',
        }}
      >
        <p className="text-ivory-faint text-xs tracking-widest">
          Built with love using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || 'unknown-app')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-dim hover:text-gold-bright transition-colors duration-300"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </div>
  );
}
