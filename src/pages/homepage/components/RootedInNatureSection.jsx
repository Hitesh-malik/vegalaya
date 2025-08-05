import React from "react";
import Icon from "../../../components/AppIcon";

const RootedInNatureSection = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-bold font-accent text-primary leading-tight mb-8">
              Rooted in Nature.
              <br />
              Brewed with Purpose.
            </h2>
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

          {/* Our Story Section */}
          <div className="mb-24">
            <h3 className="text-3xl lg:text-4xl font-bold font-accent text-primary text-center mb-16">
              Our Story
            </h3>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Timeline */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary"></div>
                  <div className="space-y-12">
                    <div className="flex items-start">
                      <div className="w-4 h-4 bg-primary rounded-full z-10 relative mt-1"></div>
                      <div className="ml-8">
                        <div className="text-2xl font-bold text-primary mb-1">
                          2019
                        </div>
                        <div className="text-lg text-text-primary">Idea</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-4 h-4 bg-primary rounded-full z-10 relative mt-1"></div>
                      <div className="ml-8">
                        <div className="text-2xl font-bold text-primary mb-1">
                          2022
                        </div>
                        <div className="text-lg text-text-primary">Launch</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-4 h-4 bg-primary rounded-full z-10 relative mt-1"></div>
                      <div className="ml-8">
                        <div className="text-2xl font-bold text-primary mb-1">
                          2025
                        </div>
                        <div className="text-lg text-text-primary">
                          Export Expansion
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Description */}
              <div className="text-center lg:text-left">
                <p className="text-lg lg:text-xl text-text-primary leading-relaxed">
                  What began as a quest for authentic, dairy-free flavors
                  evolved into a movement. From the humble kitchens, of India to
                  international cafe shelves. Vegalaya was born to redefine
                  indulgence with sustainability at its core.
                </p>
              </div>
            </div>
          </div>

          {/* Our Philosophy Section */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold font-accent text-primary text-center mb-16">
              Our Philosophy
            </h3>
            <div className="grid md:grid-cols-3 gap-12">
              {/* Philosophy 1 */}
              <div className="text-center">
                <div className="mb-6">
                  <Icon
                    name="Leaf"
                    size={56}
                    className="text-primary mx-auto"
                  />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">
                  Plant-Based Always
                </h4>
                <p className="text-text-primary text-lg leading-relaxed">
                  100% dairy-free, natural ingredients – no compromise.
                </p>
              </div>

              {/* Philosophy 2 */}
              <div className="text-center">
                <div className="mb-6">
                  <Icon
                    name="RefreshCw"
                    size={56}
                    className="text-primary mx-auto"
                  />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">
                  Sustainability First
                </h4>
                <p className="text-text-primary text-lg leading-relaxed">
                  Minimal waste, farm-sourced produce, eco-conscious packing.
                </p>
              </div>

              {/* Philosophy 3 */}
              <div className="text-center">
                <div className="mb-6">
                  <Icon
                    name="Globe"
                    size={56}
                    className="text-primary mx-auto"
                  />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">
                  Global Flavors, Indian Roots
                </h4>
                <p className="text-text-primary text-lg leading-relaxed">
                  Crafted for the world, inspired by home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RootedInNatureSection;
