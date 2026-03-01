import { SiInstagram, SiWhatsapp } from 'react-icons/si';
import { Mail, MapPin, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'luminia-group');

  const { ref: col1Ref, isVisible: col1Visible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: col2Ref, isVisible: col2Visible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: col3Ref, isVisible: col3Visible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: bottomRef, isVisible: bottomVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <footer id="contact-section" className="relative bg-obsidian">
      {/* Top gold line */}
      <div className="divider-gold" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 lg:gap-20 mb-16">
          {/* Brand Column */}
          <div
            ref={col1Ref}
            className={`md:col-span-1 animate-on-scroll ${col1Visible ? 'is-visible' : ''}`}
          >
            <div className="mb-7">
              <img
                src="/assets/image.png"
                alt="Luminia Group Conglomerate"
                className="h-14 lg:h-16 w-auto object-contain mb-5"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const sibling = target.nextElementSibling as HTMLElement;
                  if (sibling) sibling.style.display = 'block';
                }}
              />
              <span
                className="hidden font-display text-2xl font-semibold gradient-gold-text tracking-widest"
                style={{ display: 'none' }}
              >
                LUMINIA GROUP
              </span>
            </div>
            <p className="font-body text-sm text-ivory-dim leading-relaxed mb-5">
              An elite multi-sector conglomerate based in West Bengal, India. Architecting a future where luxury meets logic.
            </p>
            <div className="flex items-center gap-2 text-xs font-body text-ivory-faint">
              <MapPin size={11} style={{ color: 'oklch(0.74 0.135 82)' }} />
              <span>West Bengal, India</span>
            </div>
          </div>

          {/* Portfolio Column */}
          <div
            ref={col2Ref}
            className={`animate-on-scroll animate-delay-200 ${col2Visible ? 'is-visible' : ''}`}
          >
            <h3 className="font-body text-xs tracking-[0.45em] uppercase text-gold mb-7">
              Our Portfolio
            </h3>
            <ul className="space-y-3.5">
              {[
                'Luminia Gadgets',
                'Velocity Vogue',
                'Luminia Captures',
                'Moda Vestra',
                'Assured Tours & Travels',
                'Luminia TechLabs',
                'GST Services',
              ].map((brand) => (
                <li key={brand}>
                  <span className="font-body text-sm text-ivory-dim hover:text-gold transition-colors duration-300 cursor-default flex items-center gap-3 group">
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-400 group-hover:w-2 group-hover:rounded-none"
                      style={{ backgroundColor: 'oklch(0.74 0.135 82 / 0.45)' }}
                    />
                    {brand}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div
            ref={col3Ref}
            className={`animate-on-scroll animate-delay-400 ${col3Visible ? 'is-visible' : ''}`}
          >
            <h3 className="font-body text-xs tracking-[0.45em] uppercase text-gold mb-7">
              Connect
            </h3>
            <div className="space-y-5">
              <a
                href="mailto:luminiagroup@gmail.com"
                className="flex items-center gap-4 text-sm font-body text-ivory-dim hover:text-gold transition-colors duration-300 group"
              >
                <span
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0 transition-all duration-400 group-hover:scale-110"
                  style={{
                    backgroundColor: 'oklch(0.74 0.135 82 / 0.08)',
                    border: '1px solid oklch(0.74 0.135 82 / 0.18)',
                  }}
                >
                  <Mail size={13} style={{ color: 'oklch(0.74 0.135 82)' }} />
                </span>
                <span>luminiagroup@gmail.com</span>
              </a>

              <a
                href="https://wa.me/918617762393"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-sm font-body text-ivory-dim hover:text-gold transition-colors duration-300 group"
              >
                <span
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0 transition-all duration-400 group-hover:scale-110"
                  style={{
                    backgroundColor: 'oklch(0.74 0.135 82 / 0.08)',
                    border: '1px solid oklch(0.74 0.135 82 / 0.18)',
                  }}
                >
                  <SiWhatsapp size={13} style={{ color: 'oklch(0.74 0.135 82)' }} />
                </span>
                <span>+91 86177 62393</span>
              </a>

              <a
                href="https://www.instagram.com/luminia.group"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-sm font-body text-ivory-dim hover:text-gold transition-colors duration-300 group"
              >
                <span
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0 transition-all duration-400 group-hover:scale-110"
                  style={{
                    backgroundColor: 'oklch(0.74 0.135 82 / 0.08)',
                    border: '1px solid oklch(0.74 0.135 82 / 0.18)',
                  }}
                >
                  <SiInstagram size={13} style={{ color: 'oklch(0.74 0.135 82)' }} />
                </span>
                <span>@luminia.group</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          ref={bottomRef}
          className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 animate-on-scroll animate-delay-200 ${bottomVisible ? 'is-visible' : ''}`}
          style={{ borderTop: '1px solid oklch(0.52 0.09 82 / 0.12)' }}
        >
          <p className="font-body text-xs text-ivory-faint tracking-wide text-center sm:text-left">
            © {year} Luminia Group. All rights reserved.
          </p>
          <p className="font-body text-xs text-ivory-faint tracking-wide flex items-center gap-1.5 text-center">
            Built with{' '}
            <Heart
              size={10}
              className="inline-block"
              style={{ color: 'oklch(0.74 0.135 82)', fill: 'oklch(0.74 0.135 82)' }}
            />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors duration-300 underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
