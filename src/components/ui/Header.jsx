import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", path: "/homepage", icon: "Home" },
    { name: "About", path: "/about", icon: "Info" },
    { name: "Categories", path: "/product-categories", icon: "Grid3X3" },
    { name: "Contact", path: "/contact-support", icon: "MessageCircle" },
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md culinary-shadow" : "bg-white"
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Logo */}
          <Link
            to="/homepage"
            className="flex items-center space-x-2 group py-1 pt-3"
          >
            <div className="relative flex items-center pt-4">
              <img
                src="/assets/images/vagalayaLogo.png"
                alt="Vagalaya Logo"
                className="w-24 h-24 rounded-lg object-cover transform transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary font-accent">
                VEGALAYA
              </span>
              <span className="text-sm text-text-secondary -mt-1">Store</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActivePath(item.path)
                    ? "text-primary bg-accent/20"
                    : "text-text-secondary hover:text-primary hover:bg-accent/10"
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            {/* <Button variant="ghost" size="icon" className="hidden md:flex">
              <Icon name="Search" size={20} />
            </Button> */}

            {/* Cart */}
            {/* <Link to="/shopping-cart-checkout" className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-conversion-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link> */}

            {/* User Account */}
            {/* <Button variant="ghost" size="icon" className="hidden md:flex">
              <Icon name="User" size={20} />
            </Button> */}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="lg:hidden"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-smooth ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white border-t border-border`}
        >
          <nav className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item.path)
                    ? "text-primary bg-accent/20"
                    : "text-text-secondary hover:text-primary hover:bg-accent/10"
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span>{item.name}</span>
              </Link>
            ))}

            {/* Mobile-only actions */}
            {/* <div className="pt-4 border-t border-border mt-4">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="flex-1">
                  <Icon name="Search" size={16} className="mr-2" />
                  Search
                </Button>
                <Button variant="ghost" size="sm" className="flex-1">
                  <Icon name="User" size={16} className="mr-2" />
                  Account
                </Button>
              </div>
            </div> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
