import { isHoliToday } from '../lib/dateUtils';

const splashes = [
  { color: '#ff2d78', top: '8%',  left: '0%',   w: 320, h: 320, blur: 90,  opacity: 0.18, delay: '0s' },
  { color: '#ff6b00', top: '40%', left: '-2%',  w: 260, h: 260, blur: 80,  opacity: 0.15, delay: '1s' },
  { color: '#00c9a7', top: '5%',  right: '0%',  w: 300, h: 300, blur: 90,  opacity: 0.16, delay: '0.5s' },
  { color: '#a855f7', top: '55%', right: '-1%', w: 280, h: 280, blur: 85,  opacity: 0.14, delay: '1.5s' },
  { color: '#facc15', top: '75%', left: '25%',  w: 220, h: 220, blur: 70,  opacity: 0.17, delay: '0.8s' },
  { color: '#22d3ee', top: '30%', left: '45%',  w: 200, h: 200, blur: 75,  opacity: 0.13, delay: '0.3s' },
  { color: '#f43f5e', top: '65%', right: '20%', w: 240, h: 240, blur: 80,  opacity: 0.15, delay: '1.2s' },
  { color: '#4ade80', top: '20%', left: '60%',  w: 180, h: 180, blur: 65,  opacity: 0.14, delay: '0.7s' },
  { color: '#fb923c', top: '85%', left: '5%',   w: 200, h: 200, blur: 70,  opacity: 0.16, delay: '1.8s' },
  { color: '#e879f9', top: '15%', left: '35%',  w: 160, h: 160, blur: 60,  opacity: 0.12, delay: '2s' },
];

export default function HoliColorAccents() {
  if (!isHoliToday()) return null;

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      >
        {splashes.map((s, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: s.top,
              left: s.left,
              right: s.right,
              width: s.w,
              height: s.h,
              background: s.color,
              borderRadius: '50%',
              filter: `blur(${s.blur}px)`,
              opacity: s.opacity,
              animationDelay: s.delay,
            }}
            className="holi-accent-blob"
          />
        ))}

        {/* Holi image accent strip at very bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 120,
            backgroundImage: 'url(/assets/generated/holi-splash.dim_800x400.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.12,
            mixBlendMode: 'screen',
          }}
        />
      </div>

      <style>{`
        @keyframes holiAccentPulse {
          0%   { transform: scale(1);    opacity: var(--op); }
          50%  { transform: scale(1.12); opacity: calc(var(--op) * 1.4); }
          100% { transform: scale(1);    opacity: var(--op); }
        }
        .holi-accent-blob {
          animation: holiAccentPulse 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
