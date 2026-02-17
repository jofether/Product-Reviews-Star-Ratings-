import { StarRating } from './StarRating';

export function FeaturedReviewsSection() {
  const featured = [
    {
      quote: "This product completely changed my life. I wear it every single day and it's become my favorite item!",
      author: "Jessica Taylor",
      role: "Fashion Blogger",
      rating: 5,
      avatar: '💁‍♀️'
    },
    {
      quote: "Unbelievable quality for the price. I've recommended this to all my friends and family members.",
      author: "Michael Chen",
      role: "Tech Enthusiast",
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      quote: "Customer service was amazing! They went above and beyond to make sure I was 100% satisfied.",
      author: "Sarah Johnson",
      role: "Small Business Owner",
      rating: 5,
      avatar: '👩‍🎨'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-white text-center mb-12 animate-slideInUp">Featured Customer Stories</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {featured.map((review, idx) => (
          <div 
            key={idx} 
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-lg card-hover hover-lift animate-slideInUp"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarRating key={i} filled={i <= review.rating} />
              ))}
            </div>
            <p className="text-amber-50 italic mb-6 text-lg">"{review.quote}"</p>
            {/* [BUG - CONTRAST: text-amber-50 on light amber background makes text nearly invisible]
               [FIX: Change text-amber-50 to text-gray-900] */}
            <div className="flex items-center gap-3">
              <div className="text-4xl group-hover:animate-float">{review.avatar}</div>
              <div>
                <p className="font-semibold text-gray-900">{review.author}</p>
                <p className="text-sm text-gray-600">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
