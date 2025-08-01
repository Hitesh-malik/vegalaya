import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FlavorPairingSidebar = ({ cartItems, onAddToCart }) => {
  const pairingData = [
    {
      id: 'mayo-combo',
      name: 'Sandwich Spread Collection',
      description: 'Complete your sandwich game with our premium mayo range',
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 299,
      originalPrice: 399,
      items: ['Eggless Mayo', 'Mint Mayo', 'Garlic Mayo'],
      trigger: ['mayo', 'spread', 'sandwich']
    },
    {
      id: 'wok-tok-asian',
      name: 'WOK TOK Asian Night Kit',
      description: 'Authentic Asian flavors for your stir-fry adventures',
      image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 449,
      originalPrice: 599,
      items: ['Schezwan Sauce', 'Sweet & Sour', 'Hot Garlic'],
      trigger: ['sauce', 'asian', 'chinese']
    },
    {
      id: 'party-dips',
      name: 'Party Dip Essentials',
      description: 'Make every gathering memorable with these crowd favorites',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 349,
      originalPrice: 449,
      items: ['Cheese Dip', 'Salsa Dip', 'Hummus'],
      trigger: ['dip', 'party', 'snack']
    },
    {
      id: 'cooking-base',
      name: 'Cooking Base Trio',
      description: 'Essential bases for quick and delicious home cooking',
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 399,
      originalPrice: 499,
      items: ['Tomato Base', 'Onion Base', 'Ginger-Garlic Paste'],
      trigger: ['base', 'cooking', 'paste']
    }
  ];

  const getRelevantPairings = () => {
    const cartItemNames = cartItems.map(item => item.name.toLowerCase());
    const cartCategories = cartItems.map(item => item.category?.toLowerCase() || '');
    
    return pairingData.filter(pairing => {
      return pairing.trigger.some(trigger => 
        cartItemNames.some(name => name.includes(trigger)) ||
        cartCategories.some(category => category.includes(trigger))
      );
    }).slice(0, 3);
  };

  const relevantPairings = getRelevantPairings();

  if (relevantPairings.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg culinary-shadow p-6">
      <div className="flex items-center gap-2 mb-4">
        <Icon name="Sparkles" size={20} className="text-primary" />
        <h3 className="text-lg font-semibold text-text-primary">
          Flavor Pairing Suggestions
        </h3>
      </div>
      
      <p className="text-sm text-text-secondary mb-6">
        Complete your culinary collection with these perfect companions
      </p>

      <div className="space-y-4">
        {relevantPairings.map((pairing) => (
          <div key={pairing.id} className="border border-border rounded-lg p-4 hover:border-primary/30 transition-colors">
            <div className="flex gap-3">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-surface flex-shrink-0">
                <Image
                  src={pairing.image}
                  alt={pairing.name}
                  className="w-full h-full object-cover appetite-filter"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-text-primary text-sm mb-1 line-clamp-2">
                  {pairing.name}
                </h4>
                <p className="text-xs text-text-secondary mb-2 line-clamp-2">
                  {pairing.description}
                </p>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-bold text-text-primary">
                    ₹{pairing.price}
                  </span>
                  {pairing.originalPrice > pairing.price && (
                    <span className="text-xs text-text-secondary line-through">
                      ₹{pairing.originalPrice}
                    </span>
                  )}
                  {pairing.originalPrice > pairing.price && (
                    <span className="text-xs text-success font-medium">
                      {Math.round((pairing.originalPrice - pairing.price) / pairing.originalPrice * 100)}% OFF
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {pairing.items.map((item, index) => (
                    <span key={index} className="text-xs bg-accent/20 text-primary px-2 py-1 rounded">
                      {item}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onAddToCart(pairing)}
                  className="w-full text-xs"
                >
                  <Icon name="Plus" size={14} className="mr-1" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
        <div className="flex items-center gap-2 mb-2">
          <Icon name="Lightbulb" size={16} className="text-primary" />
          <span className="text-sm font-medium text-primary">Pro Tip</span>
        </div>
        <p className="text-xs text-text-secondary">
          Mix and match different VEEBA products to create unique flavor profiles. 
          Our community has shared over 500+ recipe combinations!
        </p>
      </div>
    </div>
  );
};

export default FlavorPairingSidebar;