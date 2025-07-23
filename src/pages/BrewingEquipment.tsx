
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Star, Eye, ShoppingCart, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/Products/ProductCard';
import { products } from '@/data/products';
import MetaTags from '@/components/SEO/MetaTags';

const BrewingEquipment = () => {
  const equipmentProducts = products.filter(product => product.category === 'equipment');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-muted">
      <MetaTags
        title="Premium Brewing Equipment | Maya Coffee - Coffee Gear & Accessories"
        description="Hand-picked brewing equipment for the perfect cup. French presses, grinders, scales, and pour-over kits from top brands."
        keywords="coffee equipment, brewing gear, french press, coffee grinder, pour over, coffee accessories"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-coffee-bean to-coffee-roasted text-white">
        <div className="container-wide py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="display-text text-white mb-6">
              Premium Brewing Equipment
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Hand-picked brewing gear to elevate your coffee experience. 
              From professional-grade grinders to artisan pour-over kits, 
              we have everything you need for the perfect cup.
            </p>
          </div>
        </div>
      </div>

      <div className="container-wide py-8">
        {/* Beginner's Guide Box */}
        <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-lg mb-8">
          <div className="flex items-start space-x-4">
            <BookOpen className="h-8 w-8 text-secondary mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">
                Not sure where to start?
              </h3>
              <p className="text-muted-foreground mb-4">
                Our Beginner Brewing Kit includes everything you need to start your coffee journey: 
                a ceramic dripper, premium filters, and freshly roasted beans.
              </p>
              <Link to="/product/7">
                <Button className="btn-primary">
                  Try Our Beginner Brewing Kit
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Equipment Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <Coffee className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-serif font-semibold mb-2">Brewing Methods</h3>
            <p className="text-sm text-muted-foreground">
              Pour-over drippers, French presses, and espresso makers
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <Coffee className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-serif font-semibold mb-2">Grinders & Tools</h3>
            <p className="text-sm text-muted-foreground">
              Precision grinders, scales, and measuring tools
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <Coffee className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-serif font-semibold mb-2">Accessories</h3>
            <p className="text-sm text-muted-foreground">
              Mugs, storage containers, and specialty accessories
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipmentProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setSelectedProduct(product)}
                        className="bg-white/90 hover:bg-white text-coffee-bean"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Quick View
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{product.name}</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full rounded-lg"
                          />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-4">
                            {product.rating && (
                              <div className="flex items-center space-x-1">
                                <div className="flex">{renderStars(product.rating)}</div>
                                <span className="text-sm text-muted-foreground">
                                  ({product.reviewCount})
                                </span>
                              </div>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-4">{product.description}</p>
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="text-2xl font-bold">${product.price}</span>
                            <Badge variant="secondary">
                              {product.inStock ? 'In Stock' : 'Out of Stock'}
                            </Badge>
                          </div>
                          <Button className="w-full btn-primary">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-serif font-semibold text-lg mb-2">{product.name}</h3>
                
                {product.rating && (
                  <div className="flex items-center space-x-1 mb-2">
                    <div className="flex">{renderStars(product.rating)}</div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviewCount})
                    </span>
                  </div>
                )}

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold">${product.price}</span>
                  <Badge variant={product.inStock ? "secondary" : "destructive"}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </Badge>
                </div>

                <Button
                  className="w-full btn-primary"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrewingEquipment;
