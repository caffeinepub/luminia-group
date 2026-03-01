import { useState } from 'react';
import SubsidiaryDetails from './SubsidiaryDetails';

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

  return (
    <>
      <section id="empire" className="py-24 lg:py-32 px-6 lg:px-10 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
              The Portfolio
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-ivory mb-6">
              Our{' '}
              <span className="gradient-gold-text font-semibold">Empire</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="divider-gold w-16 sm:w-24" />
              <div
                className="w-1.5 h-1.5 rotate-45 border"
                style={{ borderColor: 'oklch(0.72 0.12 85)' }}
              />
              <div className="divider-gold w-16 sm:w-24" />
            </div>
            <p className="font-body text-base text-ivory-dim max-w-2xl mx-auto leading-relaxed">
              Seven distinct brands. One unified vision. Each subsidiary is a pillar of excellence,
              crafted to redefine its industry.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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

  return (
    <article
      id={subsidiary.id}
      className="card-luxury rounded-sm p-8 cursor-pointer group relative overflow-hidden"
      onClick={onClick}
      style={{ animationDelay: `${index * 0.1}s` }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`Learn more about ${subsidiary.name}`}
    >
      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(225deg, oklch(0.72 0.12 85 / 0.3), transparent)',
        }}
      />
      <div
        className="absolute top-0 right-0 w-px h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundColor: 'oklch(0.72 0.12 85 / 0.6)' }}
      />
      <div
        className="absolute top-0 right-0 w-12 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundColor: 'oklch(0.72 0.12 85 / 0.6)' }}
      />

      {/* Icon */}
      <div className="mb-6 relative">
        {!imgError ? (
          <img
            src={subsidiary.icon}
            alt={subsidiary.name}
            className="w-14 h-14 object-contain transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-14 h-14 flex items-center justify-center text-3xl rounded-sm"
            style={{ backgroundColor: 'oklch(0.72 0.12 85 / 0.1)' }}
          >
            {subsidiary.emoji}
          </div>
        )}
      </div>

      {/* Content */}
      <div>
        <h3 className="font-display text-xl lg:text-2xl font-semibold text-ivory mb-2 group-hover:text-gold transition-colors duration-300">
          {subsidiary.name}
        </h3>
        <div
          className="w-8 h-px mb-3 transition-all duration-500 group-hover:w-16"
          style={{ backgroundColor: 'oklch(0.72 0.12 85)' }}
        />
        <p className="font-body text-sm font-medium tracking-wide text-gold-light mb-3">
          {subsidiary.tagline}
        </p>
        <p className="font-body text-sm text-ivory-dim leading-relaxed line-clamp-2">
          {subsidiary.description}
        </p>
      </div>

      {/* Explore link */}
      <div className="mt-6 flex items-center gap-2 text-xs font-body font-medium tracking-[0.2em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        <span>Explore</span>
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </article>
  );
}
