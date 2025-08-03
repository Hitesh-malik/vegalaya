import React, { useState, useEffect } from "react";
import Header from "../../components/ui/Header";
import CategoryHeader from "./components/CategoryHeader";
import FilterPanel from "./components/FilterPanel";
import ProductCard from "./components/ProductCard";
import ComboBuilder from "./components/ComboBuilder";
import SeasonalBanner from "./components/SeasonalBanner";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import Select from "../../components/ui/Select";

const ProductCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filters, setFilters] = useState({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isComboBuilderOpen, setIsComboBuilderOpen] = useState(false);
  const [sortBy, setSortBy] = useState("popularity");
  const [viewMode, setViewMode] = useState("grid");
  const [cartItems, setCartItems] = useState([]);

  // Mock product data
  const allProducts = [
    {
      id: 1,
      name: "VEEBA Vega Coco Lassi",
      category: "Beverages",
      size: "500ml",
      price: 145,
      originalPrice: 165,
      discount: 12,
      rating: 4.5,
      image: "/assets/images/vegacocolassi.jpg",
      isNew: true,
      isBestseller: false,
      tags: ["Refreshing", "Coconut", "Traditional"],
      usageContext: "Breakfast, snacks, refreshments",
      quickRecipes: [
        "Coconut Lassi",
        "Mango Coconut Mix",
        "Spiced Coconut Drink",
      ],
      mealType: ["Breakfast", "Snacks", "Beverages"],
      dietary: ["Vegetarian", "Gluten-Free"],
      spiceLevel: ["Mild"],
      cuisine: ["Indian", "Fusion"],
      cookingMethod: ["No Cooking"],
      occasion: ["Daily", "Festivals", "Parties"],
    },
    {
      id: 2,
      name: "VEEBA Vega Mango Lassi",
      category: "Beverages",
      size: "500ml",
      price: 185,
      originalPrice: null,
      rating: 4.7,
      image: "/assets/images/vegaMangoLassi.jpg",
      isNew: false,
      isBestseller: true,
      tags: ["Mango", "Sweet", "Creamy"],
      usageContext: "Summer drinks, desserts, smoothies",
      quickRecipes: ["Mango Lassi", "Mango Smoothie", "Mango Yogurt Mix"],
      mealType: ["Snacks", "Desserts", "Beverages"],
      dietary: ["Vegetarian", "Gluten-Free"],
      spiceLevel: ["Mild"],
      cuisine: ["Indian", "Fusion"],
      cookingMethod: ["No Cooking"],
      occasion: ["Daily", "Summer", "Parties"],
    },
    {
      id: 3,
      name: "VEEBA Vega Keshar Chai",
      category: "Beverages",
      size: "200ml",
      price: 125,
      originalPrice: 140,
      discount: 11,
      rating: 4.6,
      image: "/assets/images/vegakesarchai.jpg",
      isNew: true,
      isBestseller: false,
      tags: ["Saffron", "Premium", "Traditional"],
      usageContext: "Tea time, morning drinks, special occasions",
      quickRecipes: ["Keshar Chai", "Saffron Tea", "Premium Chai"],
      mealType: ["Beverages", "Snacks"],
      dietary: ["Vegetarian", "Gluten-Free"],
      spiceLevel: ["Mild"],
      cuisine: ["Indian", "Traditional"],
      cookingMethod: ["Hot Beverage"],
      occasion: ["Daily", "Special Occasions", "Festivals"],
    },
    {
      id: 4,
      name: "VEEBA Vega Moka",
      category: "Beverages",
      size: "320ml",
      price: 165,
      originalPrice: null,
      rating: 4.4,
      image: "/assets/images/vegamoka.jpg",
      isNew: false,
      isBestseller: true,
      tags: ["Coffee", "Chocolate", "Premium"],
      usageContext: "Coffee drinks, desserts, energy boost",
      quickRecipes: ["Moka Coffee", "Chocolate Coffee", "Coffee Smoothie"],
      mealType: ["Beverages", "Snacks"],
      dietary: ["Vegetarian", "Gluten-Free"],
      spiceLevel: ["Mild"],
      cuisine: ["International", "Fusion"],
      cookingMethod: ["No Cooking"],
      occasion: ["Daily", "Office", "Parties"],
    },
    {
      id: 5,
      name: "VEEBA Vega Berry Shake",
      category: "Beverages",
      size: "300ml",
      price: 155,
      originalPrice: 175,
      discount: 11,
      rating: 4.3,
      image: "/assets/images/vegaBerryShake.jpg",
      isNew: false,
      isBestseller: false,
      tags: ["Berry", "Antioxidant", "Healthy"],
      usageContext: "Healthy drinks, smoothies, energy boost",
      quickRecipes: ["Berry Smoothie", "Mixed Berry Shake", "Berry Yogurt"],
      mealType: ["Snacks", "Beverages"],
      dietary: ["Vegetarian", "Gluten-Free", "Healthy"],
      spiceLevel: ["Mild"],
      cuisine: ["International", "Healthy"],
      cookingMethod: ["No Cooking"],
      occasion: ["Daily", "Health", "Fitness"],
    },
    {
      id: 6,
      name: "VEEBA Vega Strawberry Lassi",
      category: "Beverages",
      size: "340ml",
      price: 135,
      originalPrice: null,
      rating: 4.5,
      image: "/assets/images/vegastrawberrylassi.jpg",
      isNew: false,
      isBestseller: true,
      tags: ["Strawberry", "Sweet", "Refreshing"],
      usageContext: "Summer drinks, desserts, smoothies",
      quickRecipes: [
        "Strawberry Lassi",
        "Strawberry Smoothie",
        "Strawberry Yogurt",
      ],
      mealType: ["Snacks", "Desserts", "Beverages"],
      dietary: ["Vegetarian", "Gluten-Free"],
      spiceLevel: ["Mild"],
      cuisine: ["Indian", "Fusion"],
      cookingMethod: ["No Cooking"],
      occasion: ["Daily", "Summer", "Parties"],
    },
  ];

  // Filter products based on selected category and filters
  const getFilteredProducts = () => {
    let filtered = allProducts;

    // Filter by category
    if (selectedCategory !== "all") {
      const categoryMap = {
        beverages: "Beverages",
        traditional: "Beverages",
        premium: "Beverages",
        branded: "Branded",
      };
      filtered = filtered.filter(
        (product) => product.category === categoryMap[selectedCategory]
      );
    }

    // Apply filters
    Object.entries(filters).forEach(([filterType, filterValues]) => {
      if (filterValues.length > 0) {
        filtered = filtered.filter((product) => {
          const productValues = product[filterType] || [];
          return filterValues.some((value) => productValues.includes(value));
        });
      }
    });

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
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
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const sortOptions = [
    { value: "popularity", label: "Most Popular", icon: "TrendingUp" },
    { value: "price-low", label: "Price: Low to High", icon: "ChevronUp" },
    { value: "price-high", label: "Price: High to Low", icon: "ChevronDown" },
    { value: "rating", label: "Highest Rated", icon: "Star" },
    { value: "newest", label: "Newest First", icon: "Sparkles" },
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
          {/* <SeasonalBanner /> */}

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
                  <Select
                    value={sortBy}
                    onChange={setSortBy}
                    options={sortOptions}
                    placeholder="Sort by..."
                    className="w-40 sm:w-48"
                  />

                  {/* View Mode Toggle */}
                  <div className="flex border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 ${
                        viewMode === "grid"
                          ? "bg-primary text-white"
                          : "bg-white text-text-secondary hover:text-primary"
                      }`}
                    >
                      <Icon name="Grid3X3" size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 ${
                        viewMode === "list"
                          ? "bg-primary text-white"
                          : "bg-white text-text-secondary hover:text-primary"
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
                <div
                  className={`grid gap-6 ${
                    viewMode === "grid"
                      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                      : "grid-cols-1"
                  }`}
                >
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
                    <Icon
                      name="Search"
                      size={32}
                      className="text-text-secondary"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    No products found
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Try adjusting your filters or search criteria
                  </p>
                  <Button variant="outline" onClick={() => setFilters({})}>
                    Clear All Filters
                  </Button>
                </div>
              )}

              {/* Load More Button */}
              {filteredProducts.length > 0 && filteredProducts.length >= 7 && (
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
