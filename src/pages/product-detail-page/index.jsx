import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import ProductTabs from './components/ProductTabs';
import PerfectPairings from './components/PerfectPairings';
import CustomerReviews from './components/CustomerReviews';
import RecipeInspiration from './components/RecipeInspiration';
import SmartRecommendations from './components/SmartRecommendations';
import Icon from '../../components/AppIcon';

const ProductDetailPage = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('id') || '1';
  const [currentProduct, setCurrentProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock product data
  const mockProducts = {
    '1': {
      id: '1',
      name: "VEEBA Creamy Mayonnaise",
      brand: "VEEBA",
      tagline: "Creamy texture that spreads perfectly",
      mainImage: "https://images.unsplash.com/photo-1573040915511-f292b2fb7b2e?w=500&h=500&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=500&fit=crop"
      ],
      rating: 4.5,
      reviewCount: 1247,
      discount: 15,
      isNew: true,
      sizes: [
        { id: 1, volume: "250g", price: 89, stock: 25 },
        { id: 2, volume: "500g", price: 159, stock: 18 },
        { id: 3, volume: "1kg", price: 289, stock: 12 }
      ],
      keyFeatures: [
        "Smooth & Creamy Texture",
        "No Artificial Colors",
        "Perfect for Sandwiches",
        "Restaurant Quality"
      ],
      flavorNotes: ["Creamy", "Mild Tangy", "Rich", "Smooth"],
      spiceLevel: 1,
      textureDescription: "Ultra-smooth and creamy texture that spreads effortlessly without tearing bread. Perfect consistency for both spreading and mixing.",
      usageIdeas: [
        "Gourmet sandwiches and wraps",
        "Burger and hot dog topping",
        "Salad dressing base",
        "Dip for french fries and snacks"
      ],
      pairingTips: [
        "Pairs excellently with fresh vegetables",
        "Enhances grilled chicken flavors",
        "Perfect with seafood dishes",
        "Great for pasta salads"
      ],
      nutritionalInfo: {
        calories: 680,
        totalFat: "75g",
        saturatedFat: "12g",
        cholesterol: "60mg",
        sodium: "580mg",
        totalCarbs: "2g",
        protein: "1g"
      },
      dietaryInfo: ["Vegetarian", "Gluten-Free", "No Trans Fat"],
      ingredients: "Refined Soybean Oil, Water, Egg Yolk, Sugar, Salt, Acetic Acid, Mustard Extract, Natural Flavors, Preservatives (Potassium Sorbate, Sodium Benzoate)"
    }
  };

  const mockPairings = [
    {
      id: 1,
      title: "Sandwich Lovers Bundle",
      description: "Everything you need for gourmet sandwiches",
      products: [
        {
          id: '1',
          name: "VEEBA Creamy Mayo",
          size: "500g",
          price: 159,
          image: "https://images.unsplash.com/photo-1573040915511-f292b2fb7b2e?w=200&h=200&fit=crop"
        },
        {
          id: '2',
          name: "VEEBA Thousand Island",
          size: "300g",
          price: 129,
          image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop"
        },
        {
          id: '3',
          name: "VEEBA Mint Mayo",
          size: "250g",
          price: 99,
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=200&fit=crop"
        }
      ]
    },
    {
      id: 2,
      title: "BBQ Party Pack",
      description: "Perfect for outdoor grilling and parties",
      products: [
        {
          id: '1',
          name: "VEEBA Creamy Mayo",
          size: "1kg",
          price: 289,
          image: "https://images.unsplash.com/photo-1573040915511-f292b2fb7b2e?w=200&h=200&fit=crop"
        },
        {
          id: '4',
          name: "VEEBA BBQ Sauce",
          size: "350g",
          price: 149,
          image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&h=200&fit=crop"
        }
      ]
    }
  ];

  const mockReviews = [
    {
      id: 1,
      customerName: "Priya Sharma",
      rating: 5,
      date: "2025-01-15",
      verified: true,
      comment: "Absolutely love this mayo! The texture is so smooth and creamy. I've been using it for all my sandwiches and salads. The taste is perfect - not too tangy, not too bland.",
      images: [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop"
      ],
      helpfulCount: 23
    },
    {
      id: 2,
      customerName: "Rajesh Kumar",
      rating: 4,
      date: "2025-01-10",
      verified: true,
      comment: "Good quality mayonnaise. My family loves it on burgers and sandwiches. The 500g pack is perfect for our family of four. Will definitely buy again.",
      images: [],
      helpfulCount: 15
    },
    {
      id: 3,
      customerName: "Anita Desai",
      rating: 5,
      date: "2025-01-08",
      verified: false,
      comment: "Best mayo I've ever tried! The consistency is perfect and it doesn't separate like other brands. Great for making coleslaw and potato salad.",
      images: [
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=100&h=100&fit=crop",
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=100&h=100&fit=crop"
      ],
      helpfulCount: 31
    },
    {
      id: 4,
      customerName: "Vikram Singh",
      rating: 4,
      date: "2025-01-05",
      verified: true,
      comment: "Really good product. The taste is authentic and the packaging is convenient. Only wish it came in smaller sizes for single people.",
      images: [],
      helpfulCount: 8
    }
  ];

  const mockRecipes = [
    {
      id: 1,
      name: "Classic Club Sandwich",
      description: "Triple-layered sandwich with chicken, bacon, lettuce, and tomato",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=200&fit=crop",
      cookingTime: "15 mins",
      servings: 2,
      difficulty: "Easy",
      rating: 4.8,
      keyIngredients: ["Bread", "Chicken", "Bacon", "Lettuce", "Tomato"],
      quickSteps: [
        "Toast bread slices until golden",
        "Spread VEEBA mayo generously",
        "Layer chicken, bacon, and vegetables",
        "Secure with toothpicks and serve"
      ]
    },
    {
      id: 2,
      name: "Creamy Coleslaw",
      description: "Fresh and crunchy coleslaw with VEEBA mayo dressing",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop",
      cookingTime: "10 mins",
      servings: 4,
      difficulty: "Easy",
      rating: 4.6,
      keyIngredients: ["Cabbage", "Carrots", "Mayo", "Vinegar", "Sugar"],
      quickSteps: [
        "Shred cabbage and carrots finely",
        "Mix mayo with vinegar and sugar",
        "Toss vegetables with dressing",
        "Chill for 30 minutes before serving"
      ]
    },
    {
      id: 3,
      name: "Gourmet Chicken Burger",
      description: "Juicy chicken burger with special mayo sauce",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&h=200&fit=crop",
      cookingTime: "25 mins",
      servings: 2,
      difficulty: "Medium",
      rating: 4.9,
      keyIngredients: ["Chicken Breast", "Burger Buns", "Mayo", "Cheese", "Onions"],
      quickSteps: [
        "Grill chicken breast until cooked",
        "Toast burger buns lightly",
        "Mix mayo with herbs for special sauce",
        "Assemble burger with all toppings"
      ]
    }
  ];

  const mockRecommendations = [
    {
      id: '2',
      name: "VEEBA Thousand Island Dressing",
      description: "Tangy and sweet dressing perfect for salads",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop",
      price: 129,
      discount: 10,
      rating: 4.3,
      reviewCount: 892,
      isNew: false,
      keyFeatures: ["Tangy Flavor", "Perfect for Salads"],
      recommendationReason: "Customers who bought mayo also love this"
    },
    {
      id: '3',
      name: "VEEBA Mint Mayonnaise",
      description: "Refreshing mint-flavored mayo for a cool twist",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop",
      price: 99,
      discount: 20,
      rating: 4.4,
      reviewCount: 654,
      isNew: true,
      keyFeatures: ["Mint Flavor", "Refreshing Taste"],
      recommendationReason: "Popular flavor variant"
    },
    {
      id: '4',
      name: "VEEBA BBQ Sauce",
      description: "Smoky BBQ sauce for grilling and dipping",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=300&fit=crop",
      price: 149,
      discount: 5,
      rating: 4.6,
      reviewCount: 1123,
      isNew: false,
      keyFeatures: ["Smoky Flavor", "Perfect for BBQ"],
      recommendationReason: "Great for outdoor cooking"
    }
  ];

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    setTimeout(() => {
      setCurrentProduct(mockProducts[productId] || mockProducts['1']);
      setLoading(false);
    }, 500);
  }, [productId]);

  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product);
    // Add to cart logic here
  };

  const handleSaveForLater = (product) => {
    console.log('Saving for later:', product);
    // Save for later logic here
  };

  const handleAddBundle = (bundle) => {
    console.log('Adding bundle to cart:', bundle);
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
            <Icon name="AlertCircle" size={48} className="text-error mx-auto mb-4" />
            <h2 className="text-xl font-bold text-text-primary mb-2">Product Not Found</h2>
            <p className="text-text-secondary">The product you're looking for doesn't exist.</p>
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
              <a href="/homepage" className="text-text-secondary hover:text-primary">Home</a>
              <Icon name="ChevronRight" size={16} className="text-text-secondary" />
              <a href="/product-categories" className="text-text-secondary hover:text-primary">Products</a>
              <Icon name="ChevronRight" size={16} className="text-text-secondary" />
              <span className="text-text-primary font-medium">{currentProduct.name}</span>
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
          <div className="mb-12">
            <ProductTabs product={currentProduct} />
          </div>

          {/* Perfect Pairings */}
          <div className="mb-12">
            <PerfectPairings
              pairings={mockPairings}
              onAddBundle={handleAddBundle}
            />
          </div>

          {/* Customer Reviews */}
          <div className="mb-12">
            <CustomerReviews
              reviews={mockReviews}
              averageRating={currentProduct.rating}
              totalReviews={currentProduct.reviewCount}
            />
          </div>
        </div>

        {/* Recipe Inspiration & Recommendations */}
        <div className="bg-surface py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recipe Inspiration */}
              <div className="lg:col-span-1">
                <RecipeInspiration recipes={mockRecipes} />
              </div>

              {/* Smart Recommendations */}
              <div className="lg:col-span-2">
                <SmartRecommendations
                  recommendations={mockRecommendations}
                  onAddToCart={handleAddToCart}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-gradient-brand py-12">
          <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Transform Your Meals with VEEBA
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of satisfied customers who trust VEEBA for exceptional taste
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