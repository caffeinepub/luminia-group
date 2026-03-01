import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ManifestoSection from './components/ManifestoSection';
import SubsidiaryGrid from './components/SubsidiaryGrid';
import Footer from './components/Footer';
import WelcomePopup from './components/WelcomePopup';

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-ivory">
      <WelcomePopup />
      <Navigation />
      <main>
        <HeroSection />
        <ManifestoSection />
        <SubsidiaryGrid />
      </main>
      <Footer />
    </div>
  );
}
