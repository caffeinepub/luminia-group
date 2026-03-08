import type React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { openWhatsAppBooking } from "../lib/whatsapp";

const collections = [
  {
    title: "Designer Wear",
    desc: "Statement pieces crafted for those who command every room they enter.",
    icon: "👗",
    color: "#d500f9",
  },
  {
    title: "Ethnic Collections",
    desc: "Celebrating India's rich textile heritage with modern sensibilities.",
    icon: "🪷",
    color: "#ff2d78",
  },
  {
    title: "Western Fusion",
    desc: "Contemporary silhouettes that blend global trends with local craft.",
    icon: "✨",
    color: "#d500f9",
  },
  {
    title: "Accessories",
    desc: "Premium accessories that complete the ensemble with quiet luxury.",
    icon: "💍",
    color: "#ff2d78",
  },
  {
    title: "Custom Tailoring",
    desc: "Bespoke garments tailored to your exact measurements and vision.",
    icon: "🪡",
    color: "#d500f9",
  },
  {
    title: "Bridal Couture",
    desc: "Exquisite bridal ensembles for the most important day of your life.",
    icon: "👰",
    color: "#ff2d78",
  },
];

const ModaVestraSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="moda-vestra"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        padding: "clamp(4rem, 8vw, 8rem) 2rem",
        backgroundColor: "#06060a",
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
              color: "#d500f9",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              marginBottom: "0.75rem",
              textShadow: "0 0 15px rgba(213,0,249,0.5)",
            }}
          >
            Luxury Fashion
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#d500f9",
              textShadow: "0 0 30px rgba(213,0,249,0.4)",
              margin: "0 0 1rem 0",
            }}
          >
            Moda Vestra
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 300,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.1em",
              margin: 0,
            }}
          >
            Sophistication in every stitch. Fashion for the visionary.
          </p>
        </div>

        {/* Banner image */}
        <div
          style={{
            marginBottom: "3rem",
            overflow: "hidden",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease 0.2s",
          }}
        >
          <img
            src="/assets/generated/moda-vestra-fashion.dim_600x400.png"
            alt="Moda Vestra"
            style={{
              width: "100%",
              height: "clamp(200px, 30vw, 350px)",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Collection cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          {collections.map((item, i) => (
            <div
              key={item.title}
              style={{
                padding: "1.5rem",
                backgroundColor: "rgba(255,255,255,0.03)",
                border: `1px solid ${item.color}33`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease ${0.3 + i * 0.08}s`,
              }}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontWeight: 700,
                  color: item.color,
                  textShadow: `0 0 12px ${item.color}66`,
                  margin: "0 0 0.5rem 0",
                }}
              >
                {item.title}
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
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            data-ocid="moda-vestra.primary_button"
            onClick={() => openWhatsAppBooking("Moda Vestra")}
            style={{
              padding: "1rem 3rem",
              background: "linear-gradient(135deg, #d500f9, #ff2d78)",
              border: "none",
              color: "#fff",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(213,0,249,0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 50px rgba(213,0,249,0.7)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 30px rgba(213,0,249,0.4)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(0)";
            }}
          >
            Explore Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModaVestraSection;
