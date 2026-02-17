import React from 'react';
import { Header } from './components/Header';
import { ProductHero } from './components/ProductHero';
import { RatingBreakdown } from './components/RatingBreakdown';
import { ReviewsList } from './components/ReviewsList';
import { Footer } from './components/Footer';
import { StatsSection } from './components/StatsSection';
import { TopBenefitsSection } from './components/TopBenefitsSection';
import { FeaturedReviewsSection } from './components/FeaturedReviewsSection';

function App() {
  const reviews = [
    {
      name: "Emily Selman",
      rating: 5,
      date: "February 14, 2026",
      text: "Absolutely stunning quality! The fabric feels premium, the color is vibrant, and the fit is perfect. I've purchased this item twice now. Shipping was fast and packaging was excellent. This is exactly what I was looking for!",
      verified: true,
      helpful: 342,
      avatar: 'bg-rose-500'
    },
    {
      name: "Hector Gibbons",
      rating: 4,
      date: "February 10, 2026",
      text: "Really good quality overall. The material is soft and durable, seems like it will last a long time. My only minor complaint is that shipping took about 2 weeks, but customer service was very responsive. Great value for money!",
      verified: true,
      helpful: 198,
      avatar: 'bg-blue-500'
    },
    {
      name: "Mark Edwards",
      rating: 2,
      date: "February 5, 2026",
      text: "The product itself is nice, but the sizing is way off from the description. I ordered a medium and it fits like extra small. The return process was easy though. I'd recommend checking the fit guide carefully before ordering.",
      verified: true,
      helpful: 156,
      avatar: 'bg-cyan-500'
    },
    {
      name: "Sophia Chen",
      rating: 5,
      date: "January 28, 2026",
      text: "This exceeded my expectations! The attention to detail is incredible. The colors are beautiful, the seams are perfectly aligned, and it arrived ahead of schedule. Definitely worth the investment. I'll be ordering more!",
      verified: true,
      helpful: 287,
      avatar: 'bg-amber-500'
    },
    {
      name: "James Wilson",
      rating: 4,
      date: "January 20, 2026",
      text: "Solid product. Quality is better than I expected at this price point. It's versatile and matches with almost everything in my wardrobe. Minor wrinkles from shipping but they came out with a quick press.",
      verified: true,
      helpful: 124,
      avatar: 'bg-green-500'
    },
    {
      name: "Rachel Morris",
      rating: 5,
      date: "January 15, 2026",
      text: "I'm so happy with this purchase! The material is breathable and comfortable for all-day wear. The design is elegant and timeless. I've gotten so many compliments. Will definitely be a repeat customer!",
      verified: true,
      helpful: 401,
      avatar: 'bg-purple-500'
    },
    {
      name: "David Kumar",
      rating: 3,
      date: "January 8, 2026",
      text: "It's okay. Nothing exceptional but not bad either. Does what it's supposed to do. The color was slightly different from the online photo - a bit more muted in person. Still decent quality.",
      verified: false,
      helpful: 89,
      avatar: 'bg-pink-500'
    },
    {
      name: "Lisa Anderson",
      rating: 5,
      date: "December 28, 2025",
      text: "Perfect! This is my third purchase and I keep coming back for a reason. The quality is consistent, the design is timeless, and the customer service is fantastic. Highly recommend to anyone on the fence!",
      verified: true,
      helpful: 512,
      avatar: 'bg-indigo-500'
    },
  ];
  
  const ratingCounts = {
    5: 1240,
    4: 340,
    3: 89,
    2: 45,
    1: 28
  };
  
  const totalReviews = Object.values(ratingCounts).reduce((a, b) => a + b, 0);
  const averageRating = (
    (5 * ratingCounts[5] + 4 * ratingCounts[4] + 3 * ratingCounts[3] + 2 * ratingCounts[2] + 1 * ratingCounts[1]) / totalReviews
  ).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <ProductHero averageRating={averageRating} totalReviews={totalReviews} />
      <StatsSection />
      <TopBenefitsSection />
      <RatingBreakdown ratingCounts={ratingCounts} averageRating={averageRating} totalReviews={totalReviews} />
      <FeaturedReviewsSection />
      <ReviewsList reviews={reviews} />
      <Footer />
    </div>
  );
}

export default App;
