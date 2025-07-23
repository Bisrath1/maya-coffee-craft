
import React from 'react';
import { Coffee, Calendar, Truck } from 'lucide-react';

const steps = [
  {
    icon: Coffee,
    title: 'Choose Your Coffee',
    description: 'Select from our premium single-origin beans or expertly crafted blends',
    step: '01'
  },
  {
    icon: Calendar,
    title: 'Set Your Schedule',
    description: 'Pick your delivery frequency: weekly, bi-weekly, or monthly',
    step: '02'
  },
  {
    icon: Truck,
    title: 'Get Fresh Coffee',
    description: 'Receive freshly roasted beans delivered to your door worldwide',
    step: '03'
  }
];

const SubscriptionSteps = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="display-text mb-4">How Subscriptions Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your perfect cup of coffee delivered regularly is simple. 
            Here's how our subscription service works.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                <step.icon className="h-8 w-8 text-white" />
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="font-serif font-semibold text-xl mb-4 text-coffee-bean">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-coffee-light/30 transform -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSteps;
