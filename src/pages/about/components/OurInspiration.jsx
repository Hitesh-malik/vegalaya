import React from "react";
import Icon from "../../../components/AppIcon";

const OurInspiration = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Icon name="Lightbulb" size={24} className="text-amber-500 mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-primary font-accent">
              Our Inspiration
            </h2>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl lg:text-3xl font-semibold text-primary text-center">
              From Personal Struggles to Healthier, Sustainable Choices
            </h3>

            <div className="prose prose-lg max-w-none text-text-primary">
              <p className="text-lg leading-relaxed mb-6">
                Vegalaya was born out of personal experiences, family care, and
                a desire to make healthy living accessible to everyone. Growing
                up in India, I never imagined that dairy could affect me
                differently abroad. During my studies in Poland, Germany, and
                the Netherlands, I began experiencing severe bloating, mental
                fatigue, and discomfort after consuming milk. After many days, I
                discovered I was allergic to milk—an experience that completely
                changed my perspective on food.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Around the same time, I saw two deeply personal stories that
                inspired me further. My nephew Angad was diagnosed with lactose
                intolerance, and my mother, during her battle with cancer, had
                to give up commercial milk entirely. Both faced limited,
                expensive, or nutritionally inadequate alternatives—highlighting
                a real gap in the market.
              </p>

              <div className="bg-surface p-8 rounded-lg shadow-sm my-8">
                <div className="flex items-start mb-4">
                  <Icon
                    name="Coffee"
                    size={20}
                    className="text-primary mr-3 mt-1"
                  />
                  <p className="text-lg leading-relaxed">
                    I have always loved coffee, but plant-based milk
                    alternatives were often bland, spoil quickly, and were
                    impossible to finish before going bad. That challenge
                    sparked a new idea: why not create versatile, long-lasting
                    products that could stay on the shelf and be used anytime—in
                    tea, coffee, curries, or any dish—without compromising taste
                    or nutrition?
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Vegalaya is more than just plant-based foods; it's a solution.
                Every product we craft is wholesome, sustainable, and
                convenient, designed to support your health while caring for the
                planet. Our mission is to make nutritious, infection-free, and
                long-lasting options accessible for every family, empowering
                mindful choices that taste as good as they feel.
              </p>

              <div className="text-center mt-10">
                <p className="text-xl font-semibold text-primary inline-flex items-center justify-center">
                  <Icon name="Heart" size={24} className="text-red-500 mr-2" />
                  Health, sustainability, and care—this is the heart of
                  Vegalaya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurInspiration;
