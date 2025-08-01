import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PerfectPairings = ({ pairings, onAddBundle }) => {
  const calculateBundlePrice = (products) => {
    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
    const bundleDiscount = 0.15; // 15% bundle discount
    return {
      original: totalPrice,
      discounted: totalPrice * (1 - bundleDiscount),
      savings: totalPrice * bundleDiscount
    };
  };

  return (
    <div className="bg-white rounded-xl culinary-shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-text-primary">Perfect Pairings</h3>
          <p className="text-text-secondary">Complete your culinary experience</p>
        </div>
        <Icon name="Sparkles" size={24} className="text-conversion-accent" />
      </div>

      <div className="space-y-6">
        {pairings.map((pairing) => {
          const bundlePrice = calculateBundlePrice(pairing.products);
          
          return (
            <div key={pairing.id} className="border border-border rounded-lg p-4 hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-text-primary">{pairing.title}</h4>
                  <p className="text-sm text-text-secondary">{pairing.description}</p>
                </div>
                <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full">
                  Save ₹{bundlePrice.savings.toFixed(0)}
                </span>
              </div>

              {/* Products in Bundle */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {pairing.products.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product-detail-page?id=${product.id}`}
                    className="group"
                  >
                    <div className="bg-surface rounded-lg p-3 group-hover:bg-accent/10 transition-colors">
                      <div className="aspect-square mb-2 overflow-hidden rounded-md">
                        <Image
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h5 className="text-sm font-medium text-text-primary truncate">
                        {product.name}
                      </h5>
                      <p className="text-xs text-text-secondary">{product.size}</p>
                      <p className="text-sm font-semibold text-primary">₹{product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Bundle Pricing */}
              <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-text-primary">
                      ₹{bundlePrice.discounted.toFixed(2)}
                    </span>
                    <span className="text-sm text-text-secondary line-through">
                      ₹{bundlePrice.original.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-success">
                    You save ₹{bundlePrice.savings.toFixed(2)} (15% off)
                  </p>
                </div>
                <Button
                  onClick={() => onAddBundle(pairing)}
                  size="sm"
                  className="shrink-0"
                >
                  <Icon name="Plus" size={16} className="mr-1" />
                  Add Bundle
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bundle Benefits */}
      <div className="mt-6 p-4 bg-accent/10 rounded-lg">
        <h4 className="font-semibold text-text-primary mb-3">Bundle Benefits</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex items-center space-x-2">
            <Icon name="Percent" size={16} className="text-success" />
            <span className="text-sm text-text-secondary">15% Bundle Discount</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Truck" size={16} className="text-success" />
            <span className="text-sm text-text-secondary">Free Delivery</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Gift" size={16} className="text-success" />
            <span className="text-sm text-text-secondary">Gift Packaging</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfectPairings;