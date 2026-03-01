import { useEffect, useState } from "react";
import type { Subsidiary } from "./SubsidiaryGrid";

interface SubsidiaryDetailsProps {
  subsidiary: Subsidiary;
  onClose: () => void;
}

export default function SubsidiaryDetails({ subsidiary, onClose }: SubsidiaryDetailsProps) {
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") setActiveImage((p) => (p + 1) % subsidiary.images.length);
      if (e.key === "ArrowLeft") setActiveImage((p) => (p - 1 + subsidiary.images.length) % subsidiary.images.length);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [subsidiary.images.length]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 500);
  };

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
      style={{
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(8px)",
        opacity: mounted && !closing ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      {/* Modal container */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #111111 100%)",
          border: "1px solid rgba(212,175,55,0.4)",
          boxShadow: "0 0 60px rgba(212,175,55,0.15), 0 0 120px rgba(212,175,55,0.05)",
          transform: mounted && !closing ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
          transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          animation: "modalBorderPulse 3s ease-in-out infinite",
        }}
      >
        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-12 h-12 pointer-events-none" style={{ borderTop: "2px solid rgba(212,175,55,0.8)", borderLeft: "2px solid rgba(212,175,55,0.8)" }} />
        <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none" style={{ borderTop: "2px solid rgba(212,175,55,0.8)", borderRight: "2px solid rgba(212,175,55,0.8)" }} />
        <div className="absolute bottom-0 left-0 w-12 h-12 pointer-events-none" style={{ borderBottom: "2px solid rgba(212,175,55,0.8)", borderLeft: "2px solid rgba(212,175,55,0.8)" }} />
        <div className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none" style={{ borderBottom: "2px solid rgba(212,175,55,0.8)", borderRight: "2px solid rgba(212,175,55,0.8)" }} />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center"
          style={{
            border: "1px solid rgba(212,175,55,0.4)",
            background: "rgba(212,175,55,0.05)",
            color: "rgba(212,175,55,0.8)",
            cursor: "pointer",
            fontSize: "1.2rem",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(212,175,55,0.15)";
            e.currentTarget.style.color = "rgba(212,175,55,1)";
            e.currentTarget.style.boxShadow = "0 0 16px rgba(212,175,55,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(212,175,55,0.05)";
            e.currentTarget.style.color = "rgba(212,175,55,0.8)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          ✕
        </button>

        <div className="p-8 md:p-12">
          {/* Company name */}
          <p
            className="uppercase tracking-[0.4em] text-xs mb-3"
            style={{ color: "rgba(212,175,55,0.5)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {subsidiary.domain}
          </p>
          <h2
            className="font-serif mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              color: "rgba(212,175,55,1)",
              textShadow: "0 0 30px rgba(212,175,55,0.4)",
              letterSpacing: "0.05em",
            }}
          >
            {subsidiary.name}
          </h2>

          {/* LAUNCHING SOON with shimmer */}
          <div className="mb-6 inline-block">
            <span
              className="uppercase tracking-[0.5em] font-serif text-sm md:text-base"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                background: "linear-gradient(90deg, rgba(212,175,55,0.4) 0%, rgba(212,175,55,1) 30%, rgba(255,235,150,1) 50%, rgba(212,175,55,1) 70%, rgba(212,175,55,0.4) 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmerText 2.5s linear infinite",
                letterSpacing: "0.5em",
              }}
            >
              ◆ Launching Soon ◆
            </span>
          </div>

          {/* Gold divider */}
          <div
            className="mb-6 h-px"
            style={{ background: "linear-gradient(90deg, rgba(212,175,55,0.8), rgba(212,175,55,0.2), transparent)" }}
          />

          {/* Description */}
          <p
            className="mb-8 leading-relaxed"
            style={{
              color: "rgba(212,175,55,0.6)",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.05rem",
              letterSpacing: "0.02em",
            }}
          >
            {subsidiary.description}
          </p>

          {/* Images */}
          {subsidiary.images.length > 0 && (
            <div>
              {/* Main image */}
              <div
                className="relative mb-4 overflow-hidden"
                style={{
                  border: "1px solid rgba(212,175,55,0.3)",
                  aspectRatio: "16/9",
                }}
              >
                <img
                  src={subsidiary.images[activeImage]}
                  alt={`${subsidiary.name} preview`}
                  className="w-full h-full object-cover"
                  style={{
                    filter: "brightness(0.9) contrast(1.05)",
                    transition: "opacity 0.4s ease",
                  }}
                  onError={(e) => {
                    e.currentTarget.parentElement!.style.display = "none";
                  }}
                />
                {/* Gold overlay shimmer on image */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(212,175,55,0.05) 0%, transparent 50%, rgba(212,175,55,0.05) 100%)",
                  }}
                />
              </div>

              {/* Thumbnail strip */}
              {subsidiary.images.length > 1 && (
                <div className="flex gap-3">
                  {subsidiary.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className="relative overflow-hidden flex-1"
                      style={{
                        aspectRatio: "16/9",
                        border: i === activeImage
                          ? "2px solid rgba(212,175,55,0.9)"
                          : "1px solid rgba(212,175,55,0.2)",
                        background: "none",
                        cursor: "pointer",
                        padding: 0,
                        transition: "border 0.2s ease",
                        boxShadow: i === activeImage ? "0 0 12px rgba(212,175,55,0.3)" : "none",
                      }}
                    >
                      <img
                        src={img}
                        alt={`${subsidiary.name} ${i + 1}`}
                        className="w-full h-full object-cover"
                        style={{ opacity: i === activeImage ? 1 : 0.5, transition: "opacity 0.2s ease" }}
                        onError={(e) => {
                          e.currentTarget.parentElement!.style.display = "none";
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Navigation hint */}
              {subsidiary.images.length > 1 && (
                <p
                  className="text-center mt-3 text-xs"
                  style={{ color: "rgba(212,175,55,0.3)", letterSpacing: "0.2em" }}
                >
                  ← → to navigate
                </p>
              )}
            </div>
          )}

          {/* Bottom tagline */}
          <div className="mt-8 text-center">
            <p
              className="italic text-sm"
              style={{
                color: "rgba(212,175,55,0.4)",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                letterSpacing: "0.15em",
              }}
            >
              "{subsidiary.tagline}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
