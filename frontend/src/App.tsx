import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ManifestoSection from './components/ManifestoSection';
import SubsidiaryGrid from './components/SubsidiaryGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-ivory">
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
