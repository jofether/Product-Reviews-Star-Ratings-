import { useState } from 'react';
import { ReviewCard } from './ReviewCard';

export function ReviewsList({ reviews }) {
  const [sortBy, setSortBy] = useState('recent');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
        {/* [BUG - LAYOUT: Missing 'flex' class, flex-col won't work properly]
           [FIX: Change to 'flex flex-col md:flex-row'] */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Customer Reviews</h2>
          <p className="text-slate-400">Real feedback from verified purchases</p>
        </div>
        
        <div className="flex gap-4 flex-wrap">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-amber-400 focus:outline-none transition"
          >
            <option value="recent">Most Recent</option>
            <option value="helpful">Most Helpful</option>
            <option value="highest">Highest Rated</option>
            <option value="lowest">Lowest Rated</option>
          </select>
          
          <button className="flex items-center gap-2 bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 hover:border-amber-400 transition">
            🔍
            Filter
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="border-2 border-amber-400 text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all">
          Load More Reviews
        </button>
      </div>
    </div>
  );
}
