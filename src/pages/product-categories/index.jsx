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
  const [sortBy, setSortBy] = useState("price-low");
  const [viewMode, setViewMode] = useState("grid");
  const [cartItems, setCartItems] = useState([]);

  // Mock product data
  const allProducts = [
    {
      id: 1,
      name: "VEGALAYA Vega Coco Lassi",
      category: "Beverages",
      price: 145,
      originalPrice: 165,
      discount: 12,
      rating: 4.5,
      image: "assets/images/newImage/newProduct/VegaCocoLassi.png",
      isNew: true,
      isBestseller: false,
      tags: ["Refreshing", "Coconut", "Traditional"],
      usageContext: "Breakfast, snacks, refreshments",
      quickRecipes: [
        "Coconut Lassi",
        "Mango Coconut Mix",
        "Spiced Coconut Drink",
      ],
      beverageType: ["Lassi"],
      dietary: ["Vegetarian", "Gluten-Free"],
      tasteProfile: ["Refreshing", "Traditional"],
      occasion: ["Daily", "Festivals", "Parties"],
      size: ["500ml"],
      brand: ["VEGALAYA Vega"],
    },
    {
      id: 2,
      name: "VEGALAYA Vega Mango Lassi",
      category: "Beverages",
      price: 185,
      originalPrice: null,
      rating: 4.7,
      image: "assets/images/newImage/newProduct/VegaMangoLassi.png",
      isNew: false,
      isBestseller: true,
      tags: ["Mango", "Sweet", "Creamy"],
      usageContext: "Summer drinks, desserts, smoothies",
      quickRecipes: ["Mango Lassi", "Mango Smoothie", "Mango Yogurt Mix"],
      beverageType: ["Lassi"],
      dietary: ["Vegetarian", "Gluten-Free"],
      tasteProfile: ["Sweet", "Creamy", "Fruity"],
      occasion: ["Daily", "Summer", "Parties"],
      size: ["500ml"],
      brand: ["VEGALAYA Vega"],
    },
    {
      id: 3,
      name: "VEGALAYA Vega Kesar Chai",
      category: "Beverages",
      price: 125,
      originalPrice: 140,
      discount: 11,
      rating: 4.6,
      image: "assets/images/newImage/newProduct/VegaKesarChai.png",
      isNew: true,
      isBestseller: false,
      tags: ["Saffron", "Premium", "Traditional"],
      usageContext: "Tea time, morning drinks, special occasions",
      quickRecipes: ["Keshar Chai", "Saffron Tea", "Premium Chai"],
      beverageType: ["Chai"],
      dietary: ["Vegetarian", "Gluten-Free"],
      tasteProfile: ["Traditional", "Premium"],
      occasion: ["Daily", "Special Occasions", "Festivals"],
      size: ["200ml"],
      brand: ["VEGALAYA Vega"],
    },
    {
      id: 4,
      name: "VEGALAYA Vega Moka",
      category: "Beverages",
      price: 165,
      originalPrice: null,
      rating: 4.4,
      image: "assets/images/newImage/newProduct/VegaMoka.png",
      isNew: false,
      isBestseller: true,
      tags: ["Coffee", "Chocolate", "Premium"],
      usageContext: "Coffee drinks, desserts, energy boost",
      quickRecipes: ["Moka Coffee", "Chocolate Coffee", "Coffee Smoothie"],
      beverageType: ["Coffee"],
      dietary: ["Vegetarian", "Gluten-Free"],
      tasteProfile: ["Premium"],
      occasion: ["Daily", "Office", "Parties"],
      size: ["320ml"],
      brand: ["VEGALAYA Vega"],
    },
    {
      id: 5,
      name: "VEGALAYA Vega Berry Shake",
      category: "Beverages",
      price: 155,
      originalPrice: 175,
      discount: 11,
      rating: 4.3,
      image: "assets/images/newImage/newProduct/VegaBerryShake.png",
      isNew: false,
      isBestseller: false,
      tags: ["Berry", "Antioxidant", "Healthy"],
      usageContext: "Healthy drinks, smoothies, energy boost",
      quickRecipes: ["Berry Smoothie", "Mixed Berry Shake", "Berry Yogurt"],
      beverageType: ["Shake"],
      dietary: ["Vegetarian", "Gluten-Free", "Healthy"],
      tasteProfile: ["Fruity", "Healthy"],
      occasion: ["Daily", "Health", "Fitness"],
      size: ["300ml"],
      brand: ["VEGALAYA Vega"],
    },
    {
      id: 6,
      name: "VEGALAYA Vega Strawberry Lassi",
      category: "Beverages",
      price: 135,
      originalPrice: null,
      rating: 4.5,
      image: "assets/images/newImage/newProduct/VegaStrawberryLassi.png",
      isNew: false,
      isBestseller: true,
      tags: ["Strawberry", "Sweet", "Refreshing"],
      usageContext: "Summer drinks, desserts, smoothies",
      quickRecipes: [
        "Strawberry Lassi",
        "Strawberry Smoothie",
        "Strawberry Yogurt",
      ],
      beverageType: ["Lassi"],
      dietary: ["Vegetarian", "Gluten-Free"],
      tasteProfile: ["Sweet", "Refreshing", "Fruity"],
      occasion: ["Daily", "Summer", "Parties"],
      size: ["340ml"],
      brand: ["VEGALAYA Vega"],
    },
    {
      id: 7,
      name: "VEGALAYA Vega Choco",
      category: "Beverages",
      price: 160,
      originalPrice: null,
      rating: 4.3,
      image: "assets/images/newImage/newProduct/VegaChoco.png",
      isNew: true,
      isBestseller: false,
      tags: ["Chocolate", "Rich", "Creamy"],
      usageContext: "Desserts, chocolate lovers, kids' drinks",
      quickRecipes: [
        "Choco Shake",
        "Choco Milk",
        "Chocolate Smoothie"
      ],
      beverageType: ["Shake"],
      dietary: ["Vegetarian", "Gluten-Free"],
      tasteProfile: ["Rich", "Chocolatey", "Creamy"],
      occasion: ["Daily", "Dessert", "Kids"],
      size: ["300ml"],
      brand: ["VEGALAYA Vega"],
    },
    {
      id: 8,
      name: "VEGALAYA Vega Almond Creamer",
      category: "Creamers",
      price: 190,
      originalPrice: 210,
      discount: 10,
      rating: 4.4,
      image: "assets/images/newImage/newProduct/VegaAlmondCreamer.png",
      isNew: false,
      isBestseller: false,
      tags: ["Almond", "Nutty", "Vegan"],
      usageContext: "Coffee, Tea, Desserts",
      quickRecipes: [
        "Almond Latte",
        "Vegan Desserts"
      ],
      beverageType: ["Creamer"],
      dietary: ["Vegan", "Gluten-Free"],
      tasteProfile: ["Nutty", "Smooth"],
      occasion: ["Daily", "Baking", "Cafe"],
      size: ["250ml"],
      brand: ["VEGALAYA Vega"],
    },
    {
      id: 9,
      name: "VEGALAYA Vega Soy Creamer",
      category: "Creamers",
      price: 160,
      originalPrice: null,
      rating: 4.2,
      image: "assets/images/newImage/newProduct/VegaSoyCreamer.png",
      isNew: false,
      isBestseller: false,
      tags: ["Soy", "Vegan", "Smooth"],
      usageContext: "Coffee, Tea, Vegan drinks",
      quickRecipes: [
        "Soy Latte",
        "Soy Creamer Smoothie"
      ],
      beverageType: ["Creamer"],
      dietary: ["Vegan", "Gluten-Free"],
      tasteProfile: ["Smooth", "Light"],
      occasion: ["Daily", "Cafe"],
      size: ["250ml"],
      brand: ["VEGALAYA Vega"],
    },
    {
      id: 10,
      name: "VEGALAYA Vega Jowar Creamer",
      category: "Creamers",
      price: 145,
      originalPrice: null,
      rating: 4.0,
      image: "assets/images/newImage/newProduct/VegaJowarCreamer.png",
      isNew: false,
      isBestseller: false,
      tags: ["Jowar", "Vegan", "Healthy"],
      usageContext: "Healthy Creamer, Coffee, Tea",
      quickRecipes: [
        "Jowar Creamer Coffee",
        "Baking with Jowar Creamer"
      ],
      beverageType: ["Creamer"],
      dietary: ["Vegan", "Gluten-Free"],
      tasteProfile: ["Earthy", "Mild"],
      occasion: ["Daily", "Health"],
      size: ["250ml"],
      brand: ["VEGALAYA Vega"],
    }
  ];

  // Filter products based on selected category and filters
  const getFilteredProducts = () => {
    let filtered = allProducts;

    // Filter by category
    if (selectedCategory !== "all") {
      const categoryMap = {
        lassi: "Lassi",
        chai: "Chai",
        coffee: "Coffee",
        shake: "Shake",
      };
      filtered = filtered.filter((product) =>
        product.beverageType.includes(categoryMap[selectedCategory])
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
      default:
        // Default to price low to high
        filtered.sort((a, b) => a.price - b.price);
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
    { value: "price-low", label: "Price: Low to High", icon: "ArrowUpDown" },
    { value: "price-high", label: "Price: High to Low", icon: "ArrowDownUp" },
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
