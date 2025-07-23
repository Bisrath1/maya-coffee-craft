
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Leaf, Award, Clock, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from '@/components/Products/ProductCard';
import { products } from '@/data/products';
import { Product } from '@/types';
import MetaTags from '@/components/SEO/MetaTags';

const CoffeeBeans = () => {
  const coffeeProducts = products.filter(product => product.category === 'coffee');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(coffeeProducts);
  const [selectedRoast, setSelectedRoast] = useState<string>('all');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('all');
  const [selectedFlavor, setSelectedFlavor] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const roastLevels = ['all', 'light', 'medium', 'dark'];
  const origins = ['all', ...new Set(coffeeProducts.filter(p => p.origin).map(p => p.origin!))];
  const flavors = ['all', 'fruity', 'nutty', 'chocolatey', 'floral', 'citrus', 'spicy'];
  const types = ['all', 'single-origin', 'blend', 'espresso'];

  const filterProducts = (roast: string, origin: string, flavor: string, type: string, sort: string) => {
    let filtered = coffeeProducts;

    if (roast !== 'all') {
      filtered = filtered.filter(product => product.roastLevel === roast);
    }

    if (origin !== 'all') {
      filtered = filtered.filter(product => product.origin === origin);
    }

    if (flavor !== 'all') {
      filtered = filtered.filter(product => 
        product.tastingNotes?.some(note => note.toLowerCase().includes(flavor))
      );
    }

    if (type !== 'all') {
      filtered = filtered.filter(product => product.subcategory === type);
    }

    // Sort products
    switch (sort) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    setFilteredProducts(filtered);
  };

  const handleRoastChange = (roast: string) => {
    setSelectedRoast(roast);
    filterProducts(roast, selectedOrigin, selectedFlavor, selectedType, sortBy);
  };

  const handleOriginChange = (origin: string) => {
    setSelectedOrigin(origin);
    filterProducts(selectedRoast, origin, selectedFlavor, selectedType, sortBy);
  };

  const handleFlavorChange = (flavor: string) => {
    setSelectedFlavor(flavor);
    filterProducts(selectedRoast, selectedOrigin, flavor, selectedType, sortBy);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    filterProducts(selectedRoast, selectedOrigin, selectedFlavor, type, sortBy);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    filterProducts(selectedRoast, selectedOrigin, selectedFlavor, selectedType, sort);
  };

  return (
    <div className="min-h-screen bg-muted">
      <MetaTags
        title="Premium Coffee Beans | Maya Coffee - Freshly Roasted Specialty Coffee"
        description="Discover our premium collection of single-origin coffee beans and expertly crafted blends. Ethically sourced, freshly roasted to order."
        keywords="coffee beans, single origin coffee, coffee blends, specialty coffee, freshly roasted coffee, premium coffee"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-coffee-bean to-coffee-roasted text-white">
        <div className="container-wide py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="display-text text-white mb-6">
              Freshly Roasted Specialty Coffee
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Choose between single-origin, blends, espresso or filter roasts. 
              Every bean is carefully selected from the world's finest coffee regions 
              and roasted to perfection just for you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <div className="flex items-center text-white/90">
                <Leaf className="h-6 w-6 mr-3 text-secondary" />
                <span>Ethically Sourced</span>
              </div>
              <div className="flex items-center text-white/90">
                <Award className="h-6 w-6 mr-3 text-secondary" />
                <span>B-Corp Certified</span>
              </div>
              <div className="flex items-center text-white/90">
                <Clock className="h-6 w-6 mr-3 text-secondary" />
                <span>Roast to Order</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif font-semibold mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filter Coffee
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Roast Level</label>
                  <Select value={selectedRoast} onValueChange={handleRoastChange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {roastLevels.map(roast => (
                        <SelectItem key={roast} value={roast}>
                          {roast === 'all' ? 'All Roasts' : roast.charAt(0).toUpperCase() + roast.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Origin</label>
                  <Select value={selectedOrigin} onValueChange={handleOriginChange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {origins.map(origin => (
                        <SelectItem key={origin} value={origin}>
                          {origin === 'all' ? 'All Origins' : origin}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Flavor Profile</label>
                  <Select value={selectedFlavor} onValueChange={handleFlavorChange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {flavors.map(flavor => (
                        <SelectItem key={flavor} value={flavor}>
                          {flavor === 'all' ? 'All Flavors' : flavor.charAt(0).toUpperCase() + flavor.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Type</label>
                  <Select value={selectedType} onValueChange={handleTypeChange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {types.map(type => (
                        <SelectItem key={type} value={type}>
                          {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Controls */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Showing {filteredProducts.length} coffee products
                </span>
                
                <Select value={sortBy} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Coffee className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <p className="text-lg text-muted-foreground mb-4">
                  No coffee found matching your filters.
                </p>
                <Button
                  onClick={() => {
                    setSelectedRoast('all');
                    setSelectedOrigin('all');
                    setSelectedFlavor('all');
                    setSelectedType('all');
                    setFilteredProducts(coffeeProducts);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeBeans;
