import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProductCategoryCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    {
      id: 'quick-meals',
      title: 'Quick Meals',
      subtitle: 'Sandwich spreads & mayo',
      description: 'Perfect for busy mornings and quick lunch fixes',
      image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=600&h=400&fit=crop',
      products: ['Classic Mayo', 'Sandwich Spread', 'Mint Mayo'],
      usageScenarios: [
        'Office lunch sandwiches',
        'Kids\' school tiffin',
        'Quick breakfast toast'
      ],
      color: 'from-green-400 to-green-600',
      icon: 'Clock'
    },
    {
      id: 'gourmet-cooking',
      title: 'Gourmet Cooking',
      subtitle: 'Premium sauces',
      description: 'Elevate your home cooking to restaurant quality',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=600&h=400&fit=crop',
      products: ['Peri Peri Sauce', 'Thousand Island', 'Caesar Dressing'],
      usageScenarios: [
        'Weekend dinner parties',
        'Special occasion meals',
        'Gourmet salad dressings'
      ],
      color: 'from-purple-400 to-purple-600',
      icon: 'ChefHat'
    },
    {
      id: 'party-entertaining',
      title: 'Party Entertaining',
      subtitle: 'Combo packs',
      description: 'Everything you need for memorable gatherings',
      image: 'https://images.pixabay.com/photo/2017/06/16/11/38/sauce-2408952_1280.jpg?w=600&h=400&fit=crop',
      products: ['Party Combo Pack', 'Dip Variety Set', 'BBQ Collection'],
      usageScenarios: [
        'House parties & celebrations',
        'BBQ gatherings',
        'Festival entertaining'
      ],
      color: 'from-orange-400 to-red-500',
      icon: 'Users'
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary font-accent mb-4">
            Taste the Difference
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Discover VEEBA products organized by how you love to eat and cook
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-2xl overflow-hidden culinary-shadow hover:shadow-2xl transition-all duration-500 texture-hover"
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 appetite-filter"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`}></div>
                
                {/* Category Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Icon name={category.icon} size={24} className="text-white" />
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{category.title}</h3>
                  <p className="text-sm opacity-90">{category.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-text-secondary mb-4">{category.description}</p>

                {/* Products List */}
                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-2">Featured Products:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.products.map((product, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent/20 text-primary text-sm rounded-full"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Usage Scenarios - Show on Hover */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  hoveredCard === category.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="border-t border-border pt-4 mb-4">
                    <h4 className="font-semibold text-primary mb-2">Perfect For:</h4>
                    <ul className="space-y-1">
                      {category.usageScenarios.map((scenario, index) => (
                        <li key={index} className="flex items-center text-sm text-text-secondary">
                          <Icon name="Check" size={14} className="text-green-500 mr-2 flex-shrink-0" />
                          {scenario}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <Link to="/product-categories">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  >
                    Explore {category.title}
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Categories CTA */}
        <div className="text-center mt-12">
          <Link to="/product-categories">
            <Button size="lg">
              View All Categories
              <Icon name="Grid3X3" size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategoryCards;