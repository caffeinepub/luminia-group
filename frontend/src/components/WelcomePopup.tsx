import { useState, useEffect, useRef } from 'react';

export default function WelcomePopup({ onEnter }: { onEnter?: () => void }) {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([]);
  const hasShown = useRef(false);

  useEffect(() => {
    if (hasShown.current) return;
    hasShown.current = true;
    const visited = sessionStorage.getItem('luminia_visited');
    if (!visited) {
      setVisible(true);
      generateParticles();
    }
  }, []);

  const generateParticles = () => {
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 4,
      size: 2 + Math.random() * 4,
    }));
    setParticles(newParticles);
  };

  const handleEnter = () => {
    setExiting(true);
    sessionStorage.setItem('luminia_visited', 'true');
    setTimeout(() => {
      setVisible(false);
      setExiting(false);
      if (onEnter) onEnter();
    }, 800);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background: 'oklch(0.08 0.01 60)',
        opacity: exiting ? 0 : 1,
        transition: 'opacity 0.8s ease',
        pointerEvents: exiting ? 'none' : 'auto',
      }}
    >
      {/* Particle rain */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.left}%`,
              top: '-10px',
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: 'oklch(0.78 0.12 75)',
              opacity: 0.6,
              animation: `particleFall ${p.duration}s ${p.delay}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-2xl mx-auto">
        {/* Logo */}
        <div
          className="mb-8 flex justify-center"
          style={{ animation: 'logoFadeIn 1.2s ease forwards' }}
        >
          <img
            src="/assets/generated/luminia-logo-correct.dim_400x120.png"
            alt="Luminia Group"
            className="h-16 md:h-20 object-contain"
            style={{ filter: 'drop-shadow(0 0 20px oklch(0.78 0.12 75 / 0.6))' }}
          />
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-4xl md:text-6xl mb-4"
          style={{
            color: 'oklch(0.78 0.12 75)',
            animation: 'shimmerText 3s ease infinite',
            textShadow: '0 0 40px oklch(0.78 0.12 75 / 0.4)',
          }}
        >
          Welcome to Luminia
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div
            className="h-px flex-1 max-w-24"
            style={{
              background: 'oklch(0.78 0.12 75)',
              animation: 'shimmerText 2s ease infinite',
            }}
          />
          <div
            className="w-2 h-2 rotate-45"
            style={{ background: 'oklch(0.78 0.12 75)' }}
          />
          <div
            className="h-px flex-1 max-w-24"
            style={{
              background: 'oklch(0.78 0.12 75)',
              animation: 'shimmerText 2s ease infinite',
            }}
          />
        </div>

        {/* Subtitle */}
        <p
          className="font-serif italic text-lg md:text-xl mb-10"
          style={{ color: 'oklch(0.78 0.12 75 / 0.7)' }}
        >
          A Conglomerate of Excellence
        </p>

        {/* Enter Button */}
        <button
          type="button"
          onClick={handleEnter}
          className="relative px-12 py-4 font-serif text-lg tracking-widest uppercase overflow-hidden cursor-pointer"
          style={{
            border: '1px solid oklch(0.78 0.12 75)',
            color: 'oklch(0.78 0.12 75)',
            background: 'transparent',
            letterSpacing: '0.2em',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.78 0.12 75 / 0.1)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
          }}
        >
          <span className="relative z-10">Enter</span>
          <div
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
            style={{
              background: 'radial-gradient(circle at center, oklch(0.78 0.12 75 / 0.15) 0%, transparent 70%)',
            }}
          />
        </button>
      </div>
    </div>
  );
}
