
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Coffee, Star, Leaf } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center rustic-texture"
        style={{ backgroundColor: 'hsl(var(--earthy-brown))' }}
      >
        {/* Watermark Bean Symbol */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="text-9xl" style={{ color: 'hsl(var(--olive-green))' }}>
            <Coffee size={300} />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-4">
          <div className="animate-fade-in">
            {/* Logo Area */}
            <div className="mb-8">
              <div className="flex justify-center items-center mb-4">
                <Coffee size={48} style={{ color: 'hsl(var(--olive-green))' }} />
              </div>
              <h1 className="text-6xl font-bold mb-2" style={{ color: 'hsl(var(--olive-green))' }}>
                maya.
              </h1>
              <p className="text-sm tracking-[0.3em] uppercase" style={{ color: 'hsl(var(--olive-green))' }}>
                C O F F E E
              </p>
            </div>
            
            {/* Headline */}
            <h2 className="script-headline mb-4 text-cream">
              From the Origin
            </h2>
            
            {/* Subheadline */}
            <p className="text-xl mb-8 text-cream/90 font-light">
              100% Ethiopian Arabica | Roasted With Purpose
            </p>
            
            {/* CTA Button */}
            <Link to="/shop">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ 
                  backgroundColor: 'hsl(var(--olive-green))',
                  color: 'white'
                }}
              >
                Shop Our Coffee
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-40 mx-auto mb-4 rounded-lg shadow-lg flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--earthy-brown))' }}>
                      <div className="text-center">
                        <Coffee size={40} className="text-white mx-auto mb-2" />
                        <div className="text-xs text-white font-bold">100%</div>
                        <div className="text-xs text-white">ETHIOPIAN</div>
                        <div className="text-xs text-white">COFFEE</div>
                        <div className="text-xs text-white">BEANS</div>
                      </div>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <div className="w-16 h-20 rounded-full shadow-md flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--cream))' }}>
                        <Coffee size={20} style={{ color: 'hsl(var(--earthy-brown))' }} />
                      </div>
                      <div className="w-16 h-20 rounded-full shadow-md flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--cream))' }}>
                        <Coffee size={20} style={{ color: 'hsl(var(--earthy-brown))' }} />
                      </div>
                    </div>
                  </div>
                </div>
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
                  <span className="font-semibold text-earthy-brown">Roast Level:</span>
                  <Badge variant="outline" className="border-earthy-brown text-earthy-brown">Medium</Badge>
                </div>
                
                <div>
                  <span className="font-semibold text-earthy-brown mb-2 block">Tasting Notes:</span>
                  <div className="flex gap-2 flex-wrap">
                    <Badge style={{ backgroundColor: 'hsl(var(--olive-green))' }}>Fruity</Badge>
                    <Badge style={{ backgroundColor: 'hsl(var(--earthy-brown))' }}>Chocolatey</Badge>
                    <Badge variant="outline" className="border-olive-green text-olive-green">
                      <Leaf size={12} className="mr-1" />
                      Floral
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Price & CTAs */}
              <div className="space-y-4">
                <div className="text-3xl font-bold" style={{ color: 'hsl(var(--earthy-brown))' }}>
                  $22 <span className="text-lg font-normal text-muted-foreground">(250g)</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    size="lg" 
                    className="flex-1"
                    style={{ backgroundColor: 'hsl(var(--earthy-brown))' }}
                  >
                    Add to Cart
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="flex-1 border-olive-green text-olive-green hover:bg-olive-green hover:text-white"
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
