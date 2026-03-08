import type React from "react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#manifesto" },
  { label: "Our Empire", href: "#subsidiaries" },
  { label: "Gadgets", href: "#luminia-gadgets" },
  { label: "Fashion", href: "#moda-vestra" },
  { label: "Travel Gear", href: "#velocity-vogue" },
  { label: "Tours", href: "#assured-tours" },
  { label: "Captures", href: "#luminia-captures" },
  { label: "TechLabs", href: "#luminia-techlabs" },
  { label: "Payment", href: "#payment" },
];

const GOLD = "rgba(212,175,55,0.85)";
const GOLD_GLOW = "rgba(212,175,55,0.4)";
const GOLD_DIM = "rgba(212,175,55,0.5)";

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(5,5,10,0.97)" : "rgba(5,5,10,0.80)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(212,175,55,0.18)"
          : "1px solid rgba(212,175,55,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "0.6rem 2rem" : "0.9rem 2rem",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src="/assets/luminia-logo.jpeg"
            alt="Luminia"
            style={{
              height: scrolled ? 32 : 40,
              transition: "height 0.3s ease",
              objectFit: "contain",
            }}
          />
        </a>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            gap: "1.6rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: GOLD_DIM,
                textDecoration: "none",
                fontSize: "0.78rem",
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                transition: "all 0.2s ease",
                textShadow: `0 0 8px ${GOLD_GLOW}`,
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = GOLD;
                (e.target as HTMLAnchorElement).style.textShadow =
                  "0 0 18px rgba(212,175,55,0.7)";
                (e.target as HTMLAnchorElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = GOLD_DIM;
                (e.target as HTMLAnchorElement).style.textShadow =
                  "0 0 8px rgba(212,175,55,0.4)";
                (e.target as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            alignSelf: "center",
          }}
          className="flex md:hidden"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 24,
                height: 2,
                backgroundColor: GOLD,
                transition: "all 0.3s ease",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px, 5px)"
                    : menuOpen && i === 1
                      ? "scaleX(0)"
                      : menuOpen && i === 2
                        ? "rotate(-45deg) translate(5px, -5px)"
                        : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "rgba(5,5,10,0.98)",
            borderTop: "1px solid rgba(212,175,55,0.12)",
            padding: "1.25rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.1rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: GOLD_DIM,
                textDecoration: "none",
                fontSize: "1rem",
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
