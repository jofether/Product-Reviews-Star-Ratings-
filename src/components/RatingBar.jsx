export function RatingBar({ rating, count, total }) {
  const percentage = (count / total) * 100;
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="text-sm font-medium text-gray-700 w-8">{rating}★</span>
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm text-gray-600 w-12 text-right">{count}</span>
    </div>
  );
}
