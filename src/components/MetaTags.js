// components/MetaTags.js
import { useEffect, useState } from 'react';
import Head from 'next/head';

const MetaTags = () => {
  const [canonicalUrl, setCanonicalUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { origin } = window.location;
      setCanonicalUrl(origin); // Only the domain + subdomain, no path/query/hash
    }
  }, []);

  if (!canonicalUrl) return null;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:url" content={canonicalUrl} />
    </Head>
  );
};

export default MetaTags;
