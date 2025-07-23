
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Coffee, Truck, Gift } from 'lucide-react';

const benefits = [
  {
    icon: Coffee,
    title: '25% Off First Order',
    description: 'Start your coffee journey with a special welcome discount',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'All subscription orders ship free, no minimum required',
  },
  {
    icon: Gift,
    title: 'Skip Anytime',
    description: 'Full control over your deliveries - skip, pause, or cancel',
  },
];

const SubscriptionCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-coffee-bean to-coffee-roasted text-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="display-text text-white mb-4">
            Never Run Out of Great Coffee
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of coffee lovers who trust Maya Coffee to deliver 
            freshly roasted beans to their door every month.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <benefit.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2">
                {benefit.title}
              </h3>
              <p className="text-white/80">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/subscriptions">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-3"
            >
              Start Your Subscription
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionCTA;
