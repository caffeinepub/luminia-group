import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Tours & Travels', href: '#assured-tours' },
  { label: 'Captures', href: '#luminia-captures' },
  { label: 'TechLabs', href: '#luminia-techlabs' },
  { label: 'Coming Soon', href: '#coming-soon' },
  { label: 'GST Services', href: '#gst-services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'oklch(0.08 0.01 60 / 0.97)'
          : 'oklch(0.08 0.01 60 / 0.7)',
        borderBottom: scrolled ? '1px solid oklch(0.78 0.12 75 / 0.3)' : 'none',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer"
          style={{ background: 'none', border: 'none', padding: 0 }}
        >
          <img
            src="/assets/generated/luminia-logo-correct.dim_400x120.png"
            alt="Luminia Group"
            className="h-8 md:h-10 object-contain"
            style={{ filter: 'drop-shadow(0 0 8px oklch(0.78 0.12 75 / 0.4))' }}
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollTo(link.href)}
              className="font-serif text-sm tracking-widest uppercase transition-colors duration-300 cursor-pointer"
              style={{
                color: 'oklch(0.78 0.12 75 / 0.7)',
                background: 'none',
                border: 'none',
                padding: '4px 0',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.78 0.12 75)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.78 0.12 75 / 0.7)';
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="lg:hidden cursor-pointer"
          style={{ color: 'oklch(0.78 0.12 75)', background: 'none', border: 'none' }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: 'oklch(0.08 0.01 60 / 0.98)' }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollTo(link.href)}
              className="font-serif text-sm tracking-widest uppercase text-left cursor-pointer py-2"
              style={{
                color: 'oklch(0.78 0.12 75 / 0.8)',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid oklch(0.78 0.12 75 / 0.15)',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
