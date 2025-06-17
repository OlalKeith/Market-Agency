// src/components/SEOHead.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  ogImage = '/default-og-image.jpg',
  canonicalUrl
}) => {
  const siteUrl = 'https://abovethelinemarketing.com/';
  const fullTitle = `${title} | Your Brand Agency`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={`${siteUrl}${canonicalUrl}`} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={`${siteUrl}${canonicalUrl || ''}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Your Brand Agency" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Your Brand Agency" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Your Brand Agency",
          "url": siteUrl,
          "description": description,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+254723629102",
            "contactType": "Customer Service"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;