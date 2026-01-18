import React from 'react';
import { ArrowLeft, Play, Sparkles, MessageCircle } from 'lucide-react';
import BeforeAfterGallery from './BeforeAfterGallery';
import ContactModal from './ContactModal';

interface DemoPageProps {
  onNavigateToLanding: () => void;
}

export default function DemoPage({ onNavigateToLanding }: DemoPageProps) {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={onNavigateToLanding}
          className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al inicio</span>
        </button>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Resultados Reales</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Galería del Antes y Después: <br />
          <span className="text-purple-600">El impacto de YEIA.</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Mira cómo transformamos fotos de catálogo aburridas en contenido que vende.
        </p>
      </div>

      <BeforeAfterGallery />

      {/* Contact Button Section */}
      <div className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:from-purple-700 hover:to-pink-700 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Contactanos por WhatsApp
          </button>
        </div>
      </div>

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