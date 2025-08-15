import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "VegaMangoLassi", path: "/product-categories" },
        { name: "VegaMoka", path: "/product-categories" },
        { name: "VegaMangoLassi", path: "/product-categories" },
        { name: "Soy Creamer", path: "/product-categories" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "Facebook", url: "#" },
    { name: "Instagram", icon: "Instagram", url: "#" },
    { name: "YouTube", icon: "Youtube", url: "#" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-6 py-8">
        {/* Main Footer Content - Single Row Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
          {/* Left Section - Logo and Company Info */}
          <div className="flex-shrink-0">
            <Link to="/homepage" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center">
                <img
                  src="/assets/images/vagalayaLogo.png"
                  alt="Vagalaya Logo"
                  className="w-10 h-10 rounded-lg object-cover transform transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-accent">VEGALAYA</span>
                <span className="text-sm opacity-80">Store</span>
              </div>
            </Link>

            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-secondary" />
                <a
                  href="mailto:carecup@vegalaya.com"
                  className="text-white/80 hover:text-white"
                >
                  carecup@vegalaya.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Icon
                  name="MapPin"
                  size={16}
                  className="text-secondary mt-0.5"
                />
                <span className="text-white/80">
                  VEGALAYA Foods Pvt. Ltd., New Delhi India
                </span>
              </div>
            </div>
          </div>

          {/* Center Section - Social Links */}
          <div className="flex flex-col items-center lg:items-end gap-3">
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={16} />
                </a>
              ))}
            </div>

            {/* Certifications - Moved to center */}
            <div className="flex items-center space-x-4 text-xs">
              <div className="flex items-center space-x-1 text-white/80">
                <Icon name="Shield" size={14} className="text-secondary" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center space-x-1 text-white/80">
                <Icon name="Award" size={14} className="text-secondary" />
                <span>FSSAI Approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Compact Layout */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/80">
            <span>
              © {currentYear} VEGALAYA Foods Pvt. Ltd. All rights reserved.
            </span>

            <div className="flex space-x-4">
              <Link
                to="/homepage"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/homepage"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/homepage"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
