import React, { useState } from "react";
import Header from "../../components/ui/Header";
import ContactForm from "./components/ContactForm";
import QuickContactCard from "./components/QuickContactCard";
import StoreLocator from "./components/StoreLocator";
import FAQSection from "./components/FAQSection";
import SocialMediaSection from "./components/SocialMediaSection";
import CorporateContactSection from "./components/CorporateContactSection";
import Button from "../../components/ui/Button";
import Icon from "../../components/AppIcon";
import WhatsAppModal from "./components/WhatsAppModal";

const ContactSupport = () => {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const handleCookingHelpline = () => {
    window.location.href = "tel:+919876543210";
  };

  const handleWhatsAppSupport = () => {
    setIsWhatsAppModalOpen(true);
  };

  const handleLiveChat = () => {
    alert(
      "Live chat feature will be available soon! Please use WhatsApp or phone support for immediate assistance."
    );
  };

  const handleRecipeSOS = () => {
    alert(
      "Recipe SOS activated! Our culinary experts will contact you within 15 minutes."
    );
  };

  const handleCookingClasses = () => {
    alert(
      "Cooking classes booking will open soon! Follow us on social media for updates."
    );
  };

  const handleEmergencySupport = () => {
    window.location.href = "tel:+919876543210";
  };

  return (
    <div className="min-h-screen bg-background-canvas">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4 font-accent">
              We're Here to Help
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              From cooking support to product questions, our culinary experts
              are ready to assist you in creating extraordinary meals with
              VEGALAYA products.
            </p>
          </div>

          {/* Emergency Support Banner */}
          {/* <div className="bg-conversion-accent/10 border border-conversion-accent/20 rounded-2xl p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-12 h-12 bg-conversion-accent rounded-xl flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary">
                    Recipe Emergency?
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Get instant cooking help for dinner disasters
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="default"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={handleEmergencySupport}
                  className="bg-conversion-accent hover:bg-conversion-accent/90"
                >
                  Call Now
                </Button>
                <Button
                  variant="outline"
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={handleWhatsAppSupport}
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Quick Contact Cards */}
      {/* <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <QuickContactCard
              icon="Phone"
              title="Cooking Helpline"
              description="Get real-time cooking assistance and recipe guidance from our culinary experts"
              primaryAction={{
                label: "Call Now",
                icon: "Phone",
                onClick: handleCookingHelpline,
              }}
              secondaryAction={{
                label: "WhatsApp",
                icon: "MessageCircle",
                onClick: handleWhatsAppSupport,
              }}
              bgColor="bg-accent/10"
            />

            <QuickContactCard
              icon="MessageSquare"
              title="Live Chat Support"
              description="Instant help during shopping and cooking with trained culinary support staff"
              primaryAction={{
                label: "Start Chat",
                icon: "MessageSquare",
                onClick: handleLiveChat,
              }}
            />

            <QuickContactCard
              icon="AlertTriangle"
              title="Recipe SOS"
              description="Emergency cooking help for dinner party disasters or failed recipe attempts"
              primaryAction={{
                label: "Get Help",
                icon: "Zap",
                onClick: handleRecipeSOS,
              }}
              bgColor="bg-conversion-accent/10"
            />
          </div>
        </div>
      </section> */}

      {/* Main Content Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Store Locator */}
            {/* <div>
              <StoreLocator />
            </div> */}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-12 bg-surface/50">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <FAQSection />
        </div>
      </section> */}

      {/* Social Media & Community */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <SocialMediaSection />
        </div>
      </section>

      {/* Corporate Contacts */}
      {/* <section className="py-12 bg-surface/50">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <CorporateContactSection />
        </div>
      </section> */}

      {/* Additional Support Options */}
      {/* <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="bg-white rounded-2xl culinary-shadow p-8 text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              More Ways to Connect
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Explore additional support options and learning opportunities to
              enhance your culinary journey with VEGALAYA.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
                <Icon
                  name="GraduationCap"
                  size={32}
                  className="text-primary mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  Cooking Classes
                </h4>
                <p className="text-sm text-text-secondary mb-4">
                  Join our local workshops and online tutorials for hands-on
                  VEGALAYA product education
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={handleCookingClasses}
                >
                  Book Classes
                </Button>
              </div>

              <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
                <Icon
                  name="BookOpen"
                  size={32}
                  className="text-primary mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  Recipe Library
                </h4>
                <p className="text-sm text-text-secondary mb-4">
                  Access our comprehensive collection of recipes and cooking
                  guides
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={() => alert("Recipe library coming soon!")}
                >
                  Explore Recipes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex items-center justify-center">
                <img
                  src="/assets/images/vagalayaLogo.png"
                  alt="Vagalaya Logo"
                  className="w-10 h-10 rounded-lg object-cover transform transition-transform group-hover:scale-105"
                />
              </div>
              <span className="text-2xl font-bold font-accent">VEGALAYA</span>
            </div>

            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Your culinary success is our priority. We're committed to
              providing exceptional support and helping you create memorable
              meals with VEGALAYA products.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
              <span>24/7 Cooking Support</span>
              <span>•</span>
              <span>Quality Guaranteed</span>
              <span>•</span>
              <span>Expert Culinary Team</span>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 text-sm text-white/60">
              <p>
                &copy; {new Date().getFullYear()} VEGALAYA Foods Pvt. Ltd. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Modal */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />
    </div>
  );
};

export default ContactSupport;
