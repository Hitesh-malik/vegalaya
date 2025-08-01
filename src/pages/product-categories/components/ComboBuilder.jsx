import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ComboBuilder = ({ isOpen, onClose, products }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [comboName, setComboName] = useState('');

  const handleProductToggle = (product) => {
    setSelectedProducts(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      } else if (prev.length < 5) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const calculateTotal = () => {
    const subtotal = selectedProducts.reduce((sum, product) => sum + product.price, 0);
    const discount = selectedProducts.length >= 3 ? 0.15 : selectedProducts.length >= 2 ? 0.10 : 0;
    return {
      subtotal,
      discount: subtotal * discount,
      total: subtotal * (1 - discount)
    };
  };

  const { subtotal, discount, total } = calculateTotal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-primary font-accent">Build Your Combo</h2>
            <p className="text-text-secondary text-sm mt-1">
              Select 2-5 products and save up to 15%
            </p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Product Selection */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.slice(0, 12).map((product) => {
                const isSelected = selectedProducts.find(p => p.id === product.id);
                return (
                  <div
                    key={product.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'border-primary bg-accent/10' :'border-border hover:border-primary/50'
                    }`}
                    onClick={() => handleProductToggle(product)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 bg-surface rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-text-primary line-clamp-2">
                          {product.name}
                        </h4>
                        <p className="text-sm text-text-secondary">
                          {product.size}
                        </p>
                        <p className="text-lg font-bold text-primary">
                          ₹{product.price}
                        </p>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        isSelected
                          ? 'bg-primary border-primary' :'border-border'
                      }`}>
                        {isSelected && (
                          <Icon name="Check" size={14} className="text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Combo Summary */}
          <div className="w-full lg:w-80 bg-surface p-6 border-l border-border">
            <h3 className="font-semibold text-text-primary mb-4">
              Your Combo ({selectedProducts.length}/5)
            </h3>

            {/* Selected Products */}
            <div className="space-y-3 mb-6">
              {selectedProducts.map((product) => (
                <div key={product.id} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary line-clamp-1">
                      {product.name}
                    </p>
                    <p className="text-xs text-text-secondary">
                      ₹{product.price}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleProductToggle(product)}
                    className="w-6 h-6"
                  >
                    <Icon name="X" size={12} />
                  </Button>
                </div>
              ))}
            </div>

            {/* Combo Name */}
            {selectedProducts.length >= 2 && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Combo Name (Optional)
                </label>
                <input
                  type="text"
                  value={comboName}
                  onChange={(e) => setComboName(e.target.value)}
                  placeholder="My Special Combo"
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            )}

            {/* Pricing */}
            {selectedProducts.length >= 2 && (
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Subtotal</span>
                  <span className="text-text-primary">₹{subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">
                      Combo Discount ({selectedProducts.length >= 3 ? '15' : '10'}%)
                    </span>
                    <span className="text-green-600">-₹{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold border-t border-border pt-2">
                  <span className="text-text-primary">Total</span>
                  <span className="text-primary">₹{total.toFixed(2)}</span>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-3">
              {selectedProducts.length >= 2 ? (
                <Button
                  variant="default"
                  className="w-full"
                  iconName="ShoppingCart"
                  iconPosition="left"
                >
                  Add Combo to Cart
                </Button>
              ) : (
                <div className="text-center text-sm text-text-secondary">
                  Select at least 2 products to create a combo
                </div>
              )}
              
              <Button
                variant="outline"
                className="w-full"
                onClick={onClose}
              >
                Continue Shopping
              </Button>
            </div>

            {/* Discount Info */}
            <div className="mt-4 p-3 bg-accent/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Gift" size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Combo Savings</span>
              </div>
              <div className="text-xs text-text-secondary space-y-1">
                <p>• 2-3 products: 10% discount</p>
                <p>• 4-5 products: 15% discount</p>
                <p>• Free shipping on combos ₹500+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboBuilder;