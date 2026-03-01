import { SiInstagram, SiWhatsapp } from 'react-icons/si';
import { Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'luminia-group');

  return (
    <footer id="contact-section" className="relative bg-obsidian border-t" style={{ borderColor: 'oklch(0.55 0.09 85 / 0.2)' }}>
      {/* Top gold line */}
      <div className="divider-gold" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <img
                src="/assets/image.png"
                alt="Luminia Group Conglomerate"
                className="h-16 lg:h-20 w-auto object-contain mb-4"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const sibling = target.nextElementSibling as HTMLElement;
                  if (sibling) sibling.style.display = 'block';
                }}
              />
              <span
                className="font-display text-2xl font-semibold gradient-gold-text tracking-widest hidden"
              >
                LUMINIA GROUP
              </span>
            </div>
            <p className="font-display text-lg italic text-gold-light mb-3">
              "Defining the Gold Standard."
            </p>
            <div className="flex items-center gap-2 text-ivory-dim text-sm font-body">
              <MapPin size={14} className="text-gold flex-shrink-0" />
              <span>West Bengal, India | Global Vision</span>
            </div>
          </div>

          {/* Portfolio Column */}
          <div>
            <h3 className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Our Portfolio
            </h3>
            <ul className="space-y-3">
              {[
                'Luminia Gadgets',
                'Velocity Vogue',
                'Luminia Captures',
                'Moda Vestra',
                'Assured Tours and Travels',
                'Luminia TechLabs',
                'GST Services',
              ].map((brand) => (
                <li key={brand}>
                  <span className="font-body text-sm text-ivory-dim hover:text-gold transition-colors duration-200 cursor-default flex items-center gap-2">
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: 'oklch(0.72 0.12 85 / 0.6)' }}
                    />
                    {brand}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div>
            <h3 className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Connect
            </h3>

            {/* Contact links — uniform flex column with consistent gap and icon sizing */}
            <div className="flex flex-col gap-3 mb-8">
              {/* Email */}
              <a
                href="mailto:luminiagadgets@gmail.com"
                className="flex items-center gap-3 text-ivory-dim text-sm font-body hover:text-gold transition-colors duration-200 group"
              >
                <span className="flex items-center justify-center w-5 h-5 flex-shrink-0">
                  <Mail size={15} className="text-gold group-hover:text-gold-light transition-colors duration-200" />
                </span>
                <span>luminiagadgets@gmail.com</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917439065260"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ivory-dim text-sm font-body hover:text-gold transition-colors duration-200 group"
              >
                <span className="flex items-center justify-center w-5 h-5 flex-shrink-0">
                  <SiWhatsapp size={15} className="text-gold group-hover:text-gold-light transition-colors duration-200" />
                </span>
                <span>+91 7439065260</span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/luminiagroup"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ivory-dim text-sm font-body hover:text-gold transition-colors duration-200 group"
              >
                <span className="flex items-center justify-center w-5 h-5 flex-shrink-0">
                  <SiInstagram size={15} className="text-gold group-hover:text-gold-light transition-colors duration-200" />
                </span>
                <span>@luminiagroup</span>
              </a>
            </div>

            {/* Pre-launch Notice */}
            <div
              className="pre-launch-badge px-4 py-3 rounded-sm"
            >
              <p className="font-body text-xs tracking-[0.2em] uppercase font-medium mb-1">
                Pre-Launch — Coming Soon
              </p>
              <p className="font-body text-xs text-ivory-dim">
                We're architecting something extraordinary.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'oklch(0.55 0.09 85 / 0.15)' }}
        >
          <p className="font-body text-xs text-ivory-dim tracking-wide">
            © {year} Luminia Group. All rights reserved. West Bengal, India.
          </p>
          <p className="font-body text-xs text-ivory-dim flex items-center gap-1.5">
            Built with{' '}
            <Heart
              size={12}
              className="text-gold fill-current"
              aria-label="love"
            />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors duration-200 underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
