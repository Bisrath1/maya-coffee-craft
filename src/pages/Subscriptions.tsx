
import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Calendar, Truck, Gift, Pause, SkipForward, X, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import SubscriptionSteps from '@/components/Home/SubscriptionSteps';
import MetaTags from '@/components/SEO/MetaTags';

const Subscriptions = () => {
  const subscriptionFaqs = [
    {
      question: "How does the coffee subscription work?",
      answer: "Choose your preferred coffee, select delivery frequency (weekly, bi-weekly, or monthly), and we'll deliver freshly roasted beans to your door. You can pause, skip, or cancel anytime."
    },
    {
      question: "Can I change my coffee selection?",
      answer: "Yes! You can change your coffee selection, grind preferences, or delivery frequency at any time through your account dashboard."
    },
    {
      question: "What if I want to skip a delivery?",
      answer: "You can skip any delivery up to 24 hours before your scheduled delivery date. Just log into your account and manage your subscription."
    },
    {
      question: "Is there a minimum commitment?",
      answer: "No minimum commitment required. You can pause or cancel your subscription at any time without any fees."
    },
    {
      question: "How fresh is the coffee?",
      answer: "All coffee is roasted to order and shipped within 48 hours of roasting to ensure maximum freshness."
    }
  ];

  const plans = [
    {
      name: "Explorer",
      price: 19.99,
      originalPrice: 24.99,
      description: "Perfect for trying new coffees",
      features: ["250g bag", "Single origin rotation", "Tasting notes included", "Skip anytime"],
      popular: false
    },
    {
      name: "Enthusiast",
      price: 37.99,
      originalPrice: 44.99,
      description: "Our most popular subscription",
      features: ["500g bag", "Mix of origins & blends", "Brewing guides", "Priority support"],
      popular: true
    },
    {
      name: "Connoisseur",
      price: 67.99,
      originalPrice: 79.99,
      description: "For the serious coffee lover",
      features: ["1kg bag", "Exclusive limited editions", "Personal roaster notes", "First access to new releases"],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Coffee,
      title: "10% Off All Orders",
      description: "Subscribers save 10% on every delivery plus exclusive member pricing"
    },
    {
      icon: Truck,
      title: "Free Shipping Always",
      description: "Never pay for shipping on subscription orders, no matter the size"
    },
    {
      icon: Gift,
      title: "Exclusive Access",
      description: "First access to limited editions and seasonal blends"
    },
    {
      icon: Pause,
      title: "Complete Flexibility",
      description: "Pause, skip, or cancel anytime with no fees or commitments"
    }
  ];

  return (
    <div className="min-h-screen bg-muted">
      <MetaTags
        title="Coffee Subscription | Maya Coffee - Fresh Coffee Delivered Monthly"
        description="Never run out of great coffee. Flexible subscription plans with 10% off, free shipping, and the ability to pause or cancel anytime."
        keywords="coffee subscription, monthly coffee delivery, subscription coffee, coffee delivery service"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-coffee-bean to-coffee-roasted text-white">
        <div className="container-wide py-16">
          <div className="text-center max-w-4xl mx-auto">
            <Coffee className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h1 className="display-text text-white mb-6">
              Never Run Out of Great Coffee
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of coffee lovers who get freshly roasted, premium coffee 
              delivered to their door every month. Flexible, convenient, and always delicious.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Start Your Subscription
            </Button>
          </div>
        </div>
      </div>

      <div className="container-wide py-12">
        {/* How It Works */}
        <SubscriptionSteps />

        {/* Subscription Plans */}
        <div className="py-20">
          <div className="text-center mb-12">
            <h2 className="display-text mb-4">Choose Your Plan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All plans include 10% off, free shipping, and complete flexibility to change or cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-serif">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl font-bold text-primary">${plan.price}</span>
                      <span className="text-lg text-muted-foreground line-through">${plan.originalPrice}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <Coffee className="h-4 w-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
                    size="lg"
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Subscribe */}
        <div className="bg-white rounded-lg p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="display-text mb-4">Why Subscribe?</h2>
            <p className="text-lg text-muted-foreground">
              More than just convenience - it's about elevating your daily coffee experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Management */}
        <div className="bg-white rounded-lg p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="display-text mb-4">Full Control Over Your Subscription</h2>
            <p className="text-lg text-muted-foreground">
              Manage everything from your personal dashboard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Pause className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">Pause Anytime</h3>
              <p className="text-muted-foreground text-sm">
                Going on vacation? Pause your subscription and resume when you're ready.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <SkipForward className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">Skip Deliveries</h3>
              <p className="text-muted-foreground text-sm">
                Still have coffee? Skip your next delivery with just one click.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Settings className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">Customize Everything</h3>
              <p className="text-muted-foreground text-sm">
                Change coffee, grind size, delivery frequency, or quantity anytime.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button className="btn-outline">
              <Settings className="h-4 w-4 mr-2" />
              Manage My Subscription
            </Button>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg p-12">
          <div className="text-center mb-12">
            <h2 className="display-text mb-4">Subscription FAQs</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our coffee subscriptions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {subscriptionFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
