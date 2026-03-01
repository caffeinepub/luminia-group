import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(8,8,8,0.97)"
          : "linear-gradient(180deg, rgba(8,8,8,0.9) 0%, transparent 100%)",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,0.15)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(-100%)",
        transition: "opacity 0.6s ease, transform 0.6s ease, background 0.4s ease, border 0.4s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div
          className="flex items-center"
          style={{
            background: "#080808",
            padding: "4px 12px",
            border: "1px solid rgba(212,175,55,0.15)",
          }}
        >
          <img
            src="/assets/image-3.png"
            alt="Luminia Group Conglomerate"
            className="h-10 md:h-12 w-auto object-contain"
            style={{ filter: "drop-shadow(0 0 8px rgba(212,175,55,0.3))" }}
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Home", id: "hero" },
            { label: "Manifesto", id: "manifesto" },
            { label: "Portfolio", id: "subsidiaries" },
            { label: "Contact", id: "footer" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-xs uppercase tracking-widest transition-all duration-300"
              style={{
                color: "rgba(212,175,55,0.6)",
                background: "none",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.2em",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(212,175,55,1)";
                e.currentTarget.style.textShadow = "0 0 12px rgba(212,175,55,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(212,175,55,0.6)";
                e.currentTarget.style.textShadow = "none";
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px w-6 transition-all duration-300"
              style={{
                background: "rgba(212,175,55,0.8)",
                transform:
                  menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(4px, 4px)"
                      : i === 2
                      ? "rotate(-45deg) translate(4px, -4px)"
                      : "scaleX(0)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: menuOpen ? "300px" : "0",
          background: "rgba(8,8,8,0.98)",
          borderTop: menuOpen ? "1px solid rgba(212,175,55,0.1)" : "none",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {/* Mobile logo */}
          <div className="flex justify-center mb-2">
            <div style={{ background: "#080808", padding: "4px 12px", border: "1px solid rgba(212,175,55,0.15)" }}>
              <img
                src="/assets/image-3.png"
                alt="Luminia Group"
                className="h-10 w-auto object-contain"
                style={{ filter: "drop-shadow(0 0 8px rgba(212,175,55,0.3))" }}
              />
            </div>
          </div>
          {[
            { label: "Home", id: "hero" },
            { label: "Manifesto", id: "manifesto" },
            { label: "Portfolio", id: "subsidiaries" },
            { label: "Contact", id: "footer" },
          ].map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-xs uppercase tracking-widest text-left py-2 transition-all duration-300"
              style={{
                color: "rgba(212,175,55,0.7)",
                background: "none",
                border: "none",
                borderBottom: "1px solid rgba(212,175,55,0.08)",
                cursor: "pointer",
                letterSpacing: "0.2em",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(-16px)",
                transition: `opacity 0.3s ease ${i * 60}ms, transform 0.3s ease ${i * 60}ms`,
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
