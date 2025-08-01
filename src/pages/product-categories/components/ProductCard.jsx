import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <div
      className="bg-white culinary-shadow rounded-xl overflow-hidden texture-hover group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to="/product-detail-page" className="block">
        {/* Product Image */}
        <div className="relative h-48 bg-surface overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            } ${isHovered ? 'scale-110' : 'scale-100'}`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-conversion-accent text-white text-xs font-medium px-2 py-1 rounded-full">
                New
              </span>
            )}
            {product.isBestseller && (
              <span className="bg-trust-builder text-white text-xs font-medium px-2 py-1 rounded-full">
                Bestseller
              </span>
            )}
            {product.discount && (
              <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                {product.discount}% OFF
              </span>
            )}
          </div>

          {/* Quick Recipe Overlay */}
          <div className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="text-center text-white p-4">
              <Icon name="ChefHat" size={32} className="mx-auto mb-2" />
              <p className="text-sm font-medium mb-2">Quick Recipe Ideas</p>
              <div className="text-xs space-y-1">
                {product.quickRecipes?.slice(0, 2).map((recipe, index) => (
                  <p key={index}>• {recipe}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors line-clamp-2">
                {product.name}
              </h3>
              <p className="text-sm text-text-secondary mt-1">
                {product.size} • {product.category}
              </p>
            </div>
            <div className="flex items-center gap-1 ml-2">
              <Icon name="Star" size={14} className="text-amber-400 fill-current" />
              <span className="text-sm font-medium text-text-primary">
                {product.rating}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {product.tags?.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-accent/30 text-primary px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Price and Action */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-text-secondary line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleAddToCart}
              iconName="ShoppingCart"
              iconPosition="left"
              className="hover:bg-primary hover:text-white"
            >
              Add
            </Button>
          </div>

          {/* Usage Context */}
          <div className="mt-3 pt-3 border-t border-border">
            <p className="text-xs text-text-secondary">
              Perfect for: {product.usageContext}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;