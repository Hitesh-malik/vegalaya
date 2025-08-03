import React from "react";
import Icon from "../../../components/AppIcon";

const CategoryHeader = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    {
      id: "all",
      name: "All Products",
      description:
        "Explore our complete range of premium VEEBA beverages and drinks.",
      icon: "Grid3X3",
      color: "bg-blue-50 text-blue-700",
    },
    {
      id: "beverages",
      name: "Beverages",
      description:
        "Refreshing and traditional beverages including lassi, shakes, and specialty drinks.",
      icon: "Coffee",
      color: "bg-amber-50 text-amber-700",
    },
    {
      id: "traditional",
      name: "Traditional Drinks",
      description:
        "Authentic Indian beverages like chai, lassi, and traditional refreshments.",
      icon: "Utensils",
      color: "bg-red-50 text-red-700",
    },
    {
      id: "premium",
      name: "Premium Beverages",
      description: "Premium and specialty drinks for discerning taste buds.",
      icon: "Sparkles",
      color: "bg-purple-50 text-purple-700",
    },
  ];

  const currentCategory =
    categories.find((cat) => cat.id === selectedCategory) || categories[0];

  return (
    <div className="bg-white culinary-shadow rounded-xl p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-lg ${currentCategory.color}`}>
              <Icon name={currentCategory.icon} size={24} />
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-primary font-accent">
              {currentCategory.name}
            </h1>
          </div>
          <p className="text-text-secondary text-sm lg:text-base leading-relaxed max-w-2xl">
            {currentCategory.description}
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap lg:flex-nowrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-surface text-text-secondary hover:bg-accent/20 hover:text-primary"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
