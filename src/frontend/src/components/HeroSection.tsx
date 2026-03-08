import type React from "react";
import { useEffect, useRef } from "react";

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollY = window.scrollY;
        const bg = sectionRef.current.querySelector(".hero-bg") as HTMLElement;
        if (bg) {
          bg.style.transform = `translateY(${scrollY * 0.4}px)`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#050508",
      }}
    >
      {/* Background image with parallax */}
      <div
        className="hero-bg"
        style={{
          position: "absolute",
          inset: "-20%",
          backgroundImage: "url(/assets/generated/hero-bg.dim_1920x1080.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
          willChange: "transform",
        }}
      />

      {/* Deep black gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(5,5,8,0.5) 0%, rgba(5,5,8,0.6) 60%, rgba(5,5,8,0.97) 100%)",
        }}
      />

      {/* Subtle gold radial glow — royal, no colour wash */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(212,175,55,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          textAlign: "center",
          padding: "0 2rem",
          maxWidth: 900,
        }}
      >
        {/* Logo */}
        <div
          style={{
            marginBottom: "2.5rem",
            animation: "logoFadeIn 1.5s ease forwards",
          }}
        >
          <img
            src="/assets/luminia-logo.jpeg"
            alt="Luminia"
            style={{
              height: "clamp(60px, 10vw, 100px)",
              objectFit: "contain",
              filter: "drop-shadow(0 0 30px rgba(212,175,55,0.35))",
            }}
          />
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontWeight: 400,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(212,175,55,0.75)",
            textShadow: "0 0 20px rgba(212,175,55,0.4)",
            marginBottom: "1.5rem",
            animation: "logoFadeIn 1.5s ease 0.3s both",
          }}
        >
          Est. 2026 · India
        </p>

        {/* Main heading */}
        <h1
          style={
            {
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 700,
              fontStyle: "italic",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              background:
                "linear-gradient(135deg, #D4AF37, #FFD700, #B8960C, #FFD700, #D4AF37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% auto",
              animation:
                "festivalGradientShift 4s linear infinite, logoFadeIn 1.5s ease 0.5s both",
            } as React.CSSProperties
          }
        >
          Illuminate Every Horizon
        </h1>

        {/* Sub-tagline */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontWeight: 300,
            letterSpacing: "0.15em",
            color: "rgba(212,175,55,0.55)",
            textShadow: "0 0 20px rgba(212,175,55,0.25)",
            marginBottom: "3rem",
            animation: "logoFadeIn 1.5s ease 0.7s both",
          }}
        >
          A Multi-Vertical Enterprise Group
        </p>

        {/* CTA buttons — royal gold */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "logoFadeIn 1.5s ease 0.9s both",
          }}
        >
          <a
            href="#subsidiaries"
            data-ocid="hero.primary_button"
            style={{
              display: "inline-block",
              padding: "0.9rem 2.5rem",
              background: "linear-gradient(135deg, #D4AF37, #B8960C)",
              color: "#050508",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(212,175,55,0.35)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 50px rgba(212,175,55,0.6)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 30px rgba(212,175,55,0.35)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
            }}
          >
            Explore Our World
          </a>
          <a
            href="#manifesto"
            data-ocid="hero.secondary_button"
            style={{
              display: "inline-block",
              padding: "0.9rem 2.5rem",
              background: "transparent",
              color: "rgba(212,175,55,0.85)",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "1px solid rgba(212,175,55,0.5)",
              cursor: "pointer",
              boxShadow: "0 0 20px rgba(212,175,55,0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 40px rgba(212,175,55,0.3)";
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "rgba(212,175,55,0.08)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(212,175,55,0.8)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 20px rgba(212,175,55,0.1)";
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "transparent";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(212,175,55,0.5)";
            }}
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          animation: "logoPulse 2s ease-in-out infinite",
        }}
      >
        <span
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(212,175,55,0.45)",
            fontFamily: "Cormorant Garamond, Georgia, serif",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background:
              "linear-gradient(to bottom, rgba(212,175,55,0.5), transparent)",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
