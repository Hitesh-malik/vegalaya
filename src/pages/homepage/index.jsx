import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FlavorQuizWidget from './components/FlavorQuizWidget';
import ProductCategoryCards from './components/ProductCategoryCards';
import TestimonialBanner from './components/TestimonialBanner';
import KitchenStoriesSection from './components/KitchenStoriesSection';
import SeasonalCampaigns from './components/SeasonalCampaigns';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Dynamic Product Showcase */}
      <HeroSection />

      {/* Flavor Discovery Quiz Widget */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-accent mb-4">
              Find Your Perfect Flavor Match
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Take our personalized quiz to discover VEEBA products that match your taste preferences
            </p>
          </div>
          <FlavorQuizWidget />
        </div>
      </section>

      {/* Taste the Difference - Product Categories */}
      <ProductCategoryCards />

      {/* Scrolling Testimonial Banner */}
      <TestimonialBanner />

      {/* VEEBA Kitchen Stories */}
      <KitchenStoriesSection />

      {/* Seasonal Campaign Banners */}
      <SeasonalCampaigns />

      {/* Footer with Quick Links */}
      <Footer />
    </div>
  );
};

export default Homepage;