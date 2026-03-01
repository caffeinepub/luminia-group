import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Empire', href: '#empire' },
  { label: 'Connect With Us', href: '#contact-section' },
  { label: 'Velocity Vogue', href: '#velocity-vogue' },
  { label: 'Luminia Captures', href: '#luminia-captures' },
  { label: 'Moda Vestra', href: '#moda-vestra' },
  { label: 'Assured Tours', href: '#assured-tours' },
  { label: 'TechLabs', href: '#luminia-techlabs' },
  { label: 'GST Services', href: '#gst-services' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'nav-blur' : 'nav-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-3 group"
              aria-label="Luminia Group Home"
            >
              <img
                src="/assets/image.png"
                alt="Luminia Group Conglomerate"
                className="h-12 lg:h-14 w-auto object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const sibling = target.nextElementSibling as HTMLElement;
                  if (sibling) sibling.style.display = 'block';
                }}
              />
              <span
                className="hidden font-display text-xl lg:text-2xl font-semibold gradient-gold-text tracking-widest"
                style={{ display: 'none' }}
              >
                LUMINIA GROUP
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.slice(0, 3).map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-xs font-body font-medium tracking-widest uppercase text-ivory-dim hover:text-gold transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-3/4" />
                </button>
              ))}
              <div className="w-px h-4 bg-gold-dim mx-2 opacity-40" />
              <span className="pre-launch-badge text-xs font-body font-medium tracking-widest uppercase px-3 py-1 rounded-sm">
                Exclusive Pre-Launch
              </span>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gold hover:text-gold-light transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 modal-overlay"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-charcoal border-l border-gold-dim flex flex-col transition-transform duration-500 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ borderColor: 'oklch(0.55 0.09 85 / 0.3)' }}
        >
          <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'oklch(0.55 0.09 85 / 0.2)' }}>
            <img
              src="/assets/image.png"
              alt="Luminia Group Conglomerate"
              className="h-10 w-auto object-contain"
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="text-ivory-dim hover:text-gold transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-3 text-sm font-body font-medium tracking-widest uppercase text-ivory-dim hover:text-gold hover:bg-gold/5 transition-all duration-200 rounded-sm border-b"
                style={{ borderColor: 'oklch(0.55 0.09 85 / 0.1)' }}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="p-6 border-t" style={{ borderColor: 'oklch(0.55 0.09 85 / 0.2)' }}>
            <span className="pre-launch-badge text-xs font-body font-medium tracking-widest uppercase px-3 py-1.5 rounded-sm block text-center">
              Exclusive Pre-Launch Phase
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
