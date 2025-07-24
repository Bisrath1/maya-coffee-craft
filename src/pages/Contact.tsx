import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import MetaTags from '@/components/SEO/MetaTags';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <MetaTags 
        title="Contact Us | Maya Coffee"
        description="Get in touch with Maya Coffee. We're here to help with your orders, brewing questions, and coffee needs."
      />
      
      <div className="container-wide py-12">
        <div className="text-center mb-12">
          <h1 className="display-text mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our coffee, need brewing advice, or want to learn more about our subscriptions? 
            We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Visit Our Roastery</h3>
                    <p className="text-muted-foreground">
                      123 Coffee Street<br />
                      Portland, OR 97201<br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <p className="text-muted-foreground">
                      +1 (555) 123-MAYA<br />
                      Monday - Friday: 8AM - 6PM PST
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <p className="text-muted-foreground">
                      hello@mayacoffee.com<br />
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8AM - 6PM PST<br />
                      Saturday: 9AM - 4PM PST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Live Chat Button */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5" />
                    <div>
                      <h3 className="font-semibold">Need Immediate Help?</h3>
                      <p className="text-sm opacity-90">Chat with our coffee experts</p>
                    </div>
                  </div>
                  <Button variant="secondary" size="sm">
                    Start Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="mt-12">
          <h2 className="text-2xl font-serif font-semibold mb-6 text-center">Find Us</h2>
          <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p>Interactive map would be embedded here</p>
              <p className="text-sm">123 Coffee Street, Portland, OR 97201</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;