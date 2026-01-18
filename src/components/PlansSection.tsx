import React from 'react';
import { Sparkles, Zap, Crown, Check } from 'lucide-react';

interface PlansSectionProps {
  onOpenContactModal: () => void;
}

export default function PlansSection({ onOpenContactModal }: PlansSectionProps) {
  const plans = [
    {
      name: 'BÁSICO',
      icon: Sparkles,
      contents: 10,
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      features: [
        '10 contenidos por entrega',
        'Videos para Instagram & TikTok',
        'Optimización con IA',
        'Métricas básicas',
        'Soporte por WhatsApp'
      ],
      recommended: false
    },
    {
      name: 'MEDIUM',
      icon: Zap,
      contents: 20,
      color: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-300',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      features: [
        '20 contenidos por entrega',
        'Videos para Instagram & TikTok',
        'Optimización avanzada con IA',
        'Análisis de métricas completo',
        'Estrategia de contenido',
        'Soporte prioritario'
      ],
      recommended: true
    },
    {
      name: 'BLACK',
      icon: Crown,
      contents: 60,
      color: 'from-gray-800 to-black',
      borderColor: 'border-yellow-300',
      bgColor: 'bg-gradient-to-br from-gray-50 to-yellow-50',
      iconBg: 'bg-gradient-to-br from-yellow-100 to-yellow-200',
      iconColor: 'text-gray-900',
      features: [
        '60 contenidos por entrega',
        'Videos premium para todas las redes',
        'IA + Editor dedicado',
        'Dashboard de métricas en tiempo real',
        'Estrategia personalizada',
        'Soporte VIP 24/7',
        'Consultoría de redes sociales'
      ],
      recommended: false
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Planes Flexibles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Elegí el plan perfecto para tu tienda
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Desde negocios que recién empiezan hasta tiendas que quieren dominar las redes sociales
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative ${plan.bgColor} rounded-2xl p-6 sm:p-8 border-2 ${plan.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.recommended ? 'lg:scale-105 ring-4 ring-purple-200' : ''
                }`}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg whitespace-nowrap">
                    ⭐ MÁS POPULAR
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 ${plan.iconBg} rounded-2xl flex items-center justify-center mb-6 ${
                  plan.recommended ? 'shadow-lg' : ''
                }`}>
                  <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${plan.iconColor}`} />
                </div>

                {/* Plan Name */}
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                  PLAN {plan.name}
                </h3>

                {/* Contents Count */}
                <div className="mb-6">
                  <p className="text-4xl sm:text-5xl font-bold text-gray-900">{plan.contents}</p>
                  <p className="text-sm sm:text-base text-gray-600">contenidos</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 ${plan.iconColor} flex-shrink-0 mt-0.5`} />
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={onOpenContactModal}
                  className={`w-full py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-purple-300'
                  }`}
                >
                  Quiero contactar más
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-purple-100">
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            ¿No estás seguro cuál plan elegir? <span className="font-semibold text-purple-600">Hablemos por WhatsApp</span> y te ayudamos a encontrar la mejor opción para tu negocio.
          </p>
          <button
            onClick={onOpenContactModal}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold text-base sm:text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg"
          >
            💬 Consultar por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}