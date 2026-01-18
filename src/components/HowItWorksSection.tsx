import React from 'react';
import { Upload, Wand2, Rocket } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Nos das acceso a tu catálogo',
      description: 'Compartís fotos y videos de tus productos. Simple y rápido.',
      icon: Upload,
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      title: 'YEIA genera videos y posts optimizados con IA',
      description: 'Nuestra IA transforma tu catálogo en contenido viral para Instagram y TikTok.',
      icon: Wand2,
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '03',
      title: 'Recibes el contenido listo para publicar y vender',
      description: 'Te entregamos paquetes de videos listos, con métricas y estrategia incluida.',
      icon: Rocket,
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Cómo funciona
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Tres pasos simples para transformar tu presencia digital
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-300 to-transparent z-0"></div>
                )}

                <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 z-10 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-purple-50 rounded-xl p-4 sm:p-6 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">24-48h</p>
            <p className="text-xs sm:text-sm text-gray-600">Tiempo de entrega</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-4 sm:p-6 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">5-10x</p>
            <p className="text-xs sm:text-sm text-gray-600">Más engagement</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-4 sm:p-6 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">100%</p>
            <p className="text-xs sm:text-sm text-gray-600">Optimizado para IA</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-4 sm:p-6 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">CABA</p>
            <p className="text-xs sm:text-sm text-gray-600">Enfocado en tu mercado</p>
          </div>
        </div>
      </div>
    </section>
  );
}