import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { PlatformsSection } from '@/components/sections/PlatformsSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { TRLSection } from '@/components/sections/TRLSection';
import { ValidationSection } from '@/components/sections/ValidationSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';
import { TaraChatbot } from '@/components/chatbot/TaraChatbot';
import { GallerySection } from '@/components/sections/GallerySection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { DemoSection } from '@/components/sections/DemoSection';

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-24">
        <HeroSection />
        <DemoSection/>
        <AboutSection />
        <PlatformsSection />
        <TechnologySection />
        <TRLSection />
        <ValidationSection />
        <TeamSection />
        <PartnersSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <TaraChatbot />
    </div>
  );
};

export default Index;
