import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const StoreLocator = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedStore, setSelectedStore] = useState(null);

  const nearbyStores = [
    {
      id: 1,
      name: "VEEBA Premium Store - Connaught Place",
      address: "Shop 15, Inner Circle, Connaught Place, New Delhi - 110001",
      phone: "+91 11 4567 8901",
      distance: "0.8 km",
      timing: "9:00 AM - 9:00 PM",
      availability: "Full Range Available",
      lat: 28.6315,
      lng: 77.2167
    },
    {
      id: 2,
      name: "Modern Bazaar - Khan Market",
      address: "32, Khan Market, New Delhi - 110003",
      phone: "+91 11 2461 2345",
      distance: "2.1 km",
      timing: "8:00 AM - 10:00 PM",
      availability: "Selected Products",
      lat: 28.6127,
      lng: 77.2319
    },
    {
      id: 3,
      name: "Big Bazaar - Select City Walk",
      address: "A-3, District Centre, Saket, New Delhi - 110017",
      phone: "+91 11 4567 8902",
      distance: "4.5 km",
      timing: "10:00 AM - 10:00 PM",
      availability: "Full Range Available",
      lat: 28.5245,
      lng: 77.2066
    }
  ];

  const handleLocationSearch = () => {
    // Mock location search functionality
    alert(`Searching for VEEBA stores near: ${searchLocation}`);
  };

  const handleGetDirections = (store) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`;
    window.open(url, '_blank');
  };

  const handleCallStore = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="bg-white rounded-2xl culinary-shadow p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 gradient-brand rounded-xl flex items-center justify-center">
          <Icon name="MapPin" size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Find VEEBA Near You</h3>
          <p className="text-sm text-text-secondary">Locate stores with VEEBA products in your area</p>
        </div>
      </div>

      {/* Search Section */}
      <div className="mb-6">
        <div className="flex gap-3">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Enter your location or pincode"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
          </div>
          <Button
            variant="default"
            iconName="Search"
            iconPosition="left"
            onClick={handleLocationSearch}
          >
            Search
          </Button>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          iconName="Navigation"
          iconPosition="left"
          onClick={() => alert('Getting your current location...')}
          className="mt-3"
        >
          Use Current Location
        </Button>
      </div>

      {/* Map Section */}
      <div className="mb-6">
        <div className="w-full h-64 bg-surface rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="VEEBA Store Locations"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=28.6315,77.2167&z=12&output=embed"
            className="border-0"
          />
        </div>
      </div>

      {/* Store List */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-text-primary">Nearby Stores</h4>
        
        {nearbyStores.map((store) => (
          <div
            key={store.id}
            className={`border rounded-lg p-4 transition-all cursor-pointer ${
              selectedStore?.id === store.id
                ? 'border-primary bg-accent/10' :'border-border hover:border-primary/50'
            }`}
            onClick={() => setSelectedStore(store)}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h5 className="font-semibold text-text-primary mb-1">{store.name}</h5>
                <p className="text-sm text-text-secondary mb-2">{store.address}</p>
                
                <div className="flex flex-wrap gap-4 text-xs text-text-secondary">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{store.timing}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Package" size={14} />
                    <span>{store.availability}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <span className="text-sm font-medium text-primary">{store.distance}</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                iconName="Phone"
                iconPosition="left"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCallStore(store.phone);
                }}
              >
                Call
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                iconName="Navigation"
                iconPosition="left"
                onClick={(e) => {
                  e.stopPropagation();
                  handleGetDirections(store);
                }}
              >
                Directions
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreLocator;