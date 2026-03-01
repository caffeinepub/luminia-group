import { useEffect, useState, useRef } from "react";

const PARTICLES_COUNT = 60;

function generateParticles() {
  return Array.from({ length: PARTICLES_COUNT }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 4,
    size: 2 + Math.random() * 3,
    opacity: 0.3 + Math.random() * 0.7,
  }));
}

const HEADLINE = "WELCOME TO LUMINIA GROUP CONGLOMERATE";

export default function WelcomePopup() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [burstActive, setBurstActive] = useState(false);
  const [lettersVisible, setLettersVisible] = useState(false);
  const [dividerVisible, setDividerVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);
  const particles = useRef(generateParticles());

  useEffect(() => {
    const seen = sessionStorage.getItem("luminia_welcome_seen");
    if (!seen) {
      setVisible(true);
      // Stagger entrance animations
      setTimeout(() => setLettersVisible(true), 600);
      setTimeout(() => setDividerVisible(true), 600 + HEADLINE.length * 45 + 200);
      setTimeout(() => setSubtitleVisible(true), 600 + HEADLINE.length * 45 + 600);
      setTimeout(() => setButtonVisible(true), 600 + HEADLINE.length * 45 + 1000);
    }
  }, []);

  const handleEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setTimeout(() => {
      setBurstActive(true);
      setTimeout(() => {
        setExiting(true);
        setTimeout(() => {
          setVisible(false);
          sessionStorage.setItem("luminia_welcome_seen", "1");
        }, 800);
      }, 300);
    }, 200);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-all duration-700 ${
        exiting ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
      style={{ background: "#080808" }}
    >
      {/* Gold burst overlay */}
      {burstActive && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(212,175,55,0.35) 0%, rgba(212,175,55,0.08) 40%, transparent 70%)",
            animation: "goldBurst 0.6s ease-out forwards",
          }}
        />
      )}

      {/* Falling gold particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.current.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.left}%`,
              top: "-10px",
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: `rgba(212,175,55,${p.opacity})`,
              boxShadow: `0 0 ${p.size * 2}px rgba(212,175,55,0.6)`,
              animation: `particleFall ${p.duration}s ${p.delay}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Horizontal gold scan lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(212,175,55,0.015) 3px, rgba(212,175,55,0.015) 4px)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl w-full">
        {/* Logo with glow pulse */}
        <div
          className="mb-10 relative"
          style={{
            animation: "logoPulse 2.5s ease-in-out infinite",
          }}
        >
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)",
              filter: "blur(20px)",
              transform: "scale(1.4)",
            }}
          />
          <img
            src="/assets/image-3.png"
            alt="Luminia Group Conglomerate"
            className="relative w-48 md:w-64 object-contain"
            style={{
              filter: "drop-shadow(0 0 24px rgba(212,175,55,0.7)) drop-shadow(0 0 8px rgba(212,175,55,0.4))",
              animation: "logoFadeIn 1s ease-out forwards",
            }}
          />
        </div>

        {/* Letter-by-letter headline */}
        <h1
          className="font-serif tracking-widest mb-0 leading-tight"
          style={{
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
            fontSize: "clamp(1rem, 3vw, 1.6rem)",
            color: "rgba(212,175,55,1)",
            textShadow: "0 0 20px rgba(212,175,55,0.5), 0 0 40px rgba(212,175,55,0.2)",
            letterSpacing: "0.2em",
          }}
        >
          {HEADLINE.split("").map((char, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                opacity: lettersVisible ? 1 : 0,
                transform: lettersVisible ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.3s ease ${i * 40}ms, transform 0.3s ease ${i * 40}ms`,
                whiteSpace: char === " " ? "pre" : "normal",
              }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Self-drawing gold divider */}
        <div
          className="my-6 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.9), rgba(212,175,55,1), rgba(212,175,55,0.9), transparent)",
            width: dividerVisible ? "100%" : "0%",
            transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 0 8px rgba(212,175,55,0.6)",
          }}
        />

        {/* Subtitle */}
        <p
          className="italic mb-10"
          style={{
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
            fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
            color: "rgba(212,175,55,0.75)",
            letterSpacing: "0.3em",
            opacity: subtitleVisible ? 1 : 0,
            transform: subtitleVisible ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          A Legacy of Excellence
        </p>

        {/* ENTER button */}
        <button
          onClick={handleEnter}
          className="relative overflow-hidden"
          style={{
            opacity: buttonVisible ? 1 : 0,
            transform: buttonVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.8s ease, transform 0.8s ease, box-shadow 0.3s ease",
            background: "transparent",
            border: "1.5px solid rgba(212,175,55,0.9)",
            color: "rgba(212,175,55,1)",
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
            fontSize: "1rem",
            letterSpacing: "0.4em",
            padding: "14px 52px",
            cursor: "pointer",
            boxShadow: "0 0 20px rgba(212,175,55,0.2), inset 0 0 20px rgba(212,175,55,0.05)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 40px rgba(212,175,55,0.5), inset 0 0 30px rgba(212,175,55,0.15)";
            e.currentTarget.style.background = "rgba(212,175,55,0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 20px rgba(212,175,55,0.2), inset 0 0 20px rgba(212,175,55,0.05)";
            e.currentTarget.style.background = "transparent";
          }}
        >
          {/* Ripple */}
          {ripple && (
            <span
              className="absolute rounded-full pointer-events-none"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: 0,
                height: 0,
                background: "rgba(212,175,55,0.4)",
                transform: "translate(-50%, -50%)",
                animation: "rippleEffect 0.6s ease-out forwards",
              }}
            />
          )}
          ENTER
        </button>

        {/* Corner ornaments */}
        <div className="absolute top-4 left-4 w-8 h-8 pointer-events-none" style={{ borderTop: "1px solid rgba(212,175,55,0.4)", borderLeft: "1px solid rgba(212,175,55,0.4)" }} />
        <div className="absolute top-4 right-4 w-8 h-8 pointer-events-none" style={{ borderTop: "1px solid rgba(212,175,55,0.4)", borderRight: "1px solid rgba(212,175,55,0.4)" }} />
        <div className="absolute bottom-4 left-4 w-8 h-8 pointer-events-none" style={{ borderBottom: "1px solid rgba(212,175,55,0.4)", borderLeft: "1px solid rgba(212,175,55,0.4)" }} />
        <div className="absolute bottom-4 right-4 w-8 h-8 pointer-events-none" style={{ borderBottom: "1px solid rgba(212,175,55,0.4)", borderRight: "1px solid rgba(212,175,55,0.4)" }} />
      </div>
    </div>
  );
}
