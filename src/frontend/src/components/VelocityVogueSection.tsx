import type React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { openWhatsAppBooking } from "../lib/whatsapp";

const products = [
  {
    title: "Premium Luggage",
    desc: "Hard-shell and soft-shell luggage engineered for durability and elegance.",
    icon: "🧳",
    color: "#ffea00",
  },
  {
    title: "Travel Bags",
    desc: "Spacious, structured bags that marry function with premium aesthetics.",
    icon: "👜",
    color: "#ff8c00",
  },
  {
    title: "Carry-On Collections",
    desc: "Cabin-compliant carry-ons designed for the frequent flyer.",
    icon: "✈️",
    color: "#ffea00",
  },
  {
    title: "Travel Accessories",
    desc: "Passport covers, organisers, and travel kits for the meticulous traveller.",
    icon: "🗂️",
    color: "#ff8c00",
  },
  {
    title: "Corporate Gifting",
    desc: "Branded travel sets and curated gift hampers for corporate clients.",
    icon: "🎁",
    color: "#ffea00",
  },
  {
    title: "Custom Branding",
    desc: "Personalised luggage and bags with monograms and bespoke branding.",
    icon: "🏷️",
    color: "#ff8c00",
  },
];

const VelocityVogueSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="velocity-vogue"
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
              color: "#ffea00",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              marginBottom: "0.75rem",
              textShadow: "0 0 15px rgba(255,234,0,0.5)",
            }}
          >
            Luxury Travel Gear
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#ffea00",
              textShadow: "0 0 30px rgba(255,234,0,0.4)",
              margin: "0 0 1rem 0",
            }}
          >
            Velocity Vogue
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
            Travel with authority. Premium luggage for the modern elite.
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
            src="/assets/generated/velocity-vogue-luggage.dim_600x400.png"
            alt="Velocity Vogue"
            style={{
              width: "100%",
              height: "clamp(200px, 30vw, 350px)",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Product cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          {products.map((product, i) => (
            <div
              key={product.title}
              style={{
                padding: "1.5rem",
                backgroundColor: "rgba(255,255,255,0.03)",
                border: `1px solid ${product.color}33`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease ${0.3 + i * 0.08}s`,
              }}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>
                {product.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontWeight: 700,
                  color: product.color,
                  textShadow: `0 0 12px ${product.color}66`,
                  margin: "0 0 0.5rem 0",
                }}
              >
                {product.title}
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
                {product.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            data-ocid="velocity-vogue.primary_button"
            onClick={() => openWhatsAppBooking("Velocity Vogue")}
            style={{
              padding: "1rem 3rem",
              background: "linear-gradient(135deg, #ffea00, #ff8c00)",
              border: "none",
              color: "#050508",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(255,234,0,0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 50px rgba(255,234,0,0.7)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 30px rgba(255,234,0,0.4)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(0)";
            }}
          >
            Shop the Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default VelocityVogueSection;
