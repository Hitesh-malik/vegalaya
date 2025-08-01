import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SmartRecommendations = ({ recommendations, onAddToCart }) => {
  const calculateDiscountedPrice = (price, discount) => {
    return price - (price * discount / 100);
  };

  return (
    <div className="bg-white rounded-xl culinary-shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-text-primary">You Might Also Like</h3>
          <p className="text-text-secondary">Based on your browsing history and preferences</p>
        </div>
        <Icon name="Sparkles" size={24} className="text-conversion-accent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendations.map((product) => (
          <div
            key={product.id}
            className="border border-border rounded-lg p-4 hover:border-primary/30 transition-all duration-200 texture-hover"
          >
            {/* Product Image */}
            <Link to={`/product-detail-page?id=${product.id}`} className="block mb-3">
              <div className="aspect-square rounded-lg overflow-hidden bg-surface">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover appetite-filter hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>

            {/* Product Info */}
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <Link
                  to={`/product-detail-page?id=${product.id}`}
                  className="flex-1"
                >
                  <h4 className="font-semibold text-text-primary hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h4>
                </Link>
                {product.isNew && (
                  <span className="text-xs font-medium text-white bg-conversion-accent px-2 py-1 rounded-full ml-2">
                    NEW
                  </span>
                )}
              </div>

              <p className="text-sm text-text-secondary line-clamp-1">
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={12}
                      className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-xs text-text-secondary">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>

              {/* Pricing */}
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-text-primary">
                  ₹{calculateDiscountedPrice(product.price, product.discount).toFixed(2)}
                </span>
                {product.discount > 0 && (
                  <>
                    <span className="text-sm text-text-secondary line-through">
                      ₹{product.price}
                    </span>
                    <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full">
                      {product.discount}% OFF
                    </span>
                  </>
                )}
              </div>

              {/* Key Features */}
              <div className="flex flex-wrap gap-1">
                {product.keyFeatures.slice(0, 2).map((feature, index) => (
                  <span
                    key={index}
                    className="text-xs bg-accent/20 text-primary px-2 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <Button
                onClick={() => onAddToCart(product)}
                size="sm"
                className="w-full mt-3"
                variant="outline"
              >
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Add to Cart
              </Button>
            </div>

            {/* Recommendation Reason */}
            {product.recommendationReason && (
              <div className="mt-3 pt-3 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Icon name="Target" size={14} className="text-primary" />
                  <span className="text-xs text-text-secondary">
                    {product.recommendationReason}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="text-center mt-6">
        <Link to="/product-categories">
          <Button variant="outline">
            View More Products
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SmartRecommendations;