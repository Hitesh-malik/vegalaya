import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const heroSlides = [
    {
      id: 2,
      title: "VegaBerryShake",
      subtitle: "Real berries blended into a smooth, dairy-free delight.",
      image: "assets/images/newImage/slider/vegaBerryShake.jpg",
      cta: "Explore Berry Shake",
      subtitle2: "Berrylicious. Nourishing. 100% Plant-Based.",
    },
    {
      id: 3,
      title: "VegaKesarChai",
      subtitle:
        "Aromatic saffron chai – vegan, soothing, and naturally indulgent.",
      image: "assets/images/newImage/slider/vegakesarChai.jpg",
      cta: "Sip the Bliss",
      subtitle2: "Spiced with Tradition. Steeped in Purity.",
    },
    {
      id: 4,
      title: "VegaCocoLassi",
      subtitle:
        "Dairy-free coconut lassi — creamy, hydrating, and refreshingly pure.",
      image: "assets/images/newImage/slider/NewVegaCocalassi.jpg",
      cta: "Discover Coconut Joy",
      subtitle2: "Tropical Goodness in Every Sip.",
    },
    {
      id: 5,
      title: "VegaMoka",
      subtitle:
        "Plant-based mocha blend — rich, bold, and naturally energizing.",
      image: "assets/images/newImage/slider/vegaMoka.jpg",
      cta: "Fuel with Flavor",
      subtitle2: "Indulgence Meets Vitality.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length);

  // Method 1: Handle click with useNavigate
  const handleSlideClick = () => {
    navigate("/product-categories");
  };

  return (
    <section
      className="
        relative
        h-[80vh] min-h-screen
        overflow-hidden
      "
    >
      <div className="absolute inset-0 w-full h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 will-change-opacity transform-gpu cursor-pointer ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentSlide}
            onClick={handleSlideClick}
            role="button"
            tabIndex={index === currentSlide ? 0 : -1}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleSlideClick();
              }
            }}
            aria-label={`View ${slide.title} products`}
          >
            <Image
              src={slide.image}
              alt={slide.title || "Hero image"}
              className="absolute inset-0 w-full h-full object-contain object-center"
              loading={index === currentSlide ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        aria-label="Previous slide"
      >
        <Icon name="ChevronLeft" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        aria-label="Next slide"
      >
        <Icon name="ChevronRight" size={24} />
      </button>

    </section>
  );
};

export default HeroSection;
