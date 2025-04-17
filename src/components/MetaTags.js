// components/MetaTags.js
import { useEffect, useState } from 'react';
import Head from 'next/head';

const MetaTags = () => {
  const [canonicalUrl, setCanonicalUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { origin, pathname } = window.location;
      const cleanUrl = origin + pathname; // excludes query and hash
      setCanonicalUrl(cleanUrl);
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
