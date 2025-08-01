import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CartItem = ({ item, onUpdateQuantity, onRemove, onAddToWishlist }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
    onUpdateQuantity(item.id, newQuantity);
  };

  const calculateSavings = () => {
    if (item.originalPrice && item.price < item.originalPrice) {
      return ((item.originalPrice - item.price) / item.originalPrice * 100).toFixed(0);
    }
    return 0;
  };

  return (
    <div className="bg-white rounded-lg culinary-shadow p-4 mb-4 transition-all duration-200 hover:shadow-lg">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-surface">
            <Image
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover appetite-filter"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
            <div className="flex-1">
              <h3 className="font-semibold text-text-primary text-lg mb-1 line-clamp-2">
                {item.name}
              </h3>
              <p className="text-text-secondary text-sm mb-2 line-clamp-1">
                {item.description}
              </p>
              
              {/* Recipe Suggestion */}
              {item.recipeHint && (
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="ChefHat" size={14} className="text-primary" />
                  <span className="text-xs text-primary font-medium">
                    Perfect for: {item.recipeHint}
                  </span>
                </div>
              )}

              {/* Size/Variant */}
              {item.variant && (
                <div className="text-sm text-text-secondary mb-2">
                  Size: <span className="font-medium">{item.variant}</span>
                </div>
              )}
            </div>

            {/* Price Section */}
            <div className="text-right">
              <div className="flex items-center justify-end gap-2 mb-1">
                <span className="text-lg font-bold text-text-primary">
                  ₹{(item.price * quantity).toFixed(2)}
                </span>
                {item.originalPrice && item.originalPrice > item.price && (
                  <span className="text-sm text-text-secondary line-through">
                    ₹{(item.originalPrice * quantity).toFixed(2)}
                  </span>
                )}
              </div>
              {calculateSavings() > 0 && (
                <div className="text-xs text-success font-medium">
                  {calculateSavings()}% OFF
                </div>
              )}
              <div className="text-xs text-text-secondary">
                ₹{item.price.toFixed(2)} each
              </div>
            </div>
          </div>

          {/* Quantity and Actions */}
          <div className="flex items-center justify-between mt-4">
            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-text-secondary">Qty:</span>
              <div className="flex items-center border border-border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-none"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  <Icon name="Minus" size={14} />
                </Button>
                <span className="px-3 py-1 text-sm font-medium min-w-[40px] text-center">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-none"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  <Icon name="Plus" size={14} />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onAddToWishlist(item.id)}
                className="text-text-secondary hover:text-primary"
              >
                <Icon name="Heart" size={16} className="mr-1" />
                Save
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemove(item.id)}
                className="text-text-secondary hover:text-destructive"
              >
                <Icon name="Trash2" size={16} className="mr-1" />
                Remove
              </Button>
            </div>
          </div>

          {/* Bulk Discount Indicator */}
          {item.bulkDiscount && quantity < item.bulkDiscount.minQuantity && (
            <div className="mt-3 p-2 bg-accent/10 rounded-lg border border-accent/20">
              <div className="flex items-center gap-2">
                <Icon name="Gift" size={14} className="text-primary" />
                <span className="text-xs text-primary font-medium">
                  Buy {item.bulkDiscount.minQuantity - quantity} more to save ₹{item.bulkDiscount.savings}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;