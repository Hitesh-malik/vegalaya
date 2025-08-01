import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const OrderSummary = ({ cartItems, onApplyCoupon }) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => {
    if (item.originalPrice && item.originalPrice > item.price) {
      return sum + ((item.originalPrice - item.price) * item.quantity);
    }
    return sum;
  }, 0);

  const deliveryFee = subtotal > 500 ? 0 : 40;
  const packagingFee = 15;
  
  const couponDiscount = appliedCoupon ? appliedCoupon.discount : 0;
  const total = subtotal + deliveryFee + packagingFee - couponDiscount;

  const availableCoupons = [
    {
      code: 'VEEBA20',
      discount: 50,
      minOrder: 300,
      description: '₹50 off on orders above ₹300'
    },
    {
      code: 'FIRSTORDER',
      discount: 100,
      minOrder: 500,
      description: '₹100 off on first order above ₹500'
    },
    {
      code: 'FLAVOR25',
      discount: 75,
      minOrder: 400,
      description: '₹75 off on orders above ₹400'
    }
  ];

  const handleApplyCoupon = () => {
    setCouponError('');
    const coupon = availableCoupons.find(c => c.code === couponCode.toUpperCase());
    
    if (!coupon) {
      setCouponError('Invalid coupon code');
      return;
    }
    
    if (subtotal < coupon.minOrder) {
      setCouponError(`Minimum order of ₹${coupon.minOrder} required`);
      return;
    }
    
    setAppliedCoupon(coupon);
    onApplyCoupon(coupon);
    setCouponCode('');
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    onApplyCoupon(null);
  };

  return (
    <div className="bg-white rounded-lg culinary-shadow p-6 sticky top-24">
      <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
        <Icon name="Receipt" size={20} />
        Order Summary
      </h3>

      {/* Items Count */}
      <div className="flex justify-between items-center py-2 border-b border-border">
        <span className="text-text-secondary">
          Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
        </span>
        <span className="font-medium">₹{subtotal.toFixed(2)}</span>
      </div>

      {/* Savings */}
      {savings > 0 && (
        <div className="flex justify-between items-center py-2 text-success">
          <span className="flex items-center gap-1">
            <Icon name="Tag" size={14} />
            Product Savings
          </span>
          <span className="font-medium">-₹{savings.toFixed(2)}</span>
        </div>
      )}

      {/* Delivery Fee */}
      <div className="flex justify-between items-center py-2">
        <span className="text-text-secondary flex items-center gap-1">
          <Icon name="Truck" size={14} />
          Delivery Fee
          {deliveryFee === 0 && (
            <span className="text-xs text-success ml-1">(Free)</span>
          )}
        </span>
        <span className={deliveryFee === 0 ? 'text-success line-through' : ''}>
          ₹{deliveryFee.toFixed(2)}
        </span>
      </div>

      {/* Packaging Fee */}
      <div className="flex justify-between items-center py-2">
        <span className="text-text-secondary flex items-center gap-1">
          <Icon name="Package" size={14} />
          Packaging Fee
        </span>
        <span>₹{packagingFee.toFixed(2)}</span>
      </div>

      {/* Coupon Section */}
      <div className="py-4 border-t border-border">
        {!appliedCoupon ? (
          <div className="space-y-3">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                error={couponError}
                className="flex-1"
              />
              <Button
                variant="outline"
                onClick={handleApplyCoupon}
                disabled={!couponCode.trim()}
              >
                Apply
              </Button>
            </div>
            
            {/* Available Coupons */}
            <div className="space-y-2">
              <p className="text-xs text-text-secondary">Available offers:</p>
              {availableCoupons.map((coupon) => (
                <div
                  key={coupon.code}
                  className="flex items-center justify-between p-2 bg-accent/10 rounded border border-accent/20 cursor-pointer hover:bg-accent/20 transition-colors"
                  onClick={() => setCouponCode(coupon.code)}
                >
                  <div>
                    <span className="text-xs font-medium text-primary">{coupon.code}</span>
                    <p className="text-xs text-text-secondary">{coupon.description}</p>
                  </div>
                  <Icon name="Copy" size={12} className="text-primary" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between p-3 bg-success/10 rounded border border-success/20">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} className="text-success" />
              <div>
                <span className="text-sm font-medium text-success">{appliedCoupon.code}</span>
                <p className="text-xs text-text-secondary">-₹{appliedCoupon.discount}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={removeCoupon}
              className="text-text-secondary hover:text-destructive"
            >
              <Icon name="X" size={14} />
            </Button>
          </div>
        )}
      </div>

      {/* Coupon Discount */}
      {couponDiscount > 0 && (
        <div className="flex justify-between items-center py-2 text-success">
          <span className="flex items-center gap-1">
            <Icon name="Percent" size={14} />
            Coupon Discount
          </span>
          <span className="font-medium">-₹{couponDiscount.toFixed(2)}</span>
        </div>
      )}

      {/* Total */}
      <div className="flex justify-between items-center py-3 border-t border-border text-lg font-bold">
        <span>Total Amount</span>
        <span className="text-primary">₹{total.toFixed(2)}</span>
      </div>

      {/* Free Delivery Progress */}
      {deliveryFee > 0 && (
        <div className="mt-4 p-3 bg-accent/10 rounded border border-accent/20">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="Truck" size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary">
              Add ₹{(500 - subtotal).toFixed(2)} more for FREE delivery
            </span>
          </div>
          <div className="w-full bg-border rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min((subtotal / 500) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Savings Summary */}
      {(savings > 0 || couponDiscount > 0) && (
        <div className="mt-4 p-3 bg-success/10 rounded border border-success/20">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" size={14} className="text-success" />
            <span className="text-sm font-medium text-success">
              You're saving ₹{(savings + couponDiscount).toFixed(2)} on this order!
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;