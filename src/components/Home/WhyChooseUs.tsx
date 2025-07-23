
import React from 'react';
import { Leaf, Coffee, Globe, Award } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: 'Expert Roasting',
    description: 'Every batch is carefully roasted by our master roasters to bring out the unique flavors of each origin.',
  },
  {
    icon: Leaf,
    title: 'Ethically Sourced',
    description: 'We work directly with farmers to ensure fair trade and sustainable farming practices.',
  },
  {
    icon: Globe,
    title: 'Global Origins',
    description: 'Discover coffee from the world\'s finest growing regions, each with its own unique character.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Our commitment to quality has earned us recognition from coffee competitions worldwide.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="display-text mb-4">Why Choose Maya Coffee</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're passionate about bringing you the finest coffee experience, 
            from bean to cup, with a commitment to quality and sustainability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-coffee-bean group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-4 text-coffee-bean">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
