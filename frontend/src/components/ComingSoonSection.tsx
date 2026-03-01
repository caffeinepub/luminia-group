import { useScrollAnimation } from "../hooks/useScrollAnimation";

const comingSoonBrands = [
  {
    id: "luminia-gadgets",
    name: "Luminia Gadgets",
    tagline: "Precision Timepieces & Premium Audio",
    desc: "Luxury watches, audiophile headphones, and cutting-edge earbuds — where technology meets elegance.",
    icon: "/assets/generated/gadgets-icon.dim_128x128.png",
  },
  {
    id: "moda-vestra",
    name: "Moda Vestra",
    tagline: "Couture Fashion & Timeless Style",
    desc: "Exclusive fashion house delivering bespoke couture and timeless wardrobe essentials.",
    icon: "/assets/generated/moda-icon.dim_128x128.png",
  },
  {
    id: "velocity-vogue",
    name: "Velocity Vogue",
    tagline: "Luxury Travel Companions",
    desc: "Premium luggage and travel accessories crafted for the modern explorer.",
    icon: "/assets/generated/velocity-icon.dim_128x128.png",
  },
];

export default function ComingSoonSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="coming-soon"
      className="relative py-24 px-4 md:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #080808 0%, #0c0c0c 50%, #080808 100%)",
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          {/* Top rule */}
          <div
            className="mx-auto mb-8 h-px w-32"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)",
            }}
          />

          <p
            className="uppercase tracking-[0.5em] text-xs mb-4"
            style={{
              color: "rgba(212,175,55,0.5)",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            The Horizon Awaits
          </p>

          <h2
            className="font-serif mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              color: "rgba(212,175,55,0.95)",
              textShadow: "0 0 50px rgba(212,175,55,0.25)",
              letterSpacing: "0.06em",
              fontWeight: 300,
            }}
          >
            Coming Soon
          </h2>

          <p
            className="text-sm italic max-w-xl mx-auto"
            style={{
              color: "rgba(212,175,55,0.45)",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              letterSpacing: "0.05em",
            }}
          >
            The next chapter of the Luminia empire is being written. These ventures are in their
            final stages of preparation — launching soon to redefine their respective industries.
          </p>

          {/* Bottom rule */}
          <div
            className="mx-auto mt-8 h-px w-32"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)",
            }}
          />
        </div>

        {/* Brand cards */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{
            opacity: gridVisible ? 1 : 0,
            transform: gridVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 1.1s ease, transform 1.1s ease",
          }}
        >
          {comingSoonBrands.map((brand, index) => (
            <ComingSoonCard key={brand.id} brand={brand} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <div
          className="text-center mt-16"
          style={{
            opacity: gridVisible ? 1 : 0,
            transition: "opacity 1.4s ease 0.3s",
          }}
        >
          <p
            className="text-xs uppercase tracking-[0.4em]"
            style={{
              color: "rgba(212,175,55,0.25)",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              letterSpacing: "0.35em",
            }}
          >
            Stay tuned · The empire expands
          </p>
        </div>
      </div>
    </section>
  );
}

interface ComingSoonCardProps {
  brand: {
    id: string;
    name: string;
    tagline: string;
    desc: string;
    icon: string;
  };
  index: number;
}

function ComingSoonCard({ brand, index }: ComingSoonCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="relative flex flex-col p-7 group"
      style={{
        background: "linear-gradient(135deg, #0e0e0e 0%, #111111 100%)",
        border: "1px solid rgba(212,175,55,0.15)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.9s ease ${index * 100}ms, transform 0.9s ease ${index * 100}ms, border 0.3s ease, box-shadow 0.3s ease`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = "1px solid rgba(212,175,55,0.45)";
        e.currentTarget.style.boxShadow = "0 0 30px rgba(212,175,55,0.08), inset 0 0 30px rgba(212,175,55,0.03)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "1px solid rgba(212,175,55,0.15)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full"
        style={{
          background: "linear-gradient(90deg, rgba(212,175,55,0.7), transparent)",
          transition: "width 0.5s ease",
        }}
      />

      {/* Launching Soon badge */}
      <div className="absolute top-4 right-4">
        <span
          className="uppercase text-xs tracking-widest px-2 py-1"
          style={{
            color: "rgba(212,175,55,0.5)",
            border: "1px solid rgba(212,175,55,0.2)",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            letterSpacing: "0.2em",
            fontSize: "0.6rem",
            background: "rgba(212,175,55,0.04)",
          }}
        >
          Launching Soon
        </span>
      </div>

      {/* Icon */}
      <div
        className="w-14 h-14 mb-5 flex items-center justify-center"
        style={{
          border: "1px solid rgba(212,175,55,0.2)",
          background: "rgba(212,175,55,0.03)",
        }}
      >
        <img
          src={brand.icon}
          alt={brand.name}
          className="w-8 h-8 object-contain"
          style={{
            filter: "brightness(0) saturate(100%) invert(75%) sepia(50%) saturate(400%) hue-rotate(5deg) opacity(0.6)",
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* Name */}
      <h3
        className="font-serif mb-1"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "1.25rem",
          color: "rgba(212,175,55,0.8)",
          letterSpacing: "0.04em",
          fontWeight: 400,
        }}
      >
        {brand.name}
      </h3>

      {/* Tagline */}
      <p
        className="text-xs mb-3"
        style={{
          color: "rgba(212,175,55,0.4)",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          letterSpacing: "0.06em",
          fontStyle: "italic",
        }}
      >
        {brand.tagline}
      </p>

      {/* Divider */}
      <div
        className="mb-4 h-px"
        style={{ background: "linear-gradient(90deg, rgba(212,175,55,0.15), transparent)" }}
      />

      {/* Description */}
      <p
        className="text-xs leading-relaxed flex-1"
        style={{
          color: "rgba(212,175,55,0.35)",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          letterSpacing: "0.03em",
        }}
      >
        {brand.desc}
      </p>

      {/* Hourglass indicator */}
      <div className="mt-5 flex items-center gap-2">
        <div
          className="h-px flex-1"
          style={{ background: "rgba(212,175,55,0.1)" }}
        />
        <span
          className="text-xs uppercase tracking-widest"
          style={{
            color: "rgba(212,175,55,0.3)",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            letterSpacing: "0.25em",
            fontSize: "0.6rem",
          }}
        >
          ⧗ In Preparation
        </span>
        <div
          className="h-px flex-1"
          style={{ background: "rgba(212,175,55,0.1)" }}
        />
      </div>
    </div>
  );
}
