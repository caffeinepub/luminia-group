import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const SESSION_KEY = 'luminia_welcome_shown';

export default function WelcomePopup() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(SESSION_KEY);
    if (!alreadyShown) {
      const timer = setTimeout(() => setVisible(true), 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setExiting(true);
    sessionStorage.setItem(SESSION_KEY, 'true');
    setTimeout(() => {
      setVisible(false);
      setExiting(false);
    }, 550);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 ${
        exiting ? 'popup-backdrop-exit' : 'popup-backdrop-enter'
      }`}
      style={{ background: 'oklch(0.04 0 0 / 0.97)', backdropFilter: 'blur(16px)' }}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Luminia Group"
    >
      {/* Corner accents */}
      {[
        'top-6 left-6',
        'top-6 right-6',
        'bottom-6 left-6',
        'bottom-6 right-6',
      ].map((pos, i) => {
        const isRight = pos.includes('right');
        const isBottom = pos.includes('bottom');
        return (
          <div key={i} className={`absolute ${pos} w-16 h-16 pointer-events-none`} style={{ opacity: 0.45 }}>
            <div
              className="absolute w-full h-px"
              style={{
                top: isBottom ? 'auto' : 0,
                bottom: isBottom ? 0 : 'auto',
                background: isRight
                  ? 'linear-gradient(270deg, oklch(0.74 0.135 82), transparent)'
                  : 'linear-gradient(90deg, oklch(0.74 0.135 82), transparent)',
              }}
            />
            <div
              className="absolute h-full w-px"
              style={{
                left: isRight ? 'auto' : 0,
                right: isRight ? 0 : 'auto',
                background: isBottom
                  ? 'linear-gradient(0deg, oklch(0.74 0.135 82), transparent)'
                  : 'linear-gradient(180deg, oklch(0.74 0.135 82), transparent)',
              }}
            />
          </div>
        );
      })}

      {/* Modal Card */}
      <div
        className={`relative w-full max-w-lg mx-auto ${exiting ? 'popup-content-exit' : 'popup-content-enter'}`}
        style={{
          background: 'linear-gradient(160deg, oklch(0.14 0.008 82 / 0.99) 0%, oklch(0.10 0.003 82 / 1) 50%, oklch(0.08 0 0 / 1) 100%)',
          border: '1px solid oklch(0.74 0.135 82 / 0.3)',
          boxShadow:
            '0 0 0 1px oklch(0.74 0.135 82 / 0.06), 0 0 100px oklch(0.74 0.135 82 / 0.22), 0 60px 120px oklch(0 0 0 / 0.9), inset 0 1px 0 oklch(0.84 0.11 82 / 0.18)',
        }}
      >
        {/* Top shimmer line */}
        <div
          className="absolute top-0 left-0 right-0 h-px popup-shimmer-border"
          style={{ background: 'oklch(0.74 0.135 82 / 0.6)' }}
        />

        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 z-10 p-2 text-ivory-faint hover:text-gold transition-all duration-300 rounded-sm hover:bg-gold/10 group"
          aria-label="Close welcome popup"
        >
          <X size={16} strokeWidth={1.5} />
        </button>

        {/* Content — fully centered */}
        <div className="flex flex-col items-center text-center px-8 sm:px-14 py-12 sm:py-16">

          {/* Logo */}
          <div className="flex justify-center mb-8 popup-text-reveal popup-text-reveal-1">
            <img
              src="/assets/image.png"
              alt="Luminia Group"
              className="h-12 sm:h-14 w-auto object-contain"
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = 'none';
                const sib = t.nextElementSibling as HTMLElement;
                if (sib) sib.style.display = 'block';
              }}
            />
            <span
              className="font-display text-3xl font-semibold shimmer-gold tracking-widest"
              style={{ display: 'none' }}
            >
              LUMINIA GROUP
            </span>
          </div>

          {/* Gold divider with diamond */}
          <div className="flex items-center justify-center gap-4 mb-10 w-full popup-text-reveal popup-text-reveal-2">
            <div
              className="popup-line-reveal h-px flex-1 max-w-[80px]"
              style={{ background: 'linear-gradient(90deg, transparent, oklch(0.74 0.135 82 / 0.9))' }}
            />
            <div
              className="w-2 h-2 rotate-45 flex-shrink-0"
              style={{
                background: 'oklch(0.74 0.135 82)',
                boxShadow: '0 0 12px oklch(0.74 0.135 82 / 0.9), 0 0 24px oklch(0.74 0.135 82 / 0.4)',
              }}
            />
            <div
              className="popup-line-reveal h-px flex-1 max-w-[80px]"
              style={{
                background: 'linear-gradient(270deg, transparent, oklch(0.74 0.135 82 / 0.9))',
                animationDelay: '0.8s',
              }}
            />
          </div>

          {/* Welcome label */}
          <p className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-3 popup-text-reveal popup-text-reveal-3">
            Welcome to
          </p>

          {/* Main title */}
          <h1
            className="font-display font-light text-ivory leading-tight mb-3 popup-text-reveal popup-text-reveal-3 animate-gold-pulse-glow"
            style={{ fontSize: 'clamp(2.2rem, 6vw, 3.2rem)', letterSpacing: '-0.01em' }}
          >
            Luminia Group
          </h1>

          {/* Tagline */}
          <p
            className="font-display font-light italic text-gold-light mb-8 popup-text-reveal popup-text-reveal-4"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', letterSpacing: '0.02em' }}
          >
            Defining the Gold Standard.
          </p>

          {/* Description */}
          <p className="font-body text-sm text-ivory-dim leading-relaxed max-w-xs mb-10 popup-text-reveal popup-text-reveal-4">
            An elite multi-sector conglomerate architecting a future where{' '}
            <span className="text-gold font-medium">luxury meets logic</span>.
            Currently in exclusive pre-launch phase.
          </p>

          {/* CTA Button */}
          <div className="popup-text-reveal popup-text-reveal-5 w-full">
            <button
              onClick={handleDismiss}
              className="group relative inline-flex items-center justify-center gap-3 w-full font-body text-xs font-medium tracking-[0.3em] uppercase overflow-hidden transition-all duration-500"
              style={{
                padding: '1rem 2rem',
                border: '1px solid oklch(0.74 0.135 82 / 0.7)',
                color: 'oklch(0.74 0.135 82)',
              }}
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-obsidian">
                Enter the Empire
              </span>
              <span
                className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                style={{ backgroundColor: 'oklch(0.74 0.135 82)' }}
              />
              <svg
                className="relative z-10 w-3.5 h-3.5 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-obsidian"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Footer note */}
          <p className="font-body text-xs text-ivory-faint tracking-[0.3em] uppercase mt-8 popup-text-reveal popup-text-reveal-5">
            West Bengal, India · Est. 2024
          </p>
        </div>

        {/* Bottom shimmer line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, oklch(0.74 0.135 82 / 0.25), transparent)' }}
        />
      </div>
    </div>
  );
}
