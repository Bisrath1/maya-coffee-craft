
import React, { useState } from 'react';
import { Lock, CreditCard, Truck, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/contexts/CartContext';
import MetaTags from '@/components/SEO/MetaTags';

const Checkout = () => {
  const { state } = useCart();
  const [step, setStep] = useState(1);
  const [guestCheckout, setGuestCheckout] = useState(false);
  
  const subtotal = state.total;
  const shipping = state.total >= 50 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = () => {
    // Handle order placement logic here
    console.log('Order placed!');
  };

  return (
    <div className="min-h-screen bg-background">
      <MetaTags 
        title="Checkout | Maya Coffee"
        description="Complete your Maya Coffee purchase with secure checkout and fast shipping options."
      />
      
      <div className="container-wide py-8">
        <h1 className="text-3xl font-serif font-semibold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Step 1: Account */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
                    Account Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {!guestCheckout ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button className="bg-primary hover:bg-primary/90">
                          Sign In
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => setGuestCheckout(true)}
                        >
                          Continue as Guest
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Already have an account? Sign in for faster checkout
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="john@example.com" />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="createAccount" />
                        <Label htmlFor="createAccount" className="text-sm">
                          Create an account for faster future checkouts
                        </Label>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Step 2: Shipping */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="123 Coffee Street" />
                    </div>
                    <div>
                      <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                      <Input id="apartment" placeholder="Apartment 4B" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="New York" />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input id="state" placeholder="NY" />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input id="zipCode" placeholder="10001" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3: Payment */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Express Payment */}
                    <div>
                      <h4 className="font-semibold mb-4">Express Payment</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Button variant="outline" className="h-12">
                          <img src="/api/placeholder/20/20" alt="Apple Pay" className="mr-2" />
                          Apple Pay
                        </Button>
                        <Button variant="outline" className="h-12">
                          <img src="/api/placeholder/20/20" alt="PayPal" className="mr-2" />
                          PayPal
                        </Button>
                        <Button variant="outline" className="h-12">
                          <img src="/api/placeholder/20/20" alt="Google Pay" className="mr-2" />
                          Google Pay
                        </Button>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">Or pay with card</span>
                      </div>
                    </div>

                    {/* Credit Card */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <div className="relative">
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                          <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" placeholder="John Doe" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Place Order Button */}
              <Button 
                onClick={handlePlaceOrder}
                className="w-full bg-primary hover:bg-primary/90" 
                size="lg"
              >
                <Lock className="h-4 w-4 mr-2" />
                Place Order - ${total.toFixed(2)}
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Order Items */}
                  {state.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Lock className="h-5 w-5 text-green-600" />
                    <span className="text-sm">256-bit SSL encryption</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">Free shipping on orders $50+</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-purple-600" />
                    <span className="text-sm">30-day money-back guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
