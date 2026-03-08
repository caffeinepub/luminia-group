import { Sparkles, Tag } from "lucide-react";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(deadline: Date): TimeLeft | null {
  const diff = deadline.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

interface UnitBoxProps {
  value: string;
  label: string;
}

function UnitBox({ value, label }: UnitBoxProps) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 font-serif text-xl md:text-2xl font-light"
        style={{
          background: "oklch(0.10 0.02 75 / 0.6)",
          border: "1px solid oklch(0.78 0.12 75 / 0.35)",
          color: "oklch(0.78 0.12 75)",
          boxShadow:
            "0 0 14px oklch(0.78 0.12 75 / 0.12), inset 0 0 10px oklch(0.78 0.12 75 / 0.04)",
        }}
      >
        {value}
        <span
          className="absolute top-0 left-0 w-2 h-2"
          style={{
            borderTop: "1px solid oklch(0.78 0.12 75 / 0.7)",
            borderLeft: "1px solid oklch(0.78 0.12 75 / 0.7)",
          }}
        />
        <span
          className="absolute top-0 right-0 w-2 h-2"
          style={{
            borderTop: "1px solid oklch(0.78 0.12 75 / 0.7)",
            borderRight: "1px solid oklch(0.78 0.12 75 / 0.7)",
          }}
        />
        <span
          className="absolute bottom-0 left-0 w-2 h-2"
          style={{
            borderBottom: "1px solid oklch(0.78 0.12 75 / 0.7)",
            borderLeft: "1px solid oklch(0.78 0.12 75 / 0.7)",
          }}
        />
        <span
          className="absolute bottom-0 right-0 w-2 h-2"
          style={{
            borderBottom: "1px solid oklch(0.78 0.12 75 / 0.7)",
            borderRight: "1px solid oklch(0.78 0.12 75 / 0.7)",
          }}
        />
      </div>
      <span
        className="mt-1.5 text-xs tracking-[0.2em] uppercase font-serif"
        style={{ color: "oklch(0.78 0.12 75 / 0.5)" }}
      >
        {label}
      </span>
    </div>
  );
}

interface CountdownUnitsProps {
  timeLeft: TimeLeft;
}

function CountdownUnits({ timeLeft }: CountdownUnitsProps) {
  return (
    <div className="flex items-start gap-2 md:gap-3">
      <UnitBox value={pad(timeLeft.days)} label="Days" />
      <div
        className="font-serif text-xl md:text-2xl self-center pb-5"
        style={{ color: "oklch(0.78 0.12 75 / 0.4)" }}
      >
        :
      </div>
      <UnitBox value={pad(timeLeft.hours)} label="Hours" />
      <div
        className="font-serif text-xl md:text-2xl self-center pb-5"
        style={{ color: "oklch(0.78 0.12 75 / 0.4)" }}
      >
        :
      </div>
      <UnitBox value={pad(timeLeft.minutes)} label="Mins" />
      <div
        className="font-serif text-xl md:text-2xl self-center pb-5"
        style={{ color: "oklch(0.78 0.12 75 / 0.4)" }}
      >
        :
      </div>
      <UnitBox value={pad(timeLeft.seconds)} label="Secs" />
    </div>
  );
}

interface ActiveOfferProps {
  badge: string;
  title: string;
  subtitle: string;
  deadline: Date;
  timeLeft: TimeLeft | null;
}

function ActiveOffer({
  badge,
  title,
  subtitle,
  deadline,
  timeLeft,
}: ActiveOfferProps) {
  const gold = "oklch(0.78 0.12 75)";

  return (
    <div
      className="relative flex flex-col items-center gap-4 px-6 py-8 w-full max-w-xl mx-auto overflow-hidden"
      style={{
        background: "oklch(0.10 0.015 75)",
        border: "1px solid oklch(0.78 0.12 75 / 0.25)",
        boxShadow: "0 0 40px oklch(0.78 0.12 75 / 0.07)",
      }}
    >
      {/* Corner accents */}
      <span
        className="absolute top-0 left-0 w-4 h-4"
        style={{
          borderTop: `1px solid ${gold.replace(")", " / 0.6)")}`,
          borderLeft: `1px solid ${gold.replace(")", " / 0.6)")}`,
        }}
      />
      <span
        className="absolute top-0 right-0 w-4 h-4"
        style={{
          borderTop: `1px solid ${gold.replace(")", " / 0.6)")}`,
          borderRight: `1px solid ${gold.replace(")", " / 0.6)")}`,
        }}
      />
      <span
        className="absolute bottom-0 left-0 w-4 h-4"
        style={{
          borderBottom: `1px solid ${gold.replace(")", " / 0.6)")}`,
          borderLeft: `1px solid ${gold.replace(")", " / 0.6)")}`,
        }}
      />
      <span
        className="absolute bottom-0 right-0 w-4 h-4"
        style={{
          borderBottom: `1px solid ${gold.replace(")", " / 0.6)")}`,
          borderRight: `1px solid ${gold.replace(")", " / 0.6)")}`,
        }}
      />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.78 0.12 75 / 0.05) 0%, transparent 70%)",
        }}
      />

      {/* Badge */}
      <div
        className="relative flex items-center gap-2 px-3 py-1 font-serif text-xs tracking-[0.25em] uppercase"
        style={{
          border: "1px solid oklch(0.78 0.12 75 / 0.4)",
          color: "oklch(0.78 0.12 75 / 0.85)",
          background: "oklch(0.78 0.12 75 / 0.08)",
        }}
      >
        <Tag size={11} strokeWidth={1.5} style={{ color: gold }} />
        {badge}
      </div>

      {/* Title */}
      <div className="relative text-center">
        <h3
          className="font-serif text-xl md:text-2xl tracking-wide mb-1"
          style={{ color: gold }}
        >
          {title}
        </h3>
        <p
          className="font-serif italic text-sm tracking-wider"
          style={{ color: "oklch(0.78 0.12 75 / 0.55)" }}
        >
          {subtitle}
        </p>
      </div>

      {/* Divider */}
      <div className="relative flex items-center gap-2 w-full max-w-[240px]">
        <div
          className="flex-1 h-px"
          style={{ background: "oklch(0.78 0.12 75 / 0.2)" }}
        />
        <div
          className="w-1 h-1 rotate-45"
          style={{ background: "oklch(0.78 0.12 75 / 0.55)" }}
        />
        <div
          className="flex-1 h-px"
          style={{ background: "oklch(0.78 0.12 75 / 0.2)" }}
        />
      </div>

      {/* Countdown */}
      <div className="relative">
        {timeLeft === null ? (
          <div
            className="font-serif italic tracking-widest text-sm px-6 py-3"
            style={{
              color: "oklch(0.78 0.12 75 / 0.45)",
              border: "1px solid oklch(0.78 0.12 75 / 0.15)",
              background: "oklch(0.78 0.12 75 / 0.04)",
            }}
          >
            — Offer Ended —
          </div>
        ) : (
          <CountdownUnits timeLeft={timeLeft} />
        )}
      </div>

      {/* Deadline note */}
      <p
        className="relative font-serif text-xs tracking-[0.18em] uppercase"
        style={{ color: "oklch(0.78 0.12 75 / 0.38)" }}
      >
        Valid until {deadline.getDate()} March {deadline.getFullYear()}
      </p>
    </div>
  );
}

// Fixed deadline date for grand launch discount
const LAUNCH_DEADLINE = new Date(2026, 2, 30, 23, 59, 59); // 30th March 2026

export default function DiscountCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() =>
    calcTimeLeft(LAUNCH_DEADLINE),
  );

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(calcTimeLeft(LAUNCH_DEADLINE));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const isEnded = timeLeft === null;

  if (isEnded) {
    return (
      <section
        className="w-full py-10 px-4 md:px-8 relative overflow-hidden"
        style={{
          background: "oklch(0.09 0.015 75)",
          borderTop: "1px solid oklch(0.78 0.12 75 / 0.2)",
          borderBottom: "1px solid oklch(0.78 0.12 75 / 0.2)",
        }}
      >
        <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <Sparkles
              size={14}
              strokeWidth={1.5}
              style={{ color: "oklch(0.78 0.12 75 / 0.7)" }}
            />
            <span
              className="font-serif text-xs tracking-[0.35em] uppercase"
              style={{ color: "oklch(0.78 0.12 75 / 0.6)" }}
            >
              Limited Time Offer
            </span>
            <Sparkles
              size={14}
              strokeWidth={1.5}
              style={{ color: "oklch(0.78 0.12 75 / 0.7)" }}
            />
          </div>
          <div
            className="font-serif italic tracking-widest text-sm px-8 py-4"
            style={{
              color: "oklch(0.78 0.12 75 / 0.45)",
              border: "1px solid oklch(0.78 0.12 75 / 0.15)",
              background: "oklch(0.78 0.12 75 / 0.04)",
            }}
          >
            — Offer Has Ended —
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full py-10 px-4 md:px-8 relative overflow-hidden"
      style={{
        background: "oklch(0.09 0.015 75)",
        borderTop: "1px solid oklch(0.78 0.12 75 / 0.2)",
        borderBottom: "1px solid oklch(0.78 0.12 75 / 0.2)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, oklch(0.78 0.12 75 / 0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-6">
        {/* Section header */}
        <div className="flex items-center gap-3 text-center">
          <Sparkles
            size={14}
            strokeWidth={1.5}
            style={{ color: "oklch(0.78 0.12 75 / 0.7)" }}
          />
          <span
            className="font-serif text-xs tracking-[0.35em] uppercase"
            style={{ color: "oklch(0.78 0.12 75 / 0.6)" }}
          >
            Limited Time Offer
          </span>
          <Sparkles
            size={14}
            strokeWidth={1.5}
            style={{ color: "oklch(0.78 0.12 75 / 0.7)" }}
          />
        </div>

        {/* Grand Launch offer tile */}
        <ActiveOffer
          badge="Grand Launch"
          title="Launch Introductory Discount"
          subtitle="Unlock exclusive launch pricing across all Luminia brands"
          deadline={LAUNCH_DEADLINE}
          timeLeft={timeLeft}
        />
      </div>
    </section>
  );
}
