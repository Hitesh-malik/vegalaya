import React, { useEffect } from "react";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import FlavorQuizWidget from "./components/FlavorQuizWidget";
import ProductCategoryCards from "./components/ProductCategoryCards";
import BrewBetterFuture from "./components/BrewBetterFuture";
import TestimonialBanner from "./components/TestimonialBanner";
import KitchenStoriesSection from "./components/KitchenStoriesSection";
import SeasonalCampaigns from "./components/SeasonalCampaigns";
import Footer from "./components/Footer";

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductCategoryCards />
      <BrewBetterFuture />
      <Footer />
    </div>
  );
};

export default Homepage;
