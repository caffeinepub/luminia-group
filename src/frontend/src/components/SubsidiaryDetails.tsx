import { useCallback, useEffect, useState } from "react";
import { buildBookingMessage, openWhatsApp } from "../lib/whatsapp";

interface Subsidiary {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  images: string[];
  status: string;
}

interface Props {
  subsidiary: Subsidiary;
  onClose: () => void;
}

export default function SubsidiaryDetails({ subsidiary, onClose }: Props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight")
        setCurrentImage((i) => (i + 1) % subsidiary.images.length);
      if (e.key === "ArrowLeft")
        setCurrentImage(
          (i) => (i - 1 + subsidiary.images.length) % subsidiary.images.length,
        );
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleClose, subsidiary.images.length]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleEnquire = () => {
    openWhatsApp(buildBookingMessage(subsidiary.name));
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "oklch(0.05 0.01 60 / 0.95)" }}
      onClick={handleClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") handleClose();
      }}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        style={{
          background: "oklch(0.10 0.01 60)",
          border: "1px solid oklch(0.78 0.12 75 / 0.4)",
          transform: mounted ? "scale(1)" : "scale(0.95)",
          opacity: mounted ? 1 : 0,
          transition: "transform 0.3s ease, opacity 0.3s ease",
        }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-200"
          style={{
            color: "oklch(0.78 0.12 75 / 0.7)",
            background: "oklch(0.08 0.01 60)",
            border: "1px solid oklch(0.78 0.12 75 / 0.3)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color =
              "oklch(0.78 0.12 75)";
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "oklch(0.78 0.12 75 / 0.7)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color =
              "oklch(0.78 0.12 75 / 0.7)";
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "oklch(0.78 0.12 75 / 0.3)";
          }}
        >
          ✕
        </button>

        {/* Main Image */}
        <div className="relative w-full h-64 md:h-80 overflow-hidden">
          <img
            src={subsidiary.images[currentImage]}
            alt={subsidiary.name}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 60%, oklch(0.10 0.01 60))",
            }}
          />

          {/* Image Navigation */}
          {subsidiary.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage(
                    (i) =>
                      (i - 1 + subsidiary.images.length) %
                      subsidiary.images.length,
                  );
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center cursor-pointer"
                style={{
                  background: "oklch(0.08 0.01 60 / 0.8)",
                  border: "1px solid oklch(0.78 0.12 75 / 0.4)",
                  color: "oklch(0.78 0.12 75)",
                }}
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage((i) => (i + 1) % subsidiary.images.length);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center cursor-pointer"
                style={{
                  background: "oklch(0.08 0.01 60 / 0.8)",
                  border: "1px solid oklch(0.78 0.12 75 / 0.4)",
                  color: "oklch(0.78 0.12 75)",
                }}
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Strip */}
        {subsidiary.images.length > 1 && (
          <div className="flex gap-2 px-6 pt-4">
            {subsidiary.images.map((img, idx) => (
              <button
                key={img}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage(idx);
                }}
                className="w-16 h-12 overflow-hidden cursor-pointer shrink-0"
                style={{
                  border:
                    idx === currentImage
                      ? "2px solid oklch(0.78 0.12 75)"
                      : "2px solid oklch(0.78 0.12 75 / 0.2)",
                  opacity: idx === currentImage ? 1 : 0.6,
                }}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Status Badge */}
          <div className="flex items-center gap-3 mb-4">
            <img
              src={subsidiary.icon}
              alt=""
              className="w-8 h-8 object-contain"
            />
            <span
              className="text-xs tracking-widest uppercase font-serif px-3 py-1"
              style={{
                border: "1px solid oklch(0.78 0.12 75 / 0.4)",
                color: "oklch(0.78 0.12 75 / 0.7)",
                background: "oklch(0.78 0.12 75 / 0.05)",
              }}
            >
              {subsidiary.status}
            </span>
          </div>

          <h2
            className="font-serif text-3xl mb-2"
            style={{ color: "oklch(0.78 0.12 75)" }}
          >
            {subsidiary.name}
          </h2>
          <p
            className="font-serif italic text-lg mb-4"
            style={{ color: "oklch(0.78 0.12 75 / 0.6)" }}
          >
            {subsidiary.tagline}
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: "oklch(0.85 0.01 60 / 0.7)" }}
          >
            {subsidiary.description}
          </p>

          {/* Divider */}
          <div
            className="my-6 h-px"
            style={{ background: "oklch(0.78 0.12 75 / 0.2)" }}
          />

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* WhatsApp Enquire Button */}
            <button
              type="button"
              onClick={handleEnquire}
              className="px-8 py-3 font-serif text-sm tracking-widest uppercase cursor-pointer transition-all duration-300"
              style={{
                border: "1px solid oklch(0.78 0.12 75)",
                color: "oklch(0.08 0.01 60)",
                background: "oklch(0.78 0.12 75)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "oklch(0.72 0.14 75)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "oklch(0.78 0.12 75)";
              }}
            >
              Enquire on WhatsApp
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="px-8 py-3 font-serif text-sm tracking-widest uppercase cursor-pointer transition-all duration-300"
              style={{
                border: "1px solid oklch(0.78 0.12 75 / 0.5)",
                color: "oklch(0.78 0.12 75)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "oklch(0.78 0.12 75 / 0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
