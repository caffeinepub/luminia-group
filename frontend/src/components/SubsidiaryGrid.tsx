import { useState } from 'react';
import SubsidiaryDetails from './SubsidiaryDetails';

const subsidiaries = [
  {
    id: 'assured-tours',
    name: 'Assured Tours & Travels',
    tagline: 'Journey Beyond Boundaries',
    description: 'Premium travel experiences crafted for the discerning explorer.',
    icon: '/assets/generated/tours-icon.dim_128x128.png',
    images: [
      '/assets/generated/assured-tours-banner.dim_1200x400.png',
      '/assets/generated/assured-tours-flight.dim_600x400.png',
      '/assets/generated/assured-tours-train.dim_600x400.png',
    ],
    status: 'Pre-Launch',
  },
  {
    id: 'luminia-captures',
    name: 'Luminia Captures',
    tagline: 'Moments Immortalized',
    description: 'World-class photography and videography for life\'s finest moments.',
    icon: '/assets/generated/captures-icon.dim_128x128.png',
    images: [
      '/assets/generated/luminia-captures-banner.dim_1200x400.png',
      '/assets/generated/luminia-captures-wedding.dim_600x400.png',
      '/assets/generated/luminia-captures-studio.dim_600x400.png',
    ],
    status: 'Pre-Launch',
  },
  {
    id: 'luminia-techlabs',
    name: 'Luminia TechLabs',
    tagline: 'Engineering Tomorrow',
    description: 'Cutting-edge technology solutions for the modern enterprise.',
    icon: '/assets/generated/techlabs-icon.dim_128x128.png',
    images: [
      '/assets/generated/luminia-techlabs-banner.dim_1200x400.png',
      '/assets/generated/luminia-techlabs-dev.dim_600x400.png',
    ],
    status: 'Pre-Launch',
  },
  {
    id: 'luminia-gadgets',
    name: 'Luminia Gadgets',
    tagline: 'Tech Redefined',
    description: 'Premium consumer electronics for the connected lifestyle.',
    icon: '/assets/generated/gadgets-icon.dim_128x128.png',
    images: [
      '/assets/generated/luminia-gadgets-watch.dim_600x400.png',
      '/assets/generated/luminia-gadgets-earbuds.dim_600x400.png',
      '/assets/generated/luminia-gadgets-headphones.dim_600x400.png',
    ],
    status: 'Pre-Launch',
  },
  {
    id: 'moda-vestra',
    name: 'Moda Vestra',
    tagline: 'Wear Your Story',
    description: 'Luxury fashion that speaks the language of elegance.',
    icon: '/assets/generated/moda-icon.dim_128x128.png',
    images: [
      '/assets/generated/moda-vestra-fashion.dim_600x400.png',
    ],
    status: 'Pre-Launch',
  },
  {
    id: 'velocity-vogue',
    name: 'Velocity Vogue',
    tagline: 'Speed Meets Style',
    description: 'Premium travel accessories for the modern nomad.',
    icon: '/assets/generated/velocity-icon.dim_128x128.png',
    images: [
      '/assets/generated/velocity-vogue-luggage.dim_600x400.png',
    ],
    status: 'Pre-Launch',
  },
  {
    id: 'gst-services',
    name: 'GST Services',
    tagline: 'Compliance Made Simple',
    description: 'Expert GST registration, filing, and tax consulting services.',
    icon: '/assets/generated/gst-icon.dim_128x128.png',
    images: [
      '/assets/generated/gst-services-banner.dim_1200x400.png',
      '/assets/generated/gst-service-tax.dim_600x400.png',
    ],
    status: 'Pre-Launch',
  },
];

export default function SubsidiaryGrid() {
  const [selected, setSelected] = useState<typeof subsidiaries[0] | null>(null);

  return (
    <section id="subsidiaries" className="py-24 px-6" style={{ background: 'oklch(0.08 0.01 60)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="font-serif italic text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'oklch(0.78 0.12 75 / 0.6)' }}
          >
            Our Portfolio
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl mb-6"
            style={{ color: 'oklch(0.78 0.12 75)' }}
          >
            The Luminia Empire
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24" style={{ background: 'oklch(0.78 0.12 75 / 0.4)' }} />
            <div className="w-2 h-2 rotate-45" style={{ background: 'oklch(0.78 0.12 75)' }} />
            <div className="h-px w-24" style={{ background: 'oklch(0.78 0.12 75 / 0.4)' }} />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subsidiaries.map((sub) => (
            <div
              key={sub.id}
              onClick={() => setSelected(sub)}
              className="group cursor-pointer p-8 transition-all duration-300"
              style={{
                border: '1px solid oklch(0.78 0.12 75 / 0.25)',
                background: 'oklch(0.10 0.01 60)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.78 0.12 75 / 0.6)';
                (e.currentTarget as HTMLDivElement).style.background = 'oklch(0.12 0.02 60)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.78 0.12 75 / 0.25)';
                (e.currentTarget as HTMLDivElement).style.background = 'oklch(0.10 0.01 60)';
              }}
            >
              {/* Badge */}
              <div className="flex justify-between items-start mb-6">
                <img src={sub.icon} alt={sub.name} className="w-12 h-12 object-contain" />
                <span
                  className="text-xs tracking-widest uppercase px-3 py-1 font-serif"
                  style={{
                    border: '1px solid oklch(0.78 0.12 75 / 0.4)',
                    color: 'oklch(0.78 0.12 75 / 0.7)',
                  }}
                >
                  {sub.status}
                </span>
              </div>

              <h3
                className="font-serif text-xl mb-2"
                style={{ color: 'oklch(0.78 0.12 75)' }}
              >
                {sub.name}
              </h3>
              <p
                className="font-serif italic text-sm mb-4"
                style={{ color: 'oklch(0.78 0.12 75 / 0.6)' }}
              >
                {sub.tagline}
              </p>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: 'oklch(0.85 0.01 60 / 0.6)' }}
              >
                {sub.description}
              </p>

              {/* Discover Button */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setSelected(sub); }}
                className="text-xs tracking-widest uppercase font-serif cursor-pointer transition-colors duration-300"
                style={{
                  color: 'oklch(0.78 0.12 75 / 0.7)',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.78 0.12 75)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.78 0.12 75 / 0.7)';
                }}
              >
                Discover →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <SubsidiaryDetails
          subsidiary={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
