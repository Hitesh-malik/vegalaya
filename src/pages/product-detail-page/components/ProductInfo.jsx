import React from "react";
import Icon from "../../../components/AppIcon";

const ProductInfo = ({ product }) => {
 

  return (
    <div className="space-y-6">
      {/* Product Title & Brand */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-sm font-medium text-primary bg-accent/20 px-2 py-1 rounded-full">
            {product.brand}
          </span>
           
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold text-text-primary mb-2">
          {product.name}
        </h1>
        <p className="text-text-secondary text-lg">{product.tagline}</p>
      </div>

  
      {product.textureDescription && (
        <div className="bg-surface rounded-lg p-4">
          <h3 className="font-semibold text-text-primary mb-2">
            Product Description
          </h3>
          <p className="text-text-secondary leading-relaxed">
            {product.textureDescription}
          </p>
        </div>
      )}
 
      {product.keyFeatures && product.keyFeatures.length > 0 && (
        <div className="bg-surface rounded-lg p-4">
          <h3 className="font-semibold text-text-primary mb-3">Key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Icon
                  name="Check"
                  size={16}
                  className="text-success flex-shrink-0"
                />
                <span className="text-sm text-text-secondary">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}


      {/* Dietary Information & Nutritional Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Dietary Info */}
        {product.dietaryInfo && product.dietaryInfo.length > 0 && (
          <div className="bg-surface rounded-lg p-4">
            <h3 className="font-semibold text-text-primary mb-3">
              Dietary Information
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.dietaryInfo.map((info, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                >
                  {info}
                </span>
              ))}
            </div>
          </div>
        )}


      </div>


    </div>
  );
};

export default ProductInfo;
