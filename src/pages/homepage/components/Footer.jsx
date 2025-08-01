import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Mayonnaise Range', path: '/product-categories' },
        { name: 'Sandwich Spreads', path: '/product-categories' },
        { name: 'WOK TOK Sauces', path: '/product-categories' },
        { name: 'Premium Dressings', path: '/product-categories' },
        { name: 'Combo Packs', path: '/product-categories' }
      ]
    },
    {
      title: 'Recipes & Tips',
      links: [
        { name: 'Quick Recipes', path: '/homepage' },
        { name: 'Cooking Tips', path: '/homepage' },
        { name: 'Video Tutorials', path: '/homepage' },
        { name: 'Chef Collaborations', path: '/homepage' },
        { name: 'Seasonal Specials', path: '/homepage' }
      ]
    },
    {
      title: 'Business Solutions',
      links: [
        { name: 'Bulk Ordering', path: '/contact-support' },
        { name: 'Dealer Partnerships', path: '/contact-support' },
        { name: 'Restaurant Solutions', path: '/contact-support' },
        { name: 'Food Service', path: '/contact-support' },
        { name: 'Franchise Opportunities', path: '/contact-support' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Customer Care', path: '/contact-support' },
        { name: 'Cooking Support', path: '/contact-support' },
        { name: 'Order Tracking', path: '/contact-support' },
        { name: 'Returns & Refunds', path: '/contact-support' },
        { name: 'FAQ', path: '/contact-support' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'YouTube', icon: 'Youtube', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' }
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/homepage" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-accent">VEEBA</span>
                <span className="text-sm opacity-80">Store</span>
              </div>
            </Link>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Mehnat ka phal VEEBA hota hai. Transform your meals with our premium range of mayonnaise, spreads, and sauces crafted for the discerning taste.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={18} className="text-secondary" />
                <span className="text-white/80">1800-123-VEEBA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={18} className="text-secondary" />
                <span className="text-white/80">hello@veeba.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={18} className="text-secondary mt-1" />
                <span className="text-white/80">
                  VEEBA Foods Pvt. Ltd.<br />
                  Gurgaon, Haryana, India
                </span>
              </div>
            </div>

            {/* Social Links */}
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

          {/* Footer Links */}
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

        {/* Newsletter Signup */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="max-w-2xl">
            <h4 className="text-xl font-semibold mb-3 text-secondary">
              Stay Updated with VEEBA
            </h4>
            <p className="text-white/80 mb-4">
              Get the latest recipes, cooking tips, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button variant="secondary" size="lg">
                Subscribe
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-white/80 text-sm">
              <span>© {currentYear} VEEBA Foods Pvt. Ltd. All rights reserved.</span>
              <div className="flex space-x-4">
                <Link to="/homepage" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/homepage" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link to="/homepage" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Quality Certifications */}
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