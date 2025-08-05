import React from "react";
import Icon from "../../../components/AppIcon";

const VegalayaJourney = () => {
  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Icon name="BookOpen" size={24} className="text-blue-500 mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-primary font-accent">
              The Vegalaya Journey
            </h2>
          </div>

          <div className="mb-8">
            <p className="text-lg lg:text-xl text-text-secondary leading-relaxed mb-8">
              What began as a quest for authentic, dairy-free flavors evolved
              into a purpose-driven company. From the humble kitchens of India
              to international café shelves, Vegalaya was born to redefine
              indulgence with sustainability at its core.
            </p>

            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-6">
                Timeline Snapshot
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="font-bold text-primary">2019:</span> The
                    idea takes root
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="font-bold text-primary">2022:</span>{" "}
                    Official launch of VegaMoka & VegaMangoLassi
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="font-bold text-primary">2025:</span>{" "}
                    Expansion into creamers & global markets
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VegalayaJourney;
