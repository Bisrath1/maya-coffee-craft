
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Globe, Recycle, Award, Users, TrendingUp, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import MetaTags from '@/components/SEO/MetaTags';

const Sustainability = () => {
  const certifications = [
    {
      name: 'Fair Trade Certified',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=200&h=200&fit=crop',
      description: 'Ensuring fair wages and working conditions for coffee farmers'
    },
    {
      name: 'B-Corp Certified',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=200&h=200&fit=crop',
      description: 'Meeting rigorous standards for social and environmental performance'
    },
    {
      name: 'Rainforest Alliance',
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=200&h=200&fit=crop',
      description: 'Supporting biodiversity and sustainable farming practices'
    },
    {
      name: 'Organic Certified',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=200&h=200&fit=crop',
      description: 'Grown without synthetic pesticides or fertilizers'
    }
  ];

  const impactStats = [
    { number: '4,200', label: 'lbs of packaging saved', icon: Recycle },
    { number: '850', label: 'farmers supported', icon: Users },
    { number: '15', label: 'partner farms', icon: Globe },
    { number: '100%', label: 'carbon neutral shipping', icon: Leaf }
  ];

  const initiatives = [
    {
      icon: Leaf,
      title: 'Carbon Neutral Roasting',
      description: 'Our roasting facility runs on 100% renewable energy, and we offset all carbon emissions from our operations.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop'
    },
    {
      icon: Recycle,
      title: 'Sustainable Packaging',
      description: 'All our packaging is recyclable or compostable, made from post-consumer recycled materials.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop'
    },
    {
      icon: Users,
      title: 'Farmer Support Programs',
      description: 'We invest in education, infrastructure, and sustainable farming techniques to support coffee communities.',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop'
    },
    {
      icon: Globe,
      title: 'Reforestation Projects',
      description: 'For every bag sold, we plant a tree in coffee-growing regions to restore natural habitats.',
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&h=400&fit=crop'
    }
  ];

  const partnerStories = [
    {
      name: 'Cooperativa El Progreso',
      location: 'Colombia',
      story: 'Through our partnership, this cooperative has increased farmer income by 40% and implemented water conservation systems.',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop',
      impact: '120 families supported'
    },
    {
      name: 'Yirgacheffe Coffee Union',
      location: 'Ethiopia',
      story: 'Our collaboration has funded school construction and provided clean water access to 500 families.',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop',
      impact: '500 families with clean water'
    },
    {
      name: 'Fazenda Esperança',
      location: 'Brazil',
      story: 'Together we\'ve restored 200 hectares of native forest and introduced sustainable farming practices.',
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=300&fit=crop',
      impact: '200 hectares restored'
    }
  ];

  return (
    <div className="min-h-screen bg-muted">
      <MetaTags
        title="Sustainability | Maya Coffee - Ethical & Environmental Commitment"
        description="Learn about Maya Coffee's commitment to sustainability, fair trade, and environmental responsibility. Discover our certifications and impact."
        keywords="sustainable coffee, fair trade coffee, ethical coffee sourcing, environmental responsibility, coffee sustainability"
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-coffee-bean to-coffee-roasted text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container-wide py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Leaf className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h1 className="display-text text-white mb-6">
              Sustainability is Our Promise
            </h1>
            <p className="text-xl text-white/90 mb-8">
              We believe that exceptional coffee should be good for everyone - 
              from the farmers who grow it to the planet we all share. 
              Discover how we're building a more sustainable coffee future.
            </p>
          </div>
        </div>
      </div>

      <div className="container-wide py-16">
        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-lg p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="display-text mb-4">Our Certifications</h2>
            <p className="text-lg text-muted-foreground">
              Third-party verified commitments to quality and sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainability Initiatives */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="display-text mb-4">Our Sustainability Initiatives</h2>
            <p className="text-lg text-muted-foreground">
              Concrete actions we're taking to create positive change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <initiative.icon className="h-6 w-6 mr-3 text-primary" />
                    {initiative.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{initiative.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partner Stories */}
        <div className="bg-white rounded-lg p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="display-text mb-4">Partner Stories</h2>
            <p className="text-lg text-muted-foreground">
              Real impact stories from our coffee farming partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerStories.map((partner, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Globe className="h-4 w-4 mr-1" />
                    {partner.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{partner.story}</p>
                  <Badge variant="secondary" className="text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {partner.impact}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Environmental Goals */}
        <div className="bg-white rounded-lg p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="display-text mb-4">Our 2025 Goals</h2>
            <p className="text-lg text-muted-foreground">
              Ambitious targets for a more sustainable future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { goal: 'Carbon Negative Operations', progress: 75, description: 'Offset more carbon than we produce' },
              { goal: '100% Renewable Energy', progress: 90, description: 'Power all operations with clean energy' },
              { goal: 'Zero Waste to Landfill', progress: 60, description: 'Eliminate all non-recyclable waste' },
              { goal: '1 Million Trees Planted', progress: 45, description: 'Restore forest in coffee regions' }
            ].map((goal, index) => (
              <div key={index} className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-serif font-semibold">{goal.goal}</h3>
                  <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-muted-foreground">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-coffee-bean to-coffee-roasted text-white rounded-lg p-12">
          <Heart className="h-16 w-16 mx-auto mb-6 text-secondary" />
          <h2 className="display-text text-white mb-4">Join Our Mission</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Every cup you enjoy supports sustainable farming practices and helps 
            coffee communities thrive. Together, we can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/coffee">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                Shop Sustainable Coffee
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/subscriptions">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-coffee-bean">
                Start a Subscription
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
