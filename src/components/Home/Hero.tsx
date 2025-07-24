import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Coffee, Leaf } from 'lucide-react';
import heroCoffeePour from '@/assets/hero-coffee-pour.jpg';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-1000"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${heroCoffeePour}')`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
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
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-3 shadow-lg">
                  Shop Coffee
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/subscriptions">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-3 border-white text-white hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Coffee className="mr-2 h-5 w-5" />
                  Start Subscription
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section 
        className="py-20 bg-gradient-to-br from-background to-muted/10 transition-all duration-1000 hover:bg-gradient-to-br hover:from-[hsl(240_20%_97%)] hover:to-secondary/20"
        style={{ transform: `scale(${1 + scrollY * 0.0001})`, opacity: 1 - scrollY * 0.0002 }}
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/Maya_1.png" 
                  alt="Ethiopian Heirloom Blend" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-4">Our Signature Roast</Badge>
                <h3 className="display-text text-4xl mb-4">
                  Ethiopian Heirloom Blend – Medium Roast
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hand-harvested in the highlands of Yirgacheffe, this smooth, fruity roast is your daily ritual in a cup.
                </p>
              </div>

              {/* Roast Level & Tasting Notes */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-primary">Roast Level:</span>
                  <Badge variant="outline" className="border-primary text-primary">Medium</Badge>
                </div>
                
                <div>
                  <span className="font-semibold text-primary mb-2 block">Tasting Notes:</span>
                  <div className="flex gap-2 flex-wrap">
                    <Badge 
                      className="transition-colors duration-300" 
                      style={{ backgroundColor: 'hsl(var(--secondary))', color: 'hsl(var(--secondary-foreground))' }}
                    >
                      Fruity
                    </Badge>
                    <Badge 
                      className="transition-colors duration-300" 
                      style={{ backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
                    >
                      Chocolatey
                    </Badge>
                    <Badge variant="outline" className="border-secondary text-secondary">
                      <Leaf size={12} className="mr-1" />
                      Floral
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Price & CTAs */}
              <div className="space-y-4">
                <div className="text-3xl font-bold" style={{ color: 'hsl(var(--primary))' }}>
                  $22 <span className="text-lg font-normal text-muted-foreground">(250g)</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    size="lg" 
                    className="flex-1 bg-primary text-primary-foreground hover:bg-[hsl(128_98_50%)] hover:text-foreground transition-colors duration-300"
                  >
                    Add to Cart
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-foreground transition-colors duration-300"
                  >
                    Subscribe & Save 10%
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;