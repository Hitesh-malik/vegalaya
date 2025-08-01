import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('taste-profile');

  const tabs = [
    { id: 'taste-profile', label: 'Taste Profile', icon: 'Zap' },
    { id: 'usage-ideas', label: 'Usage Ideas', icon: 'Lightbulb' },
    { id: 'nutrition', label: 'Nutritional Info', icon: 'Info' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'taste-profile':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-text-primary">Flavor Notes</h4>
                <div className="flex flex-wrap gap-2">
                  {product.flavorNotes.map((note, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/20 text-primary rounded-full text-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-text-primary">Spice Level</h4>
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-full ${
                        i < product.spiceLevel
                          ? 'bg-conversion-accent' :'bg-gray-200'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-text-secondary ml-2">
                    {product.spiceLevel}/5
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-text-primary">Texture Profile</h4>
              <p className="text-text-secondary">{product.textureDescription}</p>
            </div>
          </div>
        );

      case 'usage-ideas':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-text-primary">Perfect For</h4>
                <div className="space-y-2">
                  {product.usageIdeas.map((idea, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon name="ChefHat" size={16} className="text-primary mt-1" />
                      <span className="text-text-secondary text-sm">{idea}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-text-primary">Pairing Tips</h4>
                <div className="space-y-2">
                  {product.pairingTips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon name="Sparkles" size={16} className="text-conversion-accent mt-1" />
                      <span className="text-text-secondary text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'nutrition':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                <div key={key} className="text-center p-3 bg-surface rounded-lg">
                  <div className="text-lg font-bold text-text-primary">{value}</div>
                  <div className="text-sm text-text-secondary capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-text-primary">Dietary Information</h4>
              <div className="flex flex-wrap gap-2">
                {product.dietaryInfo.map((info, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium"
                  >
                    {info}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-text-primary">Ingredients</h4>
              <p className="text-text-secondary text-sm">{product.ingredients}</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl culinary-shadow">
      {/* Tab Navigation */}
      <div className="border-b border-border">
        <div className="flex space-x-0 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-primary text-primary bg-primary/5' :'border-transparent text-text-secondary hover:text-primary hover:border-primary/30'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProductTabs;