
import React, { useState } from 'react';
import { User, Package, CreditCard, MapPin, Gift, Users, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MetaTags from '@/components/SEO/MetaTags';

const Account = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const recentOrders = [
    {
      id: '#12345',
      date: '2024-01-15',
      status: 'Delivered',
      total: '$34.99',
      items: 2
    },
    {
      id: '#12344',
      date: '2024-01-01',
      status: 'Delivered',
      total: '$67.50',
      items: 3
    },
    {
      id: '#12343',
      date: '2023-12-18',
      status: 'Delivered',
      total: '$24.99',
      items: 1
    }
  ];

  const subscriptions = [
    {
      id: 'SUB-001',
      coffee: 'Ethiopian Yirgacheffe',
      frequency: 'Every 2 weeks',
      nextDelivery: '2024-01-25',
      status: 'Active'
    },
    {
      id: 'SUB-002',
      coffee: 'Colombian Supremo',
      frequency: 'Monthly',
      nextDelivery: '2024-02-01',
      status: 'Paused'
    }
  ];

  const addresses = [
    {
      id: 1,
      type: 'Home',
      name: 'John Doe',
      address: '123 Coffee Street, Brew City, BC 12345',
      default: true
    },
    {
      id: 2,
      type: 'Office',
      name: 'John Doe',
      address: '456 Work Avenue, Business District, BD 67890',
      default: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MetaTags 
        title="My Account | Maya Coffee"
        description="Manage your Maya Coffee account, orders, subscriptions, and preferences in one place."
        keywords="account, orders, subscriptions, coffee account"
      />
      
      <div className="container-wide py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">john@example.com</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  <Button 
                    variant={activeTab === 'overview' ? 'default' : 'ghost'} 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('overview')}
                  >
                    <Package className="h-4 w-4 mr-2" />
                    Overview
                  </Button>
                  <Button 
                    variant={activeTab === 'orders' ? 'default' : 'ghost'} 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('orders')}
                  >
                    <Package className="h-4 w-4 mr-2" />
                    Orders
                  </Button>
                  <Button 
                    variant={activeTab === 'subscriptions' ? 'default' : 'ghost'} 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('subscriptions')}
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Subscriptions
                  </Button>
                  <Button 
                    variant={activeTab === 'addresses' ? 'default' : 'ghost'} 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('addresses')}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Addresses
                  </Button>
                  <Button 
                    variant={activeTab === 'loyalty' ? 'default' : 'ghost'} 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('loyalty')}
                  >
                    <Gift className="h-4 w-4 mr-2" />
                    Loyalty Points
                  </Button>
                  <Button 
                    variant={activeTab === 'referrals' ? 'default' : 'ghost'} 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('referrals')}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Referrals
                  </Button>
                  <Button 
                    variant={activeTab === 'settings' ? 'default' : 'ghost'} 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('settings')}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-serif font-semibold">Welcome back, John!</h1>
                  <p className="text-muted-foreground">Here's what's happening with your account</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Total Orders</p>
                          <p className="text-2xl font-semibold">23</p>
                        </div>
                        <Package className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Active Subscriptions</p>
                          <p className="text-2xl font-semibold">2</p>
                        </div>
                        <CreditCard className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Loyalty Points</p>
                          <p className="text-2xl font-semibold">1,250</p>
                        </div>
                        <Gift className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Orders */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium">{order.id}</p>
                            <p className="text-sm text-muted-foreground">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{order.total}</p>
                            <p className="text-sm text-muted-foreground">{order.items} items</p>
                          </div>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            {order.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'subscriptions' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-serif font-semibold">Your Subscriptions</h1>
                  <p className="text-muted-foreground">Manage your coffee subscriptions</p>
                </div>

                <div className="space-y-4">
                  {subscriptions.map((sub) => (
                    <Card key={sub.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">{sub.coffee}</h3>
                            <p className="text-sm text-muted-foreground">{sub.frequency}</p>
                            <p className="text-sm text-muted-foreground">Next delivery: {sub.nextDelivery}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-3 py-1 rounded-full text-sm ${
                              sub.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {sub.status}
                            </span>
                            <Button variant="outline" size="sm">Manage</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Add other tab content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
