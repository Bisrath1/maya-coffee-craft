
import React from 'react';
import { Clock, Coffee, Thermometer, Scale, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import MetaTags from '@/components/SEO/MetaTags';

const BrewGuides = () => {
  const brewingMethods = [
    {
      id: 'pour-over',
      name: 'Pour Over',
      difficulty: 'Intermediate',
      time: '3-4 minutes',
      grind: 'Medium-fine',
      ratio: '1:15-17',
      temperature: '200°F',
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&h=600&fit=crop',
      description: 'A clean, bright cup that highlights the coffee\'s unique characteristics.',
      equipment: ['Pour-over dripper', 'Paper filters', 'Gooseneck kettle', 'Coffee scale', 'Timer'],
      steps: [
        'Heat water to 200°F (93°C)',
        'Rinse the paper filter and warm the dripper',
        'Add 25g of medium-fine ground coffee',
        'Start timer and pour 50g of water for blooming (30 seconds)',
        'Pour water in slow, circular motions to 250g',
        'Continue pouring to reach 375g total water',
        'Total brew time should be 3-4 minutes',
        'Enjoy your perfectly extracted coffee!'
      ],
      tips: [
        'Use a gooseneck kettle for better control',
        'Keep water temperature consistent',
        'Pour slowly and steadily',
        'Experiment with grind size for taste preference'
      ]
    },
    {
      id: 'french-press',
      name: 'French Press',
      difficulty: 'Beginner',
      time: '4 minutes',
      grind: 'Coarse',
      ratio: '1:12-15',
      temperature: '200°F',
      image: 'https://images.unsplash.com/photo-1521302200778-33500795e128?w=800&h=600&fit=crop',
      description: 'Full-bodied coffee with rich oils and sediment for a robust flavor.',
      equipment: ['French press', 'Coffee grinder', 'Kettle', 'Timer', 'Spoon'],
      steps: [
        'Heat water to 200°F (93°C)',
        'Add 30g of coarse ground coffee to French press',
        'Pour hot water to fill the press',
        'Stir gently and place lid with plunger up',
        'Let steep for 4 minutes',
        'Press plunger down slowly and steadily',
        'Serve immediately to prevent over-extraction',
        'Clean press thoroughly after use'
      ],
      tips: [
        'Use a coarse grind to prevent over-extraction',
        'Don\'t press too hard on the plunger',
        'Serve immediately after pressing',
        'Pre-warm the French press with hot water'
      ]
    },
    {
      id: 'aeropress',
      name: 'AeroPress',
      difficulty: 'Intermediate',
      time: '2-3 minutes',
      grind: 'Medium-fine',
      ratio: '1:15',
      temperature: '185°F',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop',
      description: 'Smooth, clean coffee with low acidity and full flavor.',
      equipment: ['AeroPress', 'AeroPress filters', 'Kettle', 'Scale', 'Timer'],
      steps: [
        'Heat water to 185°F (85°C)',
        'Insert filter into cap and rinse',
        'Add 17g of medium-fine ground coffee',
        'Pour 255g of water and stir',
        'Insert plunger and wait 30 seconds',
        'Press down slowly over 30 seconds',
        'Dilute with hot water if desired',
        'Clean AeroPress components'
      ],
      tips: [
        'Experiment with inverted method',
        'Try different stirring techniques',
        'Adjust grind size for strength preference',
        'Use paper filters for cleanest cup'
      ]
    },
    {
      id: 'espresso',
      name: 'Espresso',
      difficulty: 'Advanced',
      time: '25-30 seconds',
      grind: 'Fine',
      ratio: '1:2',
      temperature: '200°F',
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&h=600&fit=crop',
      description: 'Concentrated coffee with rich crema and intense flavor.',
      equipment: ['Espresso machine', 'Espresso grinder', 'Tamper', 'Scale', 'Shot glasses'],
      steps: [
        'Heat espresso machine to 200°F',
        'Grind 18g of coffee beans very fine',
        'Distribute grounds evenly in portafilter',
        'Tamp with 30lbs of pressure',
        'Lock portafilter into machine',
        'Start extraction and time the shot',
        'Aim for 36g output in 25-30 seconds',
        'Serve immediately for best flavor'
      ],
      tips: [
        'Consistent grind size is crucial',
        'Practice your tamping technique',
        'Watch for golden crema formation',
        'Adjust grind if extraction is too fast/slow'
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-muted">
      <MetaTags
        title="Coffee Brew Guides | Maya Coffee - Learn Perfect Brewing Methods"
        description="Master the art of coffee brewing with our comprehensive guides. Learn pour-over, French press, AeroPress, and espresso techniques."
        keywords="coffee brewing guides, pour over guide, french press tutorial, aeropress instructions, espresso brewing"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-coffee-bean to-coffee-roasted text-white">
        <div className="container-wide py-16">
          <div className="text-center max-w-4xl mx-auto">
            <Coffee className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h1 className="display-text text-white mb-6">
              Master the Art of Coffee Brewing
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Learn the techniques and ratios that will transform your coffee experience. 
              From beginner-friendly methods to advanced espresso pulling, we'll guide you every step of the way.
            </p>
          </div>
        </div>
      </div>

      <div className="container-wide py-12">
        {/* Brewing Methods Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {brewingMethods.map((method) => (
            <Card key={method.id} className="hover:shadow-lg transition-shadow duration-200">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={method.image}
                  alt={method.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{method.name}</CardTitle>
                  <Badge className={getDifficultyColor(method.difficulty)}>
                    {method.difficulty}
                  </Badge>
                </div>
                <CardDescription className="text-sm">{method.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {method.time}
                  </div>
                  <div className="flex items-center">
                    <Coffee className="h-3 w-3 mr-1" />
                    {method.grind}
                  </div>
                  <div className="flex items-center">
                    <Scale className="h-3 w-3 mr-1" />
                    {method.ratio}
                  </div>
                  <div className="flex items-center">
                    <Thermometer className="h-3 w-3 mr-1" />
                    {method.temperature}
                  </div>
                </div>
                <Button className="w-full btn-outline" size="sm">
                  <Play className="h-4 w-4 mr-2" />
                  View Guide
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Brewing Guides */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="display-text mb-8 text-center">Detailed Brewing Guides</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {brewingMethods.map((method) => (
              <AccordionItem key={method.id} value={method.id} className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <img
                      src={method.image}
                      alt={method.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="text-left">
                      <h3 className="font-serif font-semibold text-lg">{method.name}</h3>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Coffee className="h-4 w-4 mr-2" />
                        Required Equipment
                      </h4>
                      <ul className="space-y-1 mb-6">
                        {method.equipment.map((item, index) => (
                          <li key={index} className="text-sm text-muted-foreground">
                            • {item}
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-semibold mb-3">Brewing Parameters</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Grind:</span> {method.grind}
                        </div>
                        <div>
                          <span className="font-medium">Ratio:</span> {method.ratio}
                        </div>
                        <div>
                          <span className="font-medium">Time:</span> {method.time}
                        </div>
                        <div>
                          <span className="font-medium">Temp:</span> {method.temperature}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Step-by-Step Instructions</h4>
                      <ol className="space-y-2 mb-6">
                        {method.steps.map((step, index) => (
                          <li key={index} className="text-sm text-muted-foreground">
                            <span className="font-medium text-primary mr-2">{index + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>

                      <h4 className="font-semibold mb-3">Pro Tips</h4>
                      <ul className="space-y-1">
                        {method.tips.map((tip, index) => (
                          <li key={index} className="text-sm text-muted-foreground">
                            💡 {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default BrewGuides;
