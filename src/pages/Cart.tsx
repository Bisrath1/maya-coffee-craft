
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, Lock, Truck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import MetaTags from '@/components/SEO/MetaTags';

const Cart = () => {
  const { state, dispatch } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [shippingOption, setShippingOption] = useState('standard');

  const shippingOptions = [
    { id: 'standard', name: 'Standard Shipping', price: 0, time: '3-5 business days' },
    { id: 'express', name: 'Express Shipping', price: 15, time: '1-2 business days' },
    { id: 'overnight', name: 'Overnight', price: 35, time: 'Next business day' }
  ];

  const selectedShipping = shippingOptions.find(option => option.id === shippingOption);
  const subtotal = state.total;
  const shipping = state.total >= 50 ? 0 : selectedShipping?.price || 0;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQuantity } });
    }
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <MetaTags 
          title="Shopping Cart | Maya Coffee"
          description="Review your Maya Coffee selections and proceed to checkout for premium coffee beans and brewing equipment."
        />
        
        <div className="container-wide py-16">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-serif font-semibold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any coffee to your cart yet. Let's fix that!
            </p>
            <Link to="/shop">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Shop Coffee
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <MetaTags 
        title="Shopping Cart | Maya Coffee"
        description="Review your Maya Coffee selections and proceed to checkout for premium coffee beans and brewing equipment."
      />
      
      <div className="container-wide py-8">
        <h1 className="text-3xl font-serif font-semibold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Cart Items ({state.itemCount})</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => dispatch({ type: 'CLEAR_CART' })}
                  >
                    Clear Cart
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        {item.options && (
                          <div className="text-sm text-muted-foreground">
                            {item.options.grind && <span>Grind: {item.options.grind}</span>}
                            {item.options.size && <span> • Size: {item.options.size}</span>}
                          </div>
                        )}
                        <p className="text-primary font-semibold">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                {/* Shipping Options */}
                <div>
                  <h4 className="font-semibold mb-2">Shipping Options</h4>
                  <div className="space-y-2">
                    {shippingOptions.map((option) => (
                      <label key={option.id} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="shipping"
                          value={option.id}
                          checked={shippingOption === option.id}
                          onChange={(e) => setShippingOption(e.target.value)}
                          className="text-primary"
                        />
                        <span className="flex-1">{option.name}</span>
                        <span className="text-sm text-muted-foreground">{option.time}</span>
                        <span>${option.price}</span>
                      </label>
                    ))}
                  </div>
                  {state.total >= 50 && (
                    <p className="text-sm text-green-600 mt-2">🎉 Free shipping applied!</p>
                  )}
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Promo Code</label>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>

                <Link to="/checkout">
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Proceed to Checkout
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Lock className="h-5 w-5 text-green-600" />
                    <span className="text-sm">SSL Secure Checkout</span>
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

export default Cart;
