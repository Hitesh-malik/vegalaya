import React from "react";
import Icon from "../../../components/AppIcon";

const AboutHero = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-8">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold font-accent text-primary leading-tight mb-6">
              Rooted in Nature.
              <br />
              Brewed with Purpose.
            </h1>
            <p className="text-lg lg:text-xl xl:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              From sustainable farms to your cup—vegalaya is india's answer to
              conscious, plant-powered indulgence.
            </p>
          </div>

          {/* Logo */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center">
              <img
                src="/assets/images/vagalayaLogo.png"
                alt="Vagalaya Logo"
                className="w-72 h-72 rounded-lg object-cover lg:w-72 lg:h-72 xl:w-72 xl:h-72"
              />
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
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
