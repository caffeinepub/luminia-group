import { useScrollAnimation } from "../hooks/useScrollAnimation";

const services = [
  { icon: "📝", label: "GST Registration" },
  { icon: "📊", label: "GST Filing" },
  { icon: "💼", label: "Tax Consulting" },
];

export default function GSTServicesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="gst-services"
      className="relative overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Banner image */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <img
          src="/assets/generated/gst-services-banner.dim_1200x400.png"
          alt="GST Services"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.4)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 60%, rgba(10,10,10,1) 100%)",
          }}
        />
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
            Luminia Group · Financial Services
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
            GST Services
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
        className="max-w-4xl mx-auto px-4 md:px-8 py-16"
        style={{
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 1.1s ease, transform 1.1s ease",
        }}
      >
        {/* Brief intro */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p
            className="leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1.05rem, 2.2vw, 1.25rem)",
              color: "rgba(212,175,55,0.65)",
              fontStyle: "italic",
              letterSpacing: "0.03em",
            }}
          >
            Professional GST compliance and advisory services to keep your business on the right side of every regulation.
          </p>
        </div>

        {/* Services grid — 3 cards, label only */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <div
              key={svc.label}
              className="p-7 flex flex-col items-center text-center"
              style={{
                border: "1px solid rgba(212,175,55,0.12)",
                background: "rgba(212,175,55,0.02)",
                transition: "all 0.3s ease",
                transitionDelay: `${i * 80}ms`,
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
              <span className="text-3xl mb-4">{svc.icon}</span>
              <h4
                className="font-serif"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.1rem",
                  color: "rgba(212,175,55,0.9)",
                  letterSpacing: "0.05em",
                  fontWeight: 400,
                }}
              >
                {svc.label}
              </h4>
            </div>
          ))}
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
