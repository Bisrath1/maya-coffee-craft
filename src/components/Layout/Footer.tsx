
import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

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
              <a 
                href="https://instagram.com/mayacoffee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coffee-cream/60 hover:text-secondary transition-colors cursor-pointer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/mayacoffee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coffee-cream/60 hover:text-secondary transition-colors cursor-pointer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/mayacoffee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coffee-cream/60 hover:text-secondary transition-colors cursor-pointer"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:hello@mayacoffee.com"
                className="text-coffee-cream/60 hover:text-secondary transition-colors cursor-pointer"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/coffee" className="text-coffee-cream/80 link-hover">Coffee Beans</Link></li>
              <li><Link to="/equipment" className="text-coffee-cream/80 link-hover">Brewing Equipment</Link></li>
              <li><Link to="/gifts" className="text-coffee-cream/80 link-hover">Gift Sets</Link></li>
              <li><Link to="/subscriptions" className="text-coffee-cream/80 link-hover">Subscriptions</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-coffee-cream/80 link-hover">Help Center</Link></li>
              <li><Link to="/help#shipping" className="text-coffee-cream/80 link-hover">Shipping Info</Link></li>
              <li><Link to="/help#returns" className="text-coffee-cream/80 link-hover">Returns</Link></li>
              <li><Link to="/contact" className="text-coffee-cream/80 link-hover">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/our-story" className="text-coffee-cream/80 link-hover">Our Story</Link></li>
              <li><Link to="/sustainability" className="text-coffee-cream/80 link-hover">Sustainability</Link></li>
              <li><Link to="/blog" className="text-coffee-cream/80 link-hover">Blog</Link></li>
              <li><Link to="/careers" className="text-coffee-cream/80 link-hover">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-coffee-cream/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-secondary" />
              <a href="mailto:hello@mayacoffee.com" className="text-sm text-coffee-cream/80 link-hover">
                hello@mayacoffee.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-secondary" />
              <a href="tel:+1234567890" className="text-sm text-coffee-cream/80 link-hover">
                +1 (234) 567-8900
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-secondary" />
              <span className="text-sm text-coffee-cream/80">
                Portland, Oregon
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-coffee-cream/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-coffee-cream/60">
              © 2024 Maya Coffee. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-coffee-cream/60 link-hover">Privacy Policy</Link>
              <Link to="/terms" className="text-coffee-cream/60 link-hover">Terms of Service</Link>
              <Link to="/cookies" className="text-coffee-cream/60 link-hover">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
