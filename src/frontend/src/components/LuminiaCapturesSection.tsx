import type React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { openWhatsAppBooking } from "../lib/whatsapp";

const services = [
  {
    title: "Wedding Photography",
    desc: "Timeless wedding stories told through our lens",
    icon: "💍",
    color: "#ff2d78",
  },
  {
    title: "Portrait Sessions",
    desc: "Professional portraits that capture your essence",
    icon: "🎭",
    color: "#d500f9",
  },
  {
    title: "Commercial Shoots",
    desc: "Brand imagery that drives engagement",
    icon: "📸",
    color: "#ff4081",
  },
  {
    title: "Event Coverage",
    desc: "Corporate and social events documented beautifully",
    icon: "🎪",
    color: "#ff6b00",
  },
  {
    title: "Pre-Wedding Shoots",
    desc: "Romantic pre-wedding sessions at stunning locations",
    icon: "🌹",
    color: "#ffea00",
  },
  {
    title: "Photo Editing",
    desc: "Professional retouching and color grading",
    icon: "🎨",
    color: "#76ff03",
  },
];

const LuminiaCapturesSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="luminia-captures"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        padding: "clamp(4rem, 8vw, 8rem) 2rem",
        backgroundColor: "#050508",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
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
              display: "block",
              fontSize: "0.75rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#ff4081",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              marginBottom: "0.75rem",
              textShadow: "0 0 15px rgba(255,64,129,0.5)",
            }}
          >
            Photography & Videography
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#ff2d78",
              textShadow: "0 0 30px rgba(255,45,120,0.4)",
              margin: 0,
            }}
          >
            Luminia Captures
          </h2>
        </div>

        {/* Banner */}
        <div
          style={{
            marginBottom: "3rem",
            overflow: "hidden",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease 0.2s",
          }}
        >
          <img
            src="/assets/generated/luminia-captures-banner.dim_1200x400.png"
            alt="Luminia Captures"
            style={{
              width: "100%",
              height: "clamp(200px, 30vw, 350px)",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Image pair */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {[
            {
              src: "/assets/generated/luminia-captures-wedding.dim_600x400.png",
              alt: "Wedding",
            },
            {
              src: "/assets/generated/luminia-captures-studio.dim_600x400.png",
              alt: "Studio",
            },
          ].map((img) => (
            <div key={img.alt} style={{ overflow: "hidden" }}>
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  height: "clamp(150px, 20vw, 250px)",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1)";
                }}
              />
            </div>
          ))}
        </div>

        {/* Service cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          {services.map((service, i) => (
            <div
              key={service.title}
              style={{
                padding: "1.5rem",
                backgroundColor: "rgba(255,255,255,0.03)",
                border: `1px solid ${service.color}33`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease ${0.3 + i * 0.08}s`,
              }}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>
                {service.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontWeight: 700,
                  color: service.color,
                  textShadow: `0 0 12px ${service.color}66`,
                  marginBottom: "0.5rem",
                  margin: "0 0 0.5rem 0",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            onClick={() => openWhatsAppBooking("Luminia Captures Photography")}
            style={{
              padding: "1rem 3rem",
              background: "linear-gradient(135deg, #ff2d78, #d500f9)",
              border: "none",
              color: "#fff",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(255,45,120,0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 50px rgba(255,45,120,0.7)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 30px rgba(255,45,120,0.4)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(0)";
            }}
          >
            Book a Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default LuminiaCapturesSection;
