import React from "react";
import Icon from "../../../components/AppIcon";

const OurPhilosophy = () => {
  const philosophyPillars = [
    {
      pillar: "Plant-Based Always",
      principle: "100% dairy-free, natural ingredients — no compromise.",
      icon: "Sprout",
      iconColor: "text-green-500",
      description:
        "We believe in the power of plants. Every ingredient is carefully selected to ensure it's not just dairy-free, but nutritionally superior and delicious.",
    },
    {
      pillar: "Sustainability First",
      principle: "Minimal waste, ethical sourcing, eco-conscious packing.",
      icon: "Recycle",
      iconColor: "text-blue-500",
      description:
        "From farm to packaging, we prioritize environmental responsibility. Our commitment to sustainability extends beyond our products to every aspect of our business.",
    },
    {
      pillar: "Global Flavors, Indian Roots",
      principle: "Crafted for the world, inspired by Indian heritage.",
      icon: "Globe",
      iconColor: "text-blue-600",
      description:
        "We celebrate the rich culinary traditions of India while creating flavors that resonate with people worldwide.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Icon name="Compass" size={24} className="text-blue-600 mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-primary font-accent">
              Our Philosophy
            </h2>
          </div>

          <div className="mb-12">
            <p className="text-lg lg:text-xl text-text-secondary leading-relaxed text-center max-w-4xl mx-auto">
              Our philosophy is built on three core pillars that guide
              everything we do, from product development to customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {philosophyPillars.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <Icon
                    name={item.icon}
                    size={56}
                    className={`mx-auto ${item.iconColor}`}
                  />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">
                  {item.pillar}
                </h4>
                <p className="text-text-primary text-lg leading-relaxed mb-4">
                  {item.principle}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Philosophy Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-6 font-bold text-primary text-lg">
                    Pillar
                  </th>
                  <th className="text-left py-4 px-6 font-bold text-primary text-lg">
                    Principle
                  </th>
                </tr>
              </thead>
              <tbody>
                {philosophyPillars.map((item, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-6 px-6">
                      <div className="flex items-center">
                        <Icon
                          name={item.icon}
                          size={20}
                          className={`mr-3 ${item.iconColor}`}
                        />
                        <span className="font-bold text-primary text-lg">
                          {item.pillar}
                        </span>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <span className="text-text-secondary text-lg">
                        {item.principle}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
