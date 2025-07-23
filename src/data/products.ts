
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Ethiopian Yirgacheffe',
    description: 'A bright and floral coffee with notes of bergamot and jasmine. Grown at high altitude in the birthplace of coffee.',
    price: 24.99,
    originalPrice: 29.99,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop',
    category: 'coffee',
    subcategory: 'single-origin',
    origin: 'Ethiopia',
    roastLevel: 'light',
    tastingNotes: ['Bergamot', 'Jasmine', 'Citrus', 'Wine-like'],
    brewingMethods: ['Pour-over', 'French Press', 'AeroPress'],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 127,
    options: {
      grind: ['Whole Bean', 'Coarse', 'Medium', 'Fine'],
      size: ['250g', '500g', '1kg']
    }
  },
  {
    id: '2',
    name: 'Colombian Supremo',
    description: 'Rich and well-balanced with chocolate undertones and a smooth, clean finish. Perfect for everyday drinking.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop',
    category: 'coffee',
    subcategory: 'single-origin',
    origin: 'Colombia',
    roastLevel: 'medium',
    tastingNotes: ['Chocolate', 'Caramel', 'Nutty', 'Smooth'],
    brewingMethods: ['Espresso', 'Drip', 'French Press'],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviewCount: 89,
    options: {
      grind: ['Whole Bean', 'Coarse', 'Medium', 'Fine'],
      size: ['250g', '500g', '1kg']
    }
  },
  {
    id: '3',
    name: 'Brazil Dark Roast',
    description: 'Bold and intense with smoky notes and a full body. Perfect for those who love a strong cup of coffee.',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop',
    category: 'coffee',
    subcategory: 'single-origin',
    origin: 'Brazil',
    roastLevel: 'dark',
    tastingNotes: ['Smoky', 'Dark Chocolate', 'Earthy', 'Bold'],
    brewingMethods: ['Espresso', 'Moka Pot', 'French Press'],
    inStock: true,
    rating: 4.4,
    reviewCount: 156,
    options: {
      grind: ['Whole Bean', 'Coarse', 'Medium', 'Fine'],
      size: ['250g', '500g', '1kg']
    }
  },
  {
    id: '4',
    name: 'House Blend',
    description: 'Our signature blend combining beans from three continents for a perfectly balanced cup with complexity and depth.',
    price: 21.99,
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&h=600&fit=crop',
    category: 'coffee',
    subcategory: 'blend',
    roastLevel: 'medium',
    tastingNotes: ['Balanced', 'Complex', 'Fruity', 'Smooth'],
    brewingMethods: ['Drip', 'Pour-over', 'French Press'],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 203,
    options: {
      grind: ['Whole Bean', 'Coarse', 'Medium', 'Fine'],
      size: ['250g', '500g', '1kg']
    }
  },
  {
    id: '5',
    name: 'Ceramic Pour-Over Dripper',
    description: 'Handcrafted ceramic dripper designed for the perfect pour-over brew. Dishwasher safe and built to last.',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&h=600&fit=crop',
    category: 'equipment',
    subcategory: 'brewing',
    inStock: true,
    rating: 4.9,
    reviewCount: 67,
    options: {
      size: ['Single Cup', 'Double Cup']
    }
  },
  {
    id: '6',
    name: 'Artisan Coffee Mug Set',
    description: 'Set of two handcrafted ceramic mugs with a rustic finish. Perfect for enjoying your favorite Maya Coffee blend.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop',
    category: 'equipment',
    subcategory: 'accessories',
    inStock: true,
    rating: 4.5,
    reviewCount: 34,
    options: {
      size: ['Set of 2', 'Set of 4']
    }
  },
  {
    id: '7',
    name: 'Coffee Starter Kit',
    description: 'Everything you need to start your coffee journey: Ethiopian Yirgacheffe, pour-over dripper, and artisan mug.',
    price: 89.99,
    originalPrice: 109.99,
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop',
    category: 'gift',
    subcategory: 'bundle',
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 45
  },
  {
    id: '8',
    name: 'Premium Subscription Box',
    description: 'Monthly delivery of 2 premium single-origin coffees, curated by our master roasters. Free shipping included.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
    category: 'gift',
    subcategory: 'subscription',
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 112
  }
];
