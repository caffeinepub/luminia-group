import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WelcomePopup from './components/WelcomePopup';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ManifestoSection from './components/ManifestoSection';
import AssuredToursSection from './components/AssuredToursSection';
import LuminiaCapturesSection from './components/LuminiaCapturesSection';
import LuminiaTechLabsSection from './components/LuminiaTechLabsSection';
import ComingSoonSection from './components/ComingSoonSection';
import GSTServicesSection from './components/GSTServicesSection';
import Footer from './components/Footer';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen" style={{ background: 'oklch(0.08 0.01 60)' }}>
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
    </QueryClientProvider>
  );
}
