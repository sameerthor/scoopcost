const excludedSlugs = require('./excluded-slugs.json')

module.exports = {
  siteUrl: 'https://scoopcost.com',
  generateRobotsTxt: false,
  exclude: excludedSlugs.map(slug => `/${slug}`),
    generateIndexSitemap: false, // ❌ disables sitemap-index.xml
  additionalSitemaps: ['https://scoopcost.com/store-sitemap.xml','https://scoopcost.com/gift-card-sitemap.xml','https://scoopcost.com/blog-sitemap.xml'],
  transform: async (config, path) => {
    if (excludedSlugs.some(slug => path === `/${slug}` || path.startsWith(`/${slug}/`))) {
      return null
    }
    if (path.startsWith('/gift-card/') && path.startsWith('/coupons/') && path.startsWith('/promo-codes/')) {
      return null;
    }

       let priority = 0.7;

    // ✅ Set higher priority for exact matches
    if (path === '/gift-card' || path === '/coupon/category') {
      priority = 0.9;
    }
    return {
      loc: path,
      changefreq: 'daily',
      priority:priority,
      lastmod: new Date().toISOString(),
    }
  },
}
