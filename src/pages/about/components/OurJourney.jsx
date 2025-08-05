import React from "react";
import Icon from "../../../components/AppIcon";

const OurJourney = () => {
  const milestones = [
    {
      year: "2019",
      title: "The Beginning",
      description:
        "A vision for authentic, dairy-free flavors takes root in the heart of India.",
      icon: "Seedling",
    },
    {
      year: "2020",
      title: "Research & Development",
      description:
        "Years of research into traditional Indian recipes and modern plant-based techniques.",
      icon: "FlaskConical",
    },
    {
      year: "2022",
      title: "Official Launch",
      description:
        "VegaMoka & VegaMangoLassi hit the market, marking our official entry into the beverage industry.",
      icon: "Rocket",
    },
    {
      year: "2023",
      title: "Expansion",
      description:
        "Introduction of new flavors and expansion into major Indian cities.",
      icon: "MapPin",
    },
    {
      year: "2024",
      title: "Innovation",
      description:
        "Launch of creamer products and sustainable packaging initiatives.",
      icon: "Lightbulb",
    },
    {
      year: "2025",
      title: "Global Reach",
      description:
        "Expansion into international markets and introduction of new product lines.",
      icon: "Globe",
    },
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Icon name="Map" size={24} className="text-green-600 mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-primary font-accent">
              Our Journey
            </h2>
          </div>

          <div className="mb-12">
            <p className="text-lg lg:text-xl text-text-secondary leading-relaxed text-center max-w-4xl mx-auto">
              Every milestone in our journey represents a step toward our vision
              of making plant-based beverages accessible, delicious, and
              sustainable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Icon
                      name={milestone.icon}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {milestone.year}
                    </div>
                    <div className="text-sm text-text-secondary">Milestone</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {milestone.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
              <Icon name="TrendingUp" size={20} className="text-primary" />
              <span className="text-primary font-medium">
                Growing stronger every day
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
