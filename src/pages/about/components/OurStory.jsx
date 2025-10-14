import React from "react";
import Icon from "../../../components/AppIcon";

const OurStory = () => {
  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Icon name="BookOpen" size={24} className="text-blue-500 mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-primary font-accent">
              Our Story
            </h2>
          </div>

          <div className="mb-12">
            <p className="text-lg lg:text-xl text-text-secondary leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              What began as a quest for authentic, dairy-free flavors evolved
              into a movement. From the humble kitchens of India to
              international cafe shelves. Vegalaya was born to redefine
              indulgence with sustainability at its core.
            </p>
          </div>

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
                        2024
                      </div>
                      <div className="text-lg text-text-primary">
                        The Idea Takes Root
                      </div>
                      <div className="text-sm text-text-secondary mt-1">
                        A vision for authentic, dairy-free flavors begins
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-primary rounded-full z-10 relative mt-1"></div>
                    <div className="ml-8">
                      <div className="text-2xl font-bold text-primary mb-1">
                        2025
                      </div>
                      <div className="text-lg text-text-primary">
                        Official Launch
                      </div>
                      <div className="text-sm text-text-secondary mt-1">
                        VegaMoka & VegaMangoLass introduced in the market
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-primary rounded-full z-10 relative mt-1"></div>
                    <div className="ml-8">
                      <div className="text-2xl font-bold text-primary mb-1">
                        2026
                      </div>
                      <div className="text-lg text-text-primary">
                        Expansion in the market
                      </div>
                      <div className="text-sm text-text-secondary mt-1">
                        Hit in the Indian market
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Description */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-primary mb-6">
                From Vision to Reality
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Our journey began with a simple question: "What if we could
                create plant-based beverages that don't just replace dairy, but
                elevate the entire experience?"
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Today, we're proud to serve customers across India and beyond,
                bringing the authentic flavors of our homeland to the world
                while staying true to our commitment to sustainability and
                wellness.
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <Icon name="Heart" size={20} className="text-red-500" />
                <span className="text-sm text-text-secondary">
                  Crafted with love, served with purpose
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
