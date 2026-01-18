import React from 'react';
import { Sparkles, Play, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './ui-utils/ImageWithFallback';

interface HeroSectionProps {
  onNavigateToDemo: () => void;
  onOpenContactModal: () => void;
}

export default function HeroSection({ onNavigateToDemo, onOpenContactModal }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">IA para tiendas de ropa en CABA</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Tu catálogo de ropa, convertido en contenido viral por IA
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-4 text-purple-100">
              Automático y sin gastar una fortuna.
            </p>
            
            <p className="text-base sm:text-lg mb-8 text-purple-50 max-w-xl mx-auto lg:mx-0">
              Delega la creación de videos para Instagram y TikTok. Resultados medibles para tu local físico en CABA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onNavigateToDemo}
                className="group bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all duration-300 shadow-2xl hover:shadow-3xl inline-flex items-center justify-center gap-3 ring-4 ring-white/30 hover:ring-white/50"
              >
                <Play className="w-5 h-5" />
                VER DEMO
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              
              <button
                onClick={onOpenContactModal}
                className="group bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Quiero más INFO
              </button>
            </div>
            
            <p className="text-sm text-purple-100 mt-6 flex items-center gap-2 justify-center lg:justify-start">
              <Sparkles className="w-4 h-4" />
              Ver ejemplos reales de transformación
            </p>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1599012307530-d163bd04ecab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzdG9yZXxlbnwxfHx8fDE3Njg3MzQ2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=website&utm_medium=referral"
                alt="Fashion store transformation"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              
              {/* Floating badges */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <p className="text-sm font-semibold text-purple-600">IA Generativa</p>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <p className="text-sm font-semibold text-pink-600">Contenido Viral</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}