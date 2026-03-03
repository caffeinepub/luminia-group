import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { openWhatsAppPaymentConfirmation } from '../lib/whatsapp';
import { MessageCircle } from 'lucide-react';

function generateUTEReference(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `UTE-${timestamp}${random}`;
}

export default function PaymentSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.05 });

  const [showQR, setShowQR] = useState(false);

  const handleProceedToPay = () => {
    setShowQR(true);
  };

  const handlePaymentDone = () => {
    const uteRef = generateUTEReference();
    openWhatsAppPaymentConfirmation(uteRef);
  };

  return (
    <section
      id="payment"
      className="py-24"
      style={{ background: 'oklch(0.06 0.01 60)' }}
    >
      <div className="max-w-3xl mx-auto px-6">
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
            Luminia Group · Secure Payment
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl mb-4"
            style={{ color: 'oklch(0.78 0.12 75)' }}
          >
            Make a Payment
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
            {showQR
              ? 'Scan the QR code below with any UPI app to complete your payment.'
              : 'Click below to proceed with your payment via Google Pay or any UPI app.'}
          </p>
        </div>

        {/* Main Content */}
        <div
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className="flex flex-col items-center"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
          }}
        >
          {!showQR ? (
            /* ── Step 1: Proceed to Pay ── */
            <div
              className="flex flex-col items-center gap-8 p-10 w-full max-w-md text-center"
              style={{
                border: '1px solid oklch(0.78 0.12 75 / 0.25)',
                background: 'oklch(0.10 0.01 60)',
              }}
            >
              {/* Icon / decorative element */}
              <div
                className="w-20 h-20 flex items-center justify-center"
                style={{
                  border: '1px solid oklch(0.78 0.12 75 / 0.4)',
                  background: 'oklch(0.78 0.12 75 / 0.06)',
                }}
              >
                <span style={{ fontSize: '36px' }}>💳</span>
              </div>

              <div>
                <h3
                  className="font-serif text-2xl mb-3"
                  style={{ color: 'oklch(0.78 0.12 75)' }}
                >
                  Ready to Pay?
                </h3>
                <p
                  className="font-serif italic text-sm leading-relaxed"
                  style={{ color: 'oklch(0.85 0.01 60 / 0.6)' }}
                >
                  We accept payments via Google Pay and all UPI apps. Click the button below to view the payment QR code.
                </p>
              </div>

              {/* Proceed to Pay button */}
              <button
                type="button"
                onClick={handleProceedToPay}
                className="font-serif text-sm tracking-widest uppercase cursor-pointer transition-all duration-300 px-10 py-4 w-full"
                style={{
                  background: 'oklch(0.78 0.12 75)',
                  color: 'oklch(0.08 0.01 60)',
                  border: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.85 0.10 75)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.78 0.12 75)';
                }}
              >
                Proceed to Pay
              </button>

              <p
                className="font-serif italic text-xs"
                style={{ color: 'oklch(0.78 0.12 75 / 0.35)' }}
              >
                Secure · Instant · UPI Powered
              </p>
            </div>
          ) : (
            /* ── Step 2: QR Code + Payment Done ── */
            <div
              className="flex flex-col items-center gap-8 p-10 w-full max-w-md"
              style={{
                border: '1px solid oklch(0.78 0.12 75 / 0.25)',
                background: 'oklch(0.10 0.01 60)',
              }}
            >
              {/* QR Code */}
              <div className="flex flex-col items-center w-full">
                <p
                  className="font-serif text-xs tracking-[0.25em] uppercase mb-5"
                  style={{ color: 'oklch(0.78 0.12 75 / 0.6)' }}
                >
                  Scan to Pay · Google Pay / UPI
                </p>

                {/* QR image with gold border frame */}
                <div className="flex items-center justify-center w-full">
                  <div
                    className="relative p-3"
                    style={{ border: '1px solid oklch(0.78 0.12 75 / 0.4)' }}
                  >
                    <img
                      src="/assets/WhatsApp Image 2026-03-03 at 12.07.08 AM.jpeg"
                      alt="Google Pay QR Code — Luminia Gadgets (luminiagadgets@okicici)"
                      style={{
                        width: '256px',
                        height: '256px',
                        display: 'block',
                        objectFit: 'cover',
                        background: '#fff',
                      }}
                    />
                    {/* Gold corner accents */}
                    <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: 'oklch(0.78 0.12 75)' }} />
                    <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: 'oklch(0.78 0.12 75)' }} />
                    <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: 'oklch(0.78 0.12 75)' }} />
                    <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: 'oklch(0.78 0.12 75)' }} />
                  </div>
                </div>

                {/* UPI ID */}
                <div className="mt-5 text-center">
                  <p
                    className="font-serif text-xs tracking-[0.2em] uppercase mb-1"
                    style={{ color: 'oklch(0.78 0.12 75 / 0.5)' }}
                  >
                    UPI ID
                  </p>
                  <p
                    className="font-serif text-base tracking-wide"
                    style={{ color: 'oklch(0.78 0.12 75)' }}
                  >
                    luminiagadgets@okicici
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 w-full">
                <div className="h-px flex-1" style={{ background: 'oklch(0.78 0.12 75 / 0.2)' }} />
                <span
                  className="font-serif italic text-xs tracking-widest"
                  style={{ color: 'oklch(0.78 0.12 75 / 0.4)' }}
                >
                  After payment
                </span>
                <div className="h-px flex-1" style={{ background: 'oklch(0.78 0.12 75 / 0.2)' }} />
              </div>

              {/* UTE Reference info */}
              <div
                className="w-full px-4 py-3 text-center"
                style={{
                  border: '1px solid oklch(0.78 0.12 75 / 0.2)',
                  background: 'oklch(0.78 0.12 75 / 0.04)',
                }}
              >
                <p
                  className="font-serif italic text-xs mb-1"
                  style={{ color: 'oklch(0.78 0.12 75 / 0.5)' }}
                >
                  A unique UTE reference number will be auto-generated
                </p>
                <p
                  className="font-serif text-xs tracking-widest uppercase"
                  style={{ color: 'oklch(0.78 0.12 75 / 0.7)' }}
                >
                  and included in your WhatsApp confirmation
                </p>
              </div>

              {/* Payment Done button */}
              <button
                type="button"
                onClick={handlePaymentDone}
                className="font-serif text-sm tracking-widest uppercase cursor-pointer transition-all duration-300 px-10 py-4 w-full flex items-center justify-center gap-3"
                style={{
                  background: 'oklch(0.78 0.12 75)',
                  color: 'oklch(0.08 0.01 60)',
                  border: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.85 0.10 75)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.78 0.12 75)';
                }}
              >
                <MessageCircle size={16} />
                Payment Done
              </button>

              <p
                className="font-serif italic text-xs text-center"
                style={{ color: 'oklch(0.78 0.12 75 / 0.4)' }}
              >
                Tapping "Payment Done" instantly opens WhatsApp with your auto-generated UTE reference number.
              </p>

              {/* Back link */}
              <button
                type="button"
                onClick={() => setShowQR(false)}
                className="font-serif italic text-xs tracking-widest cursor-pointer transition-colors duration-200 underline underline-offset-4"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'oklch(0.78 0.12 75 / 0.35)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.78 0.12 75 / 0.65)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.78 0.12 75 / 0.35)';
                }}
              >
                ← Go back
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
