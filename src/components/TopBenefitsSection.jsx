import { StarRating } from './StarRating';

export function TopBenefitsSection() {
  const benefits = [
    {
      icon: '🎯',
      title: 'Premium Quality',
      description: 'Handpicked materials sourced from the finest suppliers worldwide'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast Shipping',
      description: 'Get your order within 2-3 business days, guaranteed'
    },
    {
      icon: '🛡️',
      title: '100% Guarantee',
      description: 'Not satisfied? Full refund within 60 days, no questions asked'
    },
    {
      icon: '♻️',
      title: 'Eco-Friendly',
      description: 'Made with sustainable materials and ethical manufacturing'
    },
    {
      icon: '🎁',
      title: 'Gift Wrapping',
      description: 'Free premium gift wrapping for all your special occasions'
    },
    {
      icon: '🌟',
      title: 'Lifetime Support',
      description: 'Dedicated customer service team ready to help anytime'
    },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-900 py-16 border-y border-slate-700">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12 animate-slideInUp">What Makes Us Different?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition cursor-pointer border border-slate-600 hover:border-amber-400 card-hover animate-slideInUp bg-colr-slate-500"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-125 group-hover:animate-float smooth-transition">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 smooth-transition">{benefit.title}</h3>
              <p className="text-slate-300 group-hover:text-gray-100 smooth-transition">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
