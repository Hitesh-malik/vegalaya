import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "VegaMangoLassi",
      subtitle:
        "Naturally sweetened mango lassi — dairy-free, creamy & refreshing.",
      image: "/assets/images/vegaMangoLassi.jpg",
      cta: "Try Mango Magic",
      subtitle2: "Authentic Taste, Plant-Based Twist.",
    },

    {
      id: 2,
      title: "VegaBerryShake",
      subtitle: "Real berries blended into a smooth, dairy-free delight.",
      image: "/assets/images/vegaBerryShake.jpg",
      cta: "Explore Berry Shake",
      subtitle2: "Berrylicious. Nourishing. 100% Plant-Based.",
    },
    {
      id: 3,
      title: "VegaKesarChai",
      subtitle:
        "Aromatic saffron chai – vegan, soothing, and naturally indulgent.",
      image: "/assets/images/vegakesarchai.jpg",
      cta: "Sip the Bliss",
      subtitle2: "Spiced with Tradition. Steeped in Purity.",
    },
    {
      id: 4,
      title: "VegaCocoLassi",
      subtitle:
        "Dairy-free coconut lassi — creamy, hydrating, and refreshingly pure.",
      image: "/assets/images/vegacocolassi.jpg",
      cta: "Discover Coconut Joy",
      subtitle2: "Tropical Goodness in Every Sip.",
    },
    {
      id: 5,
      // title: "WOK TOK Sauces",
      subtitle:
        "Taste the future of sustainable beverages. Crafted with love, exported with purpose.",
      image: "/assets/images/no_image.png",
      cta: "Explore Our Range",
      subtitle2: "Farm to Cup • Purely Plant-Based • Proudly Indian",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <section className="relative h-screen min-h-[600px] lg:min-h-screen xl:min-h-screen bg-gradient-to-br from-primary/5 to-secondary/10 overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0 w-full h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <Image
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center min-h-screen lg:min-h-full appetite-filter lg:object-cover lg:filter-none"
              loading="eager"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Brand Tagline */}
            <div className="mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold font-accent mb-4">
                VEGALYA
              </h1>
              <p className="text-xl lg:text-2xl font-medium opacity-90">
                {heroSlides[currentSlide].subtitle2}
              </p>
            </div>

            {/* Current Slide Content */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                {heroSlides[currentSlide].title}
              </h2>
              <p className="text-lg lg:text-xl opacity-90 mb-8">
                {heroSlides[currentSlide].subtitle}
              </p>
              <Link to="/product-categories">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  {heroSlides[currentSlide].cta}
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <Icon name="ChevronLeft" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <Icon name="ChevronRight" size={24} />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-white animate-bounce">
        <Icon name="ChevronDown" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
