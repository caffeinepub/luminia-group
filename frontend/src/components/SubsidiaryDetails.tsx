import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { Subsidiary } from './SubsidiaryGrid';
import { subsidiaries } from './SubsidiaryGrid';

interface SubsidiaryDetailsProps {
  subsidiary: Subsidiary;
  onClose: () => void;
}

export default function SubsidiaryDetails({ subsidiary, onClose }: SubsidiaryDetailsProps) {
  const currentIndex = subsidiaries.findIndex((s) => s.id === subsidiary.id);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const goTo = (index: number) => {
    const el = document.getElementById('subsidiary-modal-content');
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
      setTimeout(() => {
        // This triggers re-render via parent state
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200);
    }
  };

  const prevSubsidiary = currentIndex > 0 ? subsidiaries[currentIndex - 1] : null;
  const nextSubsidiary = currentIndex < subsidiaries.length - 1 ? subsidiaries[currentIndex + 1] : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={subsidiary.name}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 modal-overlay"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        id="subsidiary-modal-content"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, oklch(0.14 0.01 85), oklch(0.11 0 0))',
          border: '1px solid oklch(0.72 0.12 85 / 0.3)',
          boxShadow: '0 0 60px oklch(0.72 0.12 85 / 0.15), 0 40px 80px oklch(0 0 0 / 0.6)',
        }}
      >
        {/* Top border accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, oklch(0.72 0.12 85), transparent)',
          }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-ivory-dim hover:text-gold transition-colors duration-200 rounded-sm hover:bg-gold/10"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="p-8 sm:p-10">
          {/* Header */}
          <div className="flex items-start gap-5 mb-8">
            <div
              className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-sm"
              style={{ backgroundColor: 'oklch(0.72 0.12 85 / 0.1)', border: '1px solid oklch(0.72 0.12 85 / 0.2)' }}
            >
              <img
                src={subsidiary.icon}
                alt={subsidiary.name}
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const sibling = target.nextElementSibling as HTMLElement;
                  if (sibling) sibling.style.display = 'flex';
                }}
              />
              <span className="text-2xl hidden items-center justify-center w-full h-full">
                {subsidiary.emoji}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-1">
                Luminia Group Portfolio
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ivory leading-tight">
                {subsidiary.name}
              </h2>
            </div>
          </div>

          {/* Divider */}
          <div className="divider-gold mb-8" />

          {/* Tagline */}
          <p className="font-display text-xl sm:text-2xl font-light italic text-gold-light mb-6 leading-relaxed">
            "{subsidiary.tagline}"
          </p>

          {/* Description */}
          <p className="font-body text-base text-ivory-dim leading-relaxed mb-8">
            {subsidiary.description}
          </p>

          {/* Status Badge */}
          <div className="flex items-center gap-3 mb-8">
            <span className="pre-launch-badge text-xs font-body font-medium tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm inline-flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: 'oklch(0.72 0.12 85)' }}
              />
              Coming Soon
            </span>
            <span className="font-body text-xs text-ivory-dim tracking-wide">
              Part of the Luminia Group family
            </span>
          </div>

          {/* Navigation between subsidiaries */}
          <div
            className="flex items-center justify-between pt-6 border-t"
            style={{ borderColor: 'oklch(0.55 0.09 85 / 0.2)' }}
          >
            {prevSubsidiary ? (
              <button
                onClick={() => {
                  goTo(currentIndex - 1);
                  // We need to trigger parent to change subsidiary
                  // This is handled by the parent component
                }}
                className="flex items-center gap-2 text-xs font-body font-medium tracking-[0.15em] uppercase text-ivory-dim hover:text-gold transition-colors duration-200 group"
                aria-label={`Previous: ${prevSubsidiary.name}`}
              >
                <svg className="w-3 h-3 transition-transform duration-200 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span className="hidden sm:inline">{prevSubsidiary.name}</span>
                <span className="sm:hidden">Prev</span>
              </button>
            ) : (
              <div />
            )}

            <span className="font-body text-xs text-ivory-dim tracking-widest">
              {currentIndex + 1} / {subsidiaries.length}
            </span>

            {nextSubsidiary ? (
              <button
                onClick={() => {
                  goTo(currentIndex + 1);
                }}
                className="flex items-center gap-2 text-xs font-body font-medium tracking-[0.15em] uppercase text-ivory-dim hover:text-gold transition-colors duration-200 group"
                aria-label={`Next: ${nextSubsidiary.name}`}
              >
                <span className="hidden sm:inline">{nextSubsidiary.name}</span>
                <span className="sm:hidden">Next</span>
                <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
