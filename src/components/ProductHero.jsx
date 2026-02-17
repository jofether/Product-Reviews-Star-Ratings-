import { StarRating } from './StarRating';

export function ProductHero({ averageRating, totalReviews }) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-col-2 gap-12 items-center">
          {/* [BUG - LAYOUT: grid-col-2 should be grid-cols-2, causes single column layout]
             [FIX: Change md:grid-col-2 to md:grid-cols-2] */}
          {/* Product Image */}
          {/* [BUG - LAYERS: absolute positioning without top/left causes image to overlap incorrectly]
             [FIX: Change 'absolute' back to 'relative'] */}
          <div className="absolute animate-slideInUp">
            <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 p-8 flex items-center justify-center shadow-2xl hover-lift">
              <div className="text-center">
                <div className="text-6xl mb-4 animate-float">👕</div>
                <p className="text-slate-600 font-semibold">Premium Cotton Blend</p>
              </div>
            </div>
            {/* [BUG - LAYERS: negative positioning misaligned]
               [FIX: Change to 'absolute -bottom-4 -right-4'] */}
            <div className="absolute -bottom-12 -right-12 bg-gradient-to-r from-amber-400 to-orange-400 px-4 py-2 rounded-lg text-slate-900 font-bold shadow-lg animate-bounce">
              ⭐ #1 Bestseller
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-slideInUp" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Premium Cotton Essentials</h2>
            <p className="text-lg text-slate-300 mb-6">Handcrafted comfort meets modern style. Made from 100% organic cotton that breathes beautifully and lasts for years.</p>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="glass-effect rounded-lg p-4">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarRating key={i} filled={i <= Math.round(averageRating)} />
                  ))}
                </div>
                <p className="text-white font-semibold">{averageRating} out of 5</p>
              </div>
              <div className="border-l border-slate-600 pl-6">
                <p className="text-3xl font-bold text-white">{totalReviews.toLocaleString()}</p>
                <p className="text-slate-400">Reviews</p>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all mb-4 hover:scale-105 active:scale-95">
              View on Store
            </button>
            <p className="text-slate-400 text-sm">⭐ Free shipping on orders over $50</p>
          </div>
        </div>
      </div>
    </div>
  );
}
