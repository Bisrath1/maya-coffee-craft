
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { dispatch } = useCart();

  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: `${product.id}-${Date.now()}`,
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        options: product.options ? {
          grind: product.options.grind?.[0],
          size: product.options.size?.[0]
        } : undefined
      }
    });
    
    dispatch({ type: 'OPEN_CART' });
  };

  return (
    <div className={`group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden ${className}`}>
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-4">
          {/* Category & Origin */}
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span className="uppercase tracking-wide">{product.category}</span>
            {product.origin && <span>{product.origin}</span>}
          </div>

          {/* Name */}
          <h3 className="font-serif font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center space-x-1 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating!)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviewCount})
              </span>
            </div>
          )}

          {/* Tasting Notes */}
          {product.tastingNotes && (
            <div className="mb-3">
              <div className="flex flex-wrap gap-1">
                {product.tastingNotes.slice(0, 3).map((note) => (
                  <span
                    key={note}
                    className="px-2 py-1 bg-accent text-xs rounded-full text-coffee-bean"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            {product.originalPrice && (
              <span className="text-sm font-medium text-green-600">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </span>
            )}
          </div>

          {/* Stock Status */}
          <div className="flex items-center justify-between">
            <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
            {product.roastLevel && (
              <span className="text-xs text-muted-foreground capitalize">
                {product.roastLevel} roast
              </span>
            )}
          </div>
        </div>
      </Link>
      
      {/* Add to Cart Button */}
      <div className="p-4 pt-0">
        <Button
          onClick={addToCart}
          disabled={!product.inStock}
          className="w-full btn-primary"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
