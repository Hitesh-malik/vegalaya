import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const EmptyCart = () => {
  const suggestedProducts = [
    {
      id: 1,
      name: 'VEEBA Eggless Mayo',
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 89,
      originalPrice: 99,
      category: 'Spreads'
    },
    {
      id: 2,
      name: 'WOK TOK Schezwan Sauce',
      image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 129,
      originalPrice: 149,
      category: 'Sauces'
    },
    {
      id: 3,
      name: 'VEEBA Cheese Dip',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 149,
      originalPrice: 169,
      category: 'Dips'
    }
  ];

  return (
    <div className="min-h-screen bg-background-canvas pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          {/* Empty Cart Illustration */}
          <div className="w-64 h-64 mx-auto mb-8 relative">
            <div className="w-full h-full bg-surface rounded-full flex items-center justify-center">
              <div className="relative">
                <Icon name="ShoppingCart" size={80} className="text-text-secondary/30" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="X" size={16} className="text-text-secondary" />
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-8 left-8 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center animate-bounce">
              <Icon name="Heart" size={20} className="text-primary" />
            </div>
            <div className="absolute top-12 right-12 w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center animate-bounce delay-300">
              <Icon name="Star" size={16} className="text-primary" />
            </div>
            <div className="absolute bottom-16 left-16 w-8 h-8 bg-accent/30 rounded-full flex items-center justify-center animate-bounce delay-500">
              <Icon name="Sparkles" size={14} className="text-primary" />
            </div>
          </div>

          {/* Empty State Content */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-text-primary mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-lg text-text-secondary mb-2">
              Looks like you haven't added any delicious VEEBA products yet!
            </p>
            <p className="text-text-secondary">
              Explore our range of premium sauces, spreads, and dips to transform your meals.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/product-categories">
              <Button size="lg" className="w-full sm:w-auto">
                <Icon name="Grid3X3" size={20} className="mr-2" />
                Browse Categories
              </Button>
            </Link>
            <Link to="/homepage">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Icon name="Home" size={20} className="mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Suggested Products */}
          <div className="bg-white rounded-lg culinary-shadow p-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Icon name="Lightbulb" size={24} className="text-primary" />
              <h2 className="text-xl font-semibold text-text-primary">
                Start with These Popular Items
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {suggestedProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="bg-surface rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <div className="w-full h-32 rounded-lg overflow-hidden mb-4 bg-white">
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover appetite-filter"
                      />
                    </div>
                    
                    <div className="text-center">
                      <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                        {product.category}
                      </span>
                      <h3 className="font-semibold text-text-primary mt-2 mb-2">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="text-lg font-bold text-primary">
                          ₹{product.price}
                        </span>
                        <span className="text-sm text-text-secondary line-through">
                          ₹{product.originalPrice}
                        </span>
                      </div>
                      
                      <Link to="/product-detail-page">
                        <Button size="sm" className="w-full">
                          <Icon name="Plus" size={16} className="mr-1" />
                          Add to Cart
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Free Delivery</h3>
              <p className="text-sm text-text-secondary">
                Free shipping on orders above ₹500
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Quality Assured</h3>
              <p className="text-sm text-text-secondary">
                Premium ingredients, consistent taste
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="RotateCcw" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Easy Returns</h3>
              <p className="text-sm text-text-secondary">
                Hassle-free returns within 7 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;