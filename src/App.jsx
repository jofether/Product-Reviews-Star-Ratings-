import React from 'react';

function Star({ filled }) {
  return (
    <svg 
      className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} 
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function ReviewCard({ name, rating, text, date }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
            {name.charAt(0)}
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-sm">{name}</h3>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
        
        {/* STAR CONTAINER */}
        {/* FUTURE BUG: Remove 'flex' here. Stars will stack vertically. */}
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} filled={i <= rating} />
          ))}
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 font-sans">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
             <h2 className="text-3xl font-bold text-gray-900">Customer Reviews</h2>
             <p className="text-gray-500 mt-1">Based on 1,240 reviews</p>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">Write a Review</button>
        </div>

        <div className="space-y-4">
          <ReviewCard 
            name="Emily Selman" 
            rating={5} 
            date="July 16, 2026"
            text="The texture of this fabric is amazing. It fits perfectly and the color is exactly as shown in the picture. Highly recommend!" 
          />
          <ReviewCard 
            name="Hector Gibbons" 
            rating={4} 
            date="July 12, 2026"
            text="Great quality for the price, but the shipping took a little longer than expected. Otherwise, a solid purchase." 
          />
          <ReviewCard 
            name="Mark Edwards" 
            rating={2} 
            date="July 08, 2026"
            text="I wanted to love this, but the sizing is completely off. I ordered a Medium and it feels like an Extra Small." 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
