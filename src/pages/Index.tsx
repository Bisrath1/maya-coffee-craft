
import React from 'react';
import Hero from '@/components/Home/Hero';
import FeaturedProducts from '@/components/Home/FeaturedProducts';
import WhyChooseUs from '@/components/Home/WhyChooseUs';
import SubscriptionCTA from '@/components/Home/SubscriptionCTA';

const Index = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <SubscriptionCTA />
    </div>
  );
};

export default Index;
