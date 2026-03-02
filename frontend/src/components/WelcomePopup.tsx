import { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function WelcomePopup() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const hasShown = useRef(false);

  useEffect(() => {
    if (hasShown.current) return;
    hasShown.current = true;

    const alreadySeen = sessionStorage.getItem('luminia-welcome-seen');
    if (alreadySeen) return;

    setVisible(true);

    // Generate particles
    const newParticles: Particle[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.6 + 0.2,
    }));
    setParticles(newParticles);
  }, []);

  const handleEnter = () => {
    setExiting(true);
    sessionStorage.setItem('luminia-welcome-seen', 'true');
    setTimeout(() => setVisible(false), 800);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{
        background: 'oklch(0.06 0.01 60)',
        opacity: exiting ? 0 : 1,
        transition: 'opacity 0.8s ease',
      }}
    >
      {/* Particle rain */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 rounded-full"
          style={{
            left: `${p.x}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: 'oklch(0.78 0.12 75)',
            opacity: p.opacity,
            animation: `particleFall ${p.duration}s ${p.delay}s linear infinite`,
          }}
        />
      ))}

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.78 0.12 75 / 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-8"
        style={{ animation: 'logoFadeIn 1.5s ease forwards' }}
      >
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/assets/image-6.png"
            alt="Luminia Group Conglomerate"
            className="h-40 md:h-52 lg:h-64 w-auto object-contain mx-auto"
            style={{ animation: 'logoPulse 3s ease infinite' }}
          />
        </div>

        {/* Decorative divider */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className="h-px w-20"
            style={{ background: 'oklch(0.78 0.12 75 / 0.4)' }}
          />
          <div
            className="w-2 h-2 rotate-45"
            style={{
              background: 'oklch(0.78 0.12 75)',
              boxShadow: '0 0 8px oklch(0.78 0.12 75 / 0.8)',
            }}
          />
          <div
            className="h-px w-20"
            style={{ background: 'oklch(0.78 0.12 75 / 0.4)' }}
          />
        </div>

        {/* Tagline */}
        <p
          className="font-serif italic text-sm tracking-[0.3em] uppercase mb-10"
          style={{ color: 'oklch(0.78 0.12 75 / 0.6)' }}
        >
          A Legacy of Excellence
        </p>

        {/* Enter Button */}
        <button
          type="button"
          onClick={handleEnter}
          className="px-12 py-4 font-serif text-sm tracking-[0.3em] uppercase cursor-pointer transition-all duration-300"
          style={{
            border: '1px solid oklch(0.78 0.12 75 / 0.6)',
            color: 'oklch(0.78 0.12 75)',
            background: 'transparent',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              'oklch(0.78 0.12 75 / 0.1)';
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              'oklch(0.78 0.12 75)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              'oklch(0.78 0.12 75 / 0.6)';
          }}
        >
          Enter
        </button>
      </div>
    </div>
  );
}
