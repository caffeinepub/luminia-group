import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function ManifestoSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="manifesto"
      className="relative py-32 px-4 md:px-8 overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="relative z-10 max-w-4xl mx-auto text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 1.2s ease, transform 1.2s ease",
        }}
      >
        {/* Top rule */}
        <div
          className="mx-auto mb-12 h-px w-48"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)",
          }}
        />

        {/* Eyebrow */}
        <p
          className="uppercase tracking-[0.5em] text-xs mb-8"
          style={{
            color: "rgba(212,175,55,0.45)",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            letterSpacing: "0.5em",
          }}
        >
          Our Manifesto
        </p>

        {/* Quote mark */}
        <div
          className="mb-4 font-serif leading-none"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "6rem",
            color: "rgba(212,175,55,0.15)",
            lineHeight: 0.8,
          }}
        >
          "
        </div>

        {/* Main quote */}
        <blockquote
          className="font-serif mb-8 leading-relaxed"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)",
            color: "rgba(212,175,55,0.85)",
            fontStyle: "italic",
            fontWeight: 300,
            letterSpacing: "0.02em",
            textShadow: "0 0 40px rgba(212,175,55,0.15)",
          }}
        >
          We do not merely build businesses. We architect legacies — each venture a testament to the relentless pursuit of excellence, innovation, and the art of the extraordinary.
        </blockquote>

        {/* Attribution */}
        <p
          className="text-xs uppercase tracking-widest mb-12"
          style={{
            color: "rgba(212,175,55,0.35)",
            letterSpacing: "0.4em",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
          }}
        >
          — Luminia Group Conglomerate
        </p>

        {/* Bottom rule */}
        <div
          className="mx-auto h-px w-48"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)",
          }}
        />

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-8">
          {[
            { value: "7", label: "Subsidiaries" },
            { value: "∞", label: "Ambition" },
            { value: "1", label: "Vision" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <span
                className="font-serif"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "rgba(212,175,55,0.9)",
                  textShadow: "0 0 20px rgba(212,175,55,0.3)",
                  fontWeight: 300,
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: "rgba(212,175,55,0.35)", letterSpacing: "0.3em" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
