import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryHeader = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    {
      id: 'quick-meals',
      name: 'Quick Meals',
      description: 'Transform everyday meals into extraordinary experiences with our range of spreads, mayo, and instant flavor enhancers.',
      icon: 'Clock',
      color: 'bg-amber-50 text-amber-700'
    },
    {
      id: 'gourmet-cooking',
      name: 'Gourmet Cooking',
      description: 'Elevate your culinary creations with premium sauces and specialty items trusted by professional chefs.',
      icon: 'ChefHat',
      color: 'bg-purple-50 text-purple-700'
    },
    {
      id: 'wok-tok-asian',
      name: 'WOK TOK Asian',
      description: 'Authentic Asian flavors and cooking essentials for traditional stir-fries, noodles, and oriental delicacies.',
      icon: 'Utensils',
      color: 'bg-red-50 text-red-700'
    },
    {
      id: 'seasonal-specials',
      name: 'Seasonal Specials',
      description: 'Festival cooking essentials and trending flavor combinations for special occasions and celebrations.',
      icon: 'Sparkles',
      color: 'bg-green-50 text-green-700'
    }
  ];

  const currentCategory = categories.find(cat => cat.id === selectedCategory) || categories[0];

  return (
    <div className="bg-white culinary-shadow rounded-xl p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-lg ${currentCategory.color}`}>
              <Icon name={currentCategory.icon} size={24} />
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-primary font-accent">
              {currentCategory.name}
            </h1>
          </div>
          <p className="text-text-secondary text-sm lg:text-base leading-relaxed max-w-2xl">
            {currentCategory.description}
          </p>
        </div>
        
        {/* Category Selector */}
        <div className="flex flex-wrap lg:flex-nowrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary text-white' :'bg-surface text-text-secondary hover:bg-accent/20 hover:text-primary'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;