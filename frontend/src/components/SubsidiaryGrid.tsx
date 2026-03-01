import { useState } from 'react';
import SubsidiaryDetails from './SubsidiaryDetails';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export interface Subsidiary {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  emoji: string;
}

export const subsidiaries: Subsidiary[] = [
  {
    id: 'luminia-gadgets',
    name: 'Luminia Gadgets',
    tagline: 'Luxury Tech. Redefined.',
    description:
      'We curate high-end, hand-selected electronics for those who refuse to settle for the ordinary.',
    icon: '/assets/generated/gadgets-icon.dim_128x128.png',
    emoji: '📱',
  },
  {
    id: 'velocity-vogue',
    name: 'Velocity Vogue',
    tagline: 'Travel with authority.',
    description:
      'Our premium luggage and travel gear are designed for the modern elite who value durability and a "million-dollar" aesthetic.',
    icon: '/assets/generated/velocity-icon.dim_128x128.png',
    emoji: '🧳',
  },
  {
    id: 'luminia-captures',
    name: 'Luminia Captures',
    tagline: 'Your legacy, in high definition.',
    description:
      'We provide world-class photography for weddings and royal events, capturing moments that last forever.',
    icon: '/assets/generated/captures-icon.dim_128x128.png',
    emoji: '📸',
  },
  {
    id: 'moda-vestra',
    name: 'Moda Vestra',
    tagline: 'Sophistication in every stitch.',
    description:
      'An exclusive apparel brand for the visionary who demands premium quality and timeless style.',
    icon: '/assets/generated/moda-icon.dim_128x128.png',
    emoji: '👗',
  },
  {
    id: 'assured-tours',
    name: 'Assured Tours and Travels',
    tagline: 'Global access, assured.',
    description:
      'A full-service luxury travel agency dedicated to seamless, world-class journeys across the map.',
    icon: '/assets/generated/tours-icon.dim_128x128.png',
    emoji: '🌍',
  },
  {
    id: 'luminia-techlabs',
    name: 'Luminia TechLabs',
    tagline: 'The digital architect.',
    description:
      'Our specialized division for bespoke web and app development, building the infrastructure of tomorrow.',
    icon: '/assets/generated/techlabs-icon.dim_128x128.png',
    emoji: '💻',
  },
  {
    id: 'gst-services',
    name: 'GST Services',
    tagline: 'Precision and compliance.',
    description:
      'Professional tax and consultancy services to ensure your business operations remain seamless and secure.',
    icon: '/assets/generated/gst-icon.dim_128x128.png',
    emoji: '🧾',
  },
];

export default function SubsidiaryGrid() {
  const [selectedSubsidiary, setSelectedSubsidiary] = useState<Subsidiary | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 });

  return (
    <>
      <section id="empire" className="py-28 lg:py-40 px-6 lg:px-10 bg-obsidian relative overflow-hidden">
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, oklch(0.74 0.135 82) 0, oklch(0.74 0.135 82) 1px, transparent 0, transparent 80px), repeating-linear-gradient(90deg, oklch(0.74 0.135 82) 0, oklch(0.74 0.135 82) 1px, transparent 0, transparent 80px)',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div ref={headerRef} className="text-center mb-20 lg:mb-28">
            <p
              className={`font-body text-xs tracking-[0.5em] uppercase text-gold mb-5 animate-on-scroll ${headerVisible ? 'is-visible' : ''}`}
            >
              The Portfolio
            </p>
            <h2
              className={`font-display font-light text-ivory mb-5 animate-on-scroll animate-delay-100 ${headerVisible ? 'is-visible' : ''}`}
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.015em', lineHeight: '1' }}
            >
              Our{' '}
              <span className="gradient-gold-text font-semibold">Empire</span>
            </h2>
            <div
              className={`flex items-center justify-center gap-5 mb-8 animate-on-scroll animate-delay-200 ${headerVisible ? 'is-visible' : ''}`}
            >
              <div className="divider-gold w-20 sm:w-32" />
              <div
                className="w-2 h-2 rotate-45 flex-shrink-0"
                style={{
                  background: 'oklch(0.74 0.135 82)',
                  boxShadow: '0 0 8px oklch(0.74 0.135 82 / 0.7)',
                }}
              />
              <div className="divider-gold w-20 sm:w-32" />
            </div>
            <p
              className={`font-body text-base text-ivory-dim max-w-xl mx-auto leading-relaxed animate-on-scroll animate-delay-300 ${headerVisible ? 'is-visible' : ''}`}
            >
              Seven distinct brands. One unified vision. Each subsidiary is a pillar of excellence,
              crafted to redefine its industry.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {subsidiaries.map((sub, index) => (
              <SubsidiaryCard
                key={sub.id}
                subsidiary={sub}
                index={index}
                onClick={() => setSelectedSubsidiary(sub)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedSubsidiary && (
        <SubsidiaryDetails
          subsidiary={selectedSubsidiary}
          onClose={() => setSelectedSubsidiary(null)}
          onNavigate={(sub) => setSelectedSubsidiary(sub)}
        />
      )}
    </>
  );
}

interface SubsidiaryCardProps {
  subsidiary: Subsidiary;
  index: number;
  onClick: () => void;
}

function SubsidiaryCard({ subsidiary, index, onClick }: SubsidiaryCardProps) {
  const [imgError, setImgError] = useState(false);
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.08 });

  const delayClass = [
    '',
    'animate-delay-100',
    'animate-delay-200',
    'animate-delay-300',
    'animate-delay-400',
    'animate-delay-500',
    'animate-delay-600',
  ][index % 7];

  return (
    <article
      ref={ref}
      id={subsidiary.id}
      className={`card-luxury cursor-pointer group relative overflow-hidden animate-on-scroll ${delayClass} ${isVisible ? 'is-visible' : ''}`}
      style={{ padding: '2rem 2rem 1.75rem' }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`Learn more about ${subsidiary.name}`}
    >
      {/* Top-left accent line */}
      <div
        className="absolute top-0 left-0 w-0 h-px group-hover:w-full transition-all duration-700 ease-out"
        style={{ background: 'linear-gradient(90deg, oklch(0.74 0.135 82 / 0.8), transparent)' }}
      />

      {/* Corner accent — top right */}
      <div className="absolute top-0 right-0 overflow-hidden w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
          className="absolute top-0 right-0 w-full h-px"
          style={{ background: 'linear-gradient(270deg, oklch(0.74 0.135 82 / 0.7), transparent)' }}
        />
        <div
          className="absolute top-0 right-0 w-px h-full"
          style={{ background: 'linear-gradient(180deg, oklch(0.74 0.135 82 / 0.7), transparent)' }}
        />
      </div>

      {/* Number indicator */}
      <div
        className="absolute top-5 right-5 font-body text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0"
        style={{ color: 'oklch(0.74 0.135 82 / 0.5)', letterSpacing: '0.1em' }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icon */}
      <div className="mb-7">
        {!imgError ? (
          <div
            className="w-16 h-16 flex items-center justify-center transition-all duration-500 group-hover:scale-105"
            style={{
              background: 'radial-gradient(circle, oklch(0.74 0.135 82 / 0.08), oklch(0.74 0.135 82 / 0.02))',
              border: '1px solid oklch(0.74 0.135 82 / 0.15)',
              borderRadius: '2px',
            }}
          >
            <img
              src={subsidiary.icon}
              alt={subsidiary.name}
              className="w-9 h-9 object-contain"
              onError={() => setImgError(true)}
            />
          </div>
        ) : (
          <div
            className="w-16 h-16 flex items-center justify-center text-2xl transition-transform duration-500 group-hover:scale-105"
            style={{
              background: 'oklch(0.74 0.135 82 / 0.08)',
              border: '1px solid oklch(0.74 0.135 82 / 0.15)',
              borderRadius: '2px',
            }}
          >
            {subsidiary.emoji}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <h3
          className="font-display font-semibold text-ivory mb-3 group-hover:text-gold-light transition-colors duration-400 leading-tight"
          style={{ fontSize: 'clamp(1.15rem, 2vw, 1.35rem)', letterSpacing: '-0.005em' }}
        >
          {subsidiary.name}
        </h3>

        {/* Animated underline */}
        <div
          className="h-px mb-4 transition-all duration-600 ease-out"
          style={{
            width: '2rem',
            background: 'oklch(0.74 0.135 82)',
          }}
        />
        <div
          className="h-px -mt-4 mb-4 w-0 group-hover:w-12 transition-all duration-600 ease-out"
          style={{ background: 'oklch(0.84 0.11 82 / 0.5)' }}
        />

        <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-3">
          {subsidiary.tagline}
        </p>
        <p className="font-body text-sm text-ivory-dim leading-relaxed line-clamp-2 mb-6">
          {subsidiary.description}
        </p>
      </div>

      {/* Explore link */}
      <div className="flex items-center gap-2 mt-auto">
        <span
          className="font-body text-xs font-medium tracking-[0.2em] uppercase transition-all duration-400"
          style={{ color: 'oklch(0.74 0.135 82 / 0.6)' }}
        >
          <span className="group-hover:text-gold transition-colors duration-300">Discover</span>
        </span>
        <svg
          className="w-3 h-3 transition-all duration-400 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
          style={{ color: 'oklch(0.74 0.135 82)' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </article>
  );
}
