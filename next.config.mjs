/** @type {import('next').NextConfig} */
import path from "path";
import fs from "fs";

let redirectsArray = [];
try {
  redirectsArray = JSON.parse(fs.readFileSync("redirects.json", "utf-8"));
} catch (e) {
  console.warn("No redirects.json found, using empty array");
}

const nextConfig = {
  async redirects() {
    return redirectsArray;
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ]
  },
  webpack(config) {
    let hasFound = false

    for (let i = 0; i < config.module.rules.length; i++) {
      const rule = config.module.rules[i]

      if (!rule.oneOf) continue

      rule.oneOf.forEach(one => {
        if (!`${one.issuer?.and}`.includes('_app')) return
        one.issuer.and = [path.resolve()]
        hasFound = true
      })

      if (hasFound) break
    }

    return config;
  },
  rewrites: async () => [
    {
      source: '/store-sitemap.xml',
      destination: '/sitemap/store.js',
    },
    {
      source: '/blog-sitemap.xml',
      destination: '/sitemap/blog.js',
    },
    {
      source: '/gift-card-sitemap.xml',
      destination: '/sitemap/gift-card.js',
    }
  ]
};

export default nextConfig;
