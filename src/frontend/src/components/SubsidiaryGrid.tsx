import type React from "react";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { buildBookingMessage, openWhatsApp } from "../lib/whatsapp";
import SubsidiaryDetails from "./SubsidiaryDetails";

interface Subsidiary {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  glowColor: string;
  images: string[];
  services: string[];
  status: string;
}

const subsidiaries: Subsidiary[] = [
  // ── Product Brands (shown first) ──
  {
    id: "luminia-gadgets",
    name: "Luminia Gadgets",
    tagline: "Tech Redefined",
    description:
      "Premium consumer electronics and smart devices that blend performance with elegance.",
    icon: "/assets/generated/gadgets-icon.dim_128x128.png",
    color: "#76ff03",
    glowColor: "rgba(118,255,3,0.3)",
    images: [
      "/assets/generated/luminia-gadgets-watch.dim_600x400.png",
      "/assets/generated/luminia-gadgets-earbuds.dim_600x400.png",
      "/assets/generated/luminia-gadgets-headphones.dim_600x400.png",
    ],
    services: [
      "Smart Watches",
      "Audio Devices",
      "Mobile Accessories",
      "Smart Home",
      "Wearables",
    ],
    status: "Active",
  },
  {
    id: "moda-vestra",
    name: "Moda Vestra",
    tagline: "Wear Your Story",
    description:
      "Contemporary fashion that speaks to the modern soul — where tradition meets avant-garde design.",
    icon: "/assets/generated/moda-icon.dim_128x128.png",
    color: "#d500f9",
    glowColor: "rgba(213,0,249,0.3)",
    images: ["/assets/generated/moda-vestra-fashion.dim_600x400.png"],
    services: [
      "Designer Wear",
      "Ethnic Collections",
      "Western Fusion",
      "Accessories",
      "Custom Tailoring",
    ],
    status: "Active",
  },
  {
    id: "velocity-vogue",
    name: "Velocity Vogue",
    tagline: "Travel in Style",
    description:
      "Premium luggage and travel accessories engineered for the modern nomad who refuses to compromise.",
    icon: "/assets/generated/velocity-icon.dim_128x128.png",
    color: "#ffea00",
    glowColor: "rgba(255,234,0,0.3)",
    images: ["/assets/generated/velocity-vogue-luggage.dim_600x400.png"],
    services: [
      "Premium Luggage",
      "Travel Bags",
      "Accessories",
      "Corporate Gifting",
      "Custom Branding",
    ],
    status: "Active",
  },
  // ── Service Brands (shown last) ──
  {
    id: "assured-tours",
    name: "Assured Tours and Travels",
    tagline: "Journey Beyond Boundaries",
    description:
      "Premium travel experiences crafted for the discerning explorer. From spiritual pilgrimages to luxury getaways.",
    icon: "/assets/generated/tours-icon.dim_128x128.png",
    color: "#ff6b00",
    glowColor: "rgba(255,107,0,0.3)",
    images: [
      "/assets/generated/assured-tours-banner.dim_1200x400.png",
      "/assets/generated/assured-tours-flight.dim_600x400.png",
      "/assets/generated/assured-tours-train.dim_600x400.png",
    ],
    services: [
      "Flight Bookings",
      "Train Reservations",
      "Hotel Packages",
      "Pilgrimage Tours",
      "Passport Services",
    ],
    status: "Active",
  },
  {
    id: "luminia-captures",
    name: "Luminia Captures",
    tagline: "Moments Immortalized",
    description:
      "Professional photography and videography services that transform fleeting moments into timeless art.",
    icon: "/assets/generated/captures-icon.dim_128x128.png",
    color: "#ff2d78",
    glowColor: "rgba(255,45,120,0.3)",
    images: [
      "/assets/generated/luminia-captures-banner.dim_1200x400.png",
      "/assets/generated/luminia-captures-wedding.dim_600x400.png",
      "/assets/generated/luminia-captures-studio.dim_600x400.png",
    ],
    services: [
      "Wedding Photography",
      "Portrait Sessions",
      "Commercial Shoots",
      "Event Coverage",
      "Photo Editing",
    ],
    status: "Active",
  },
  {
    id: "luminia-techlabs",
    name: "Luminia TechLabs",
    tagline: "Engineering Tomorrow",
    description:
      "Cutting-edge technology solutions and digital transformation services for modern enterprises.",
    icon: "/assets/generated/techlabs-icon.dim_128x128.png",
    color: "#00e5ff",
    glowColor: "rgba(0,229,255,0.3)",
    images: [
      "/assets/generated/luminia-techlabs-banner.dim_1200x400.png",
      "/assets/generated/luminia-techlabs-dev.dim_600x400.png",
    ],
    services: [
      "Web Development",
      "App Development",
      "Government Services",
      "Voter & Aadhaar Update",
      "Digital Marketing",
    ],
    status: "Active",
  },
];

const SubsidiaryGrid: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [selectedSubsidiary, setSelectedSubsidiary] =
    useState<Subsidiary | null>(null);

  const handleEnquire = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    openWhatsApp(buildBookingMessage(name));
  };

  return (
    <section
      id="subsidiaries"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        padding: "clamp(4rem, 8vw, 8rem) 2rem",
        backgroundColor: "#050508",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
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
              color: "rgba(212,175,55,0.65)",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              marginBottom: "1rem",
              textShadow: "0 0 15px rgba(212,175,55,0.3)",
            }}
          >
            Our Portfolio
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 700,
              fontStyle: "italic",
              background:
                "linear-gradient(135deg, #D4AF37, #FFD700, #B8960C, #FFD700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              margin: 0,
            }}
          >
            The Luminia Universe
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {subsidiaries.map((sub, i) => (
            <div
              key={sub.id}
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: `1px solid ${sub.color}33`,
                padding: "2rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 0.08}s`,
                position: "relative",
                overflow: "hidden",
              }}
              onClick={() => setSelectedSubsidiary(sub)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setSelectedSubsidiary(sub);
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.backgroundColor = `${sub.color}0d`;
                el.style.borderColor = `${sub.color}88`;
                el.style.boxShadow = `0 0 30px ${sub.glowColor}`;
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.backgroundColor = "rgba(255,255,255,0.03)";
                el.style.borderColor = `${sub.color}33`;
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Icon */}
              <div style={{ marginBottom: "1.25rem" }}>
                <img
                  src={sub.icon}
                  alt={sub.name}
                  style={{
                    width: 48,
                    height: 48,
                    objectFit: "contain",
                    filter: `drop-shadow(0 0 8px ${sub.color}88)`,
                  }}
                />
              </div>

              {/* Name */}
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontWeight: 700,
                  color: sub.color,
                  textShadow: `0 0 15px ${sub.color}66`,
                  margin: "0 0 0.4rem 0",
                }}
              >
                {sub.name}
              </h3>

              {/* Tagline */}
              <p
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  margin: "0 0 1rem 0",
                }}
              >
                {sub.tagline}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.6,
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  margin: "0 0 1.5rem 0",
                }}
              >
                {sub.description}
              </p>

              {/* Status badge */}
              <div style={{ marginBottom: "1rem" }}>
                <span
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: sub.color,
                    border: `1px solid ${sub.color}55`,
                    padding: "0.2rem 0.6rem",
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                  }}
                >
                  {sub.status}
                </span>
              </div>

              {/* Buttons */}
              <div
                style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSubsidiary(sub);
                  }}
                  style={{
                    padding: "0.5rem 1.25rem",
                    background: "transparent",
                    border: `1px solid ${sub.color}`,
                    color: sub.color,
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = `${sub.color}22`;
                  }}
                  onMouseLeave={(e) => {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = "transparent";
                  }}
                >
                  Discover →
                </button>
                <button
                  type="button"
                  onClick={(e) => handleEnquire(e, sub.name)}
                  style={{
                    padding: "0.5rem 1.25rem",
                    background: `${sub.color}22`,
                    border: `1px solid ${sub.color}66`,
                    color: sub.color,
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = `${sub.color}44`;
                  }}
                  onMouseLeave={(e) => {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = `${sub.color}22`;
                  }}
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedSubsidiary && (
        <SubsidiaryDetails
          subsidiary={selectedSubsidiary}
          onClose={() => setSelectedSubsidiary(null)}
        />
      )}
    </section>
  );
};

export default SubsidiaryGrid;
