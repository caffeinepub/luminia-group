import { useScrollAnimation } from "../hooks/useScrollAnimation";

const services = [
  { icon: "✈", label: "Flight Bookings", desc: "Domestic & international air travel with best-fare guarantees" },
  { icon: "🚂", label: "Train Reservations", desc: "Seamless IRCTC bookings and tatkal reservations" },
  { icon: "🏨", label: "Hotel Arrangements", desc: "Luxury to budget stays curated for every traveller" },
  { icon: "🗺", label: "Tour Packages", desc: "Bespoke itineraries crafted for groups and individuals" },
  { icon: "🚌", label: "Bus & Cab Services", desc: "Ground transport solutions across India and abroad" },
  { icon: "📋", label: "Visa Assistance", desc: "End-to-end documentation and visa processing support" },
];

export default function AssuredToursSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="assured-tours"
      className="relative overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Banner image */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <img
          src="/assets/generated/assured-tours-banner.dim_1200x400.png"
          alt="Assured Tours & Travels"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.45)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.6) 60%, rgba(8,8,8,1) 100%)",
          }}
        />
        {/* Overlay heading */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          <p
            className="uppercase tracking-[0.5em] text-xs mb-3"
            style={{
              color: "rgba(212,175,55,0.6)",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Luminia Group · Travel Division
          </p>
          <h2
            className="font-serif"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              color: "rgba(212,175,55,1)",
              textShadow: "0 0 60px rgba(212,175,55,0.5)",
              letterSpacing: "0.06em",
              fontWeight: 300,
            }}
          >
            Assured Tours & Travels
          </h2>
          <div
            className="mt-4 h-px w-32"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.8), transparent)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div
        ref={contentRef as React.RefObject<HTMLDivElement>}
        className="max-w-7xl mx-auto px-4 md:px-8 py-16"
        style={{
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 1.1s ease, transform 1.1s ease",
        }}
      >
        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p
            className="leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1.05rem, 2.2vw, 1.3rem)",
              color: "rgba(212,175,55,0.65)",
              fontStyle: "italic",
              letterSpacing: "0.03em",
            }}
          >
            From the mountains of Himachal to the beaches of Goa, from the temples of Varanasi to the
            skylines of Dubai — Assured Tours & Travels crafts journeys that transcend the ordinary.
            Every booking is a promise of seamless, luxurious, and unforgettable travel.
          </p>
        </div>

        {/* Image pair */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          {[
            { src: "/assets/generated/assured-tours-flight.dim_600x400.png", label: "Air Travel" },
            { src: "/assets/generated/assured-tours-train.dim_600x400.png", label: "Rail Journeys" },
          ].map((img) => (
            <div
              key={img.label}
              className="relative overflow-hidden group"
              style={{ border: "1px solid rgba(212,175,55,0.15)" }}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: "brightness(0.6) saturate(0.8)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 50%, rgba(8,8,8,0.85) 100%)",
                }}
              />
              <span
                className="absolute bottom-4 left-4 uppercase text-xs tracking-widest"
                style={{
                  color: "rgba(212,175,55,0.8)",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  letterSpacing: "0.3em",
                }}
              >
                {img.label}
              </span>
            </div>
          ))}
        </div>

        {/* Services grid */}
        <div>
          <p
            className="text-center uppercase tracking-[0.4em] text-xs mb-8"
            style={{
              color: "rgba(212,175,55,0.45)",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Our Services
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc, i) => (
              <div
                key={svc.label}
                className="p-5 group"
                style={{
                  border: "1px solid rgba(212,175,55,0.12)",
                  background: "rgba(212,175,55,0.02)",
                  transition: "all 0.3s ease",
                  transitionDelay: `${i * 60}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(212,175,55,0.4)";
                  e.currentTarget.style.background = "rgba(212,175,55,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(212,175,55,0.12)";
                  e.currentTarget.style.background = "rgba(212,175,55,0.02)";
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">{svc.icon}</span>
                  <div>
                    <h4
                      className="font-serif mb-1"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "1.05rem",
                        color: "rgba(212,175,55,0.9)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {svc.label}
                    </h4>
                    <p
                      className="text-xs leading-relaxed"
                      style={{
                        color: "rgba(212,175,55,0.45)",
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                      }}
                    >
                      {svc.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div
        className="h-px mx-8"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)" }}
      />
    </section>
  );
}
