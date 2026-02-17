export function StatsSection() {
  const stats = [
    { label: '14.2M+', value: 'Happy Customers', icon: '😊' },
    { label: '98%', value: 'Customer Satisfaction', icon: '⭐' },
    { label: '2.3M+', value: 'Reviews This Year', icon: '📝' },
    { label: '24/7', value: 'Customer Support', icon: '💬' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-white text-center mb-12 animate-slideInUp">Why Choose Us?</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-8 border border-slate-600 hover:border-amber-400 transition text-center card-hover animate-slideInUp hover-lift text-slate-5"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {/* [BUG - TYPO: 'text-slate-5' in className is invalid Tailwind (should be text-slate-500)]
               [FIX: Change text-slate-5 to text-slate-500] */}
            <div className="text-5xl mb-4 group-hover:animate-float">🎁</div>
            <p className="text-3xl font-bold text-amber-400 mb-2">{stat.label}</p>
            <p className="text-slate-300">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
