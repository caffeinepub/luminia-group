import type React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  buildBookingMessage,
  buildGovernmentServiceMessage,
  openWhatsApp,
} from "../lib/whatsapp";

const DEPLOY_TIMESTAMP = new Date("2026-03-02T00:00:00Z").getTime();
const BADGE_DURATION_MS = 48 * 60 * 60 * 1000;

const techServices = [
  {
    title: "Web Development",
    desc: "Modern, responsive websites and web applications",
    icon: "🌐",
    color: "#00e5ff",
  },
  {
    title: "App Development",
    desc: "iOS and Android apps built for performance",
    icon: "📱",
    color: "#76ff03",
  },
  {
    title: "Digital Marketing",
    desc: "SEO, social media, and performance marketing",
    icon: "📊",
    color: "#ffea00",
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful interfaces that users love",
    icon: "🎨",
    color: "#ff4081",
  },
  {
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure and DevOps",
    icon: "☁️",
    color: "#d500f9",
  },
  {
    title: "Cybersecurity",
    desc: "Protect your digital assets and data",
    icon: "🔒",
    color: "#ff6b00",
  },
];

const govServices = [
  {
    title: "Voter ID / Update",
    desc: "New voter ID application and address/name correction",
    icon: "🗳️",
    color: "#76ff03",
  },
  {
    title: "Aadhaar Update",
    desc: "Name, address, mobile and biometric update assistance",
    icon: "🪪",
    color: "#ffea00",
  },
  {
    title: "Income Tax (ITR)",
    desc: "ITR filing and tax planning services",
    icon: "💰",
    color: "#ff6b00",
  },
  {
    title: "Business Registration",
    desc: "Company incorporation and compliance",
    icon: "🏢",
    color: "#00e5ff",
  },
  {
    title: "MSME Registration",
    desc: "Udyam registration for small businesses",
    icon: "🏭",
    color: "#ff2d78",
  },
  {
    title: "Trademark",
    desc: "Brand protection and IP registration",
    icon: "™️",
    color: "#d500f9",
  },
];

const LuminiaTechLabsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const showNewBadge = Date.now() - DEPLOY_TIMESTAMP < BADGE_DURATION_MS;

  const handleBookClick = () => {
    openWhatsApp(buildBookingMessage("Luminia TechLabs"));
  };

  const handleGovCardClick = (serviceTitle: string) => {
    openWhatsApp(buildGovernmentServiceMessage(serviceTitle));
  };

  const handleGovInquiryClick = () => {
    openWhatsApp(buildGovernmentServiceMessage("Government Services"));
  };

  return (
    <section
      id="luminia-techlabs"
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
              color: "#00e5ff",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              marginBottom: "0.75rem",
              textShadow: "0 0 15px rgba(0,229,255,0.5)",
            }}
          >
            Technology & Services
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#00e5ff",
              textShadow: "0 0 30px rgba(0,229,255,0.4)",
              margin: 0,
            }}
          >
            Luminia TechLabs
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
            src="/assets/generated/luminia-techlabs-banner.dim_1200x400.png"
            alt="Luminia TechLabs"
            style={{
              width: "100%",
              height: "clamp(200px, 30vw, 350px)",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Tech Services heading */}
        <h3
          style={{
            fontSize: "clamp(1.3rem, 3vw, 2rem)",
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontWeight: 700,
            fontStyle: "italic",
            color: "#76ff03",
            textShadow: "0 0 20px rgba(118,255,3,0.4)",
            marginBottom: "1.5rem",
          }}
        >
          Technology Solutions
        </h3>

        {/* Tech Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3rem",
          }}
        >
          {techServices.map((service, i) => (
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
              <h4
                style={{
                  fontSize: "1.1rem",
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontWeight: 700,
                  color: service.color,
                  textShadow: `0 0 12px ${service.color}66`,
                  margin: "0 0 0.5rem 0",
                }}
              >
                {service.title}
              </h4>
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

        {/* TechLabs CTA */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <button
            type="button"
            onClick={handleBookClick}
            style={{
              padding: "1rem 3rem",
              background: "linear-gradient(135deg, #00e5ff, #76ff03)",
              border: "none",
              color: "#050508",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(0,229,255,0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 50px rgba(0,229,255,0.7)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 30px rgba(0,229,255,0.4)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(0)";
            }}
          >
            Start a Project
          </button>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent, #ffea00, #76ff03, transparent)",
            marginBottom: "4rem",
            opacity: 0.4,
          }}
        />

        {/* Government Services heading */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(1.3rem, 3vw, 2rem)",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#ffea00",
              textShadow: "0 0 20px rgba(255,234,0,0.4)",
              margin: 0,
            }}
          >
            Government &amp; Compliance Services
          </h3>
          {showNewBadge && (
            <span
              style={{
                backgroundColor: "#ff2d78",
                color: "#fff",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "0.25rem 0.75rem",
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              New
            </span>
          )}
        </div>

        {/* Government Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          {govServices.map((service, i) => (
            <div
              key={service.title}
              onClick={() => handleGovCardClick(service.title)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  handleGovCardClick(service.title);
              }}
              style={{
                padding: "1.5rem",
                backgroundColor: "rgba(255,255,255,0.03)",
                border: `1px solid ${service.color}33`,
                cursor: "pointer",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease ${0.6 + i * 0.08}s`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.backgroundColor = `${service.color}0d`;
                el.style.borderColor = `${service.color}66`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.backgroundColor = "rgba(255,255,255,0.03)";
                el.style.borderColor = `${service.color}33`;
              }}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>
                {service.icon}
              </div>
              <h4
                style={{
                  fontSize: "1.1rem",
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontWeight: 700,
                  color: service.color,
                  textShadow: `0 0 12px ${service.color}66`,
                  margin: "0 0 0.5rem 0",
                }}
              >
                {service.title}
              </h4>
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

        {/* Government Services CTA */}
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            onClick={handleGovInquiryClick}
            style={{
              padding: "1rem 3rem",
              background: "linear-gradient(135deg, #ffea00, #ff6b00)",
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
            Get Government Services Help
          </button>
        </div>
      </div>
    </section>
  );
};

export default LuminiaTechLabsSection;
