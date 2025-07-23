
import React, { useState } from 'react';
import { Mail, Gift, CheckCircle, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MetaTags from '@/components/SEO/MetaTags';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Newsletter subscription:', { email, name });
    setIsSubmitted(true);
    setEmail('');
    setName('');
  };

  const benefits = [
    "15% off your first order",
    "Exclusive access to new coffee releases",
    "Weekly brewing tips and guides",
    "Members-only discounts and promotions",
    "First access to limited edition coffees",
    "Free shipping on subscription orders"
  ];

  return (
    <div className="min-h-screen bg-background">
      <MetaTags 
        title="Subscribe to Maya Coffee Newsletter | Get 15% Off"
        description="Join our newsletter for exclusive offers, brewing guides, and coffee tips. Get 15% off your first order when you subscribe."
        keywords="newsletter, coffee subscription, discount, exclusive offers"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coffee-bean to-coffee-roasted text-white py-20">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary rounded-full mb-8">
              <Gift className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              Get 15% Off Your First Order
            </h1>
            
            <p className="text-xl text-white/90 mb-8">
              Join over 10,000 coffee lovers who receive exclusive offers, brewing guides, and coffee tips delivered weekly to their inbox.
            </p>
          </div>
        </div>
      </section>

      <div className="container-wide py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Subscription Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Mail className="h-6 w-6 mr-3 text-primary" />
                    Subscribe to Our Newsletter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          First Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your first name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90"
                        size="lg"
                      >
                        <Gift className="h-4 w-4 mr-2" />
                        Subscribe & Get 15% Off
                      </Button>
                      
                      <p className="text-sm text-muted-foreground text-center">
                        By subscribing, you agree to receive marketing emails from Maya Coffee. 
                        You can unsubscribe at any time.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Welcome to Maya Coffee!</h3>
                      <p className="text-muted-foreground mb-4">
                        Thank you for subscribing! Check your email for your 15% discount code and welcome guide.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                      >
                        Subscribe Another Email
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">
                  What You'll Get
                </h2>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-accent">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Coffee className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Fresh Coffee Promise</h3>
                      <p className="text-sm text-muted-foreground">
                        All our coffee is roasted within 48 hours of shipping
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Join thousands of coffee lovers who trust Maya Coffee for their daily brew. 
                    We're committed to bringing you the freshest, most ethically sourced coffee from around the world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy */}
      <section className="py-8 bg-muted">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              We respect your privacy. Read our{' '}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms" className="text-primary hover:underline">
                Terms of Service
              </a>
              . You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
