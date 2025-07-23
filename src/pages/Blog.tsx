
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import MetaTags from '@/components/SEO/MetaTags';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Perfect Pour Over: A Step-by-Step Guide",
      excerpt: "Master the art of pour over coffee with our comprehensive guide. Learn the techniques that will transform your morning routine.",
      category: "Brew Tips",
      author: "Maya Coffee Team",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Single Origin vs. Blends: Which Should You Choose?",
      excerpt: "Discover the differences between single origin and blend coffees, and learn which might be perfect for your taste preferences.",
      category: "Coffee Origins",
      author: "Sarah Johnson",
      date: "2024-01-12",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "5 Delicious Coffee Cocktail Recipes",
      excerpt: "Elevate your coffee experience with these creative cocktail recipes that combine premium coffee with spirits and mixers.",
      category: "Recipes",
      author: "Mike Chen",
      date: "2024-01-10",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "The Journey from Bean to Cup: Ethiopian Coffee Origins",
      excerpt: "Explore the birthplace of coffee and discover what makes Ethiopian beans so special in our origin spotlight series.",
      category: "Coffee Origins",
      author: "Elena Rodriguez",
      date: "2024-01-08",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Cold Brew vs. Iced Coffee: What's the Difference?",
      excerpt: "Learn the key differences between cold brew and iced coffee, including brewing methods and flavor profiles.",
      category: "Brew Tips",
      author: "David Park",
      date: "2024-01-05",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Sustainable Coffee: How We're Making a Difference",
      excerpt: "Discover our commitment to sustainable coffee farming and how your purchase helps support coffee-growing communities.",
      category: "Sustainability",
      author: "Maya Coffee Team",
      date: "2024-01-03",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop",
      readTime: "8 min read"
    }
  ];

  const categories = ["All", "Brew Tips", "Coffee Origins", "Recipes", "Sustainability"];

  return (
    <div className="min-h-screen bg-background">
      <MetaTags 
        title="Coffee Blog | Maya Coffee - Brew Tips, Origins & Recipes"
        description="Discover expert brewing guides, coffee origin stories, and delicious recipes. Learn from coffee professionals and enhance your coffee journey."
        keywords="coffee blog, brewing tips, coffee origins, coffee recipes, coffee guides"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-coffee-bean to-coffee-roasted text-white py-20">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              The Maya Coffee Journal
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover the stories behind your favorite coffee, brewing techniques, and recipes from our expert team
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="container-wide">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="ghost" className="p-0 h-auto">
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-accent">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-4">
              Stay Updated with Coffee Tips
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest brewing guides, origin stories, and coffee tips delivered to your inbox
            </p>
            <Link to="/subscribe">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Subscribe to Newsletter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
