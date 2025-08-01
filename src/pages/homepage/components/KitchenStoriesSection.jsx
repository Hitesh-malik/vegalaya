import React, { useState } from 'react';

import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const KitchenStoriesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Stories', icon: 'Grid3X3' },
    { id: 'quick', name: 'Quick Recipes', icon: 'Clock' },
    { id: 'gourmet', name: 'Gourmet', icon: 'ChefHat' },
    { id: 'party', name: 'Party Food', icon: 'Users' }
  ];

  const stories = [
    {
      id: 1,
      title: '5-Minute Sandwich Spread Magic',
      author: 'Sneha Gupta',
      authorImage: 'https://randomuser.me/api/portraits/women/32.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400&h=300&fit=crop',
      duration: '5 min',
      likes: 234,
      category: 'quick',
      description: 'Transform boring sandwiches into gourmet delights with VEEBA spreads',
      veebaProduct: 'Sandwich Spread'
    },
    {
      id: 2,
      title: 'WOK TOK Noodles Masterclass',
      author: 'Chef Rahul',
      authorImage: 'https://randomuser.me/api/portraits/men/45.jpg',
      thumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=400&h=300&fit=crop',
      duration: '15 min',
      likes: 567,
      category: 'gourmet',
      description: 'Authentic Asian flavors at home with WOK TOK sauce collection',
      veebaProduct: 'WOK TOK Sauce'
    },
    {
      id: 3,
      title: 'Party Dip Platter Ideas',
      author: 'Meera Shah',
      authorImage: 'https://randomuser.me/api/portraits/women/28.jpg',
      thumbnail: 'https://images.pixabay.com/photo/2017/06/16/11/38/sauce-2408952_1280.jpg?w=400&h=300&fit=crop',
      duration: '10 min',
      likes: 189,
      category: 'party',
      description: 'Create stunning party platters with VEEBA mayo and sauce varieties',
      veebaProduct: 'Mayo Collection'
    },
    {
      id: 4,
      title: 'Breakfast Toast Transformations',
      author: 'Amit Patel',
      authorImage: 'https://randomuser.me/api/portraits/men/33.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      duration: '7 min',
      likes: 345,
      category: 'quick',
      description: 'Elevate your morning toast game with creative VEEBA combinations',
      veebaProduct: 'Mint Mayo'
    },
    {
      id: 5,
      title: 'Gourmet Salad Dressings',
      author: 'Chef Priya',
      authorImage: 'https://randomuser.me/api/portraits/women/41.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      duration: '12 min',
      likes: 423,
      category: 'gourmet',
      description: 'Restaurant-style salads with VEEBA premium dressing range',
      veebaProduct: 'Caesar Dressing'
    },
    {
      id: 6,
      title: 'Kids\' Favorite Snack Hacks',
      author: 'Ritu Sharma',
      authorImage: 'https://randomuser.me/api/portraits/women/35.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop',
      duration: '8 min',
      likes: 278,
      category: 'quick',
      description: 'Make healthy snacks exciting for kids with VEEBA flavors',
      veebaProduct: 'Sandwich Spread'
    }
  ];

  const filteredStories = selectedCategory === 'all' 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary font-accent mb-4">
            VEEBA Kitchen Stories
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Get inspired by our community of food lovers sharing their VEEBA creations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary text-white' :'bg-accent/20 text-primary hover:bg-accent/30'
              }`}
            >
              <Icon name={category.icon} size={18} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="group bg-white rounded-2xl overflow-hidden culinary-shadow hover:shadow-2xl transition-all duration-500 texture-hover"
            >
              {/* Video Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={story.thumbnail}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 appetite-filter"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon name="Play" size={24} className="text-primary ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {story.duration}
                </div>

                {/* VEEBA Product Badge */}
                <div className="absolute bottom-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                  {story.veebaProduct}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-conversion-accent transition-colors duration-300">
                  {story.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {story.description}
                </p>

                {/* Author & Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={story.authorImage}
                        alt={story.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-primary">{story.author}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-text-secondary">
                    <Icon name="Heart" size={16} className="text-red-500" />
                    <span className="text-sm">{story.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community CTA */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Share Your VEEBA Story
            </h3>
            <p className="text-lg text-text-secondary mb-8">
              Create amazing dishes with VEEBA products and share your recipes with our community. 
              Get featured and inspire fellow food lovers!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Icon name="Upload" size={20} className="mr-2" />
                Upload Your Recipe
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Users" size={20} className="mr-2" />
                Join Community
              </Button>
            </div>

            {/* Community Stats */}
            <div className="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2.5K+</div>
                <div className="text-sm text-text-secondary">Recipes Shared</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15K+</div>
                <div className="text-sm text-text-secondary">Community Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-text-secondary">Recipe Views</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default KitchenStoriesSection;