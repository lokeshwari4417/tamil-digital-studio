import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { GoogleRating } from './components/GoogleRating';
import { About } from './components/About';
import { Services } from './components/Services';
import { StudioHighlights } from './components/StudioHighlights';
import { PrintingSection } from './components/PrintingSection';
import { FeaturedWork } from './components/FeaturedWork';
import { Portfolio } from './components/Portfolio';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { Packages } from './components/Packages';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { MobileBottomNav } from './components/MobileBottomNav';
import { PwaInstallPrompt } from './components/PwaInstallPrompt';
import { IosInstallModal } from './components/IosInstallModal';
import { PwaProvider } from './context/PwaContext';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'packages', 'process', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PwaProvider>
      {/* Signature Preloader Screen */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Main Website Flow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 10 : 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="min-h-screen bg-surface-light text-charcoal flex flex-col font-sans selection:bg-brand-600 selection:text-white pb-16 lg:pb-0"
      >
        {/* Sticky Header Navbar */}
        <Navbar
          activeSection={activeSection}
          onNavigate={scrollToSection}
          onBookClick={() => scrollToSection('contact')}
        />

        {/* Main Page Sections */}
        <main className="flex-1">
          <Hero
            onBookClick={() => scrollToSection('contact')}
            onExploreClick={() => scrollToSection('portfolio')}
          />
          <TrustStats />
          <GoogleRating />
          <About onLearnMoreClick={() => scrollToSection('services')} />
          <Services />
          <StudioHighlights />
          <PrintingSection />
          <FeaturedWork onViewPortfolioClick={() => scrollToSection('portfolio')} />
          <Portfolio />
          <WhyChooseUs />
          <Process />
          <Packages onBookClick={() => scrollToSection('contact')} />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>

        {/* Footer */}
        <Footer onNavigate={scrollToSection} />

        {/* Floating Action Buttons */}
        <WhatsAppButton />
        <ScrollToTop />

        {/* Mobile App Bottom Navigation */}
        <MobileBottomNav
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />

        {/* PWA Install Banner & iOS Modal */}
        <PwaInstallPrompt />
        <IosInstallModal />
      </motion.div>
    </PwaProvider>
  );
}

export default App;
