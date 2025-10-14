import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const ProductCategoryCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    {
      id: "plant-based-refreshments",
      title: "Plant-Based Refreshments",
      subtitle: "Deliciously dairy-free drinks for every mood",
      description: "Deliciously dairy-free drinks for every mood",
      image: "/assets/images/newImage/homeCards/Card1.png",
      products: ["VegaMangoLassi", "VegaBerryShake", "VegaCocoLassi"],
      usageScenarios: [
        "Daily refreshments",
        "Healthy lifestyle choices",
        "Dairy-free alternatives",
      ],
      color: "from-orange-400 to-orange-600",
      icon: "Droplets",
    },
    {
      id: "brew-blend",
      title: "Brew & Blend",
      subtitle: "For mindful sips and morning rituals",
      description: "For mindful sips and morning rituals",
      image: "/assets/images/newImage/homeCards/Card2.png",
      products: ["VegaMoka", "VegaKesarChai"],
      usageScenarios: [
        "Morning coffee rituals",
        "Afternoon tea breaks",
        "Mindful drinking moments",
      ],
      color: "from-brown-400 to-brown-600",
      icon: "Coffee",
    },
    {
      id: "everyday-creamers",
      title: "Everyday Creamers",
      subtitle: "Smooth, sustainable creamers for tea, coffee & more",
      description: "Smooth, sustainable creamers for tea, coffee & more",
      image: "/assets/images/newImage/homeCards/Card3.png",
      products: [
        "Coconut Creamer",
        "Almond Creamer",
        "Soy Creamer",
        "Jowar Milk Creamer",
      ],
      usageScenarios: [
        "Coffee and tea enhancement",
        "Sustainable dairy alternatives",
        "Everyday beverage enhancement",
      ],
      color: "from-purple-400 to-purple-600",
      icon: "Droplets",
    },
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary font-accent mb-4">
            Taste the Future
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Discover Vegalaya products crafted for conscious living — one sip at
            a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-2xl overflow-hidden culinary-shadow hover:shadow-2xl transition-all duration-500 texture-hover"
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 appetite-filter"
                />
        

                {/* Category Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Icon name={category.icon} size={24} className="text-white" />
                </div>

                {/* Title Overlay */}
                {/* <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{category.title}</h3>
                  <p className="text-sm opacity-90">{category.subtitle}</p>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-6">
              <h3 className="text-2xl font-bold mb-1 text-primary">{category.title}</h3>
                <p className="text-text-secondary mb-4">
                  {category.description}
                </p>

                {/* Products List */}
                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-2">
                    Featured Products:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.products.map((product, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent/20 text-primary text-sm rounded-full"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Usage Scenarios - Show on Hover */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    hoveredCard === category.id
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-border pt-4 mb-4">
                    <h4 className="font-semibold text-primary mb-2">
                      Perfect For:
                    </h4>
                    <ul className="space-y-1">
                      {category.usageScenarios.map((scenario, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-text-secondary"
                        >
                          <Icon
                            name="Check"
                            size={14}
                            className="text-green-500 mr-2 flex-shrink-0"
                          />
                          {scenario}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Categories CTA */}
        {/* <div className="text-center mt-12">
          <Link to="/product-categories">
            <Button size="lg">
              View All Categories
              <Icon name="Grid3X3" size={20} className="ml-2" />
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default ProductCategoryCards;
