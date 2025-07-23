
import React from 'react';
import { Instagram } from 'lucide-react';

const instagramImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop',
    alt: 'Coffee beans close-up'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
    alt: 'Pour over coffee brewing'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=400&fit=crop',
    alt: 'Coffee plantation'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
    alt: 'Coffee roasting process'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=400&fit=crop',
    alt: 'Coffee cup on wooden table'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=400&h=400&fit=crop',
    alt: 'Latte art'
  }
];

const InstagramFeed = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Instagram className="h-6 w-6 text-primary" />
            <h2 className="display-text">@mayacoffee</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Follow our coffee journey on Instagram
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {instagramImages.map((image) => (
            <div key={image.id} className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a
            href="https://instagram.com/mayacoffee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span className="font-medium">Follow @mayacoffee</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
