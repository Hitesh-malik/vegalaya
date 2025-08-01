import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductInfo = ({ product, onAddToCart, onSaveForLater }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity, selectedSize });
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const handleSaveForLater = () => {
    onSaveForLater(product);
    setIsSaved(!isSaved);
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const calculateDiscountedPrice = (originalPrice, discount) => {
    return originalPrice - (originalPrice * discount / 100);
  };

  return (
    <div className="space-y-6">
      {/* Product Title & Brand */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-sm font-medium text-primary bg-accent/20 px-2 py-1 rounded-full">
            {product.brand}
          </span>
          {product.isNew && (
            <span className="text-xs font-medium text-white bg-conversion-accent px-2 py-1 rounded-full">
              NEW
            </span>
          )}
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold text-text-primary mb-2">
          {product.name}
        </h1>
        <p className="text-text-secondary text-lg">
          {product.tagline}
        </p>
      </div>

      {/* Rating & Reviews */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={16}
              className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
            />
          ))}
          <span className="text-sm font-medium text-text-primary ml-2">
            {product.rating}
          </span>
        </div>
        <span className="text-sm text-text-secondary">
          ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Pricing */}
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <span className="text-3xl font-bold text-text-primary">
            ₹{calculateDiscountedPrice(selectedSize.price, product.discount).toFixed(2)}
          </span>
          {product.discount > 0 && (
            <>
              <span className="text-xl text-text-secondary line-through">
                ₹{selectedSize.price}
              </span>
              <span className="text-sm font-medium text-success bg-success/10 px-2 py-1 rounded-full">
                {product.discount}% OFF
              </span>
            </>
          )}
        </div>
        <p className="text-sm text-text-secondary">
          Inclusive of all taxes • Free delivery above ₹499
        </p>
      </div>

      {/* Size Selection */}
      <div className="space-y-3">
        <h3 className="font-semibold text-text-primary">Size</h3>
        <div className="flex flex-wrap gap-3">
          {product.sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                selectedSize.id === size.id
                  ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50'
              }`}
            >
              <div className="text-sm font-medium">{size.volume}</div>
              <div className="text-xs text-text-secondary">₹{size.price}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Selection */}
      <div className="space-y-3">
        <h3 className="font-semibold text-text-primary">Quantity</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-border rounded-lg">
            <button
              onClick={decreaseQuantity}
              className="w-10 h-10 flex items-center justify-center hover:bg-surface transition-colors"
            >
              <Icon name="Minus" size={16} />
            </button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="w-10 h-10 flex items-center justify-center hover:bg-surface transition-colors"
            >
              <Icon name="Plus" size={16} />
            </button>
          </div>
          <span className="text-sm text-text-secondary">
            {selectedSize.stock > 10 ? 'In Stock' : `Only ${selectedSize.stock} left`}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          onClick={handleAddToCart}
          className="w-full"
          size="lg"
          disabled={selectedSize.stock === 0}
        >
          {isAddedToCart ? (
            <>
              <Icon name="Check" size={20} className="mr-2" />
              Added to Cart!
            </>
          ) : (
            <>
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Add to Cart - ₹{(calculateDiscountedPrice(selectedSize.price, product.discount) * quantity).toFixed(2)}
            </>
          )}
        </Button>

        <div className="flex space-x-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={handleSaveForLater}
          >
            <Icon 
              name="Heart" 
              size={18} 
              className={`mr-2 ${isSaved ? 'fill-current text-red-500' : ''}`} 
            />
            {isSaved ? 'Saved' : 'Save for Later'}
          </Button>
          <Button variant="outline" size="icon">
            <Icon name="Share2" size={18} />
          </Button>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-surface rounded-lg p-4 space-y-3">
        <h3 className="font-semibold text-text-primary">Key Features</h3>
        <div className="grid grid-cols-2 gap-3">
          {product.keyFeatures.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Icon name="Check" size={16} className="text-success" />
              <span className="text-sm text-text-secondary">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;