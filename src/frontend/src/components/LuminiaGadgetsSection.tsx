import type React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { openWhatsAppBooking } from "../lib/whatsapp";

const products = [
  {
    title: "Smart Watches",
    desc: "Premium smartwatches blending luxury aesthetics with intelligent features.",
    icon: "⌚",
    color: "#76ff03",
  },
  {
    title: "Wireless Earbuds",
    desc: "Crystal-clear audio in a compact form — engineered for the discerning ear.",
    icon: "🎧",
    color: "#00e5ff",
  },
  {
    title: "Premium Headphones",
    desc: "Over-ear studio-grade headphones delivering immersive sound experiences.",
    icon: "🎵",
    color: "#76ff03",
  },
  {
    title: "Mobile Accessories",
    desc: "Curated accessories that complement your devices with style and precision.",
    icon: "📱",
    color: "#00e5ff",
  },
  {
    title: "Smart Home Devices",
    desc: "Intelligent home automation devices for the modern lifestyle.",
    icon: "🏠",
    color: "#76ff03",
  },
  {
    title: "Wearables",
    desc: "Next-gen wearable tech that tracks, monitors, and elevates your daily life.",
    icon: "💎",
    color: "#00e5ff",
  },
];

const LuminiaGadgetsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="luminia-gadgets"
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
              color: "#76ff03",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              marginBottom: "0.75rem",
              textShadow: "0 0 15px rgba(118,255,3,0.5)",
            }}
          >
            Premium Electronics
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#76ff03",
              textShadow: "0 0 30px rgba(118,255,3,0.4)",
              margin: "0 0 1rem 0",
            }}
          >
            Luminia Gadgets
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
            The future, curated. Luxury tech for those who refuse to settle.
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
            src="/assets/generated/luminia-gadgets-watch.dim_600x400.png"
            alt="Luminia Gadgets"
            style={{
              width: "100%",
              height: "clamp(200px, 30vw, 350px)",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Product image pair */}
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
              src: "/assets/generated/luminia-gadgets-earbuds.dim_600x400.png",
              alt: "Earbuds",
            },
            {
              src: "/assets/generated/luminia-gadgets-headphones.dim_600x400.png",
              alt: "Headphones",
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
            data-ocid="luminia-gadgets.primary_button"
            onClick={() => openWhatsAppBooking("Luminia Gadgets")}
            style={{
              padding: "1rem 3rem",
              background: "linear-gradient(135deg, #76ff03, #00e5ff)",
              border: "none",
              color: "#050508",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(118,255,3,0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 50px rgba(118,255,3,0.7)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 30px rgba(118,255,3,0.4)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(0)";
            }}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default LuminiaGadgetsSection;
