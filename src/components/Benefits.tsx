import React from 'react';
import { Clock, TrendingUp, Bot, MessageCircle } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Never Miss a Lead',
      description: 'Your AI assistant works 24/7, capturing and responding to inquiries even while you sleep.'
    },
    {
      icon: TrendingUp,
      title: 'Close More Deals',
      description: 'Qualify leads instantly and schedule viewings automatically, increasing your conversion rates.'
    },
    {
      icon: Bot,
      title: 'Smart & Personalised',
      description: 'AI learns your style and property details to provide human-like, personalized responses.'
    },
    {
      icon: MessageCircle,
      title: 'Works on WhatsApp',
      description: 'Meet your clients where they are - on the world\'s most popular messaging platform.'
    }
  ];

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Real Estate Agents Love Our AI Assistant
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your real estate business with intelligent automation that never sleeps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4">{benefit.emoji}</div>
              <benefit.icon className="w-8 h-8 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;