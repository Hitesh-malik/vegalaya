import React from "react";
import Icon from "../../../components/AppIcon";

const OurPhilosophy = () => {
  const philosophyPillars = [
    {
      pillar: "Plant-Based Always",
      principle: "100% dairy-free, natural ingredients — no compromise.",
      icon: "Sprout",
      iconColor: "text-green-500",
    },
    {
      pillar: "Sustainability First",
      principle: "Minimal waste, ethical sourcing, eco-conscious packing.",
      icon: "Recycle",
      iconColor: "text-blue-500",
    },
    {
      pillar: "Global Flavors, Indian Roots",
      principle: "Crafted for the world, inspired by Indian heritage.",
      icon: "Globe",
      iconColor: "text-blue-600",
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
