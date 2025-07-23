
import React, { useState } from 'react';
import { Search, Mail, Phone, MessageCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import MetaTags from '@/components/SEO/MetaTags';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqData = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "We offer free international shipping on orders over $50. Standard shipping takes 3-5 business days within the US, and 7-14 business days internationally. Express shipping options are available at checkout."
        },
        {
          question: "Can I track my order?",
          answer: "Yes! Once your order ships, you'll receive a tracking number via email. You can also track your order in your account dashboard."
        },
        {
          question: "What if my order arrives damaged?",
          answer: "We're sorry if your order arrives damaged! Please contact our customer service within 48 hours of delivery, and we'll arrange a replacement or refund immediately."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to over 50 countries worldwide. International shipping is free on orders over $50, otherwise a flat rate of $15 applies."
        }
      ]
    },
    {
      category: "Subscriptions",
      questions: [
        {
          question: "How do coffee subscriptions work?",
          answer: "Choose your coffee preferences, select delivery frequency (weekly, bi-weekly, or monthly), and we'll deliver fresh coffee to your door. You can pause, skip, or cancel anytime."
        },
        {
          question: "Can I change my subscription?",
          answer: "Absolutely! You can modify your coffee selection, delivery frequency, or shipping address anytime in your account dashboard."
        },
        {
          question: "How do I pause or cancel my subscription?",
          answer: "Log into your account and go to 'Manage Subscriptions'. You can pause for up to 3 months or cancel with no fees or penalties."
        },
        {
          question: "Do I get a discount with subscriptions?",
          answer: "Yes! All subscription orders receive 10% off, plus free shipping on every delivery. You'll also receive exclusive subscriber-only offers."
        }
      ]
    },
    {
      category: "Coffee Questions",
      questions: [
        {
          question: "How fresh is your coffee?",
          answer: "We roast to order! Your coffee is roasted within 48 hours of shipping, ensuring maximum freshness and flavor. We recommend using within 2-4 weeks of the roast date."
        },
        {
          question: "What grind should I choose?",
          answer: "It depends on your brewing method! Coarse for French press, medium for drip coffee, fine for espresso. We're happy to grind your beans, or you can choose whole beans."
        },
        {
          question: "How should I store my coffee?",
          answer: "Store your coffee in a cool, dry place away from light and air. Our bags are designed to keep coffee fresh, or transfer to an airtight container."
        },
        {
          question: "What's the difference between single origin and blends?",
          answer: "Single origin coffees come from one farm or region, showcasing unique flavor characteristics. Blends combine beans from multiple origins for balanced, consistent flavor."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your coffee, contact us for a full refund or exchange."
        },
        {
          question: "How do I return an item?",
          answer: "Contact our customer service to initiate a return. We'll provide a prepaid return label and process your refund within 3-5 business days of receiving the item."
        },
        {
          question: "Can I return opened coffee?",
          answer: "Yes! We stand behind our coffee quality. If you're not satisfied with the taste, we'll refund or replace your order, even if it's been opened."
        },
        {
          question: "How long do refunds take?",
          answer: "Refunds are processed within 3-5 business days after we receive your return. You'll receive an email confirmation once the refund is processed."
        }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      action: "support@mayacoffee.com",
      available: "24/7"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our team",
      action: "Start Chat",
      available: "9 AM - 6 PM EST"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us directly",
      action: "+1 (555) 123-4567",
      available: "9 AM - 6 PM EST"
    }
  ];

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <MetaTags 
        title="Help Center & FAQ | Maya Coffee Support"
        description="Find answers to frequently asked questions about orders, shipping, subscriptions, and coffee. Get help from our support team."
        keywords="help center, FAQ, customer support, coffee questions, shipping, subscriptions"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-coffee-bean to-coffee-roasted text-white py-20">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              How Can We Help You?
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Find answers to common questions or get in touch with our support team
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-accent">
        <div className="container-wide">
          <h2 className="text-3xl font-serif font-semibold text-center mb-12">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    <option.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <p className="font-medium text-primary mb-4">{option.action}</p>
                  <p className="text-sm text-muted-foreground">{option.available}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="text-3xl font-serif font-semibold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {filteredFAQ.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h3 className="text-2xl font-serif font-semibold mb-6 text-primary">
                  {category.category}
                </h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, index) => (
                    <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 bg-muted">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-4">
              Still Need Help?
            </h2>
            <p className="text-muted-foreground mb-8">
              Can't find what you're looking for? Our support team is here to help you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90">
                <MessageCircle className="h-4 w-4 mr-2" />
                Start Live Chat
              </Button>
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Submit Support Request
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
