import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import CartSidebar from './components/Cart/CartSidebar';
import LanguageCurrencyToggle from './components/Layout/LanguageCurrencyToggle';
import Index from './pages/Index';
import Shop from './pages/Shop';
import CoffeeBeans from './pages/CoffeeBeans';
import BrewingEquipment from './pages/BrewingEquipment';
import Gifts from './pages/Gifts';
import Subscriptions from './pages/Subscriptions';
import BrewGuides from './pages/BrewGuides';
import OurStory from './pages/OurStory';
import Sustainability from './pages/Sustainability';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import Help from './pages/Help';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Subscribe from './pages/Subscribe';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-background">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/coffee" element={<CoffeeBeans />} />
                <Route path="/equipment" element={<BrewingEquipment />} />
                <Route path="/gifts" element={<Gifts />} />
                <Route path="/subscriptions" element={<Subscriptions />} />
                <Route path="/brew-guides" element={<BrewGuides />} />
                <Route path="/our-story" element={<OurStory />} />
                <Route path="/sustainability" element={<Sustainability />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/help" element={<Help />} />
                <Route path="/account" element={<Account />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/subscribe" element={<Subscribe />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <CartSidebar />
            <LanguageCurrencyToggle />
          </div>
        </Router>
      </CartProvider>
    </HelmetProvider>
  );
}

export default App;
