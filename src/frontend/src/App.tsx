import React from "react";
import AssuredToursSection from "./components/AssuredToursSection";
import ComingSoonSection from "./components/ComingSoonSection";
import DiscountCountdown from "./components/DiscountCountdown";
import FestivalOverlay from "./components/FestivalOverlay";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LuminiaCapturesSection from "./components/LuminiaCapturesSection";
import LuminiaTechLabsSection from "./components/LuminiaTechLabsSection";
import ManifestoSection from "./components/ManifestoSection";
import Navigation from "./components/Navigation";
import PaymentSection from "./components/PaymentSection";
import SubsidiaryGrid from "./components/SubsidiaryGrid";
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
          <AssuredToursSection />
          <LuminiaCapturesSection />
          <LuminiaTechLabsSection />
          <ComingSoonSection />
          <PaymentSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
