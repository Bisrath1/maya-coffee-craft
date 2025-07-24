
import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-bean text-coffee-cream">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-serif font-semibold">Maya Coffee</span>
            </div>
            <p className="text-sm text-coffee-cream/80">
              Premium coffee beans, ethically sourced and expertly roasted. 
              Bringing you the finest coffee experience since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/mayacoffee" target="_blank" rel="noopener noreferrer" className="transform transition-all duration-200 hover:scale-110">
                <Instagram className="h-5 w-5 text-coffee-cream/60 hover:text-secondary transition-colors cursor-pointer" />
              </a>
              <a href="https://facebook.com/mayacoffee" target="_blank" rel="noopener noreferrer" className="transform transition-all duration-200 hover:scale-110">
                <Facebook className="h-5 w-5 text-coffee-cream/60 hover:text-secondary transition-colors cursor-pointer" />
              </a>
              <a href="https://twitter.com/mayacoffee" target="_blank" rel="noopener noreferrer" className="transform transition-all duration-200 hover:scale-110">
                <Twitter className="h-5 w-5 text-coffee-cream/60 hover:text-secondary transition-colors cursor-pointer" />
              </a>
              <a href="mailto:hello@mayacoffee.com" className="transform transition-all duration-200 hover:scale-110">
                <Mail className="h-5 w-5 text-coffee-cream/60 hover:text-secondary transition-colors cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/coffee-beans" className="text-coffee-cream/80 hover:text-secondary transition-all duration-200 hover:underline underline-offset-2">Coffee Beans</Link></li>
              <li><Link to="/brewing-equipment" className="text-coffee-cream/80 hover:text-secondary transition-all duration-200 hover:underline underline-offset-2">Brewing Equipment</Link></li>
              <li><Link to="/gifts" className="text-coffee-cream/80 hover:text-secondary transition-all duration-200 hover:underline underline-offset-2">Gift Sets</Link></li>
              <li><Link to="/subscriptions" className="text-coffee-cream/80 hover:text-secondary transition-all duration-200 hover:underline underline-offset-2">Subscriptions</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-coffee-cream/80 hover:text-secondary transition-all duration-200 hover:underline underline-offset-2">Help Center</Link></li>
              <li><Link to="/shipping" className="text-coffee-cream/80 hover:text-secondary transition-all duration-200 hover:underline underline-offset-2">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-coffee-cream/80 hover:text-secondary transition-all duration-200 hover:underline underline-offset-2">Returns</Link></li>
              <li><Link to="/contact" className="text-coffee-cream/80 hover:text-secondary transition-all duration-200 hover:underline underline-offset-2">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/our-story" className="text-coffee-cream/80 hover:text-secondary transition-all duration-200 hover:underline underline-offset-2">Our Story</Link></li>
              <li><Link to="/sustainability" className="text-coffee-cream/80 hover:text-secondary transition-all duration-200 hover:underline underline-offset-2">Sustainability</Link></li>
              <li><Link to="/blog" className="text-coffee-cream/80 hover:text-secondary transition-all duration-200 hover:underline underline-offset-2">Blog</Link></li>
              <li><Link to="/careers" className="text-coffee-cream/80 hover:text-secondary transition-all duration-200 hover:underline underline-offset-2">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-coffee-cream/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-coffee-cream/60">
              © 2024 Maya Coffee. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-coffee-cream/60 hover:text-secondary transition-all duration-200 hover:underline underline-offset-2">Privacy Policy</Link>
              <Link to="/terms" className="text-coffee-cream/60 hover:text-secondary transition-all duration-200 hover:underline underline-offset-2">Terms of Service</Link>
              <Link to="/cookies" className="text-coffee-cream/60 hover:text-secondary transition-all duration-200 hover:underline underline-offset-2">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
