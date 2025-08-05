import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";

const BrewBetterFuture = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Icon name="Globe" size={24} className="text-blue-600 mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-primary font-accent">
              Let's Brew a Better Future
            </h2>
          </div>

          <div className="mb-8">
            <p className="text-lg lg:text-xl text-text-secondary leading-relaxed mb-4">
              We're not just plant-based — we're <strong>planet-based</strong>.
            </p>

            <p className="text-lg lg:text-xl text-text-secondary leading-relaxed mb-8">
              Whether you're a distributor, café owner, or conscious customer,
              join us in redefining what modern, guilt-free indulgence looks
              like.
            </p>
          </div>

          <div className="mt-8">
            <Link to="/product-categories">
              <Button size="lg" className="text-lg px-8 py-4">
                Explore Our Products
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrewBetterFuture;
