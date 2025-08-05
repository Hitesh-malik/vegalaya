import React from "react";
import Icon from "../../../components/AppIcon";

const AboutHero = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold font-accent text-primary leading-tight mb-8">
              Rooted in Nature.
              <br />
              Brewed with Purpose.
            </h1>
            <p className="text-lg lg:text-xl xl:text-2xl text-text-primary max-w-4xl mx-auto leading-relaxed">
              From sustainable farms to your cup—vegalaya is india's answer to
              conscious, plant-powered indulgence.
            </p>
          </div>

          {/* Logo */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-32 h-32 lg:w-40 lg:h-40 bg-primary rounded-full shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-2">
                  <Icon name="Leaf" size={64} className="text-white" />
                </div>
                <span className="text-white font-bold text-sm lg:text-base tracking-wider">
                  VEGALAYA
                </span>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Farm to Cup. Plant to Purpose.
            </h2>
            <p className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-4xl mx-auto">
              At Vegalaya, we don't just craft beverages — we create a lifestyle
              rooted in{" "}
              <strong>purity, sustainability, and plant-based wellness.</strong>{" "}
              From lush Indian farms to eco-conscious packaging, every sip tells
              a story of tradition, innovation, and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
