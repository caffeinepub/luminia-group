import React from "react";
import AssuredToursSection from "./components/AssuredToursSection";
import DiscountCountdown from "./components/DiscountCountdown";
import FestivalOverlay from "./components/FestivalOverlay";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LuminiaCapturesSection from "./components/LuminiaCapturesSection";
import LuminiaGadgetsSection from "./components/LuminiaGadgetsSection";
import LuminiaTechLabsSection from "./components/LuminiaTechLabsSection";
import ManifestoSection from "./components/ManifestoSection";
import ModaVestraSection from "./components/ModaVestraSection";
import Navigation from "./components/Navigation";
import PaymentSection from "./components/PaymentSection";
import SubsidiaryGrid from "./components/SubsidiaryGrid";
import VelocityVogueSection from "./components/VelocityVogueSection";
import WelcomePopup from "./components/WelcomePopup";

function App() {
  return (
    <>
      {/* Auto festival overlay — renders only during active Indian festivals */}
      <FestivalOverlay />

      {/* Welcome popup */}
      <WelcomePopup />

      {/* Main page content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <Navigation />
        <main>
          <HeroSection />
          <DiscountCountdown />
          <ManifestoSection />
          <SubsidiaryGrid />
          {/* Product brands — shown first */}
          <LuminiaGadgetsSection />
          <ModaVestraSection />
          <VelocityVogueSection />
          {/* Service brands — shown last */}
          <AssuredToursSection />
          <LuminiaCapturesSection />
          <LuminiaTechLabsSection />
          <PaymentSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
