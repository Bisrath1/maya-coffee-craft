
import React from 'react';
import { Truck } from 'lucide-react';

const TopBanner = () => {
  return (
    <div className="bg-coffee-bean text-coffee-cream py-2 text-center text-sm">
      <div className="container-wide flex items-center justify-center space-x-2">
        <Truck className="h-4 w-4" />
        <span>Free international shipping on orders over $50</span>
      </div>
    </div>
  );
};

export default TopBanner;
