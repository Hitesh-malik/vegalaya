import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../../components/ui/Header";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import ProductTabs from "./components/ProductTabs";
import PerfectPairings from "./components/PerfectPairings";
import CustomerReviews from "./components/CustomerReviews";
import RecipeInspiration from "./components/RecipeInspiration";
import SmartRecommendations from "./components/SmartRecommendations";
import Icon from "../../components/AppIcon";

const ProductDetailPage = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id") || "1";
  const [currentProduct, setCurrentProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock product data
  const mockProducts = {
    1: {
      id: "1",
      name: "VEGALAYA Vega Coco Lassi",
      brand: "VEGALAYA",
      tagline: "Refreshing coconut delight",
      mainImage: "/assets/images/vegacocolassi.jpg",
      rating: 4.5,
      reviewCount: 1247,
      discount: 12,
      isNew: true,
      sizes: [
        { id: 1, volume: "250ml", price: 89, stock: 25 },
        { id: 2, volume: "500ml", price: 145, stock: 18 },
        { id: 3, volume: "1L", price: 289, stock: 12 },
      ],
      keyFeatures: [
        "100% Natural Coconut",
        "No Artificial Flavors",
        "Refreshing & Hydrating",
        "Traditional Recipe",
      ],
      flavorNotes: ["Coconut", "Sweet", "Creamy", "Refreshing"],
      spiceLevel: 1,
      textureDescription:
        "Smooth and creamy coconut lassi with perfect consistency. Made from fresh coconut milk and traditional spices.",
      usageIdeas: [
        "Breakfast accompaniment",
        "Summer refreshment",
        "Post-meal digestive drink",
        "Festival celebrations",
      ],
      pairingTips: [
        "Perfect with spicy meals",
        "Great with traditional sweets",
        "Refreshing after outdoor activities",
        "Ideal for hot weather",
      ],
      nutritionalInfo: {
        calories: 120,
        totalFat: "8g",
        saturatedFat: "6g",
        cholesterol: "0mg",
        sodium: "45mg",
        totalCarbs: "12g",
        protein: "2g",
      },
      dietaryInfo: ["Vegetarian", "Gluten-Free", "Natural"],
      ingredients:
        "Coconut Milk, Sugar, Cardamom, Saffron, Natural Flavors, Preservatives (Potassium Sorbate)",
    },
    2: {
      id: "2",
      name: "VEGALAYA Vega Mango Lassi",
      brand: "VEGALAYA",
      tagline: "Sun-kissed mangoes in every sip",
      mainImage: "/assets/images/vegaMangoLassi.jpg",
      rating: 4.7,
      reviewCount: 2156,
      discount: 0,
      isNew: false,
      sizes: [
        { id: 1, volume: "250ml", price: 95, stock: 30 },
        { id: 2, volume: "500ml", price: 185, stock: 25 },
        { id: 3, volume: "1L", price: 350, stock: 15 },
      ],
      keyFeatures: [
        "Real Mango Pulp",
        "No Artificial Colors",
        "Creamy & Smooth",
        "Summer Favorite",
      ],
      flavorNotes: ["Mango", "Sweet", "Creamy", "Fruity"],
      spiceLevel: 1,
      textureDescription:
        "Rich and creamy mango lassi with authentic mango flavor. Perfect balance of sweetness and creaminess.",
      usageIdeas: [
        "Summer refreshment",
        "Dessert accompaniment",
        "Breakfast smoothie",
        "Party drinks",
      ],
      pairingTips: [
        "Perfect with spicy curries",
        "Great with Indian sweets",
        "Refreshing in hot weather",
        "Ideal for celebrations",
      ],
      nutritionalInfo: {
        calories: 140,
        totalFat: "6g",
        saturatedFat: "4g",
        cholesterol: "0mg",
        sodium: "35mg",
        totalCarbs: "22g",
        protein: "3g",
      },
      dietaryInfo: ["Vegetarian", "Gluten-Free", "Natural"],
      ingredients:
        "Mango Pulp, Yogurt, Sugar, Cardamom, Saffron, Natural Flavors",
    },
    3: {
      id: "3",
      name: "VEGALAYA Vega Kesar Chai",
      brand: "VEGALAYA",
      tagline: "Premium saffron-infused tea",
      mainImage: "/assets/images/vegakesarchai.jpg",
      rating: 4.6,
      reviewCount: 892,
      discount: 11,
      isNew: true,
      sizes: [
        { id: 1, volume: "100ml", price: 45, stock: 40 },
        { id: 2, volume: "200ml", price: 125, stock: 35 },
        { id: 3, volume: "500ml", price: 280, stock: 20 },
      ],
      keyFeatures: [
        "Premium Saffron",
        "Authentic Recipe",
        "Rich Aroma",
        "Traditional Taste",
      ],
      flavorNotes: ["Saffron", "Cardamom", "Rich", "Aromatic"],
      spiceLevel: 2,
      textureDescription:
        "Rich and aromatic kesar chai with premium saffron strands. Perfect blend of spices and milk.",
      usageIdeas: [
        "Morning tea ritual",
        "Special occasions",
        "Festival celebrations",
        "Winter comfort drink",
      ],
      pairingTips: [
        "Perfect with traditional sweets",
        "Great with spicy snacks",
        "Ideal for cold weather",
        "Celebration drink",
      ],
      nutritionalInfo: {
        calories: 80,
        totalFat: "4g",
        saturatedFat: "2g",
        cholesterol: "0mg",
        sodium: "25mg",
        totalCarbs: "8g",
        protein: "2g",
      },
      dietaryInfo: ["Vegetarian", "Gluten-Free", "Natural"],
      ingredients:
        "Tea Leaves, Saffron, Cardamom, Milk, Sugar, Natural Flavors",
    },
    4: {
      id: "4",
      name: "VEGALAYA Vega Moka",
      brand: "VEGALAYA",
      tagline: "Rich coffee with chocolate notes",
      mainImage: "/assets/images/vegamoka.jpg",
      rating: 4.4,
      reviewCount: 1567,
      discount: 0,
      isNew: false,
      sizes: [
        { id: 1, volume: "200ml", price: 75, stock: 45 },
        { id: 2, volume: "320ml", price: 165, stock: 30 },
        { id: 3, volume: "500ml", price: 250, stock: 25 },
      ],
      keyFeatures: [
        "Premium Coffee Beans",
        "Chocolate Infusion",
        "Rich & Smooth",
        "Energy Boost",
      ],
      flavorNotes: ["Coffee", "Chocolate", "Rich", "Smooth"],
      spiceLevel: 2,
      textureDescription:
        "Smooth and rich moka coffee with chocolate undertones. Perfect balance of coffee and chocolate flavors.",
      usageIdeas: [
        "Morning energy boost",
        "Office refreshment",
        "Dessert accompaniment",
        "Social gatherings",
      ],
      pairingTips: [
        "Perfect with chocolate desserts",
        "Great with breakfast items",
        "Ideal for work breaks",
        "Social drink",
      ],
      nutritionalInfo: {
        calories: 95,
        totalFat: "5g",
        saturatedFat: "3g",
        cholesterol: "0mg",
        sodium: "30mg",
        totalCarbs: "10g",
        protein: "2g",
      },
      dietaryInfo: ["Vegetarian", "Gluten-Free", "Natural"],
      ingredients: "Coffee Beans, Chocolate, Milk, Sugar, Natural Flavors",
    },
    5: {
      id: "5",
      name: "VEGALAYA Vega Berry Shake",
      brand: "VEGALAYA",
      tagline: "Fresh berry goodness in every sip",
      mainImage: "/assets/images/vegaBerryShake.jpg",
      rating: 4.3,
      reviewCount: 743,
      discount: 11,
      isNew: false,
      sizes: [
        { id: 1, volume: "200ml", price: 65, stock: 35 },
        { id: 2, volume: "300ml", price: 155, stock: 28 },
        { id: 3, volume: "500ml", price: 240, stock: 20 },
      ],
      keyFeatures: [
        "Mixed Berries",
        "Natural Sweetness",
        "Antioxidant Rich",
        "Refreshing Taste",
      ],
      flavorNotes: ["Berry", "Sweet", "Tangy", "Fresh"],
      spiceLevel: 1,
      textureDescription:
        "Smooth and refreshing berry shake with natural berry flavors. Perfect blend of sweetness and tanginess.",
      usageIdeas: [
        "Post-workout refreshment",
        "Breakfast smoothie",
        "Summer drink",
        "Healthy snack",
      ],
      pairingTips: [
        "Perfect with light meals",
        "Great for health-conscious consumers",
        "Ideal for active lifestyle",
        "Refreshing drink",
      ],
      nutritionalInfo: {
        calories: 110,
        totalFat: "3g",
        saturatedFat: "1g",
        cholesterol: "0mg",
        sodium: "20mg",
        totalCarbs: "18g",
        protein: "2g",
      },
      dietaryInfo: ["Vegetarian", "Gluten-Free", "Natural"],
      ingredients: "Mixed Berries, Yogurt, Honey, Natural Flavors",
    },
  };

  const mockPairings = [
    {
      id: 1,
      title: "Sandwich Lovers Bundle",
      description: "Everything you need for gourmet sandwiches",
      products: [
        {
          id: "1",
          name: "VEGALAYA Creamy Mayo",
          size: "500g",
          price: 159,
          image: "/assets/images/vegaMangoLassi.jpg",
        },
        {
          id: "2",
          name: "VEGALAYA Thousand Island",
          size: "300g",
          price: 129,
          image: "/assets/images/vegacocolassi.jpg",
        },
        {
          id: "3",
          name: "VEGALAYA Mint Mayo",
          size: "250g",
          price: 99,
          image: "/assets/images/vegakesarchai.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "BBQ Party Pack",
      description: "Perfect for outdoor grilling and parties",
      products: [
        {
          id: "1",
          name: "VEGALAYA Creamy Mayo",
          size: "1kg",
          price: 289,
          image: "/assets/images/vegaMangoLassi.jpg",
        },
        {
          id: "4",
          name: "VEGALAYA BBQ Sauce",
          size: "350g",
          price: 149,
          image:
            "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&h=200&fit=crop",
        },
      ],
    },
  ];

  const mockReviews = [
    {
      id: 1,
      customerName: "Priya Sharma",
      rating: 5,
      date: "2025-01-15",
      verified: true,
      comment:
        "Absolutely love this mayo! The texture is so smooth and creamy. I've been using it for all my sandwiches and salads. The taste is perfect - not too tangy, not too bland.",
      images: [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop",
      ],
      helpfulCount: 23,
    },
    {
      id: 2,
      customerName: "Rajesh Kumar",
      rating: 4,
      date: "2025-01-10",
      verified: true,
      comment:
        "Good quality mayonnaise. My family loves it on burgers and sandwiches. The 500g pack is perfect for our family of four. Will definitely buy again.",
      images: [],
      helpfulCount: 15,
    },
    {
      id: 3,
      customerName: "Anita Desai",
      rating: 5,
      date: "2025-01-08",
      verified: false,
      comment:
        "Best mayo I've ever tried! The consistency is perfect and it doesn't separate like other brands. Great for making coleslaw and potato salad.",
      images: [
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=100&h=100&fit=crop",
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=100&h=100&fit=crop",
      ],
      helpfulCount: 31,
    },
    {
      id: 4,
      customerName: "Vikram Singh",
      rating: 4,
      date: "2025-01-05",
      verified: true,
      comment:
        "Really good product. The taste is authentic and the packaging is convenient. Only wish it came in smaller sizes for single people.",
      images: [],
      helpfulCount: 8,
    },
  ];

  const mockRecipes = [
    {
      id: 1,
      name: "Classic Club Sandwich",
      description:
        "Triple-layered sandwich with chicken, bacon, lettuce, and tomato",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=200&fit=crop",
      cookingTime: "15 mins",
      servings: 2,
      difficulty: "Easy",
      rating: 4.8,
      keyIngredients: ["Bread", "Chicken", "Bacon", "Lettuce", "Tomato"],
      quickSteps: [
        "Toast bread slices until golden",
        "Spread VEGALAYA mayo generously",
        "Layer chicken, bacon, and vegetables",
        "Secure with toothpicks and serve",
      ],
    },
    {
      id: 2,
      name: "Creamy Coleslaw",
      description: "Fresh and crunchy coleslaw with VEGALAYA mayo dressing",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop",
      cookingTime: "10 mins",
      servings: 4,
      difficulty: "Easy",
      rating: 4.6,
      keyIngredients: ["Cabbage", "Carrots", "Mayo", "Vinegar", "Sugar"],
      quickSteps: [
        "Shred cabbage and carrots finely",
        "Mix mayo with vinegar and sugar",
        "Toss vegetables with dressing",
        "Chill for 30 minutes before serving",
      ],
    },
    {
      id: 3,
      name: "Gourmet Chicken Burger",
      description: "Juicy chicken burger with special mayo sauce",
      image:
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&h=200&fit=crop",
      cookingTime: "25 mins",
      servings: 2,
      difficulty: "Medium",
      rating: 4.9,
      keyIngredients: [
        "Chicken Breast",
        "Burger Buns",
        "Mayo",
        "Cheese",
        "Onions",
      ],
      quickSteps: [
        "Grill chicken breast until cooked",
        "Toast burger buns lightly",
        "Mix mayo with herbs for special sauce",
        "Assemble burger with all toppings",
      ],
    },
  ];

  const mockRecommendations = [
    {
      id: "2",
      name: "VEGALAYA Thousand Island Dressing",
      description: "Tangy and sweet dressing perfect for salads",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop",
      price: 129,
      discount: 10,
      rating: 4.3,
      reviewCount: 892,
      isNew: false,
      keyFeatures: ["Tangy Flavor", "Perfect for Salads"],
      recommendationReason: "Customers who bought mayo also love this",
    },
    {
      id: "3",
      name: "VEGALAYA Mint Mayonnaise",
      description: "Refreshing mint-flavored mayo for a cool twist",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop",
      price: 99,
      discount: 20,
      rating: 4.4,
      reviewCount: 654,
      isNew: true,
      keyFeatures: ["Mint Flavor", "Refreshing Taste"],
      recommendationReason: "Popular flavor variant",
    },
    {
      id: "4",
      name: "VEGALAYA BBQ Sauce",
      description: "Smoky BBQ sauce for grilling and dipping",
      image:
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=300&fit=crop",
      price: 149,
      discount: 5,
      rating: 4.6,
      reviewCount: 1123,
      isNew: false,
      keyFeatures: ["Smoky Flavor", "Perfect for BBQ"],
      recommendationReason: "Great for outdoor cooking",
    },
  ];

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    setTimeout(() => {
      setCurrentProduct(mockProducts[productId] || mockProducts["1"]);
      setLoading(false);
    }, 500);
  }, [productId]);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    // Add to cart logic here
  };

  const handleSaveForLater = (product) => {
    console.log("Saving for later:", product);
    // Save for later logic here
  };

  const handleAddBundle = (bundle) => {
    console.log("Adding bundle to cart:", bundle);
    // Add bundle to cart logic here
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background-canvas">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-text-secondary">Loading product details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!currentProduct) {
    return (
      <div className="min-h-screen bg-background-canvas">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <Icon
              name="AlertCircle"
              size={48}
              className="text-error mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-text-primary mb-2">
              Product Not Found
            </h2>
            <p className="text-text-secondary">
              The product you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-canvas">
      <Header />

      {/* Main Content */}
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <a
                href="/homepage"
                className="text-text-secondary hover:text-primary"
              >
                Home
              </a>
              <Icon
                name="ChevronRight"
                size={16}
                className="text-text-secondary"
              />
              <a
                href="/product-categories"
                className="text-text-secondary hover:text-primary"
              >
                Products
              </a>
              <Icon
                name="ChevronRight"
                size={16}
                className="text-text-secondary"
              />
              <span className="text-text-primary font-medium">
                {currentProduct.name}
              </span>
            </nav>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Product Gallery */}
            <div>
              <ProductGallery product={currentProduct} />
            </div>

            {/* Product Info */}
            <div>
              <ProductInfo
                product={currentProduct}
                onAddToCart={handleAddToCart}
                onSaveForLater={handleSaveForLater}
              />
            </div>
          </div>

          {/* Product Tabs */}
          {/* <div className="mb-12">
            <ProductTabs product={currentProduct} />
          </div> */}

          {/* Perfect Pairings */}
          {/* <div className="mb-12">
            <PerfectPairings
              pairings={mockPairings}
              onAddBundle={handleAddBundle}
            />
          </div> */}

          {/* Customer Reviews */}
          {/* <div className="mb-12">
            <CustomerReviews
              reviews={mockReviews}
              averageRating={currentProduct.rating}
              totalReviews={currentProduct.reviewCount}
            />
          </div> */}
        </div>

        {/* Recipe Inspiration & Recommendations */}
        {/* <div className="bg-surface py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              <div className="lg:col-span-1">
                <RecipeInspiration recipes={mockRecipes} />
              </div>

             
              <div className="lg:col-span-2">
                <SmartRecommendations
                  recommendations={mockRecommendations}
                  onAddToCart={handleAddToCart}
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* Footer CTA */}
        <div className="bg-gradient-brand py-12 bg-[#2b3a87]">
          <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Transform Your Meals with VEGALAYA
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of satisfied customers who trust VEGALAYA for
              exceptional taste
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Explore All Products
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;
