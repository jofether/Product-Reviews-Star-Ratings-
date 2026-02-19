import { RatingBar } from './RatingBar';

export function RatingBreakdown({ ratingCounts, averageRating, totalReviews }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
      <h3 className="text-2xl font-bold text-slate-800 mb-8">Rating Breakdown</h3>
        <div className="space-y-3 mb-8">
          {[5, 4, 3, 2, 1].map((rating) => (
            <RatingBar 
              key={rating}
              rating={rating} 
              count={ratingCounts[rating]} 
              total={totalReviews}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-700">
          <div className="text-center">
            <p className="text-3xl font-bold text-amber-400">{averageRating}</p>
            <p className="text-slate-400 text-sm mt-1">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-400">94%</p>
            <p className="text-slate-400 text-sm mt-1">Would Recommend</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">4.2★</p>
            <p className="text-slate-400 text-sm mt-1">Quality Score</p>
          </div>
        </div>
      </div>
    </div>
  );
}
