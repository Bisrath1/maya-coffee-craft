
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title = "Maya Coffee | Premium Coffee Beans, Brewing Gear & Subscriptions",
  description = "Discover premium single-origin coffee beans, ethically sourced and expertly roasted. Free international shipping on orders over $50. Start your coffee subscription today.",
  keywords = "premium coffee, single origin coffee, coffee beans, coffee subscription, brewing equipment, ethical coffee, fresh roasted coffee",
  ogTitle,
  ogDescription,
  ogImage = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=630&fit=crop",
  canonicalUrl
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Maya Coffee",
          "description": description,
          "url": "https://mayacoffee.com",
          "logo": "https://mayacoffee.com/logo.png",
          "sameAs": [
            "https://instagram.com/mayacoffee",
            "https://facebook.com/mayacoffee",
            "https://twitter.com/mayacoffee"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default MetaTags;
