
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Coffee } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1559496417-e7f25cb247cd?w=1920&h=1080&fit=crop')`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      {/* Animated Coffee Beans Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-2 h-2 bg-coffee-bean rounded-full animate-pour-beans" style={{ animationDelay: '0s' }} />
        <div className="absolute top-20 right-20 w-1 h-1 bg-coffee-roasted rounded-full animate-pour-beans" style={{ animationDelay: '1s' }} />
        <div className="absolute top-32 left-1/3 w-1.5 h-1.5 bg-coffee-light rounded-full animate-pour-beans" style={{ animationDelay: '2s' }} />
        <div className="absolute top-16 right-1/3 w-1 h-1 bg-coffee-bean rounded-full animate-pour-beans" style={{ animationDelay: '0.5s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <div className="animate-fade-in">
          <h1 className="hero-text text-white mb-6">
            Experience Coffee
            <br />
            <span className="text-secondary">Perfection</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light max-w-2xl mx-auto">
            Discover premium single-origin beans, ethically sourced and expertly roasted 
            to bring you the world's finest coffee experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/shop">
              <Button size="lg" className="btn-primary text-lg px-8 py-3 hover:shadow-lg">
                Shop Coffee
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/subscriptions">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-3 border-white text-white hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300"
              >
                <Coffee className="mr-2 h-5 w-5" />
                Start Subscription
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
