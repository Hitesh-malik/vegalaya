import React from "react";
import Icon from "../../../components/AppIcon";

const AboutVegalaya = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Icon name="Sprout" size={24} className="text-green-600 mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-primary font-accent">
              About Vegalaya
            </h2>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-6">
              Farm to Cup. Plant to Purpose.
            </h3>

            <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
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

export default AboutVegalaya;
