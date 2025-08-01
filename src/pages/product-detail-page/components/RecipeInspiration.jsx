import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const RecipeInspiration = ({ recipes }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'text-success bg-success/10';
      case 'medium':
        return 'text-warning bg-warning/10';
      case 'hard':
        return 'text-error bg-error/10';
      default:
        return 'text-text-secondary bg-surface';
    }
  };

  return (
    <div className="bg-white rounded-xl culinary-shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-text-primary">Recipe Inspiration</h3>
          <p className="text-text-secondary">Quick recipes using this product</p>
        </div>
        <Link
          to="/recipes"
          className="text-primary hover:text-primary/80 text-sm font-medium flex items-center space-x-1"
        >
          <span>View All Recipes</span>
          <Icon name="ArrowRight" size={16} />
        </Link>
      </div>

      <div className="space-y-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="border border-border rounded-lg p-4 hover:border-primary/30 transition-all duration-200 texture-hover cursor-pointer"
          >
            <div className="flex space-x-4">
              {/* Recipe Image */}
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover appetite-filter"
                />
              </div>

              {/* Recipe Info */}
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-text-primary">{recipe.name}</h4>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(recipe.difficulty)}`}>
                    {recipe.difficulty}
                  </span>
                </div>

                <p className="text-sm text-text-secondary line-clamp-2">
                  {recipe.description}
                </p>

                {/* Recipe Stats */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} className="text-text-secondary" />
                    <span className="text-xs text-text-secondary">{recipe.cookingTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={14} className="text-text-secondary" />
                    <span className="text-xs text-text-secondary">{recipe.servings} servings</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                    <span className="text-xs text-text-secondary">{recipe.rating}</span>
                  </div>
                </div>

                {/* Key Ingredients */}
                <div className="flex flex-wrap gap-1">
                  {recipe.keyIngredients.slice(0, 3).map((ingredient, index) => (
                    <span
                      key={index}
                      className="text-xs bg-accent/20 text-primary px-2 py-1 rounded-full"
                    >
                      {ingredient}
                    </span>
                  ))}
                  {recipe.keyIngredients.length > 3 && (
                    <span className="text-xs text-text-secondary px-2 py-1">
                      +{recipe.keyIngredients.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Steps Preview */}
            <div className="mt-3 pt-3 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon name="ChefHat" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-text-primary">Quick Steps:</span>
                </div>
                <button className="text-primary hover:text-primary/80 text-sm font-medium">
                  View Recipe
                </button>
              </div>
              <ol className="mt-2 space-y-1">
                {recipe.quickSteps.map((step, index) => (
                  <li key={index} className="text-xs text-text-secondary flex items-start space-x-2">
                    <span className="text-primary font-medium">{index + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>

      {/* Recipe CTA */}
      <div className="mt-6 p-4 bg-gradient-brand rounded-lg text-white">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold">Create Your Own Recipe</h4>
            <p className="text-sm opacity-90">Share your culinary creations with our community</p>
          </div>
          <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Submit Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeInspiration;