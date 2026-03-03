import { useEffect, useState } from 'react';
import { isHoliToday } from '../lib/dateUtils';

const SESSION_KEY = 'holi_greeting_dismissed';

export default function HoliGreeting() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!isHoliToday()) return;
    const dismissed = sessionStorage.getItem(SESSION_KEY);
    if (!dismissed) {
      setVisible(true);
      // Auto-dismiss after 5 seconds
      const timer = setTimeout(() => handleDismiss(), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleDismiss() {
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(SESSION_KEY, '1');
    }, 600);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: 'rgba(0,0,0,0.92)',
        animation: exiting
          ? 'holiExit 0.6s ease-in forwards'
          : 'holiEnter 0.7s ease-out forwards',
      }}
    >
      {/* Colour splash blobs behind text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="holi-blob" style={{ top: '10%', left: '5%', background: '#ff2d78', width: 220, height: 220, animationDelay: '0s' }} />
        <div className="holi-blob" style={{ top: '60%', left: '2%', background: '#ff6b00', width: 160, height: 160, animationDelay: '0.3s' }} />
        <div className="holi-blob" style={{ top: '5%', right: '8%', background: '#00c9a7', width: 200, height: 200, animationDelay: '0.15s' }} />
        <div className="holi-blob" style={{ top: '55%', right: '4%', background: '#a855f7', width: 180, height: 180, animationDelay: '0.45s' }} />
        <div className="holi-blob" style={{ bottom: '8%', left: '30%', background: '#facc15', width: 140, height: 140, animationDelay: '0.6s' }} />
        <div className="holi-blob" style={{ top: '35%', left: '20%', background: '#22d3ee', width: 120, height: 120, animationDelay: '0.2s' }} />
        <div className="holi-blob" style={{ top: '20%', right: '25%', background: '#f43f5e', width: 100, height: 100, animationDelay: '0.5s' }} />
        <div className="holi-blob" style={{ bottom: '15%', right: '20%', background: '#4ade80', width: 130, height: 130, animationDelay: '0.35s' }} />
      </div>

      {/* Central card */}
      <div
        className="relative z-10 flex flex-col items-center gap-6 px-10 py-12 text-center"
        style={{
          background: 'rgba(0,0,0,0.75)',
          border: '2px solid #c9a84c',
          boxShadow: '0 0 60px rgba(201,168,76,0.5), 0 0 120px rgba(201,168,76,0.2)',
          maxWidth: 560,
          width: '90vw',
        }}
      >
        {/* Powder dust particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-none">
          {['#ff2d78','#ff6b00','#00c9a7','#facc15','#a855f7','#22d3ee'].map((c, i) => (
            <span
              key={i}
              className="absolute rounded-full opacity-70"
              style={{
                background: c,
                width: 8 + (i * 3),
                height: 8 + (i * 3),
                top: `${10 + i * 13}%`,
                left: `${5 + i * 15}%`,
                animation: `holiParticle ${1.5 + i * 0.3}s ease-in-out infinite alternate`,
              }}
            />
          ))}
        </div>

        <div className="text-6xl select-none" style={{ filter: 'drop-shadow(0 0 12px rgba(201,168,76,0.8))' }}>
          🎨
        </div>

        <h1
          className="font-serif leading-tight"
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
            color: '#c9a84c',
            textShadow: '0 0 30px rgba(201,168,76,0.9), 0 0 60px rgba(201,168,76,0.4)',
            letterSpacing: '0.06em',
            fontWeight: 700,
          }}
        >
          Happy Holi!
        </h1>

        <p
          className="font-serif italic"
          style={{
            color: '#e8d5a3',
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            letterSpacing: '0.04em',
          }}
        >
          Wishing you a colourful &amp; joyful festival of colours 🌈
        </p>

        <div className="flex gap-3 mt-2">
          {['🔴','🟠','🟡','🟢','🔵','🟣'].map((e, i) => (
            <span key={i} className="text-2xl" style={{ animation: `holiParticle ${1 + i * 0.2}s ease-in-out infinite alternate` }}>
              {e}
            </span>
          ))}
        </div>

        <button
          onClick={handleDismiss}
          className="mt-4 px-8 py-3 font-serif tracking-widest uppercase text-sm transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #c9a84c, #f0d080)',
            color: '#0a0a0a',
            border: 'none',
            fontWeight: 700,
            letterSpacing: '0.15em',
            boxShadow: '0 4px 20px rgba(201,168,76,0.5)',
          }}
          onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 6px 30px rgba(201,168,76,0.8)')}
          onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,168,76,0.5)')}
        >
          Celebrate ✨
        </button>
      </div>

      <style>{`
        @keyframes holiEnter {
          from { opacity: 0; transform: scale(1.05); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes holiExit {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(0.95); }
        }
        @keyframes holiBlob {
          0%   { transform: scale(1) translate(0, 0); opacity: 0.18; }
          50%  { transform: scale(1.15) translate(8px, -8px); opacity: 0.28; }
          100% { transform: scale(1) translate(0, 0); opacity: 0.18; }
        }
        @keyframes holiParticle {
          from { transform: translateY(0) scale(1); }
          to   { transform: translateY(-10px) scale(1.2); }
        }
        .holi-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          animation: holiBlob 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
