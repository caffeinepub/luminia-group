import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { openWhatsApp, buildNotifyMessage } from '../lib/whatsapp';

const brands = [
  {
    id: 'luminia-gadgets',
    name: 'Luminia Gadgets',
    tagline: 'Tech Redefined',
    desc: 'Premium consumer electronics — earbuds, smartwatches, and more.',
    icon: '/assets/generated/gadgets-icon.dim_128x128.png',
    image: '/assets/generated/luminia-gadgets-watch.dim_600x400.png',
  },
  {
    id: 'moda-vestra',
    name: 'Moda Vestra',
    tagline: 'Wear Your Story',
    desc: 'Luxury fashion and lifestyle apparel for the discerning individual.',
    icon: '/assets/generated/moda-icon.dim_128x128.png',
    image: '/assets/generated/moda-vestra-fashion.dim_600x400.png',
  },
  {
    id: 'velocity-vogue',
    name: 'Velocity Vogue',
    tagline: 'Speed Meets Style',
    desc: 'Premium travel accessories and luggage for the modern nomad.',
    icon: '/assets/generated/velocity-icon.dim_128x128.png',
    image: '/assets/generated/velocity-vogue-luggage.dim_600x400.png',
  },
];

interface Brand {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  icon: string;
  image: string;
}

interface BrandCardProps {
  brand: Brand;
  index: number;
  onNotify: (name: string) => void;
}

function BrandCard({ brand, index, onNotify }: BrandCardProps) {
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className="overflow-hidden transition-all duration-300"
      style={{
        border: '1px solid oklch(0.78 0.12 75 / 0.25)',
        background: 'oklch(0.10 0.01 60)',
        opacity: cardVisible ? 1 : 0,
        transform: cardVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s, border-color 0.3s ease`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.78 0.12 75 / 0.5)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.78 0.12 75 / 0.25)';
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={brand.image}
          alt={brand.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'oklch(0.08 0.01 60 / 0.4)' }}
        />
        {/* Launching Soon Badge */}
        <div className="absolute top-3 right-3">
          <span
            className="text-xs tracking-widest uppercase px-3 py-1 font-serif"
            style={{
              border: '1px solid oklch(0.78 0.12 75 / 0.6)',
              color: 'oklch(0.78 0.12 75)',
              background: 'oklch(0.08 0.01 60 / 0.8)',
            }}
          >
            Launching Soon
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <img src={brand.icon} alt="" className="w-8 h-8 object-contain" />
          <div>
            <h3
              className="font-serif text-lg"
              style={{ color: 'oklch(0.78 0.12 75)' }}
            >
              {brand.name}
            </h3>
            <p
              className="font-serif italic text-xs"
              style={{ color: 'oklch(0.78 0.12 75 / 0.6)' }}
            >
              {brand.tagline}
            </p>
          </div>
        </div>
        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: 'oklch(0.85 0.01 60 / 0.6)' }}
        >
          {brand.desc}
        </p>
        <button
          type="button"
          onClick={() => onNotify(brand.name)}
          className="text-xs tracking-widest uppercase font-serif cursor-pointer transition-colors duration-300 px-4 py-2"
          style={{
            border: '1px solid oklch(0.78 0.12 75 / 0.4)',
            color: 'oklch(0.78 0.12 75 / 0.8)',
            background: 'transparent',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.78 0.12 75)';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'oklch(0.78 0.12 75 / 0.7)';
            (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.78 0.12 75 / 0.08)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.78 0.12 75 / 0.8)';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'oklch(0.78 0.12 75 / 0.4)';
            (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
          }}
        >
          Notify Me
        </button>
      </div>
    </div>
  );
}

export default function ComingSoonSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleNotifyClick = (brandName: string) => {
    openWhatsApp(buildNotifyMessage(brandName));
  };

  return (
    <section
      id="coming-soon"
      className="py-24"
      style={{ background: 'oklch(0.08 0.01 60)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <p
            className="font-serif italic text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'oklch(0.78 0.12 75 / 0.6)' }}
          >
            Luminia Group · Upcoming Ventures
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl mb-4"
            style={{ color: 'oklch(0.78 0.12 75)' }}
          >
            Coming Soon
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24" style={{ background: 'oklch(0.78 0.12 75 / 0.4)' }} />
            <div className="w-2 h-2 rotate-45" style={{ background: 'oklch(0.78 0.12 75)' }} />
            <div className="h-px w-24" style={{ background: 'oklch(0.78 0.12 75 / 0.4)' }} />
          </div>
          <p
            className="font-serif italic text-lg max-w-2xl mx-auto"
            style={{ color: 'oklch(0.78 0.12 75 / 0.7)' }}
          >
            The next chapter of Luminia — new ventures on the horizon, redefining industries.
          </p>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <BrandCard
              key={brand.id}
              brand={brand}
              index={index}
              onNotify={handleNotifyClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
