
import React, { useState } from 'react';
import { Mail, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email signup logic here
    console.log('Email signup:', email);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-coffee-bean to-coffee-roasted text-white">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
            <Gift className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-3xl font-serif font-semibold mb-4">
            Get 15% Off Your First Order
          </h2>
          
          <p className="text-xl text-white/90 mb-8">
            Join our newsletter for exclusive offers, brew guides, and coffee tips delivered weekly
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-secondary"
                />
              </div>
              <Button 
                type="submit"
                className="bg-secondary hover:bg-secondary/90 text-white px-8"
              >
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <div className="text-secondary mb-2">✓ Thank you for subscribing!</div>
              <p className="text-white/90">
                Check your email for your 15% discount code and welcome guide.
              </p>
            </div>
          )}
          
          <p className="text-sm text-white/70 mt-4">
            No spam, unsubscribe anytime. Read our{' '}
            <a href="/privacy" className="text-secondary hover:underline">
              privacy policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
