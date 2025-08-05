import React from "react";
import Icon from "../../../components/AppIcon";

const OurValues = () => {
  const values = [
    {
      title: "Authenticity",
      description:
        "We stay true to traditional Indian flavors while embracing modern innovation.",
      icon: "Heart",
      color: "text-red-500",
    },
    {
      title: "Quality",
      description:
        "Every ingredient is carefully selected and every process is meticulously controlled.",
      icon: "Award",
      color: "text-yellow-500",
    },
    {
      title: "Sustainability",
      description:
        "We're committed to reducing our environmental footprint at every step.",
      icon: "Leaf",
      color: "text-green-500",
    },
    {
      title: "Community",
      description:
        "We believe in building strong relationships with farmers, customers, and partners.",
      icon: "Users",
      color: "text-blue-500",
    },
    {
      title: "Innovation",
      description:
        "We continuously explore new ways to create better plant-based experiences.",
      icon: "Zap",
      color: "text-purple-500",
    },
    {
      title: "Transparency",
      description:
        "We believe in being open about our ingredients, processes, and practices.",
      icon: "Eye",
      color: "text-indigo-500",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Icon name="Star" size={24} className="text-yellow-500 mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-primary font-accent">
              Our Values
            </h2>
          </div>

          <div className="mb-12">
            <p className="text-lg lg:text-xl text-text-secondary leading-relaxed text-center max-w-4xl mx-auto">
              These core values guide every decision we make and every product
              we create. They're not just words on paper—they're the foundation
              of everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-surface/50 transition-colors"
              >
                <div className="mb-4">
                  <Icon
                    name={value.icon}
                    size={48}
                    className={`mx-auto ${value.color}`}
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Join Our Mission
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-6">
                We're not just selling beverages—we're building a movement
                toward a more sustainable, healthier, and more conscious way of
                living.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Icon name="Target" size={20} className="text-primary" />
                <span className="text-primary font-medium">
                  Together, we can make a difference
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
