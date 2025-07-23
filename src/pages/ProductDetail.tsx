
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Coffee, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { dispatch } = useCart();
  
  const [selectedGrind, setSelectedGrind] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-semibold mb-4">Product not found</h1>
          <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: `${product.id}-${Date.now()}`,
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image,
        options: {
          grind: selectedGrind || product.options?.grind?.[0],
          size: selectedSize || product.options?.size?.[0]
        }
      }
    });
    
    dispatch({ type: 'OPEN_CART' });
  };

  return (
    <div className="min-h-screen bg-muted">
      <div className="container-wide py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground uppercase tracking-wide">
                  {product.category}
                </span>
                {product.origin && (
                  <span className="text-sm text-muted-foreground">
                    {product.origin}
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-serif font-semibold mb-4">{product.name}</h1>
              
              {/* Rating */}
              {product.rating && (
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating!)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              )}
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-semibold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Tasting Notes */}
            {product.tastingNotes && (
              <div>
                <h3 className="font-serif font-semibold mb-2">Tasting Notes</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tastingNotes.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1 bg-accent text-sm rounded-full"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Product Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {product.roastLevel && (
                <div className="flex items-center space-x-2">
                  <Coffee className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Roast Level</p>
                    <p className="text-sm text-muted-foreground capitalize">{product.roastLevel}</p>
                  </div>
                </div>
              )}
              {product.origin && (
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Origin</p>
                    <p className="text-sm text-muted-foreground">{product.origin}</p>
                  </div>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Quality</p>
                  <p className="text-sm text-muted-foreground">Premium Grade</p>
                </div>
              </div>
            </div>

            {/* Options */}
            {product.options && (
              <div className="space-y-4">
                {product.options.grind && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Grind Type</label>
                    <Select value={selectedGrind} onValueChange={setSelectedGrind}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grind type" />
                      </SelectTrigger>
                      <SelectContent>
                        {product.options.grind.map(grind => (
                          <SelectItem key={grind} value={grind}>{grind}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
                
                {product.options.size && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Size</label>
                    <Select value={selectedSize} onValueChange={setSelectedSize}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        {product.options.size.map(size => (
                          <SelectItem key={size} value={size}>{size}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium">Quantity:</label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border rounded px-3 py-1 text-sm"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
              
              <Button
                onClick={addToCart}
                disabled={!product.inStock}
                className="flex-1 btn-primary"
                size="lg"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            {/* Stock Status */}
            <div className="flex items-center justify-between text-sm">
              <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
              <span className="text-muted-foreground">
                Free shipping on orders over $50
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
