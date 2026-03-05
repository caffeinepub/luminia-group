import type React from "react";
import { useEffect, useMemo, useState } from "react";

// ── Hindu Festival Calendar (fixed Gregorian dates per year) ──────────────────
// Only Hindu festivals + Indian national days. No Muslim or Christian festivals.
interface FestivalDef {
  name: string;
  greeting: string;
  subtext: string;
  emojis: string[];
  colors: string[];
  gradient: string;
  // month is 0-indexed (0=Jan), day is 1-indexed
  windows: Array<{
    month: number;
    day: number;
    duration: number;
    year?: number;
  }>;
}

const FESTIVALS: FestivalDef[] = [
  {
    name: "Makar Sankranti",
    greeting: "Happy Makar Sankranti!",
    subtext:
      "May the sun's journey northward bring you warmth, harvest, and new beginnings",
    emojis: ["☀️", "🪁", "🌾", "✨", "🎊", "💛", "🌸"],
    colors: ["#FFD700", "#FF8C00", "#FFA500", "#FFB347", "#FFCC44"],
    gradient: "linear-gradient(90deg,#FFD700,#FF8C00,#FFA500,#FFB347,#FFCC44)",
    windows: [
      { month: 0, day: 14, duration: 1 }, // 14 Jan every year
    ],
  },
  {
    name: "Vasant Panchami",
    greeting: "Happy Vasant Panchami!",
    subtext:
      "May Maa Saraswati bless you with wisdom, knowledge, and creativity",
    emojis: ["🌸", "💛", "📚", "🎶", "✨", "🌼", "🙏"],
    colors: ["#FFD700", "#FFEF00", "#FFE135", "#FFC200", "#FFD700"],
    gradient: "linear-gradient(90deg,#FFD700,#FFEF00,#FFE135,#FFC200)",
    windows: [
      { year: 2026, month: 1, day: 23, duration: 1 }, // 23 Feb 2026
      { year: 2027, month: 1, day: 12, duration: 1 },
    ],
  },
  {
    name: "Maha Shivaratri",
    greeting: "Happy Maha Shivaratri!",
    subtext:
      "Om Namah Shivaya — May Lord Shiva's blessings fill your life with peace and bliss",
    emojis: ["🔱", "🌙", "🪷", "✨", "🙏", "💙", "🌸"],
    colors: ["#6B48FF", "#9D4EDD", "#7B2FBE", "#5A189A", "#C77DFF"],
    gradient: "linear-gradient(90deg,#6B48FF,#9D4EDD,#7B2FBE,#C77DFF)",
    windows: [
      { year: 2026, month: 1, day: 26, duration: 1 }, // 26 Feb 2026
      { year: 2027, month: 2, day: 17, duration: 1 },
    ],
  },
  {
    name: "Holi",
    greeting: "Happy Holi!",
    subtext: "May your life be as colourful as the festival of colours",
    emojis: ["🎨", "🌈", "💥", "🌸", "🎊", "💫", "🌺"],
    colors: [
      "#ff2d78",
      "#ff6b00",
      "#ffea00",
      "#76ff03",
      "#00e5ff",
      "#d500f9",
      "#ff4081",
    ],
    gradient:
      "linear-gradient(90deg,#ff2d78,#ff6b00,#ffea00,#76ff03,#00e5ff,#d500f9,#ff4081)",
    windows: [
      { year: 2026, month: 2, day: 5, duration: 1 }, // 5 Mar 2026
      { year: 2027, month: 2, day: 22, duration: 1 },
      { year: 2028, month: 2, day: 11, duration: 1 },
    ],
  },
  {
    name: "Ram Navami",
    greeting: "Happy Ram Navami!",
    subtext:
      "May Lord Ram's virtues of righteousness and compassion guide your path always",
    emojis: ["🙏", "🌺", "✨", "🪔", "🌸", "💛", "🎊"],
    colors: ["#FF6B35", "#FFD700", "#FF8C00", "#FFA500", "#FFB347"],
    gradient: "linear-gradient(90deg,#FF6B35,#FFD700,#FF8C00,#FFA500)",
    windows: [
      { year: 2026, month: 3, day: 16, duration: 1 }, // 16 Apr 2026
      { year: 2027, month: 3, day: 6, duration: 1 },
    ],
  },
  {
    name: "Hanuman Jayanti",
    greeting: "Happy Hanuman Jayanti!",
    subtext:
      "May Lord Hanuman bless you with strength, devotion, and unwavering courage",
    emojis: ["🙏", "🌺", "💪", "✨", "🌸", "🪔", "🎊"],
    colors: ["#FF6B00", "#FFD700", "#FF4500", "#FFA500", "#FF8C00"],
    gradient: "linear-gradient(90deg,#FF6B00,#FFD700,#FF4500,#FFA500)",
    windows: [
      { year: 2026, month: 3, day: 15, duration: 1 }, // 15 Apr 2026
    ],
  },
  {
    name: "Akshaya Tritiya",
    greeting: "Happy Akshaya Tritiya!",
    subtext:
      "May this auspicious day bring you unending prosperity, wealth, and success",
    emojis: ["💛", "✨", "🪙", "🌸", "🎊", "🌟", "🙏"],
    colors: ["#FFD700", "#FFC200", "#FF8C00", "#FFCC44", "#FFD700"],
    gradient: "linear-gradient(90deg,#FFD700,#FFC200,#FF8C00,#FFCC44)",
    windows: [
      { year: 2026, month: 3, day: 20, duration: 1 }, // 20 Apr 2026
    ],
  },
  {
    name: "Guru Purnima",
    greeting: "Happy Guru Purnima!",
    subtext:
      "Saluting the eternal light of knowledge — honouring all gurus and teachers",
    emojis: ["🌕", "🙏", "📚", "✨", "🌸", "💛", "🪷"],
    colors: ["#FFD700", "#FFEF00", "#FFA500", "#FFD700", "#FFCC44"],
    gradient: "linear-gradient(90deg,#FFD700,#FFEF00,#FFA500,#FFCC44)",
    windows: [
      { year: 2026, month: 6, day: 10, duration: 1 }, // 10 Jul 2026
      { year: 2027, month: 6, day: 29, duration: 1 },
    ],
  },
  {
    name: "Raksha Bandhan",
    greeting: "Happy Raksha Bandhan!",
    subtext:
      "A bond of love and protection — celebrating the divine thread of sibling love",
    emojis: ["🧶", "💛", "🌸", "✨", "🙏", "🎊", "💖"],
    colors: ["#FF2D78", "#FF6B00", "#FFD700", "#FF4081", "#FFC200"],
    gradient: "linear-gradient(90deg,#FF2D78,#FF6B00,#FFD700,#FF4081)",
    windows: [
      { year: 2026, month: 7, day: 19, duration: 1 }, // 19 Aug 2026
      { year: 2027, month: 8, day: 7, duration: 1 },
    ],
  },
  {
    name: "Janmashtami",
    greeting: "Happy Janmashtami!",
    subtext: "Celebrating the divine birth of Lord Krishna — Jai Shri Krishna!",
    emojis: ["🦚", "🎶", "🌸", "💙", "✨", "🙏", "🪷"],
    colors: ["#1E90FF", "#FFD700", "#00B4D8", "#0077B6", "#90E0EF"],
    gradient: "linear-gradient(90deg,#1E90FF,#FFD700,#00B4D8,#0077B6)",
    windows: [
      { year: 2026, month: 7, day: 23, duration: 1 }, // 23 Aug 2026
      { year: 2027, month: 8, day: 12, duration: 1 },
    ],
  },
  {
    name: "Ganesh Chaturthi",
    greeting: "Ganpati Bappa Morya!",
    subtext:
      "May Lord Ganesha remove all obstacles and shower you with wisdom and prosperity",
    emojis: ["🐘", "🌺", "🎊", "✨", "🙏", "🪔", "💛"],
    colors: ["#FF6B00", "#FFD700", "#FF8C00", "#FFA500", "#FFB347"],
    gradient: "linear-gradient(90deg,#FF6B00,#FFD700,#FF8C00,#FFA500)",
    windows: [
      { year: 2026, month: 7, day: 22, duration: 10 }, // 22 Aug 2026
      { year: 2027, month: 8, day: 11, duration: 10 },
    ],
  },
  {
    name: "Navratri",
    greeting: "Happy Navratri!",
    subtext:
      "Nine nights of devotion, dance, and divine blessings from Maa Durga",
    emojis: ["🌺", "💃", "🪷", "✨", "🌸", "🎶", "🙏"],
    colors: ["#ff2d78", "#d500f9", "#ff6b00", "#ffea00", "#ff4081"],
    gradient: "linear-gradient(90deg,#ff2d78,#d500f9,#ff6b00,#ffea00)",
    windows: [
      { year: 2025, month: 9, day: 2, duration: 9 }, // 2 Oct 2025
      { year: 2026, month: 8, day: 22, duration: 9 }, // 22 Sep 2026
    ],
  },
  {
    name: "Durga Puja",
    greeting: "Shubho Bijoya!",
    subtext:
      "May Maa Durga bless you with strength, courage, and eternal happiness",
    emojis: ["🙏", "🌺", "✨", "🌸", "🏮", "🎊", "💫"],
    colors: ["#ff6b00", "#ffcc00", "#ff2d78", "#ffd700", "#ff8c00"],
    gradient: "linear-gradient(90deg,#ff6b00,#ffcc00,#ffd700,#ff8c00)",
    windows: [
      { year: 2025, month: 9, day: 2, duration: 5 },
      { year: 2026, month: 8, day: 22, duration: 5 },
    ],
  },
  {
    name: "Dussehra",
    greeting: "Happy Dussehra!",
    subtext:
      "May the victory of good over evil inspire you to conquer all your challenges",
    emojis: ["🎆", "🌟", "✨", "🙏", "🌺", "🎊", "🏹"],
    colors: ["#FF6B35", "#FFD700", "#FF4500", "#FFA500", "#FF8C00"],
    gradient: "linear-gradient(90deg,#FF6B35,#FFD700,#FF4500,#FFA500)",
    windows: [
      { year: 2025, month: 9, day: 12, duration: 1 }, // 12 Oct 2025
      { year: 2026, month: 9, day: 2, duration: 1 }, // 2 Oct 2026
    ],
  },
  {
    name: "Diwali",
    greeting: "Happy Diwali!",
    subtext: "Wishing you light, prosperity, and joy this festive season",
    emojis: ["🪔", "✨", "🎆", "🌟", "🎇", "💛", "🏮"],
    colors: ["#ffcc00", "#ff6b00", "#ff2d78", "#ffd700", "#ff8c00", "#ffe066"],
    gradient: "linear-gradient(90deg,#ffd700,#ff8c00,#ff6b00,#ffcc00,#ffe066)",
    windows: [
      { year: 2025, month: 9, day: 20, duration: 5 }, // 20 Oct 2025
      { year: 2026, month: 10, day: 8, duration: 5 }, // 8 Nov 2026
    ],
  },
  {
    name: "Chhath Puja",
    greeting: "Happy Chhath Puja!",
    subtext:
      "May Surya Dev and Chhathi Maiya bless you and your family with health and prosperity",
    emojis: ["☀️", "🌅", "🙏", "🌾", "✨", "💛", "🌸"],
    colors: ["#FF8C00", "#FFD700", "#FF6B00", "#FFA500", "#FFCC44"],
    gradient: "linear-gradient(90deg,#FF8C00,#FFD700,#FF6B00,#FFA500)",
    windows: [
      { year: 2025, month: 10, day: 26, duration: 4 }, // 26 Oct 2025
      { year: 2026, month: 11, day: 14, duration: 4 }, // 14 Dec 2026
    ],
  },
  {
    name: "New Year",
    greeting: "Happy New Year!",
    subtext: "Wishing Luminia Group and all our patrons a glorious year ahead",
    emojis: ["🎆", "🎇", "✨", "🥂", "🎊", "🌟", "🎉"],
    colors: ["#ffd700", "#ff6b00", "#00e5ff", "#d500f9", "#ff2d78"],
    gradient: "linear-gradient(90deg,#ffd700,#ff6b00,#00e5ff,#d500f9)",
    windows: [
      { month: 11, day: 31, duration: 2 }, // 31 Dec – 1 Jan every year
    ],
  },
  {
    name: "Republic Day",
    greeting: "Happy Republic Day!",
    subtext:
      "Celebrating the strength and unity of our great nation — Jai Hind!",
    emojis: ["🇮🇳", "🧡", "⬜", "💚", "✨", "🎆", "🌟"],
    colors: ["#FF9933", "#ffffff", "#138808", "#000080", "#ffd700"],
    gradient: "linear-gradient(90deg,#FF9933,#ffffff,#138808)",
    windows: [
      { month: 0, day: 26, duration: 1 }, // 26 Jan every year
    ],
  },
  {
    name: "Independence Day",
    greeting: "Happy Independence Day!",
    subtext: "Jai Hind! Saluting the spirit and sacrifice of every Indian",
    emojis: ["🇮🇳", "🧡", "⬜", "💚", "✨", "🎆", "🌟"],
    colors: ["#FF9933", "#ffffff", "#138808", "#000080", "#ffd700"],
    gradient: "linear-gradient(90deg,#FF9933,#ffffff,#138808)",
    windows: [
      { month: 7, day: 15, duration: 1 }, // 15 Aug every year
    ],
  },
];

function getActiveFestival(): FestivalDef | null {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();

  for (const festival of FESTIVALS) {
    for (const win of festival.windows) {
      // If year is specified, only match that year
      if (win.year !== undefined && win.year !== year) continue;

      const start = new Date(year, win.month, win.day);
      const end = new Date(year, win.month, win.day + win.duration);
      const today = new Date(year, month, date);

      if (today >= start && today < end) {
        return festival;
      }
    }
  }
  return null;
}

function seededRandom(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

// ── Main Component ─────────────────────────────────────────────────────────────
const FestivalOverlay: React.FC = () => {
  const festival = useMemo(() => getActiveFestival(), []);
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!festival) return;
    setVisible(true);
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 800);
    }, 5000);
    return () => clearTimeout(timer);
  }, [festival]);

  // No festival today — render nothing
  if (!festival || !visible) return null;

  const blobs = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: seededRandom(i * 7) * 90,
    y: seededRandom(i * 7 + 1) * 90,
    size: 80 + seededRandom(i * 7 + 2) * 160,
    color: festival.colors[i % festival.colors.length],
    duration: 4 + seededRandom(i * 7 + 3) * 6,
    delay: seededRandom(i * 7 + 4) * 3,
  }));

  const particles = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: seededRandom(i * 5 + 50) * 100,
    y: seededRandom(i * 5 + 51) * 100,
    emoji:
      festival.emojis[
        Math.floor(seededRandom(i * 5 + 52) * festival.emojis.length)
      ],
    duration: 3 + seededRandom(i * 5 + 53) * 5,
    delay: seededRandom(i * 5 + 54) * 4,
    size: 16 + Math.floor(seededRandom(i * 5 + 55) * 24),
  }));

  return (
    <div
      data-ocid="festival.dialog"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.92)",
        transition: "opacity 0.8s ease",
        opacity: fadeOut ? 0 : 1,
        cursor: "pointer",
      }}
      onClick={() => {
        setFadeOut(true);
        setTimeout(() => setVisible(false), 800);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setFadeOut(true);
          setTimeout(() => setVisible(false), 800);
        }
      }}
    >
      {/* Ambient colour blobs */}
      {blobs.map((blob) => (
        <div
          key={blob.id}
          style={{
            position: "absolute",
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            width: blob.size,
            height: blob.size,
            borderRadius: "50%",
            backgroundColor: blob.color,
            filter: `blur(${blob.size * 0.35}px)`,
            opacity: 0.3,
            animation: `festivalBlob ${blob.duration}s ease-in-out ${blob.delay}s infinite`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Emoji particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: p.size,
            animation: `festivalFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {p.emoji}
        </div>
      ))}

      {/* Main greeting card */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "3rem 4rem",
          border: "1px solid rgba(255,255,255,0.15)",
          backgroundColor: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(14px)",
          maxWidth: "90vw",
        }}
      >
        {/* Festival greeting */}
        <div
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontWeight: 700,
            fontStyle: "italic",
            background: festival.gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            backgroundSize: "200% auto",
            animation: "festivalGradientShift 3s linear infinite",
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}
        >
          {festival.greeting}
        </div>

        {/* From line */}
        <div
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.3rem)",
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontWeight: 400,
            color: "rgba(212,175,55,0.9)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
            textShadow: "0 0 20px rgba(212,175,55,0.5)",
          }}
        >
          From Luminia Group
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: "clamp(0.75rem, 1.4vw, 1rem)",
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.08em",
            marginBottom: "2rem",
            maxWidth: "480px",
            lineHeight: 1.6,
          }}
        >
          {festival.subtext}
        </div>

        {/* Divider dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.6rem",
            marginBottom: "1.5rem",
          }}
        >
          {festival.colors.slice(0, 7).map((color, i) => (
            <div
              key={color}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: color,
                boxShadow: `0 0 8px ${color}`,
                animation: `festivalFloat ${2 + i * 0.3}s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Dismiss button */}
        <button
          type="button"
          onClick={() => {
            setFadeOut(true);
            setTimeout(() => setVisible(false), 800);
          }}
          style={{
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.15em",
            fontFamily: "Cormorant Garamond, Georgia, serif",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          Click anywhere to continue
        </button>
      </div>
    </div>
  );
};

export default FestivalOverlay;
