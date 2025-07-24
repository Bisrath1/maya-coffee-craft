
import React, { useState } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from '@/components/Products/ProductCard';
import { products } from '@/data/products';
import { Product } from '@/types';

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['all', 'coffee', 'equipment', 'gift'];
  const origins = ['all', ...new Set(products.filter(p => p.origin).map(p => p.origin!))];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterProducts(category, selectedOrigin, sortBy);
  };

  const handleOriginChange = (origin: string) => {
    setSelectedOrigin(origin);
    filterProducts(selectedCategory, origin, sortBy);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    filterProducts(selectedCategory, selectedOrigin, sort);
  };

  const filterProducts = (category: string, origin: string, sort: string) => {
    let filtered = products;

    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }

    // Filter by origin
    if (origin !== 'all') {
      filtered = filtered.filter(product => product.origin === origin);
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
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured first
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container-wide py-8">
          <h1 className="display-text mb-4">Our Coffee Collection</h1>
          <p className="text-lg text-muted-foreground">
            Discover our premium collection of single-origin coffee beans, 
            brewing equipment, and curated gift sets with intelligent search and filtering.
          </p>
        </div>
      </div>

      <div className="container-wide py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif font-semibold mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
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
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Controls */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    Showing {filteredProducts.length} products
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <Select value={sortBy} onValueChange={handleSortChange}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="name">Name A-Z</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div className="flex border rounded-lg overflow-hidden">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="rounded-none"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="rounded-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  className={viewMode === 'list' ? 'flex' : ''}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No products found matching your filters.
                </p>
                <Button
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedOrigin('all');
                    setSortBy('featured');
                    setFilteredProducts(products);
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

export default Shop;
