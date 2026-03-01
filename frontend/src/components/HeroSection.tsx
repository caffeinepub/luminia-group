import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSubsidiaries = () => {
    document.getElementById("subsidiaries")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.25,
        }}
      />

      {/* Multi-layer overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,8,8,0.7) 0%, rgba(8,8,8,0.3) 40%, rgba(8,8,8,0.3) 60%, rgba(8,8,8,0.9) 100%)",
        }}
      />

      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 1.2s ease 0.3s, transform 1.2s ease 0.3s",
        }}
      >
        {/* Eyebrow */}
        <p
          className="uppercase tracking-[0.5em] text-xs mb-8"
          style={{
            color: "rgba(212,175,55,0.55)",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            letterSpacing: "0.5em",
          }}
        >
          Est. 2024 · India
        </p>

        {/* Main headline */}
        <h1
          className="font-serif mb-6 leading-none"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(3rem, 10vw, 8rem)",
            color: "rgba(212,175,55,1)",
            textShadow:
              "0 0 60px rgba(212,175,55,0.3), 0 0 120px rgba(212,175,55,0.1)",
            letterSpacing: "-0.01em",
            fontWeight: 300,
          }}
        >
          LUMINIA
        </h1>

        {/* Diamond divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div
            className="h-px flex-1 max-w-32"
            style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.6))" }}
          />
          <span style={{ color: "rgba(212,175,55,0.8)", fontSize: "0.6rem" }}>◆</span>
          <div
            className="h-px flex-1 max-w-32"
            style={{ background: "linear-gradient(90deg, rgba(212,175,55,0.6), transparent)" }}
          />
        </div>

        <h2
          className="font-serif mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1rem, 3vw, 1.8rem)",
            color: "rgba(212,175,55,0.65)",
            letterSpacing: "0.4em",
            fontWeight: 300,
          }}
        >
          GROUP CONGLOMERATE
        </h2>

        <p
          className="mb-12 mx-auto leading-relaxed"
          style={{
            color: "rgba(212,175,55,0.45)",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(0.9rem, 2vw, 1.15rem)",
            maxWidth: "520px",
            letterSpacing: "0.05em",
          }}
        >
          A diversified conglomerate of excellence — spanning technology, fashion, travel, photography, and beyond.
        </p>

        {/* CTA */}
        <button
          onClick={scrollToSubsidiaries}
          className="relative overflow-hidden"
          style={{
            background: "transparent",
            border: "1px solid rgba(212,175,55,0.6)",
            color: "rgba(212,175,55,0.9)",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "0.85rem",
            letterSpacing: "0.35em",
            padding: "14px 48px",
            cursor: "pointer",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            boxShadow: "0 0 20px rgba(212,175,55,0.1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(212,175,55,0.08)";
            e.currentTarget.style.boxShadow = "0 0 40px rgba(212,175,55,0.25)";
            e.currentTarget.style.borderColor = "rgba(212,175,55,0.9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(212,175,55,0.1)";
            e.currentTarget.style.borderColor = "rgba(212,175,55,0.6)";
          }}
        >
          Explore Our Empire
        </button>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: mounted ? 0.6 : 0, transition: "opacity 1s ease 2s" }}
      >
        <div
          className="w-px h-12"
          style={{
            background: "linear-gradient(180deg, rgba(212,175,55,0.8), transparent)",
            animation: "scrollLine 2s ease-in-out infinite",
          }}
        />
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: "rgba(212,175,55,0.4)", letterSpacing: "0.3em", fontSize: "0.6rem" }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
