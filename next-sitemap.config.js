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
    if (path.startsWith('/gift-card/')) {
      return null;
    }
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }
  },
}
