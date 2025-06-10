const baseDomain = 'scoopcost.com'

const toUrl = (data) =>
  `<url><loc>${data.url}</loc></url>`

const createSitemap = (urlList) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${urlList.map(toUrl).join('\n')}
</urlset>`

export async function getServerSideProps({ res }) {
  const urlList = []

  const result = await fetch(
    'https://admin.scoopcost.com/giftcard-page/alphabetical-filter/?paginate=false'
  )
  const json = await result.json()
  const gift_cards =  json

  gift_cards.forEach((gift_card) => {
    if (!gift_card.slug) return

    const url =  `https://${baseDomain}/gift-card/${gift_card.slug}`

    urlList.push({ url })
  })

  const sitemap = createSitemap(urlList)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return { props: {} }
}

// Default export to satisfy Next.js page requirement
export default function SitemapPage() {
  return null
}
