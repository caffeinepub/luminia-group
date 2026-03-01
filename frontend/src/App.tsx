import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ManifestoSection from "./components/ManifestoSection";
import AssuredToursSection from "./components/AssuredToursSection";
import LuminiaCapturesSection from "./components/LuminiaCapturesSection";
import LuminiaTechLabsSection from "./components/LuminiaTechLabsSection";
import ComingSoonSection from "./components/ComingSoonSection";
import GSTServicesSection from "./components/GSTServicesSection";
import Footer from "./components/Footer";
import WelcomePopup from "./components/WelcomePopup";

export default function App() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>
      <WelcomePopup />
      <Navigation />
      <main>
        <HeroSection />
        <ManifestoSection />
        <AssuredToursSection />
        <LuminiaCapturesSection />
        <LuminiaTechLabsSection />
        <ComingSoonSection />
        <GSTServicesSection />
      </main>
      <Footer />
    </div>
  );
}
