export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "luminia-group"
  );

  return (
    <footer
      id="footer"
      className="py-16 px-4 md:px-8"
      style={{
        background: "linear-gradient(180deg, #080808 0%, #050505 100%)",
        borderTop: "1px solid rgba(212,175,55,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & tagline */}
          <div className="flex flex-col items-start gap-4">
            <div
              style={{
                background: "#080808",
                padding: "8px 16px",
                border: "1px solid rgba(212,175,55,0.2)",
                display: "inline-block",
              }}
            >
              <img
                src="/assets/image-3.png"
                alt="Luminia Group Conglomerate"
                className="h-16 w-auto object-contain"
                style={{ filter: "drop-shadow(0 0 12px rgba(212,175,55,0.4))" }}
              />
            </div>
            <p
              className="text-xs italic leading-relaxed"
              style={{
                color: "rgba(212,175,55,0.45)",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                letterSpacing: "0.05em",
                maxWidth: "220px",
              }}
            >
              A legacy of excellence across industries — building tomorrow's world today.
            </p>
          </div>

          {/* Portfolio */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest mb-5"
              style={{ color: "rgba(212,175,55,0.5)", letterSpacing: "0.3em" }}
            >
              Our Portfolio
            </h4>
            <ul className="space-y-2">
              {[
                "Luminia Gadgets",
                "Moda Vestra",
                "Velocity Vogue",
                "Luminia Captures",
                "Assured Tours & Travels",
                "Luminia TechLabs",
                "GST Service",
              ].map((brand) => (
                <li
                  key={brand}
                  className="text-xs"
                  style={{
                    color: "rgba(212,175,55,0.4)",
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest mb-5"
              style={{ color: "rgba(212,175,55,0.5)", letterSpacing: "0.3em" }}
            >
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:luminiagadgets@gmail.com"
                  className="text-xs transition-all duration-200"
                  style={{ color: "rgba(212,175,55,0.45)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(212,175,55,0.9)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(212,175,55,0.45)")}
                >
                  luminiagadgets@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917439065260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs transition-all duration-200"
                  style={{ color: "rgba(212,175,55,0.45)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(212,175,55,0.9)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(212,175,55,0.45)")}
                >
                  WhatsApp: +91 74390 65260
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/luminiagroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs transition-all duration-200"
                  style={{ color: "rgba(212,175,55,0.45)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(212,175,55,0.9)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(212,175,55,0.45)")}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mb-8 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ color: "rgba(212,175,55,0.25)", letterSpacing: "0.1em" }}
          >
            © {year} Luminia Group Conglomerate. All rights reserved.
          </p>
          <p
            className="text-xs flex items-center gap-1"
            style={{ color: "rgba(212,175,55,0.25)", letterSpacing: "0.05em" }}
          >
            Built with{" "}
            <span style={{ color: "rgba(212,175,55,0.6)" }}>♛</span>{" "}
            using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(212,175,55,0.5)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(212,175,55,0.9)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(212,175,55,0.5)")}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
