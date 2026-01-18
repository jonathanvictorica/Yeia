import React, { useState } from 'react';
import { Sparkles, Clock, TrendingUp, ChevronRight, MessageCircle } from 'lucide-react';
import HeroSection from './HeroSection';
import ProblemSolutionSection from './ProblemSolutionSection';
import HowItWorksSection from './HowItWorksSection';
import PlansSection from './PlansSection';
import ContactModal from './ContactModal';

interface LandingPageProps {
  onNavigateToDemo: () => void;
}

export default function LandingPage({ onNavigateToDemo }: LandingPageProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <HeroSection 
        onNavigateToDemo={onNavigateToDemo} 
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <PlansSection onOpenContactModal={() => setIsContactModalOpen(true)} />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">© 2026 YEIA. Transformando catálogos en contenido viral.</p>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}