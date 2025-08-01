import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import CategoryHeader from './components/CategoryHeader';
import FilterPanel from './components/FilterPanel';
import ProductCard from './components/ProductCard';
import ComboBuilder from './components/ComboBuilder';
import SeasonalBanner from './components/SeasonalBanner';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ProductCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('quick-meals');
  const [filters, setFilters] = useState({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isComboBuilderOpen, setIsComboBuilderOpen] = useState(false);
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');
  const [cartItems, setCartItems] = useState([]);

  // Mock product data
  const allProducts = [
    {
      id: 1,
      name: "VEEBA Thousand Island Sandwich Spread",
      category: "Quick Meals",
      size: "280g",
      price: 145,
      originalPrice: 165,
      discount: 12,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      isNew: true,
      isBestseller: false,
      tags: ["Vegetarian", "No Onion-Garlic", "Mild"],
      usageContext: "Sandwiches, wraps, burger spreads",
      quickRecipes: ["Club Sandwich", "Veggie Wrap", "Grilled Panini"],
      mealType: ["Breakfast", "Lunch", "Snacks"],
      dietary: ["Vegetarian", "No Onion-Garlic"],
      spiceLevel: ["Mild"],
      cuisine: ["Continental"],
      cookingMethod: ["No Cooking"],
      occasion: ["Daily Cooking", "Office Lunch"]
    },
    {
      id: 2,
      name: "VEEBA Creamy Mayo Classic",
      category: "Quick Meals",
      size: "500g",
      price: 185,
      originalPrice: null,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1573225342350-16731dd9bf3d?w=400&h=300&fit=crop",
      isNew: false,
      isBestseller: true,
      tags: ["Vegetarian", "Creamy", "Versatile"],
      usageContext: "Salads, sandwiches, dips, cooking",
      quickRecipes: ["Coleslaw", "Potato Salad", "Mayo Chicken"],
      mealType: ["Lunch", "Dinner", "Snacks"],
      dietary: ["Vegetarian"],
      spiceLevel: ["Mild"],
      cuisine: ["Continental", "Indian"],
      cookingMethod: ["No Cooking", "Grilling"],
      occasion: ["Daily Cooking", "Party"]
    },
    {
      id: 3,
      name: "WOK TOK Schezwan Chutney",
      category: "WOK TOK Asian",
      size: "200g",
      price: 125,
      originalPrice: 140,
      discount: 11,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      isNew: true,
      isBestseller: false,
      tags: ["Spicy", "Authentic", "Chinese"],
      usageContext: "Stir-fries, noodles, fried rice, dips",
      quickRecipes: ["Schezwan Fried Rice", "Chilli Chicken", "Hakka Noodles"],
      mealType: ["Lunch", "Dinner"],
      dietary: ["Vegetarian"],
      spiceLevel: ["Hot"],
      cuisine: ["Chinese"],
      cookingMethod: ["Stir-Frying", "Deep Frying"],
      occasion: ["Daily Cooking", "Party"]
    },
    {
      id: 4,
      name: "VEEBA Peri Peri Sauce",
      category: "Gourmet Cooking",
      size: "320g",
      price: 165,
      originalPrice: null,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      isNew: false,
      isBestseller: true,
      tags: ["Spicy", "Grilling", "Premium"],
      usageContext: "Grilled chicken, marinades, pizza toppings",
      quickRecipes: ["Peri Peri Chicken", "Grilled Vegetables", "Spicy Pizza"],
      mealType: ["Lunch", "Dinner"],
      dietary: ["Vegetarian"],
      spiceLevel: ["Medium", "Hot"],
      cuisine: ["Continental"],
      cookingMethod: ["Grilling", "Roasting"],
      occasion: ["Party", "Daily Cooking"]
    },
    {
      id: 5,
      name: "VEEBA Honey Mustard Dressing",
      category: "Gourmet Cooking",
      size: "300g",
      price: 155,
      originalPrice: 175,
      discount: 11,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1505253213348-cd54c92b37ed?w=400&h=300&fit=crop",
      isNew: false,
      isBestseller: false,
      tags: ["Sweet", "Tangy", "Premium"],
      usageContext: "Salads, grilled meats, dipping sauce",
      quickRecipes: ["Garden Salad", "Grilled Chicken Salad", "Honey Mustard Chicken"],
      mealType: ["Lunch", "Dinner"],
      dietary: ["Vegetarian"],
      spiceLevel: ["Mild"],
      cuisine: ["Continental"],
      cookingMethod: ["No Cooking", "Grilling"],
      occasion: ["Daily Cooking", "Party"]
    },
    {
      id: 6,
      name: "WOK TOK Sweet & Sour Sauce",
      category: "WOK TOK Asian",
      size: "340g",
      price: 135,
      originalPrice: null,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop",
      isNew: false,
      isBestseller: true,
      tags: ["Sweet", "Tangy", "Chinese"],
      usageContext: "Stir-fries, spring rolls, chicken dishes",
      quickRecipes: ["Sweet & Sour Chicken", "Vegetable Spring Rolls", "Pineapple Fried Rice"],
      mealType: ["Lunch", "Dinner"],
      dietary: ["Vegetarian"],
      spiceLevel: ["Mild"],
      cuisine: ["Chinese"],
      cookingMethod: ["Stir-Frying", "Deep Frying"],
      occasion: ["Daily Cooking", "Party"]
    },
    {
      id: 7,
      name: "VEEBA Caesar Dressing",
      category: "Gourmet Cooking",
      size: "280g",
      price: 175,
      originalPrice: null,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      isNew: true,
      isBestseller: false,
      tags: ["Premium", "Creamy", "Classic"],
      usageContext: "Caesar salad, grilled chicken, pasta",
      quickRecipes: ["Classic Caesar Salad", "Chicken Caesar Wrap", "Caesar Pasta"],
      mealType: ["Lunch", "Dinner"],
      dietary: ["Vegetarian"],
      spiceLevel: ["Mild"],
      cuisine: ["Continental"],
      cookingMethod: ["No Cooking"],
      occasion: ["Daily Cooking", "Party"]
    },
    {
      id: 8,
      name: "VEEBA Mint Mayo",
      category: "Quick Meals",
      size: "250g",
      price: 125,
      originalPrice: 140,
      discount: 11,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=300&fit=crop",
      isNew: false,
      isBestseller: false,
      tags: ["Refreshing", "Mint", "Cool"],
      usageContext: "Sandwiches, chaats, salads, dips",
      quickRecipes: ["Mint Chicken Sandwich", "Aloo Chaat", "Cucumber Salad"],
      mealType: ["Breakfast", "Lunch", "Snacks"],
      dietary: ["Vegetarian"],
      spiceLevel: ["Mild"],
      cuisine: ["Indian", "Continental"],
      cookingMethod: ["No Cooking"],
      occasion: ["Daily Cooking", "Picnic"]
    }
  ];

  // Filter products based on selected category and filters
  const getFilteredProducts = () => {
    let filtered = allProducts;

    // Filter by category
    if (selectedCategory !== 'all') {
      const categoryMap = {
        'quick-meals': 'Quick Meals',
        'gourmet-cooking': 'Gourmet Cooking',
        'wok-tok-asian': 'WOK TOK Asian',
        'seasonal-specials': 'Seasonal Specials'
      };
      filtered = filtered.filter(product => 
        product.category === categoryMap[selectedCategory]
      );
    }

    // Apply filters
    Object.entries(filters).forEach(([filterType, filterValues]) => {
      if (filterValues.length > 0) {
        filtered = filtered.filter(product => {
          const productValues = product[filterType] || [];
          return filterValues.some(value => productValues.includes(value));
        });
      }
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Keep original order for popularity
        break;
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const sortOptions = [
    { value: 'popularity', label: 'Popularity' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Customer Rating' },
    { value: 'newest', label: 'Newest First' }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background-canvas">
      <Header />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
          {/* Category Header */}
          <CategoryHeader
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Seasonal Banner */}
          <SeasonalBanner />

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <FilterPanel
                filters={filters}
                onFilterChange={setFilters}
                isOpen={isFilterOpen}
                onToggle={() => setIsFilterOpen(!isFilterOpen)}
              />
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <p className="text-text-secondary">
                    {filteredProducts.length} products found
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsComboBuilderOpen(true)}
                    iconName="Package"
                    iconPosition="left"
                    className="hidden sm:flex"
                  >
                    Build Combo
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  {/* View Mode Toggle */}
                  <div className="flex border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${
                        viewMode === 'grid' ?'bg-primary text-white' :'bg-white text-text-secondary hover:text-primary'
                      }`}
                    >
                      <Icon name="Grid3X3" size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${
                        viewMode === 'list' ?'bg-primary text-white' :'bg-white text-text-secondary hover:text-primary'
                      }`}
                    >
                      <Icon name="List" size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Combo Builder Button */}
              <div className="sm:hidden mb-4">
                <Button
                  variant="outline"
                  onClick={() => setIsComboBuilderOpen(true)}
                  iconName="Package"
                  iconPosition="left"
                  className="w-full"
                >
                  Build Your Combo
                </Button>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className={`grid gap-6 ${
                  viewMode === 'grid' ?'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :'grid-cols-1'
                }`}>
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Search" size={32} className="text-text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    No products found
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Try adjusting your filters or search criteria
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setFilters({})}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}

              {/* Load More Button */}
              {filteredProducts.length > 0 && filteredProducts.length >= 8 && (
                <div className="text-center mt-12">
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="ChevronDown"
                    iconPosition="right"
                  >
                    Load More Products
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Combo Builder Modal */}
      <ComboBuilder
        isOpen={isComboBuilderOpen}
        onClose={() => setIsComboBuilderOpen(false)}
        products={allProducts}
      />
    </div>
  );
};

export default ProductCategories;