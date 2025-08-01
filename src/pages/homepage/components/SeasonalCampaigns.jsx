import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SeasonalCampaigns = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate time left for current campaign
  useEffect(() => {
    const targetDate = new Date('2025-08-15T23:59:59').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const campaigns = [
    {
      id: 'monsoon-special',
      title: 'Monsoon Comfort Combos',
      subtitle: 'Warm up your rainy days',
      description: 'Perfect combinations for cozy monsoon evenings with family',
      image: 'https://images.unsplash.com/photo-1534353341328-ffa6d66c2c8d?w=600&h=400&fit=crop',
      discount: '25% OFF',
      products: ['Hot & Sweet Sauce', 'Schezwan Mayo', 'Sandwich Spread'],
      validUntil: 'August 15, 2025',
      bgColor: 'from-blue-500 to-indigo-600',
      isLimited: true
    },
    {
      id: 'independence-day',
      title: 'Freedom Flavors Festival',
      subtitle: 'Celebrate with tricolor treats',
      description: 'Create patriotic dishes with our special tricolor combo pack',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=600&h=400&fit=crop',
      discount: '30% OFF',
      products: ['Mint Mayo', 'Classic Mayo', 'Tandoori Mayo'],
      validUntil: 'August 31, 2025',
      bgColor: 'from-orange-500 to-green-600',
      isLimited: false
    },
    {
      id: 'back-to-school',
      title: 'Back to School Lunch Pack',
      subtitle: 'Healthy & tasty tiffin solutions',
      description: 'Make school lunches exciting with kid-friendly VEEBA products',
      image: 'https://images.pixabay.com/photo/2017/06/16/11/38/sauce-2408952_1280.jpg?w=600&h=400&fit=crop',
      discount: '20% OFF',
      products: ['Sandwich Spread', 'Mint Mayo', 'Sweet & Sour Sauce'],
      validUntil: 'September 30, 2025',
      bgColor: 'from-yellow-500 to-orange-500',
      isLimited: false
    }
  ];

  const [activeCampaign, setActiveCampaign] = useState(0);

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary font-accent mb-4">
            Seasonal Celebrations
          </h2>
          <p className="text-xl text-text-secondary">
            Limited-time offers and festival-special combinations
          </p>
        </div>

        {/* Main Featured Campaign */}
        <div className="mb-12">
          <div className="relative bg-white rounded-3xl overflow-hidden culinary-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Campaign Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {campaigns[activeCampaign].isLimited && (
                  <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4 w-fit">
                    <Icon name="Clock" size={16} />
                    <span>Limited Time Offer</span>
                  </div>
                )}

                <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-3">
                  {campaigns[activeCampaign].title}
                </h3>
                <p className="text-lg text-conversion-accent font-semibold mb-4">
                  {campaigns[activeCampaign].subtitle}
                </p>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {campaigns[activeCampaign].description}
                </p>

                {/* Discount Badge */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-conversion-accent text-white px-6 py-3 rounded-full text-2xl font-bold">
                    {campaigns[activeCampaign].discount}
                  </div>
                  <div className="text-sm text-text-secondary">
                    Valid until {campaigns[activeCampaign].validUntil}
                  </div>
                </div>

                {/* Featured Products */}
                <div className="mb-8">
                  <h4 className="font-semibold text-primary mb-3">Combo Includes:</h4>
                  <div className="space-y-2">
                    {campaigns[activeCampaign].products.map((product, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-500" />
                        <span className="text-text-primary">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Countdown Timer */}
                {campaigns[activeCampaign].isLimited && (
                  <div className="bg-accent/20 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-primary mb-3 text-center">Offer Ends In:</h4>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="bg-white rounded-lg p-2">
                        <div className="text-2xl font-bold text-primary">{timeLeft.days}</div>
                        <div className="text-xs text-text-secondary">Days</div>
                      </div>
                      <div className="bg-white rounded-lg p-2">
                        <div className="text-2xl font-bold text-primary">{timeLeft.hours}</div>
                        <div className="text-xs text-text-secondary">Hours</div>
                      </div>
                      <div className="bg-white rounded-lg p-2">
                        <div className="text-2xl font-bold text-primary">{timeLeft.minutes}</div>
                        <div className="text-xs text-text-secondary">Minutes</div>
                      </div>
                      <div className="bg-white rounded-lg p-2">
                        <div className="text-2xl font-bold text-primary">{timeLeft.seconds}</div>
                        <div className="text-xs text-text-secondary">Seconds</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/product-categories" className="flex-1">
                    <Button size="lg" className="w-full">
                      Shop Now
                      <Icon name="ShoppingCart" size={20} className="ml-2" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="flex-1">
                    View Details
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </div>
              </div>

              {/* Campaign Image */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={campaigns[activeCampaign].image}
                  alt={campaigns[activeCampaign].title}
                  className="w-full h-full object-cover appetite-filter"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${campaigns[activeCampaign].bgColor} opacity-60`}></div>
                
                {/* Floating Discount Badge */}
                <div className="absolute top-6 right-6 bg-white rounded-full p-4 culinary-shadow">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-conversion-accent">
                      {campaigns[activeCampaign].discount.split(' ')[0]}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {campaigns[activeCampaign].discount.split(' ')[1]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Selector */}
        <div className="grid md:grid-cols-3 gap-6">
          {campaigns.map((campaign, index) => (
            <button
              key={campaign.id}
              onClick={() => setActiveCampaign(index)}
              className={`text-left p-6 rounded-2xl transition-all duration-300 ${
                index === activeCampaign
                  ? 'bg-white culinary-shadow scale-105'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-primary">{campaign.title}</h4>
                {campaign.isLimited && (
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                )}
              </div>
              <p className="text-sm text-text-secondary mb-3">{campaign.subtitle}</p>
              <div className="flex items-center justify-between">
                <span className="text-conversion-accent font-bold">{campaign.discount}</span>
                <Icon name="ArrowRight" size={16} className="text-text-secondary" />
              </div>
            </button>
          ))}
        </div>

        {/* Newsletter Signup for Exclusive Offers */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 text-center culinary-shadow">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Never Miss a Deal
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Subscribe to get exclusive access to seasonal offers, new product launches, and special festival combos before anyone else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button>
              Subscribe
              <Icon name="Mail" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalCampaigns;