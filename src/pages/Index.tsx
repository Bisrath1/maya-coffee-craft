
import React from 'react';
import MetaTags from '@/components/SEO/MetaTags';
import Hero from '@/components/Home/Hero';
import FeaturedProducts from '@/components/Home/FeaturedProducts';
import WhyChooseUs from '@/components/Home/WhyChooseUs';
import SubscriptionSteps from '@/components/Home/SubscriptionSteps';
import SubscriptionCTA from '@/components/Home/SubscriptionCTA';
import TestimonialCarousel from '@/components/Home/TestimonialCarousel';
import InstagramFeed from '@/components/Home/InstagramFeed';
import EmailSignup from '@/components/Home/EmailSignup';

const Index = () => {
  return (
    <div>
      <MetaTags
        title="Maya Coffee | Premium Coffee Beans, Brewing Gear & Subscriptions"
        description="Discover premium single-origin coffee beans, ethically sourced and expertly roasted. Free international shipping on orders over $50. Start your coffee subscription today."
        keywords="premium coffee, single origin coffee, coffee beans, coffee subscription, brewing equipment, ethical coffee, fresh roasted coffee"
      />
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <SubscriptionSteps />
      <TestimonialCarousel />
      <InstagramFeed />
      <SubscriptionCTA />
      <EmailSignup />
    </div>
  );
};

export default Index;
