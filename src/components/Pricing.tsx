import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Pro',
      price: '$199',
      period: '/month',
      features: [
        'WhatsApp Business API integration',
        'Audio & image message support',
        'CRM integration',
        'Lead qualification & scheduling',
        'Property information management',
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: '$299',
      period: '/month',
      features: [
        'Everything in Pro',
        'Human agent interface',
        'Take control anytime',
        'Advanced conversation flows',
        'Custom branding',
        'Priority support',
        'Advanced analytics dashboard'
      ],
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing 💰
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your real estate business needs
          </p>
          <div className="bg-purple-100 border border-purple-200 rounded-lg p-4 max-w-3xl mx-auto">
            <p className="text-purple-800 font-semibold">
              💡 Early Adopter Special: <span className="text-purple-900">$600 one-time setup fee</span> applies to all plans
            </p>
            <p className="text-purple-700 text-sm mt-1">
              (Normally $1,000 - Save $400 with this limited-time offer)
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-lg p-8 relative transition-all duration-300 transform hover:scale-105 ${
                plan.popular ? 'border-2 border-purple-500 shadow-2xl' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  plan.popular 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;