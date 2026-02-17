import React, { useState } from 'react';
import { StarRating } from './StarRating';

export function ReviewCard({ name, rating, text, date, verified = false, helpful = 0, avatar }) {
  const [liked, setLiked] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(helpful);
  
  const avatarColors = ['bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-green-500', 'bg-orange-500'];
  const bgColor = avatar || avatarColors[Math.floor(Math.random() * avatarColors.length)];
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 card-hover group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4 flex-1">
          <div className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 smooth-transition`}>
            {name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900">{name}</h3>
              {verified && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-200">
                  ✓ Verified Purchase
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        
        <div className="flex gap-3 flex-shrink-0">
          <button 
            onClick={() => setLiked(!liked)}
            className={`p-2 rounded-lg transition text-lg ${liked ? 'bg-red-50 text-red-600 scale-110' : 'bg-gray-100 text-gray-500 hover:text-red-600'} smooth-transition`}
          >
            {liked ? '❤️' : '🤍'}
          </button>
          <button className="p-2 rounded-lg bg-gray-100 text-gray-500 hover:text-gray-700 transition text-lg hover:scale-110 smooth-transition">
            📤
          </button>
        </div>
      </div>
      
      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <StarRating key={i} filled={i <= rating} />
        ))}
      </div>
      
      <p className="text-gray-700 leading-relaxed mb-4">{text}</p>
      
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <button 
          onClick={() => setHelpfulCount(helpfulCount + 1)}
          className="hover:text-gray-700 font-medium transition hover:bg-gray-100 px-3 py-1 rounded-md smooth-transition"
        >
          Helpful ({helpfulCount})
        </button>
        <button className="hover:text-gray-700 font-medium transition hover:bg-gray-100 px-3 py-1 rounded-md smooth-transition">
          Not Helpful
        </button>
      </div>
    </div>
  );
}
