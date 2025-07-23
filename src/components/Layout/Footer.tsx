
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
              <Instagram className="h-5 w-5 text-coffee-cream/60 hover:text-secondary transition-colors cursor-pointer" />
              <Facebook className="h-5 w-5 text-coffee-cream/60 hover:text-secondary transition-colors cursor-pointer" />
              <Twitter className="h-5 w-5 text-coffee-cream/60 hover:text-secondary transition-colors cursor-pointer" />
              <Mail className="h-5 w-5 text-coffee-cream/60 hover:text-secondary transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop/coffee" className="text-coffee-cream/80 hover:text-secondary transition-colors">Coffee Beans</Link></li>
              <li><Link to="/shop/equipment" className="text-coffee-cream/80 hover:text-secondary transition-colors">Brewing Equipment</Link></li>
              <li><Link to="/shop/gifts" className="text-coffee-cream/80 hover:text-secondary transition-colors">Gift Sets</Link></li>
              <li><Link to="/subscriptions" className="text-coffee-cream/80 hover:text-secondary transition-colors">Subscriptions</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/support" className="text-coffee-cream/80 hover:text-secondary transition-colors">Help Center</Link></li>
              <li><Link to="/shipping" className="text-coffee-cream/80 hover:text-secondary transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-coffee-cream/80 hover:text-secondary transition-colors">Returns</Link></li>
              <li><Link to="/contact" className="text-coffee-cream/80 hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/story" className="text-coffee-cream/80 hover:text-secondary transition-colors">Our Story</Link></li>
              <li><Link to="/sustainability" className="text-coffee-cream/80 hover:text-secondary transition-colors">Sustainability</Link></li>
              <li><Link to="/blog" className="text-coffee-cream/80 hover:text-secondary transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-coffee-cream/80 hover:text-secondary transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-coffee-cream/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-coffee-cream/60">
              © 2024 Maya Coffee. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-coffee-cream/60 hover:text-secondary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-coffee-cream/60 hover:text-secondary transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-coffee-cream/60 hover:text-secondary transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
