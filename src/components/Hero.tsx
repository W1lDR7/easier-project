import React from 'react';
import { MessageCircle } from 'lucide-react';

const Hero = ({ onScrollToContact }) => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your 24/7 Real Estate Sales Assistant on{' '}
            <span className="text-purple-600">WhatsApp</span> 🏡
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Capture, qualify, and respond to leads instantly – without lifting a finger 💬
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={onScrollToContact}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Book a Free Trial Demo on Telegram
            </button>
          </div>
        </div>
        <div className="mt-16 animate-slideUp">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-2xl">
            <div className="bg-black rounded-xl overflow-hidden max-w-sm mx-auto">
              <div style={{ padding: '234.38% 0 0 0', position: 'relative' }}>
                <iframe 
                  src="https://player.vimeo.com/video/1120192009?badge=0&autopause=0&player_id=0&app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                  title="Agente inmobiliario"
                />
              </div>
            </div>
            <p className="mt-4 text-purple-700 font-semibold text-lg">Telegram AI Demo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;