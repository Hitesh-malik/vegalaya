import React from "react";
import Image from "../../../components/AppImage";

const ProductGallery = ({ product }) => {
  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative bg-surface rounded-xl overflow-hidden aspect-square">
        <Image
          src={product.mainImage}
          alt={`${product.name}`}
          className="w-full h-full object-cover appetite-filter"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
