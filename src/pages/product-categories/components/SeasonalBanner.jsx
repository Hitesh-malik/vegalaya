import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SeasonalBanner = () => {
  const seasonalOffers = [
    {
      id: 1,
      title: "Festival Special Collection",
      subtitle: "Diwali Delights",
      description: "Celebrate with authentic flavors - Special combo packs for festive cooking",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      discount: "25% OFF",
      validUntil: "Oct 31, 2024",
      cta: "Shop Festival Pack",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      id: 2,
      title: "Winter Warmers",
      subtitle: "Comfort Food Essentials",
      description: "Rich, creamy sauces perfect for hearty winter meals and hot preparations",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&h=400&fit=crop",
      discount: "20% OFF",
      validUntil: "Dec 31, 2024",
      cta: "Explore Collection",
      gradient: "from-red-500 to-pink-600"
    }
  ];

  const currentOffer = seasonalOffers[0];

  return (
    <div className="mb-8">
      <div className="relative overflow-hidden rounded-xl culinary-shadow">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={currentOffer.image}
            alt={currentOffer.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${currentOffer.gradient} opacity-85`}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 lg:p-8 text-white">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <Icon name="Sparkles" size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium opacity-90">{currentOffer.subtitle}</p>
                  <h2 className="text-2xl lg:text-3xl font-bold font-accent">
                    {currentOffer.title}
                  </h2>
                </div>
              </div>
              
              <p className="text-white/90 text-sm lg:text-base mb-4 max-w-lg">
                {currentOffer.description}
              </p>
              
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Tag" size={16} />
                  <span className="font-semibold">{currentOffer.discount}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <span>Valid until {currentOffer.validUntil}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="secondary"
                size="lg"
                iconName="ShoppingBag"
                iconPosition="left"
                className="bg-white text-primary hover:bg-white/90"
              >
                {currentOffer.cta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                View All Offers
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 opacity-20">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-white rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access Seasonal Categories */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {[
          { name: 'Festival Packs', icon: 'Gift', count: '12 items' },
          { name: 'Winter Specials', icon: 'Snowflake', count: '8 items' },
          { name: 'Party Essentials', icon: 'PartyPopper', count: '15 items' },
          { name: 'Gift Combos', icon: 'Heart', count: '6 items' }
        ].map((category, index) => (
          <div
            key={index}
            className="bg-white culinary-shadow rounded-lg p-4 text-center cursor-pointer texture-hover"
          >
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name={category.icon} size={20} className="text-primary" />
            </div>
            <h4 className="font-medium text-text-primary text-sm mb-1">
              {category.name}
            </h4>
            <p className="text-xs text-text-secondary">{category.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonalBanner;