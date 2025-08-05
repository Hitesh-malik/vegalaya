import React from "react";
import Icon from "../../../components/AppIcon";

const MeetTheLineup = () => {
  const signatureBeverages = [
    "VegaMangoLassi",
    "VegaBerryShake",
    "VegaKesarChai",
    "VegaMoka",
    "VegaCocoLassi",
  ];

  const plantBasedCreamers = [
    "Soy Milk Creamer",
    "Coconut Creamer",
    "Almond Creamer",
    "Oat Milk Creamer",
    "Jowar Milk Creamer",
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Icon name="GlassWater" size={24} className="text-blue-400 mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-primary font-accent">
              Meet the Lineup
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Signature Beverages */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-6">
                Signature Beverages:
              </h3>
              <ul className="space-y-3">
                {signatureBeverages.map((beverage, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-lg text-text-secondary">
                      {beverage}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Plant-Based Creamers */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-6">
                Plant-Based Creamers:
              </h3>
              <ul className="space-y-3">
                {plantBasedCreamers.map((creamer, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-lg text-text-secondary">
                      {creamer}
                      {creamer === "Jowar Milk Creamer" && (
                        <span className="italic text-text-secondary/70 ml-2">
                          (coming soon)
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheLineup;
