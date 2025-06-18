import { NextResponse } from 'next/server';
import { LRUCache } from 'lru-cache';

// Configure cache with 1000 item limit and 30-second TTL
const storeCache = new LRUCache({
  max: 1000,
  ttl: 120 * 1000,
});

async function fetchStoreData(identifier) {
  // Check cache first
  const cached = storeCache.get(identifier);
  if (cached) return cached;

  // Fetch fresh data if not in cache
  const res = await fetch(`https://admin.scoopcost.com/stores/${identifier}`, {
    next: { revalidate: 30 } // Optional: Next.js fetch caching
  });

  if (!res.ok) return null;

  const storeData = await res.json();
  storeCache.set(identifier, storeData);
  return storeData;
}

export async function middleware(request) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  const baseDomain = 'scoopcost.com';
  const isMainDomain = host === baseDomain || host === `www.${baseDomain}`;

  // Faster asset detection using regex
  if (/^\/(_next|static|favicon\.ico|.*\..*)/.test(pathname)) {
    return NextResponse.next();
  }

  // 🌐 Main domain logic
  if (isMainDomain) {
    const slug = pathname.split('/')[1];
    if (!slug) return NextResponse.next();

    const storeData = await fetchStoreData(slug);
    if (!storeData) return NextResponse.next();

    if (storeData.subdomain) {
      // SEO-friendly redirect instead of 404
      return NextResponse.rewrite(new URL('/404', request.url));
    }

    return NextResponse.next();
  }

  // 🧭 Subdomain logic
  const subdomain = host.replace(`.${baseDomain}`, '');
  const storeData = await fetchStoreData(subdomain);

  if (!storeData || !storeData.subdomain) {
    // Custom 404 page
    return NextResponse.rewrite(new URL('/404', request.url));
  }

  // ✅ Rewrite to internal path
  url.pathname = `/${subdomain}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!_next|static|favicon.ico|api|_vercel).*)'],
 runtime: 'nodejs'     
};