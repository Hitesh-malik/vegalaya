import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../../components/ui/Header";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
 
import Icon from "../../components/AppIcon";

const ProductDetailPage = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id") || "1";
  const [currentProduct, setCurrentProduct] = useState(null);
  const [loading, setLoading] = useState(true);
 
  // Updated mockProducts with new allProducts data structure and info

  const mockProducts = {
    1: {
      id: "1",
      name: "VEGALAYA Vega Coco Lassi",
      brand: "VEGALAYA Vega",
      tagline: "Refreshing coconut delight",
      mainImage: "/assets/images/newImage/newProduct/VegaCocoLassi.png",
      rating: 4.5,
      reviewCount: 1247,
      discount: 12,
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
      sizes: [
        { id: 1, volume: "500ml", price: 145, stock: 18 },
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
      brand: "VEGALAYA Vega",
      tagline: "Sun-kissed mangoes in every sip",
      mainImage: "/assets/images/newImage/newProduct/VegaMangoLassi.png",
      rating: 4.7,
      reviewCount: 2156,
      discount: 0,
      isNew: false,
      isBestseller: true,
      tags: ["Mango", "Sweet", "Creamy"],
      usageContext: "Summer drinks, desserts, smoothies",
      quickRecipes: ["Mango Lassi", "Mango Smoothie", "Mango Yogurt Mix"],
      beverageType: ["Lassi"],
      dietary: ["Vegetarian", "Gluten-Free"],
      tasteProfile: ["Sweet", "Creamy", "Fruity"],
      occasion: ["Daily", "Summer", "Parties"],
      sizes: [
        { id: 1, volume: "500ml", price: 185, stock: 25 },
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
      brand: "VEGALAYA Vega",
      tagline: "Premium saffron-infused tea",
      mainImage: "/assets/images/newImage/newProduct/VegaKesarChai.png",
      rating: 4.6,
      reviewCount: 892,
      discount: 11,
      isNew: true,
      isBestseller: false,
      tags: ["Saffron", "Premium", "Traditional"],
      usageContext: "Tea time, morning drinks, special occasions",
      quickRecipes: ["Keshar Chai", "Saffron Tea", "Premium Chai"],
      beverageType: ["Chai"],
      dietary: ["Vegetarian", "Gluten-Free"],
      tasteProfile: ["Traditional", "Premium"],
      occasion: ["Daily", "Special Occasions", "Festivals"],
      sizes: [
        { id: 1, volume: "200ml", price: 125, stock: 35 },
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
      brand: "VEGALAYA Vega",
      tagline: "Rich coffee with chocolate notes",
      mainImage: "/assets/images/newImage/newProduct/VegaMoka.png",
      rating: 4.4,
      reviewCount: 1567,
      discount: 0,
      isNew: false,
      isBestseller: true,
      tags: ["Coffee", "Chocolate", "Premium"],
      usageContext: "Coffee drinks, desserts, energy boost",
      quickRecipes: ["Moka Coffee", "Chocolate Coffee", "Coffee Smoothie"],
      beverageType: ["Coffee"],
      dietary: ["Vegetarian", "Gluten-Free"],
      tasteProfile: ["Premium"],
      occasion: ["Daily", "Office", "Parties"],
      sizes: [
        { id: 1, volume: "320ml", price: 165, stock: 30 },
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
      brand: "VEGALAYA Vega",
      tagline: "Fresh berry goodness in every sip",
      mainImage: "/assets/images/newImage/newProduct/VegaBerryShake.png",
      rating: 4.3,
      reviewCount: 743,
      discount: 11,
      isNew: false,
      isBestseller: false,
      tags: ["Berry", "Antioxidant", "Healthy"],
      usageContext: "Healthy drinks, smoothies, energy boost",
      quickRecipes: ["Berry Smoothie", "Mixed Berry Shake", "Berry Yogurt"],
      beverageType: ["Shake"],
      dietary: ["Vegetarian", "Gluten-Free", "Healthy"],
      tasteProfile: ["Fruity", "Healthy"],
      occasion: ["Daily", "Health", "Fitness"],
      sizes: [
        { id: 1, volume: "300ml", price: 155, stock: 28 },
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
    6: {
      id: "6",
      name: "VEGALAYA Vega Strawberry Lassi",
      brand: "VEGALAYA Vega",
      tagline: "Sweet strawberry probiotic lassi",
      mainImage: "/assets/images/newImage/newProduct/VegaStrawberryLassi.png",
      rating: 4.5,
      reviewCount: 999,
      discount: 0,
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
      sizes: [
        { id: 1, volume: "340ml", price: 135, stock: 10 },
      ],
      keyFeatures: [
        "Real Strawberries",
        "Probiotic Rich",
        "Refreshing Taste",
        "Perfect for Summer",
      ],
      flavorNotes: ["Strawberry", "Sweet", "Fruity"],
      spiceLevel: 1,
      textureDescription:
        "Smooth, creamy texture with sweet strawberry flavor and probiotic benefits.",
      usageIdeas: [
        "Chilled summer refreshment",
        "Post-workout drink",
        "Sweet treat",
        "Kids' favorite",
      ],
      pairingTips: [
        "Serve with breakfast",
        "Great with fruit platters",
        "Pairs with light cakes",
        "Enjoy on its own",
      ],
      nutritionalInfo: {
        calories: 120,
        totalFat: "4g",
        saturatedFat: "2g",
        cholesterol: "0mg",
        sodium: "24mg",
        totalCarbs: "19g",
        protein: "2g",
      },
      dietaryInfo: ["Vegetarian", "Gluten-Free", "Natural"],
      ingredients:
        "Strawberries, Yogurt, Sugar, Natural Flavors, Probiotic Cultures",
    },
    7: {
      id: "7",
      name: "VEGALAYA Vega Choco",
      brand: "VEGALAYA Vega",
      tagline: "Rich chocolate delight for all ages",
      mainImage: "/assets/images/newImage/newProduct/VegaChoco.png",
      rating: 4.3,
      reviewCount: 777,
      discount: 0,
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
      sizes: [
        { id: 1, volume: "300ml", price: 160, stock: 25 },
      ],
      keyFeatures: [
        "Rich Chocolate",
        "Creamy Texture",
        "Great for Kids",
        "Dessert Drink",
      ],
      flavorNotes: ["Chocolate", "Creamy", "Rich"],
      spiceLevel: 1,
      textureDescription:
        "Smooth, creamy chocolate beverage that's a treat for all ages.",
      usageIdeas: [
        "Dessert drink",
        "Quick chocolate fix",
        "Kids' birthday parties",
        "Pair with cookies",
      ],
      pairingTips: [
        "Serve cold or hot",
        "Excellent with cake",
        "Pair with vanilla ice cream",
        "Enjoy alone",
      ],
      nutritionalInfo: {
        calories: 150,
        totalFat: "5g",
        saturatedFat: "3g",
        cholesterol: "0mg",
        sodium: "20mg",
        totalCarbs: "23g",
        protein: "3g",
      },
      dietaryInfo: ["Vegetarian", "Gluten-Free", "Natural"],
      ingredients: "Milk, Cocoa, Sugar, Natural Flavors",
    },
    8: {
      id: "8",
      name: "VEGALAYA Vega Almond Creamer",
      brand: "VEGALAYA Vega",
      tagline: "Nutty almond plant-based creamer",
      mainImage: "/assets/images/newImage/newProduct/VegaAlmondCreamer.png",
      rating: 4.4,
      reviewCount: 433,
      discount: 10,
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
      sizes: [
        { id: 1, volume: "250ml", price: 190, stock: 15 },
      ],
      keyFeatures: [
        "Plant-based",
        "Nutty almond flavor",
        "Healthy substitute",
        "Dairy-Free",
      ],
      flavorNotes: ["Almond", "Nutty", "Light"],
      spiceLevel: 0,
      textureDescription:
        "Smooth, creamy texture with subtle almond nuttiness, perfect for coffee and tea.",
      usageIdeas: [
        "Coffee creamer",
        "Baking desserts",
        "Pour over cereal",
        "In tea",
      ],
      pairingTips: [
        "Coffee and muffins",
        "Pancakes",
        "Use in vegan recipes",
        "Smoothie boost",
      ],
      nutritionalInfo: {
        calories: 65,
        totalFat: "3.5g",
        saturatedFat: "0.3g",
        cholesterol: "0mg",
        sodium: "55mg",
        totalCarbs: "9g",
        protein: "1g",
      },
      dietaryInfo: ["Vegan", "Gluten-Free"],
      ingredients:
        "Almonds, Water, Cane Sugar, Sunflower Lecithin, Sea Salt",
    },
    9: {
      id: "9",
      name: "VEGALAYA Vega Soy Creamer",
      brand: "VEGALAYA Vega",
      tagline: "Creamy, light, vegan-friendly creamer",
      mainImage: "/assets/images/newImage/newProduct/VegaSoyCreamer.png",
      rating: 4.2,
      reviewCount: 299,
      discount: 0,
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
      sizes: [
        { id: 1, volume: "250ml", price: 160, stock: 20 },
      ],
      keyFeatures: [
        "Vegan",
        "Smooth soya texture",
        "Dairy alternative",
        "Easy to blend",
      ],
      flavorNotes: ["Soy", "Smooth", "Light"],
      spiceLevel: 0,
      textureDescription:
        "Light and smooth soya-based creamer, suitable for diverse drinks.",
      usageIdeas: [
        "Dairy-free coffee",
        "Healthy tea",
        "Smoothie base",
        "Cooking sauces",
      ],
      pairingTips: [
        "With espresso",
        "Over hot oats",
        "Vegan bakes",
        "Iced tea",
      ],
      nutritionalInfo: {
        calories: 55,
        totalFat: "2.5g",
        saturatedFat: "0.2g",
        cholesterol: "0mg",
        sodium: "58mg",
        totalCarbs: "6g",
        protein: "2g",
      },
      dietaryInfo: ["Vegan", "Gluten-Free"],
      ingredients:
        "Soybeans, Water, Sunflower Lecithin, Salt, Natural Flavors",
    },
    10: {
      id: "10",
      name: "VEGALAYA Vega Jowar Creamer",
      brand: "VEGALAYA Vega",
      tagline: "Earthy, nutritious vegan creamer",
      mainImage: "/assets/images/newImage/newProduct/VegaJowarCreamer.png",
      rating: 4.0,
      reviewCount: 177,
      discount: 0,
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
      sizes: [
        { id: 1, volume: "250ml", price: 145, stock: 15 },
      ],
      keyFeatures: [
        "Earthy jowar taste",
        "Packed with nutrients",
        "Great for baking",
        "Vegan and gluten-free",
      ],
      flavorNotes: ["Jowar", "Earthy", "Mild"],
      spiceLevel: 0,
      textureDescription:
        "Light and nutritious jowar-based creamer, ideal for fitness and health.",
      usageIdeas: [
        "Healthy creamer in drinks",
        "Enhance smoothies",
        "Gluten-free baking",
        "Porridge",
      ],
      pairingTips: [
        "Hot coffee",
        "Protein shakes",
        "Muesli",
        "Baking health bars",
      ],
      nutritionalInfo: {
        calories: 50,
        totalFat: "1.2g",
        saturatedFat: "0.1g",
        cholesterol: "0mg",
        sodium: "62mg",
        totalCarbs: "12g",
        protein: "1g",
      },
      dietaryInfo: ["Vegan", "Gluten-Free"],
      ingredients:
        "Jowar, Water, Canola Oil, Natural Flavors, Sea Salt",
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setCurrentProduct(mockProducts[productId] || mockProducts["1"]);
      setLoading(false);
    }, 500);
  }, [productId]);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
 
  };

  const handleSaveForLater = (product) => {
    console.log("Saving for later:", product);
 
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

 
        </div>

     

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
