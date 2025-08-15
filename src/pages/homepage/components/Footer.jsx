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
    { name: "Twitter", icon: "Twitter", url: "#" },
    { name: "YouTube", icon: "Youtube", url: "#" },
    { name: "LinkedIn", icon: "Linkedin", url: "#" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Link to="/homepage" className="flex items-center space-x-2 mb-6">
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

            {/* <p className="text-white/80 mb-6 leading-relaxed">
              Transform your meals with our premium range of mayonnaise,
              spreads, and sauces crafted for the discerning taste.
            </p> */}

            <div className="space-y-3 mb-6">
              {/* <div className="flex items-center space-x-3">
                <Icon name="Phone" size={18} className="text-secondary" />
                <span className="text-white/80">1800-123-VEGALAYA</span>
              </div> */}
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={18} className="text-secondary" />
                <span className="text-white/80">
                  <a href="mailto:carecup@vegalaya.com">carecup@vegalaya.com</a>
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={18} className="text-secondary mt-1" />
                <span className="text-white/80">
                  VEGALAYA Foods Pvt. Ltd.
                  <br />
                  New Delhi India
                </span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4 text-secondary">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/80 hover:text-white hover:text-secondary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-white/80 text-sm">
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

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-white/80 text-sm">
                <Icon name="Shield" size={16} className="text-secondary" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80 text-sm">
                <Icon name="Award" size={16} className="text-secondary" />
                <span>FSSAI Approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
