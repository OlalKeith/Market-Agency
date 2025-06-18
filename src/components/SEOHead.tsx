// src/components/SEOHead.tsx
import React, { useEffect } from 'react';

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
  const siteUrl = 'https://abovethelinemarketing.com';
  const fullTitle = `${title} | Above The Line Marketing`;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Helper function to set or update meta tags
    const setMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, property);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Set or update link tags
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      
      link.setAttribute('href', href);
    };

    // Set or update script tags
    const setStructuredData = (data: object) => {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      
      script.textContent = JSON.stringify(data);
    };

    // Basic meta tags
    setMetaTag('description', description);
    if (keywords) setMetaTag('keywords', keywords);
    setMetaTag('robots', 'index, follow');
    setMetaTag('author', 'Above The Line Marketing');
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', `${siteUrl}${ogImage}`, true);
    setMetaTag('og:url', `${siteUrl}${canonicalUrl || ''}`, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:site_name', 'Above The Line Marketing', true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', `${siteUrl}${ogImage}`);

    // Canonical URL
    if (canonicalUrl) {
      setLinkTag('canonical', `${siteUrl}${canonicalUrl}`);
    }

    // Structured Data
    setStructuredData({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Above The Line Marketing",
      "url": siteUrl,
      "description": description,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+254723629102",
        "contactType": "Customer Service"
      }
    });

  }, [title, description, keywords, ogImage, canonicalUrl, fullTitle, siteUrl]);

  // This component doesn't render anything visible
  return null;
};

export default SEOHead;