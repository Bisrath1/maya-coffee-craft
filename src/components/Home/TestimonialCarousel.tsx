
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'London, UK',
    rating: 5,
    text: 'The Ethiopian Yirgacheffe is absolutely divine. The floral notes are incredible and the freshness is unmatched. My morning ritual has never been better.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b778?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Miguel Rodriguez',
    location: 'Madrid, Spain',
    rating: 5,
    text: 'Maya Coffee has transformed my home brewing experience. The subscription service is perfect and the quality is consistently exceptional.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Emma Chen',
    location: 'Toronto, Canada',
    rating: 5,
    text: 'I love the ethical sourcing and sustainable practices. Knowing my coffee purchase supports farmers makes every cup even more meaningful.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="display-text mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of coffee lovers who trust Maya Coffee
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center">
            <div className="mb-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            
            <blockquote className="text-xl italic text-coffee-bean mb-6 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="text-center">
              <div className="font-semibold text-coffee-bean">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-muted-foreground">
                {testimonials[currentIndex].location}
              </div>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-accent"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:bg-accent"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
