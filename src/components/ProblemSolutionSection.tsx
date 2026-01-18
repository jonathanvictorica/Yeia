import React from 'react';
import { DollarSign, Clock, Frown, AlertCircle, Home, CheckCircle, Sparkles, TrendingUp } from 'lucide-react';

export default function ProblemSolutionSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            De la frustración a las ventas
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Conocemos el problema. Tenemos la solución.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Column 1: The Pain */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-red-200 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <DollarSign className="w-7 h-7 sm:w-8 sm:h-8 text-red-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-600">El Problema</h3>
            <p className="text-base sm:text-lg font-semibold mb-4">CMs costosos o falta de tiempo.</p>
            <ul className="space-y-3 text-sm sm:text-base text-gray-600">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Contratar un community manager cuesta $200k-400k/mes</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>No tienes tiempo para crear contenido constante</span>
              </li>
              <li className="flex items-start gap-2">
                <Frown className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>El costo es impredecible y no garantiza resultados</span>
              </li>
            </ul>
          </div>

          {/* Column 2: The Struggle */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-yellow-200 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <Home className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-yellow-600">La Lucha</h3>
            <p className="text-base sm:text-lg font-semibold mb-4">Intentos fallidos y contenido casero inconsistente.</p>
            <ul className="space-y-3 text-sm sm:text-base text-gray-600">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span>Contenido amateur que no genera engagement</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span>Publicaciones inconsistentes y sin estrategia</span>
              </li>
              <li className="flex items-start gap-2">
                <Frown className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span>Bajo ROI en tus esfuerzos de redes sociales</span>
              </li>
            </ul>
          </div>

          {/* Column 3: The YEIA Solution */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 shadow-xl text-white transform hover:scale-105 transition-transform sm:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">La Solución YEIA</h3>
            <p className="text-base sm:text-lg font-semibold mb-4">Paquetes de videos por producto, métricas claras y delegación total.</p>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                <span>Videos profesionales automatizados con IA</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                <span>Contenido constante, optimizado para algoritmos</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                <span>Métricas claras y enfoque en conversión a ventas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}