
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Globe, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MetaTags from '@/components/SEO/MetaTags';

const OurStory = () => {
  const timeline = [
    {
      year: '2018',
      title: 'Born in Ethiopia',
      description: 'Our founders traveled to Ethiopia, the birthplace of coffee, and fell in love with the traditional brewing ceremonies and exceptional beans.',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop'
    },
    {
      year: '2019',
      title: 'First Partnerships',
      description: 'We established direct relationships with coffee farmers in Ethiopia, Colombia, and Brazil, ensuring fair trade and sustainable practices.',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&h=600&fit=crop'
    },
    {
      year: '2020',
      title: 'Roasting Mastery',
      description: 'Our master roasters perfected the art of bringing out each bean\'s unique characteristics, creating our signature roasting profiles.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop'
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Maya Coffee launched internationally, sharing exceptional coffee experiences with coffee lovers across the globe.',
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=800&h=600&fit=crop'
    },
    {
      year: '2024',
      title: 'Sustainability Focus',
      description: 'We achieved B-Corp certification and launched our carbon-neutral roasting facility, reinforcing our commitment to the planet.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Quality',
      description: 'Every bean is carefully selected and roasted to perfection, ensuring exceptional quality in every cup.'
    },
    {
      icon: Globe,
      title: 'Global Responsibility',
      description: 'We believe in sustainable practices that benefit farmers, communities, and the environment worldwide.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building lasting relationships with farmers, customers, and coffee communities around the world.'
    },
    {
      icon: Award,
      title: 'Ethical Excellence',
      description: 'Committed to fair trade, transparent sourcing, and supporting coffee-growing communities.'
    }
  ];

  return (
    <div className="min-h-screen bg-muted">
      <MetaTags
        title="Our Story | Maya Coffee - From Ethiopia to Your Cup"
        description="Learn about Maya Coffee's journey from Ethiopia to becoming a global premium coffee brand. Discover our commitment to quality, sustainability, and community."
        keywords="maya coffee story, coffee brand history, ethical coffee sourcing, sustainable coffee, coffee company values"
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-coffee-bean to-coffee-roasted text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container-wide py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="display-text text-white mb-6">
              Our Story: From Ethiopia to Your Cup
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Maya Coffee was born from a simple belief: that exceptional coffee 
              should honor its origins, support its communities, and create moments 
              of joy for everyone who experiences it.
            </p>
          </div>
        </div>
      </div>

      <div className="container-wide py-16">
        {/* Mission Statement */}
        <div className="bg-white rounded-lg p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="display-text mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              To create extraordinary coffee experiences while building a more sustainable 
              and equitable coffee industry. We believe that great coffee should not only 
              taste exceptional but also make a positive impact on the world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
                <p className="text-muted-foreground">Happy Customers Worldwide</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <p className="text-muted-foreground">Coffee Farming Partners</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="display-text mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              From a small idea to a global coffee community
            </p>
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary text-white px-4 py-2 rounded-full font-bold">
                      {item.year}
                    </div>
                    <h3 className="font-serif font-semibold text-2xl">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-lg p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="display-text mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="display-text mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              The passionate people behind Maya Coffee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Chen', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1494790108755-2616b9da5c5e?w=400&h=400&fit=crop' },
              { name: 'Miguel Rodriguez', role: 'Head Roaster', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
              { name: 'Emma Thompson', role: 'Sustainability Director', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' }
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-serif font-semibold text-lg mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-coffee-bean to-coffee-roasted text-white rounded-lg p-12">
          <h2 className="display-text text-white mb-4">Join Our Coffee Journey</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the difference that passion, quality, and ethical sourcing make. 
            Discover our carefully crafted coffees and become part of our global community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/coffee">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                Explore Our Coffees
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/subscriptions">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-coffee-bean">
                Start Your Subscription
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
