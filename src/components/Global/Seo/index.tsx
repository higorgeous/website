import Helmet from 'react-helmet';
import React from 'react';
import { websiteConfig } from '@/config';

const SEO: React.FC<any> = (seo) => {
  const { pageTitle, slug, description, image, noindex, nofollow } = seo;

  const pageUrl = `${websiteConfig.siteUrl}/${slug}/`;
  const pageImage = `https:${image.file.url}`;

  const schemaOrgJSONLD = [
    {
      '@context': `http://schema.org`,
      '@type': `WebSite`,
      url: pageUrl,
      name: `${pageTitle} - ${websiteConfig.siteTitle}`,
    },
  ];

  schemaOrgJSONLD.push({
    '@context': `http://schema.org`,
    '@type': `WebPage`,
    url: pageUrl,
    name: `${pageTitle} - ${websiteConfig.siteTitle}`,
  });

  return (
    <Helmet>
      {/* General tags */}
      <meta charSet="utf-8" />
      <html lang={websiteConfig.siteLanguage} />
      <title>
        {pageTitle} - {websiteConfig.siteTitle}
      </title>
      <meta name="image" content={pageImage} />
      <meta name="description" content={description.description} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta
        property="og:title"
        content={`${pageTitle} | ${websiteConfig.siteTitle}`}
      />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:description" content={description.description} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={websiteConfig.twitterHandle} />
      <meta
        name="twitter:title"
        content={`${pageTitle} | ${websiteConfig.siteTitle}`}
      />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:description" content={description.description} />
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
    </Helmet>
  );
};

export default SEO;
