import type React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const GOLD = "#D4AF37";
const GOLD_MID = "#FFD700";
const GOLD_DARK = "#B8960C";

const ManifestoSection: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const stats = [
    { value: "7+", label: "Subsidiaries", color: GOLD_MID },
    { value: "2026", label: "Founded", color: GOLD },
    { value: "∞", label: "Ambition", color: GOLD_MID },
    { value: "India", label: "Origin", color: GOLD_DARK },
  ];

  return (
    <section
      id="manifesto"
      ref={sectionRef as React.RefObject<HTMLElement>}
      style={{
        position: "relative",
        padding: "clamp(5rem, 10vw, 10rem) 2rem",
        backgroundColor: "#050508",
        overflow: "hidden",
      }}
    >
      {/* Subtle gold radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          height: "80vw",
          maxWidth: 800,
          maxHeight: 800,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(212,175,55,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Section label */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "rgba(212,175,55,0.65)",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              textShadow: "0 0 15px rgba(212,175,55,0.3)",
            }}
          >
            Our Manifesto
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), rgba(255,215,0,0.6), rgba(212,175,55,0.4), transparent)",
            marginBottom: "3rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scaleX(1)" : "scaleX(0)",
            transition: "all 1s ease 0.2s",
          }}
        />

        {/* Quote */}
        <blockquote
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.9s ease 0.3s",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.8rem)",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.5,
              background:
                "linear-gradient(135deg, #D4AF37, #FFD700, #B8960C, #FFD700, #D4AF37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% auto",
              animation: isVisible
                ? "festivalGradientShift 5s linear infinite"
                : "none",
              margin: 0,
            }}
          >
            "We don't just build businesses — we craft experiences that
            illuminate the human spirit across every dimension of life."
          </p>
        </blockquote>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(184,150,12,0.4), rgba(212,175,55,0.6), rgba(184,150,12,0.4), transparent)",
            marginBottom: "4rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scaleX(1)" : "scaleX(0)",
            transition: "all 1s ease 0.5s",
          }}
        />

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.7s ease ${0.6 + i * 0.1}s`,
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontWeight: 700,
                  color: stat.color,
                  textShadow: `0 0 20px ${stat.color}66`,
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
