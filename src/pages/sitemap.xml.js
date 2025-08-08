// pages/sitemap.xml.js
import path from 'path';
import fetch from 'node-fetch';

const excludedSlugs = require('../../excluded-slugs.json');

export async function getServerSideProps({ res }) {
    const fs = require('fs'); // ✅ Only require here (on server)
    const baseUrl = 'https://scoopcost.com';

    const walkStaticPages = (dir, basePath = '') => {
        let urls = [];
        const items = fs.readdirSync(dir);

        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                if (item === 'api' || ['store', 'blog', 'gift-card', 'coupon', 'sitemap'].includes(item)) continue;
                urls = urls.concat(walkStaticPages(fullPath, `${basePath}/${item}`));
            } else if (item.endsWith('.js') || item.endsWith('.tsx') || item.endsWith('.ts')) {
                if (
                    item.startsWith('[') ||
                    item === '_app.js' || item === '_document.js' || item === '_error.js'
                ) continue;

                const name = item.replace(/\.(js|ts|tsx)$/, '');
                const route = name === 'index' ? basePath || '/' : `${basePath}/${name}`;
                const cleaned = route.replace(/\/+/g, '/');

                if (excludedSlugs.includes(cleaned.replace(/^\//, ''))) continue;

                urls.push(cleaned);
            }
        }

        return urls;
    };

    const pagesDir = path.join(process.cwd(), '/src/pages');
    const staticPaths = walkStaticPages(pagesDir);

    // 🟢 Fetch category slugs
    let categorySlugs = [];
    let giftCategorySlugs = [];
    try {
        const response = await fetch('https://admin.scoopcost.com/categories', {
            headers: {
                'x-api-key': process.env.SECRET_KEY, // must be defined in .env.local
            },
        })
        const data = await response.json();
        categorySlugs = data.map(cat => `/coupon/category/${cat.slug}`);
    } catch (err) {
        console.error('Failed to fetch categories', err);
    }

     try {
        const response = await fetch('https://admin.scoopcost.com/gift-card-categories', {
            headers: {
                'x-api-key': process.env.SECRET_KEY, // must be defined in .env.local
            },
        })
        const data = await response.json();
        giftCategorySlugs = data.map(cat => `/gift-card/category/${cat.slug}`);
    } catch (err) {
        console.error('Failed to fetch categories', err);
    }

    categorySlugs.push('/coupon/category');
    giftCategorySlugs.push('/gift-card/category')
var allUrls = [
  ...staticPaths,
  ...categorySlugs,
  ...giftCategorySlugs
];

console.log(allUrls);
    const urls = allUrls.map((route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${route.includes('category') ? '1.0' : '0.7'}</priority>
  </url>`).join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
${urls}
</urlset>`;

    res.setHeader('Content-Type', 'text/xml');
    res.write(xml);
    res.end();

    return { props: {} };
}

export default function SitemapXml() {
    return null;
}
