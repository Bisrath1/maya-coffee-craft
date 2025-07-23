
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gift, Heart, Coffee, Calendar, Download, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/Products/ProductCard';
import { products } from '@/data/products';
import MetaTags from '@/components/SEO/MetaTags';

const Gifts = () => {
  const giftProducts = products.filter(product => product.category === 'gift');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [giftCardAmount, setGiftCardAmount] = useState(50);
  const [giftMessage, setGiftMessage] = useState('');

  const giftBoxItems = [
    { id: 'coffee-1', name: 'Ethiopian Yirgacheffe', price: 24.99, image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop' },
    { id: 'coffee-2', name: 'Colombian Supremo', price: 19.99, image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop' },
    { id: 'mug', name: 'Artisan Coffee Mug', price: 15.99, image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop' },
    { id: 'dripper', name: 'Pour-Over Dripper', price: 45.99, image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop' },
  ];

  const toggleItem = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const calculateTotal = () => {
    return giftBoxItems
      .filter(item => selectedItems.includes(item.id))
      .reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="min-h-screen bg-muted">
      <MetaTags
        title="Coffee Gifts & Gift Cards | Maya Coffee - Perfect Gifts for Coffee Lovers"
        description="Perfect gifts for coffee lovers. Gift sets, subscriptions, and digital gift cards. Build your own gift box or choose from our curated collections."
        keywords="coffee gifts, gift cards, coffee gift sets, subscription gifts, coffee lover gifts"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-coffee-bean to-coffee-roasted text-white">
        <div className="container-wide py-16">
          <div className="text-center max-w-4xl mx-auto">
            <Gift className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h1 className="display-text text-white mb-6" style={{ fontFamily: 'cursive' }}>
              Perfect Gifts for Coffee Lovers
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Thoughtfully curated gift sets, subscriptions, and digital gift cards 
              to share the joy of exceptional coffee with those you care about.
            </p>
          </div>
        </div>
      </div>

      <div className="container-wide py-12">
        {/* Gift Collections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {giftProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Build Your Own Gift Box */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="display-text mb-4" style={{ fontFamily: 'cursive' }}>
              Build Your Own Gift Box
            </h2>
            <p className="text-lg text-muted-foreground">
              Create a personalized gift by selecting your favorite items
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {giftBoxItems.map((item) => (
              <div
                key={item.id}
                className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                  selectedItems.includes(item.id) 
                    ? 'border-primary bg-primary/5' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => toggleItem(item.id)}
              >
                {selectedItems.includes(item.id) && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Plus className="h-4 w-4 text-white rotate-45" />
                  </div>
                )}
                
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover rounded-md mb-3"
                />
                <h3 className="font-serif font-semibold mb-2">{item.name}</h3>
                <p className="text-lg font-bold text-primary">${item.price}</p>
              </div>
            ))}
          </div>

          {selectedItems.length > 0 && (
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-serif font-semibold text-lg">Your Gift Box</h3>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-2xl font-bold text-primary">${calculateTotal().toFixed(2)}</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                {giftBoxItems
                  .filter(item => selectedItems.includes(item.id))
                  .map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name}</span>
                      <span>${item.price}</span>
                    </div>
                  ))}
              </div>
              <Button className="w-full btn-primary">
                <Gift className="h-4 w-4 mr-2" />
                Add Gift Box to Cart
              </Button>
            </div>
          )}
        </div>

        {/* Gift Subscriptions */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="display-text mb-4" style={{ fontFamily: 'cursive' }}>
              Gift Subscriptions
            </h2>
            <p className="text-lg text-muted-foreground">
              The gift that keeps on giving - fresh coffee delivered monthly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { months: 1, price: 24.99, savings: 0 },
              { months: 3, price: 67.99, savings: 7.00 },
              { months: 6, price: 129.99, savings: 20.00 }
            ].map((plan) => (
              <Card key={plan.months} className="relative">
                {plan.months === 3 && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-secondary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <CardTitle>{plan.months} Month{plan.months > 1 ? 's' : ''}</CardTitle>
                  <CardDescription>
                    {plan.months === 1 ? 'Perfect for trying' : `${plan.months} months of premium coffee`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-primary">${plan.price}</p>
                    {plan.savings > 0 && (
                      <p className="text-sm text-green-600">Save ${plan.savings.toFixed(2)}</p>
                    )}
                  </div>
                  <Button className="w-full btn-primary">
                    <Gift className="h-4 w-4 mr-2" />
                    Gift {plan.months} Month{plan.months > 1 ? 's' : ''}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Digital Gift Cards */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h2 className="display-text mb-4" style={{ fontFamily: 'cursive' }}>
              Digital Gift Cards
            </h2>
            <p className="text-lg text-muted-foreground">
              Instant delivery with personalized message
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[25, 50, 75, 100].map((amount) => (
                <Button
                  key={amount}
                  variant={giftCardAmount === amount ? "default" : "outline"}
                  onClick={() => setGiftCardAmount(amount)}
                  className="h-16 text-lg"
                >
                  ${amount}
                </Button>
              ))}
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Custom Amount</label>
                <Input
                  type="number"
                  value={giftCardAmount}
                  onChange={(e) => setGiftCardAmount(Number(e.target.value))}
                  min="10"
                  max="500"
                  className="text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Personal Message</label>
                <Textarea
                  value={giftMessage}
                  onChange={(e) => setGiftMessage(e.target.value)}
                  placeholder="Add a personal message to your gift card..."
                  rows={4}
                />
              </div>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">Gift Card Total</p>
                <p className="text-3xl font-bold text-primary">${giftCardAmount}</p>
              </div>
              <Button className="w-full btn-primary" size="lg">
                <Download className="h-4 w-4 mr-2" />
                Purchase Digital Gift Card
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                Gift card will be delivered instantly via email
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
