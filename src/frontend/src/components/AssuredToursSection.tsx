import type React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { openWhatsAppBooking } from "../lib/whatsapp";

const DEPLOY_TIMESTAMP = new Date("2026-03-02T00:00:00Z").getTime();
const BADGE_DURATION_MS = 48 * 60 * 60 * 1000;

const services = [
  {
    title: "Flight Bookings",
    desc: "Domestic & international flights at best prices",
    icon: "✈️",
    color: "#ff6b00",
  },
  {
    title: "Train Reservations",
    desc: "Tatkal & regular train bookings across India",
    icon: "🚂",
    color: "#ff2d78",
  },
  {
    title: "Hotel Packages",
    desc: "Curated stays from budget to luxury",
    icon: "🏨",
    color: "#00e5ff",
  },
  {
    title: "Pilgrimage Tours",
    desc: "Sacred journeys to India's holy destinations",
    icon: "🛕",
    color: "#76ff03",
  },
  {
    title: "Visa Assistance",
    desc: "Expert guidance for international travel documents",
    icon: "📋",
    color: "#d500f9",
  },
  {
    title: "Group Tours",
    desc: "Customized packages for families and corporates",
    icon: "👥",
    color: "#ffea00",
  },
];

const AssuredToursSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const showNewBadge = Date.now() - DEPLOY_TIMESTAMP < BADGE_DURATION_MS;

  return (
    <section
      id="assured-tours"
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
              color: "#ff6b00",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              marginBottom: "0.75rem",
              textShadow: "0 0 15px rgba(255,107,0,0.5)",
            }}
          >
            Travel & Experiences
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#ff6b00",
              textShadow: "0 0 30px rgba(255,107,0,0.4)",
              margin: 0,
            }}
          >
            Assured Tours and Travels
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
            src="/assets/generated/assured-tours-banner.dim_1200x400.png"
            alt="Assured Tours"
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
              src: "/assets/generated/assured-tours-flight.dim_600x400.png",
              alt: "Flight",
            },
            {
              src: "/assets/generated/assured-tours-train.dim_600x400.png",
              alt: "Train",
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
            marginBottom: "2rem",
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

        {/* Passport Services featured card */}
        <div
          style={{
            padding: "2rem",
            backgroundColor: "rgba(255,107,0,0.06)",
            border: "1px solid rgba(255,107,0,0.3)",
            marginBottom: "2.5rem",
            position: "relative",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease 0.8s",
          }}
        >
          {showNewBadge && (
            <span
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                backgroundColor: "#ff2d78",
                color: "#fff",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "0.25rem 0.75rem",
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontWeight: 700,
              }}
            >
              New
            </span>
          )}
          <h3
            style={{
              fontSize: "1.4rem",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 700,
              color: "#ff6b00",
              textShadow: "0 0 15px rgba(255,107,0,0.5)",
              marginBottom: "0.75rem",
              margin: "0 0 0.75rem 0",
            }}
          >
            🛂 Passport Services
          </h3>
          <p
            style={{
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.6)",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              lineHeight: 1.6,
              margin: "0 0 1rem 0",
            }}
          >
            Complete passport application assistance — new applications,
            renewals, and urgent processing. Our experts guide you through every
            step.
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            onClick={() => openWhatsAppBooking("Assured Tours and Travels")}
            style={{
              padding: "1rem 3rem",
              background: "linear-gradient(135deg, #ff6b00, #ff2d78)",
              border: "none",
              color: "#fff",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(255,107,0,0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 50px rgba(255,107,0,0.7)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 30px rgba(255,107,0,0.4)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(0)";
            }}
          >
            Book Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default AssuredToursSection;
