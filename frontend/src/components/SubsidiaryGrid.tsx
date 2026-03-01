import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SubsidiaryDetails from "./SubsidiaryDetails";

export interface Subsidiary {
  id: string;
  name: string;
  tagline: string;
  description: string;
  domain: string;
  icon: string;
  images: string[];
}

const subsidiaries: Subsidiary[] = [
  {
    id: "luminia-gadgets",
    name: "Luminia Gadgets",
    tagline: "Precision Timepieces & Premium Audio",
    description:
      "Curated collection of luxury watches, audiophile-grade headphones, and cutting-edge earbuds — where technology meets elegance.",
    domain: "gadgets.luminia.group",
    icon: "/assets/generated/gadgets-icon.dim_128x128.png",
    images: [
      "/assets/generated/luminia-gadgets-watch.dim_600x400.png",
      "/assets/generated/luminia-gadgets-headphones.dim_600x400.png",
      "/assets/generated/luminia-gadgets-earbuds.dim_600x400.png",
    ],
  },
  {
    id: "moda-vestra",
    name: "Moda Vestra",
    tagline: "Couture Fashion & Timeless Style",
    description:
      "Exclusive fashion house delivering bespoke couture, ready-to-wear collections, and timeless wardrobe essentials for the discerning individual.",
    domain: "modavestra.luminia.group",
    icon: "/assets/generated/moda-icon.dim_128x128.png",
    images: ["/assets/generated/moda-vestra-fashion.dim_600x400.png"],
  },
  {
    id: "velocity-vogue",
    name: "Velocity Vogue",
    tagline: "Luxury Travel Companions",
    description:
      "Premium luggage and travel accessories crafted for the modern explorer — combining durability, elegance, and effortless mobility.",
    domain: "velocityvogue.luminia.group",
    icon: "/assets/generated/velocity-icon.dim_128x128.png",
    images: ["/assets/generated/velocity-vogue-luggage.dim_600x400.png"],
  },
  {
    id: "luminia-captures",
    name: "Luminia Captures",
    tagline: "Moments Transformed into Art",
    description:
      "World-class wedding photography and professional photoshoots — capturing the essence of your most cherished moments with cinematic precision.",
    domain: "captures.luminia.group",
    icon: "/assets/generated/captures-icon.dim_128x128.png",
    images: [
      "/assets/generated/luminia-captures-wedding.dim_600x400.png",
      "/assets/generated/luminia-captures-studio.dim_600x400.png",
    ],
  },
  {
    id: "assured-tours",
    name: "Assured Tours & Travels",
    tagline: "Curated Journeys & Seamless Bookings",
    description:
      "End-to-end travel solutions — from bespoke itineraries and flight bookings to train reservations and luxury hotel arrangements worldwide.",
    domain: "tours.luminia.group",
    icon: "/assets/generated/tours-icon.dim_128x128.png",
    images: [
      "/assets/generated/assured-tours-flight.dim_600x400.png",
      "/assets/generated/assured-tours-train.dim_600x400.png",
    ],
  },
  {
    id: "luminia-techlabs",
    name: "Luminia TechLabs",
    tagline: "Digital Innovation & Business Solutions",
    description:
      "Full-spectrum technology partner offering web development, mobile applications, UI/UX design, and comprehensive digital transformation services.",
    domain: "techlabs.luminia.group",
    icon: "/assets/generated/techlabs-icon.dim_128x128.png",
    images: ["/assets/generated/luminia-techlabs-dev.dim_600x400.png"],
  },
  {
    id: "gst-service",
    name: "GST Service",
    tagline: "Expert Tax & Compliance Advisory",
    description:
      "Comprehensive GST registration, filing, compliance, and advisory services — simplifying India's tax landscape for businesses of all sizes.",
    domain: "gst.luminia.group",
    icon: "/assets/generated/gst-icon.dim_128x128.png",
    images: ["/assets/generated/gst-service-tax.dim_600x400.png"],
  },
];

export default function SubsidiaryGrid() {
  const [selectedSubsidiary, setSelectedSubsidiary] = useState<Subsidiary | null>(null);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="subsidiaries"
      className="py-24 px-4 md:px-8"
      style={{ background: "linear-gradient(180deg, #080808 0%, #0d0d0d 50%, #080808 100%)" }}
    >
      <div
        ref={ref}
        className="max-w-7xl mx-auto"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="uppercase tracking-[0.4em] text-xs mb-4"
            style={{
              color: "rgba(212,175,55,0.6)",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Our Portfolio
          </p>
          <h2
            className="font-serif mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "rgba(212,175,55,1)",
              textShadow: "0 0 40px rgba(212,175,55,0.3)",
              letterSpacing: "0.05em",
            }}
          >
            The Luminia Empire
          </h2>
          <div
            className="mx-auto h-px w-32"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.8), transparent)",
            }}
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subsidiaries.map((sub, index) => (
            <SubsidiaryCard
              key={sub.id}
              subsidiary={sub}
              index={index}
              onDiscover={() => setSelectedSubsidiary(sub)}
            />
          ))}
        </div>
      </div>

      {/* Launching Soon Modal */}
      {selectedSubsidiary && (
        <SubsidiaryDetails
          subsidiary={selectedSubsidiary}
          onClose={() => setSelectedSubsidiary(null)}
        />
      )}
    </section>
  );
}

interface SubsidiaryCardProps {
  subsidiary: Subsidiary;
  index: number;
  onDiscover: () => void;
}

function SubsidiaryCard({ subsidiary, index, onDiscover }: SubsidiaryCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="group relative flex flex-col p-6 cursor-pointer"
      style={{
        background: "linear-gradient(135deg, #0f0f0f 0%, #111111 100%)",
        border: "1px solid rgba(212,175,55,0.2)",
        transition: "all 0.4s ease",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 80}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = "1px solid rgba(212,175,55,0.7)";
        e.currentTarget.style.boxShadow =
          "0 0 30px rgba(212,175,55,0.12), inset 0 0 30px rgba(212,175,55,0.04)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "1px solid rgba(212,175,55,0.2)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = isVisible ? "translateY(0)" : "translateY(24px)";
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full"
        style={{
          background: "linear-gradient(90deg, rgba(212,175,55,0.9), transparent)",
          transition: "width 0.4s ease",
        }}
      />

      {/* Number */}
      <span
        className="absolute top-4 right-4 font-serif text-xs"
        style={{
          color: "rgba(212,175,55,0.25)",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div
        className="w-14 h-14 mb-5 flex items-center justify-center"
        style={{
          border: "1px solid rgba(212,175,55,0.25)",
          background: "rgba(212,175,55,0.04)",
        }}
      >
        <img
          src={subsidiary.icon}
          alt={subsidiary.name}
          className="w-8 h-8 object-contain"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(75%) sepia(50%) saturate(400%) hue-rotate(5deg)",
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* Name */}
      <h3
        className="font-serif mb-2 leading-tight"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "1.2rem",
          color: "rgba(212,175,55,0.95)",
          letterSpacing: "0.03em",
        }}
      >
        {subsidiary.name}
      </h3>

      {/* Tagline */}
      <p
        className="text-xs mb-4 leading-relaxed flex-1"
        style={{ color: "rgba(212,175,55,0.5)", letterSpacing: "0.05em" }}
      >
        {subsidiary.tagline}
      </p>

      {/* Divider */}
      <div
        className="mb-4 h-px"
        style={{
          background: "linear-gradient(90deg, rgba(212,175,55,0.3), transparent)",
        }}
      />

      {/* Discover button */}
      <button
        onClick={onDiscover}
        className="flex items-center gap-2 text-xs uppercase tracking-widest group/btn"
        style={{
          color: "rgba(212,175,55,0.8)",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          letterSpacing: "0.2em",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "rgba(212,175,55,1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "rgba(212,175,55,0.8)";
        }}
      >
        Discover
        <span
          className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1"
          style={{ fontSize: "1rem" }}
        >
          →
        </span>
      </button>
    </div>
  );
}
