import React from 'react';
import { Play, Sparkles, TrendingUp, Music } from 'lucide-react';
import { ImageWithFallback } from './ui-utils/ImageWithFallback';

export default function BeforeAfterGallery() {
  const comparisons = [
    {
      id: 1,
      before: {
        image: 'https://images.unsplash.com/photo-1592545448088-8b116b610724?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGVzJTIwaGFuZ2VyJTIwc2ltcGxlfGVufDF8fHx8MTc2ODc2MDI0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=website&utm_medium=referral',
        label: 'Antes: Foto de catálogo standard'
      },
      after: {
        image: 'https://images.unsplash.com/photo-1750857740536-2c5d9c3dd8ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjB1cmJhbiUyMHN0cmVldHxlbnwxfHx8fDE3Njg3NjAyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=website&utm_medium=referral',
        label: 'Después: Video dinámico generado por YEIA'
      },
      description: 'Agregamos movimiento, contexto urbano y música en tendencia automáticamente.',
      product: 'Remera básica'
    },
    {
      id: 2,
      before: {
        image: 'https://images.unsplash.com/photo-1666358052008-a9a1ecda7885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGNhdGFsb2clMjBwcm9kdWN0fGVufDF8fHx8MTc2ODc2MDI0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=website&utm_medium=referral',
        label: 'Antes: Foto plana de producto'
      },
      after: {
        image: 'https://images.unsplash.com/photo-1599012307530-d163bd04ecab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzdG9yZXxlbnwxfHx8fDE3Njg3MzQ2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=website&utm_medium=referral',
        label: 'Después: Contenido lifestyle con modelo'
      },
      description: 'Transformamos productos estáticos en escenas de estilo de vida que generan aspiración.',
      product: 'Jeans de moda'
    },
    {
      id: 3,
      before: {
        image: 'https://images.unsplash.com/photo-1666358052008-a9a1ecda7885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGNhdGFsb2clMjBwcm9kdWN0fGVufDF8fHx8MTc2ODc2MDI0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=website&utm_medium=referral',
        label: 'Antes: Imagen sin contexto'
      },
      after: {
        image: 'https://images.unsplash.com/photo-1759393852314-59dc00faeed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3Njg3NjAyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=website&utm_medium=referral',
        label: 'Después: Video viral con efectos'
      },
      description: 'Añadimos transiciones, texto animado y efectos que capturan la atención en segundos.',
      product: 'Accesorios premium'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 sm:space-y-16">
          {comparisons.map((comparison, index) => (
            <div key={comparison.id} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
              {/* Product Label */}
              <div className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full mb-6 sm:mb-8">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm sm:text-base font-semibold">{comparison.product}</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                {/* Before */}
                <div className="group">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg mb-4 bg-white">
                    <ImageWithFallback
                      src={comparison.before.image}
                      alt={comparison.before.label}
                      className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-semibold shadow-lg">
                      ❌ Antes
                    </div>
                  </div>
                  <p className="text-center text-sm sm:text-base font-semibold text-gray-700">{comparison.before.label}</p>
                </div>

                {/* After */}
                <div className="group">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl mb-4 bg-gradient-to-br from-purple-600 to-pink-600 p-1">
                    <div className="relative rounded-lg sm:rounded-xl overflow-hidden">
                      <ImageWithFallback
                        src={comparison.after.image}
                        alt={comparison.after.label}
                        className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover"
                      />
                      {/* Video play overlay */}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                          <Play className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600 ml-1" />
                        </div>
                      </div>
                      {/* Dynamic elements badges */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <div className="bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 text-green-600" />
                          <span className="hidden sm:inline">+350% engagement</span>
                          <span className="sm:hidden">+350%</span>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Music className="w-3 h-3 text-pink-600" />
                          <span>Audio viral</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-semibold shadow-lg">
                      ✨ Después
                    </div>
                  </div>
                  <p className="text-center text-sm sm:text-base font-semibold text-purple-700">{comparison.after.label}</p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-purple-200 mb-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-2">Transformación con IA</h4>
                    <p className="text-sm sm:text-base text-gray-600">{comparison.description}</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-white rounded-xl border border-purple-100">
                  <p className="text-xl sm:text-2xl font-bold text-purple-600">2-5x</p>
                  <p className="text-xs sm:text-sm text-gray-600">Más ventas</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white rounded-xl border border-purple-100">
                  <p className="text-xl sm:text-2xl font-bold text-purple-600">350%</p>
                  <p className="text-xs sm:text-sm text-gray-600">Más alcance</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white rounded-xl border border-purple-100">
                  <p className="text-xl sm:text-2xl font-bold text-purple-600">24h</p>
                  <p className="text-xs sm:text-sm text-gray-600">Entrega</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">El Impacto es Real</h3>
          <p className="text-base sm:text-xl mb-8 text-purple-100">
            Estas transformaciones representan el tipo de contenido que genera ventas reales para tiendas de ropa en CABA.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div>
              <p className="text-3xl sm:text-4xl font-bold mb-2">+250%</p>
              <p className="text-sm sm:text-base text-purple-100">Engagement promedio</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold mb-2">3-5x</p>
              <p className="text-sm sm:text-base text-purple-100">ROI vs CM tradicional</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold mb-2">24-48h</p>
              <p className="text-sm sm:text-base text-purple-100">Tiempo de producción</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold mb-2">100%</p>
              <p className="text-sm sm:text-base text-purple-100">Optimizado para algoritmos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}