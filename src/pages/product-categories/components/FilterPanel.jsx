import React, { useState } from 'react';

import Button from '../../../components/ui/Button';

const FilterPanel = ({ filters, onFilterChange, isOpen, onToggle }) => {
  const [activeFilters, setActiveFilters] = useState({
    mealType: [],
    dietary: [],
    spiceLevel: [],
    cuisine: [],
    cookingMethod: [],
    occasion: []
  });

  const filterOptions = {
    mealType: ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Beverages'],
    dietary: ['Vegetarian', 'Vegan', 'No Onion-Garlic', 'Gluten-Free', 'Low Sodium'],
    spiceLevel: ['Mild', 'Medium', 'Hot', 'Extra Hot'],
    cuisine: ['Indian', 'Chinese', 'Continental', 'Italian', 'Thai', 'Mexican'],
    cookingMethod: ['Grilling', 'Stir-Frying', 'Baking', 'Roasting', 'Steaming', 'Deep Frying'],
    occasion: ['Daily Cooking', 'Party', 'Festival', 'Gifting', 'Picnic', 'Office Lunch']
  };

  const handleFilterToggle = (category, value) => {
    const newFilters = { ...activeFilters };
    if (newFilters[category].includes(value)) {
      newFilters[category] = newFilters[category].filter(item => item !== value);
    } else {
      newFilters[category] = [...newFilters[category], value];
    }
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      mealType: [],
      dietary: [],
      spiceLevel: [],
      cuisine: [],
      cookingMethod: [],
      occasion: []
    };
    setActiveFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const getActiveFilterCount = () => {
    return Object.values(activeFilters).flat().length;
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={onToggle}
          iconName="Filter"
          iconPosition="left"
          className="w-full"
        >
          Filters {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}
        </Button>
      </div>

      {/* Filter Panel */}
      <div className={`lg:block ${isOpen ? 'block' : 'hidden'} bg-white culinary-shadow rounded-xl p-6 mb-6 lg:mb-0`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-primary">Filters</h3>
          {getActiveFilterCount() > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-conversion-accent hover:text-conversion-accent/80"
            >
              Clear All
            </Button>
          )}
        </div>

        <div className="space-y-6">
          {Object.entries(filterOptions).map(([category, options]) => (
            <div key={category}>
              <h4 className="font-medium text-text-primary mb-3 capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h4>
              <div className="space-y-2">
                {options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={activeFilters[category].includes(option)}
                      onChange={() => handleFilterToggle(category, option)}
                      className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
                    />
                    <span className="text-sm text-text-secondary group-hover:text-primary transition-colors">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Close Button */}
        <div className="lg:hidden mt-6 pt-6 border-t border-border">
          <Button
            variant="primary"
            onClick={onToggle}
            className="w-full"
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilterPanel;