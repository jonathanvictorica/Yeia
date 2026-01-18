import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

interface WhatsAppContactFormProps {
  variant?: 'light' | 'dark';
}

export default function WhatsAppContactForm({ variant = 'light' }: WhatsAppContactFormProps) {
  const [phone, setPhone] = useState('');
  const [storeName, setStoreName] = useState('');
  const [message, setMessage] = useState('Quiero saber más');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Hola! Soy ${storeName}.\nMi número: ${phone}\n\n${message}`
    );
    
    // WhatsApp API URL
    const whatsappNumber = '5491125780200'; // +54 11 2578 0200
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  const isDark = variant === 'dark';

  return (
    <section className={`py-12 sm:py-16 ${isDark ? 'bg-transparent' : 'bg-gradient-to-br from-purple-50 to-pink-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isDark && (
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Agenda tu prueba inicial y deja de perder ventas
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Contestamos por WhatsApp en minutos
            </p>
          </div>
        )}

        <div className={`${isDark ? 'bg-white/10 backdrop-blur-lg border-white/20' : 'bg-white'} rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 border`}>
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <MessageCircle className={`w-7 h-7 sm:w-8 sm:h-8 ${isDark ? 'text-white' : 'text-green-500'}`} />
            <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Conectemos por WhatsApp
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                Tu número de WhatsApp
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-500'}`}>
                  <span className="text-xl">🇦🇷</span>
                  <span className="text-sm sm:text-base">+54</span>
                </div>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="11 2578 0200"
                  required
                  className={`w-full pl-20 sm:pl-24 pr-4 py-3 sm:py-4 rounded-xl border-2 focus:outline-none focus:ring-4 transition-all text-base ${
                    isDark 
                      ? 'bg-white/10 border-white/30 text-white placeholder-white/60 focus:border-white focus:ring-white/20' 
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-purple-100'
                  }`}
                />
              </div>
            </div>

            {/* Store Name Input */}
            <div>
              <label htmlFor="storeName" className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                Nombre de tu tienda
              </label>
              <input
                type="text"
                id="storeName"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                placeholder="Ej: Boutique Fashion"
                required
                className={`w-full px-4 py-3 sm:py-4 rounded-xl border-2 focus:outline-none focus:ring-4 transition-all text-base ${
                  isDark 
                    ? 'bg-white/10 border-white/30 text-white placeholder-white/60 focus:border-white focus:ring-white/20' 
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-purple-100'
                }`}
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                Mensaje
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
                className={`w-full px-4 py-3 sm:py-4 rounded-xl border-2 focus:outline-none focus:ring-4 transition-all resize-none text-base ${
                  isDark 
                    ? 'bg-white/10 border-white/30 text-white placeholder-white/60 focus:border-white focus:ring-white/20' 
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-purple-100'
                }`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] ${
                isDark
                  ? 'bg-white text-purple-600 hover:bg-purple-50'
                  : 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
              }`}
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              Enviar mensaje por WhatsApp
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </form>

          <p className={`text-center mt-5 sm:mt-6 text-xs sm:text-sm ${isDark ? 'text-white/70' : 'text-gray-500'}`}>
            💬 Respuesta promedio en menos de 1 hora • Lunes a Viernes 9-19hs
          </p>
        </div>
      </div>
    </section>
  );
}