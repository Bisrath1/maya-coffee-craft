
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: 'coffee' | 'equipment' | 'gift';
  subcategory?: string;
  origin?: string;
  roastLevel?: 'light' | 'medium' | 'dark';
  tastingNotes?: string[];
  brewingMethods?: string[];
  inStock: boolean;
  featured?: boolean;
  rating?: number;
  reviewCount?: number;
  options?: {
    grind?: string[];
    size?: string[];
  };
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  options?: {
    grind?: string;
    size?: string;
  };
}

export interface User {
  id: string;
  email: string;
  name: string;
  subscriptions?: Subscription[];
}

export interface Subscription {
  id: string;
  userId: string;
  products: CartItem[];
  frequency: 'weekly' | 'biweekly' | 'monthly';
  nextDelivery: Date;
  status: 'active' | 'paused' | 'cancelled';
  discount: number;
}
