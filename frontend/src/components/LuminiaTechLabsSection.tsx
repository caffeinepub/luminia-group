import { useScrollAnimation } from "../hooks/useScrollAnimation";

const services = [
  { icon: "🌐", label: "Web Development", desc: "Bespoke websites and web applications built for performance" },
  { icon: "📱", label: "Mobile Applications", desc: "Native and cross-platform iOS & Android solutions" },
  { icon: "🎨", label: "UI/UX Design", desc: "Intuitive, beautiful interfaces that delight users" },
  { icon: "⛓", label: "Blockchain Solutions", desc: "Smart contracts, DeFi, and Web3 integrations" },
  { icon: "🤖", label: "AI & Automation", desc: "Machine learning models and intelligent process automation" },
  { icon: "☁️", label: "Cloud & DevOps", desc: "Scalable infrastructure, CI/CD pipelines, and cloud migration" },
];

export default function LuminiaTechLabsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="luminia-techlabs"
      className="relative overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Banner image */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <img
          src="/assets/generated/luminia-techlabs-banner.dim_1200x400.png"
          alt="Luminia TechLabs"
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
            Luminia Group · Technology Division
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
            Luminia TechLabs
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
            In the age of digital transformation, technology is not a tool — it is the architecture
            of ambition. Luminia TechLabs engineers the digital future for businesses that refuse to
            be ordinary, delivering cutting-edge solutions from web and mobile to blockchain and AI.
          </p>
        </div>

        {/* Dev image + tech stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 items-center">
          <div
            className="relative overflow-hidden group"
            style={{ border: "1px solid rgba(212,175,55,0.15)" }}
          >
            <img
              src="/assets/generated/luminia-techlabs-dev.dim_600x400.png"
              alt="Luminia TechLabs Development"
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ filter: "brightness(0.5) saturate(0.7)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.9) 100%)",
              }}
            />
          </div>

          <div className="flex flex-col gap-4">
            <p
              className="uppercase tracking-[0.4em] text-xs mb-2"
              style={{
                color: "rgba(212,175,55,0.45)",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              Why TechLabs
            </p>
            {[
              "End-to-end digital transformation partner",
              "Agile delivery with transparent communication",
              "Post-launch support and maintenance",
              "Scalable architecture for future growth",
              "Competitive pricing with enterprise quality",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="mt-1.5 w-1 h-1 flex-shrink-0"
                  style={{ background: "rgba(212,175,55,0.7)" }}
                />
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(212,175,55,0.6)",
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    letterSpacing: "0.03em",
                  }}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
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
                className="p-5"
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
