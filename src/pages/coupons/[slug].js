import MainDomainLink from '@/components/MainDomainLink';
import MetaTags from '@/components/MetaTags';
import Head from 'next/head';
import Coupon from '../../components/coupon';
import ResponsiveRender from '@/components/ResponsiveRender';
import _ from 'lodash'
import "@/styles/store.css";
import moment from 'moment';
import dynamic from "next/dynamic";
import { formatDistanceToNow } from "date-fns";
import { useState, useEffect } from 'react'
import Image from 'next/image';
import { useRef } from 'react';


const RatingBox = dynamic(() => import('@/components/ratingbox'),
  {
    ssr: false,
  });


const getHeading = (title) => {
  if (!title) return "";

  // Check for percentage discount (e.g., "40% OFF")
  const percentMatch = title.match(/(\d+)%/);
  if (percentMatch) {
    return `${percentMatch[1]}% OFF`;
  }

  // Check for dollar discount (e.g., "$40 OFF")
  const dollarMatch = title.match(/\$(\d+)/);
  if (dollarMatch) {
    return `$${dollarMatch[1]} OFF`;
  }

  // Check for "Free Shipping"
  if (/free shipping/i.test(title)) {
    return "Free Shipping";
  } else {
    return "Offer";
  }

  return "";
};



function getSuccessLevel(coupons) {
  const total = coupons.length;
  const worked = coupons.filter(c => c.is_worked === "True").length;
  const failed = coupons.filter(c => c.is_worked === "False").length;
  const notSpecified = coupons.filter(c => !c.is_worked).length;

  if (worked > 0 && failed === 0 && notSpecified > 0) return "Very High";
  if (failed > 0 && worked === 0 && notSpecified > 0) return "Very Low";
  if (worked === 0 && failed === 0) return "Very High";
  if (worked > 0 && (failed > 0 || notSpecified > 0)) return "Moderate";
  return "Moderate";
}
const getSuccessButtonClass = (level) => {
  const cls = level.toLowerCase().replace(" ", "");
  if (cls === "veryhigh") return "bg-green";
  if (cls === "verylow") return "bg-red";
  return "bg-orange";
};



export default function StorePage({ store, relStores, addedByData, faqs }) {

  const storeDescription = store.store_description;
  const paragraphs = storeDescription.split("</p>");
  const [activeCouponsType, setActiveCouponsType] = useState("All");
  const [screenshotURL, setScreenshotURL] = useState("");

  const totalOffers = store.coupon_set.length;
  const activeCoupons = store.coupon_set.filter(
    (coupon) => coupon.coupon_type === "code"
  ).length;
  const freeShipping = store.coupon_set.some((coupon) =>
    coupon.title.toLowerCase().includes("free shipping")
  )
    ? 1
    : 0;
  const bestOffer = store.coupon_set.reduce((best, coupon) => {
    const match = coupon.title.match(/(\d+)% Off/);
    const discount = match ? parseInt(match[1], 10) : 0;
    return discount > best.discount ? { text: coupon.title, discount } : best;
  }, { text: "No Offer", discount: 0 }).text;
  const [showCommentBox, setShowCommentBox] = useState(false);
  const toggleCommentBox = () => {
    setShowCommentBox(!showCommentBox);
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://scoopcost.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `${store.title} coupon code`,
        "item": "https://scoopcost.com/" + store.slug
      }
    ]
  }



  const saleEvents = store.coupon_set.map((coupon) => ({
    "@context": "http://schema.org",
    "@type": "SaleEvent",
    "name": coupon.title, // Dynamic name based on coupon title
    "description": coupon.Content, // Dynamic description
    "image": `${store.image}`, // Default or dynamic image
    "url": `https://scoopcost.com/${store.slug}#c=${coupon.id}`, // Dynamic URL
    "startDate": "2025-03-10", // Use dynamic start date if available
    "endDate": "2025-06-09", // Use dynamic end date if available
    "performer": {
      "@type": "Organization",
      "name": store.title // Static or dynamic performer based on coupon details
    },
    "eventStatus": "http://schema.org/EventScheduled",
    "eventAttendanceMode": "http://schema.org/OnlineEventAttendanceMode",
    "location": {
      "@type": "VirtualLocation",
      "url": store.home_url
    },
    "offers": {
      "@type": "Offer",
      "availability": "http://schema.org/LimitedAvailability",
      "price": "0", // Adjust dynamically if needed
      "priceCurrency": "USD",
      "validFrom": "2025-03-10",
      "url": `https://scoopcost.com/${store.slug}`
    }
  }));
  const sectionRef = useRef(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const imageSrc = store?.image ? store.image : '/default-placeholder.webp';

 const [activeButton, setActiveButton] = useState('all'); // active filter btn

  return (
    <>
      <Head>
        <title>{store.seo_title}</title>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="description" content={store.seo_description} />
        <meta name="twitter:title" content={store.seo_title} />
        <meta name="twitter:title" content={store.seo_title} />
        <meta name="twitter:description" content={store.seo_description} />
        <meta property="og:title" content={store.seo_title} />
        <meta property="article:section" content={store.seo_description} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        {saleEvents.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </Head>
      <MetaTags />

      <section className='singleStrPg'>
        <div className="container">
          <div className='row justify-content-center'>
            <ResponsiveRender
              mobile={
                <>

                </>
              }
              desktop={
                <>
                  <aside className="col-lg-4 zeroMobPadding" style={{ maxWidth: '320px' }}>
                    <div className='strLogoBx sidebarSniepet'>
                      <a className="strLogo" rel="nofollow" target="_blank" title={store.title} href={store.affiliate_url}>
                        <div className="logo">
                          <Image
                            src={imageSrc}
                            alt={`${store.title} Store Logo`}
                            width={98}
                            height={98}
                            className="attachment-wpcoupon_small_thumb size-wpcoupon_small_thumb"
                            loading="lazy"
                          />
                        </div>
                        <div className='affiname'>
                          <span> {store.title}</span>
                          <span>
                            <svg

                              viewBox="0 0 15 15"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <g fillRule="nonzero">
                                <path d="M6.249.25a.75.75 0 0 1 0 1.5H4A2.25 2.25 0 0 0 1.75 4v7A2.25 2.25 0 0 0 4 13.25h7A2.25 2.25 0 0 0 13.25 11V8.856a.75.75 0 1 1 1.5 0V11A3.75 3.75 0 0 1 11 14.75H4A3.75 3.75 0 0 1 .25 11V4A3.75 3.75 0 0 1 4 .25h2.249zM14 .25a.75.75 0 0 1 .75.75v4.62a.75.75 0 1 1-1.5 0V1.75H9.494a.75.75 0 0 1-.743-.648L8.745 1a.75.75 0 0 1 .75-.75H14z" />
                                <path d="M13.47.47a.75.75 0 0 1 1.06 1.06l-6.5 6.5a.75.75 0 0 1-1.06-1.06l6.5-6.5z" />
                              </g>
                            </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className='sidebarSniepet'>
                      <div className="offerToday">
                        <table>
                          <tbody>
                            <tr>
                              <td className="p-2">🛍️ Total Offers</td>
                              <td className="p-2 text-right font-medium">{totalOffers}</td>
                            </tr>
                            <tr>
                              <td className="p-2">✅ Coupon Success</td>
                              <td className="p-2 text-right font-medium">
                                {(() => {
                                  const level = getSuccessLevel(store.coupon_set);
                                  const btnClass = getSuccessButtonClass(level);

                                  return (
                                    <span className={`px-3  rounded ${btnClass}`}>
                                      {level}
                                    </span>
                                  );
                                })()}
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2"><span>🏷️</span>Verified Coupon Code</td>
                              <td className="p-2 text-right font-medium">{totalOffers}</td>
                            </tr>

                            <tr>
                              <td className="p-2"><span>🔥</span> Best Offer</td>
                              <td className="p-2 text-right font-medium">{bestOffer}</td>
                            </tr>
                            <tr>
                              <td className="p-2">⏰ Last Updated</td>
                              <td className="p-2 text-right font-medium">{moment().format("MMMM D, YYYY")}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className='about-store'>
                        <div dangerouslySetInnerHTML={{ __html: paragraphs.slice(1).join("</p>") }} />
                      </div>
                    </div>

                    {store.contact &&
                      <div className='sidebarSniepet'>
                        <div className="contactBox">
                          <div class="sidebarHeading">Contact {store.title}</div>
                          <p>{store.contact}</p>
                        </div>
                      </div>
                    }
                    {relStores.slice(2).length > 0 && (
                      <div className='sidebarSniepet'>
                        <div className="topStore mb-4">
                          <div className="sidebarHeading">Related Stores</div>
                          <ul>
                            {relStores.slice(2).map((store, index) => (
                              <li key={index}>
                                <MainDomainLink
                                  href={
                                    store.subdomain
                                      ? `https://${store.slug}.scoopcost.com/${store.url_suffix}`
                                      : `/${store.url_suffix}/${store.slug}`
                                  }
                                >
                                  {store.title}
                                </MainDomainLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </aside>
                </>
              }
            />
            <div className='col-lg-8 zeroMobPadding'>
              <div className="couponArea">
                <div className="breadcrumb">

                  <div className="storeCat">
                    <MainDomainLink title='categoy page' href={`/coupon/category/${store.category[0]?.slug}`}>{store.category[0]?.title}</MainDomainLink>
                  </div>
                </div>
                <ResponsiveRender
                  mobile={
                    <>
                      <div className='strLogoBx sidebarSniepet'>
                        <div className="regularStrLogo">
                          <a className="strLogo" rel="nofollow" target="_blank" title={store.title} href={store.affiliate_url}>
                            <div className="logo">
                              <Image
                                src={imageSrc}
                                alt={`${store.title} Store Logo`}
                                width={128}
                                height={128}
                                className="attachment-wpcoupon_small_thumb size-wpcoupon_small_thumb"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div>
                            <h1> {store.store_h1.replace("%%Year%%", moment().format('YYYY'))}</h1>
                            <p className='promopara'>Apply {store.title} promo code to save.</p>
                          </div>
                        </div>
                      </div>
                    </>
                  }
                  desktop={
                    <>
                        <h1> {store.store_h1.replace("%%Year%%", moment().format('YYYY'))}</h1>
                    </>
                  }
                />
                
                <div className="couponFilter">
                    <div className="fiilterPanel">
                      <button
                        className={activeButton === 'all' ? 'active' : ''}
                        onClick={() => setActiveButton('all')}
                      >
                        All <span className="badge">10</span>
                      </button>

                      <button
                        className={activeButton === 'verified' ? 'active' : ''}
                        onClick={() => setActiveButton('verified')}
                      >
                        Verified <span className="badge">10</span>
                      </button>

                      <button
                        className={activeButton === 'codes' ? 'active' : ''}
                        onClick={() => setActiveButton('codes')}
                      >
                        Codes <span className="badge">10</span>
                      </button>
                    </div>
                  </div>

                <div className="costCoupons">
                  <div className="store-listing">
                    {store.coupon_set
                      .filter(coupon => {
                        if (activeCouponsType === 'All') return true;
                        if (activeCouponsType === 'Code') return coupon.coupon_type === 'Code';
                        if (activeCouponsType === 'Sale') return coupon.coupon_type === 'Sale';
                        return true;
                      })
                      .map((coupon, index) => (
                        <Coupon
                          key={coupon.id}
                          expiryDate={coupon.expiry_date}
                          index={index}
                          coupon={coupon}
                          storeImage={`${store.image}`}
                          storeName={store.title}
                          affiliateUrl={store.affiliate_url}
                          homeUrl={store.home_url}
                          storeSlug={store.slug}
                          storeId={store.id}
                          storeCreateTime={store.createdAt}
                          usesSubdomain={store.subdomain}
                        />
                      ))
                    }
                  </div>
                </div>
              </div>
              {store.coupon_set.some(coupon => coupon.screenshot && coupon.screenshot != "" && coupon.coupon_type === "code") && (
                <div className="testHistory" id="scrollToScreenShot">
                  <div className="sidebarHeading">{store.title} Coupon Code Test History</div>
                  <p>Check verified proof of manual testing for {store.title}</p>
                  <div className="row">
                    {store.coupon_set
                      .filter(coupon => coupon.coupon_type === "code")
                      .map((coupon) => (
                        coupon?.screenshot && (
                          <div key={coupon.id} className="col-md-6 mb-1 p-1">
                            <div className="historyItem">
                              <div className="historyHeader">
                                <span>{getHeading(coupon.title)}</span>
                                <span className="code">{coupon.coupon_code || "No Code"}
                                  <small onClick={() => navigator.clipboard.writeText(coupon.coupon_code)}
                                    style={{ cursor: "pointer", color: "blue", marginLeft: "8px" }}>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                      aria-hidden="true"
                                      focusable="false"
                                      fill='#8e24aa'
                                      width={16}
                                      height={16}
                                    >
                                      <path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z" />
                                    </svg>

                                  </small>
                                </span>
                                <span>
                                  {coupon.last_used_at && !isNaN(coupon.last_used_at)
                                    ? `Used ${formatDistanceToNow(new Date(Number(coupon.last_used_at)), { addSuffix: true })}`
                                    : ""}
                                </span>
                              </div>
                              <div className="historyImg">
                                <button
                                  onClick={() =>
                                    setScreenshotURL(`${coupon.screenshot}`)
                                  }
                                  data-bs-toggle="modal"
                                  data-bs-target="#maximizeImage"
                                >
                                  <Image
                                    src={
                                      coupon?.screenshot
                                        ? `${coupon.screenshot}`
                                        : "/images/history-img.webp"
                                    }
                                    alt={coupon.title || "Coupon Image"}
                                    width={400}
                                    height={250}
                                    loading="lazy"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        )
                      ))}

                  </div>
                </div>

              )}
               <div className="checkOutgift">
                    <a className="promo-card purple-gradient" href=''>
                        <div className="promo-icon">🎁</div>
                        <div className="promo-text">Checkout {store.title} Gift Cards</div>
                        <div className="promo-arrow">→</div>
                    </a>
               </div>

              <div className='about-store' ref={sectionRef}>
                <div className="sidebarHeading ratingHeading">
                  <div>
                    About {store.title}
                  </div>
                  <div className="star-rating stars reviewRatings">
                    <RatingBox key={'store_' + store.id} store={store} />
                  </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: paragraphs[0] + "</p>" }} />
              </div>
              <ResponsiveRender
                mobile={
                  <>
                    <div className="offerToday regularAside">
                      <div className='sidebarHeading'>Today's Offer for {store.title}</div>
                      <table>
                        <tbody>
                          <tr>
                            <td className="p-2">🛍️ Total Offers</td>
                            <td className="p-2 text-right font-medium">{totalOffers}</td>
                          </tr>
                          <tr>
                            <td className="p-2">✅ Coupon Success</td>
                            <td className="p-2 text-right font-medium">
                              {(() => {
                                const level = getSuccessLevel(store.coupon_set);
                                const btnClass = getSuccessButtonClass(level);

                                return (
                                  <span className={`px-3  rounded ${btnClass}`}>
                                    {level}
                                  </span>
                                );
                              })()}
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2"><span>🏷️</span>Verified Coupon Code</td>
                            <td className="p-2 text-right font-medium">{totalOffers}</td>
                          </tr>
                          {/* <tr>
                                <td className="p-2"><span>🏷️</span> Active Coupon Codes</td>
                                <td className="p-2 text-right font-medium">{activeCoupons}</td>
                              </tr> */}
                          {/* <tr>
                                <td className="p-2"><span>🛒</span> Free Shipping</td>
                                <td className="p-2 text-right font-medium">{freeShipping}</td>
                              </tr> */}
                          <tr>
                            <td className="p-2"><span>🔥</span> Best Offer</td>
                            <td className="p-2 text-right font-medium">{bestOffer}</td>
                          </tr>
                          <tr>
                            <td className="p-2">⏰ Last Updated</td>
                            <td className="p-2 text-right font-medium">{moment().format("MMMM D, YYYY")}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className='about-store regularAside'>
                      <div dangerouslySetInnerHTML={{ __html: paragraphs.slice(1).join("</p>") }} />
                    </div>
                  </>
                }
                desktop={
                  <>

                  </>
                }
              />
              {/* <div className="faq-section" dangerouslySetInnerHTML={{ __html: store.extra_info }}>

                        </div> */}
              <div className='faqssec'>
                <div className="container p-0">
                  <h2 className="sidebarHeading ">Faqs for {store.title}</h2>
                  <div className="accordion" id="giftCardFaq">
                    {faqs.map((faq, index) => {
                      const faqId = `faq${index + 1}`;
                      const collapseId = `collapse${index + 1}`;
                      const isFirst = index === 0;

                      return (
                        <div className="accordion-item" key={faqId}>
                          <h2 className="accordion-header" id={faqId}>
                            <button
                              className={`accordion-button ${!isFirst ? 'collapsed' : ''}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#${collapseId}`}
                              aria-expanded={isFirst ? 'true' : 'false'}
                              aria-controls={collapseId}
                            >
                              {faq.question}
                            </button>
                          </h2>
                          <div
                            id={collapseId}
                            className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
                            aria-labelledby={faqId}
                            data-bs-parent="#giftCardFaq"
                          >
                            <div className="accordion-body">{faq.answer}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>

              <div className="couponOffer summary-container">
                <div class="sidebarHeading">Coupon Summary for {store.title}</div>


                <table border="1" cellspacing="0" cellpadding="0">
                  <thead>
                    <tr>
                      <th width="20%">Code</th>
                      <th width="60%">Title</th>
                      {/* <th width="20%">Coupon</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {store.coupon_set.map((coupon) => {
                      const dealMatch = coupon.title.match(/(\d+% Off)/);
                      const dealText = dealMatch ? dealMatch[0] : "Special Offer";
                      return (
                        <tr key={coupon.id} className="border">
                          <td className="p-2 border text-center"><span className='deal-badge'>{dealText}</span></td>
                          <td className="p-2 border">{coupon.title}</td>
                          {/* <td className="p-2 border">
                                      {coupon.coupon_code ? (
                                        <span style={{cursor: 'pointer'}} className='coupon-code'onClick={() => window.open(store.affiliate_url, '_blank', 'noopener,noreferrer')}>
                                          {coupon.coupon_code}
                                        </span>
                                      ) : (
                                        
                                        <button class="angled-button" onClick={() => window.open(store.affiliate_url, '_blank', 'noopener,noreferrer')}>
                                        *****************
                                        <span class="btn-angle">Get Code</span>
                                      </button>
                                      )}
                                    </td> */}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>


              <ResponsiveRender
                mobile={
                  <>
                    {relStores.slice(2).length > 0 && (
                      <div className="topStore mb-4">
                        <div className="sidebarHeading">Related Stores</div>
                        <ul>
                          {relStores.slice(2).map((store, index) => (
                            <li key={index}>
                              <MainDomainLink
                                href={
                                  store.subdomain
                                    ? `https://${store.slug}.scoopcost.com`
                                    : `/${store.slug}`
                                }
                              >
                                {store.title}
                              </MainDomainLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                }
                desktop={
                  <>

                  </>
                }
              />




              <section className="whyTrustus" id='couponExperts'>
                <div className="container">
                  <div className="sidebarHeading">Why Trust Us?</div>
                  <div className="row g-4">
                    <div className="col-md-12 zeroMobPadding">
                      <div className="card-custom ourExpert">
                        <div className="expHead">Meet Our Coupon Experts</div>
                        <div className="expertPara">
                          <p>
                            <a href="https://scoopcost.com/">ScoopCost.com</a> has an efficient team of 6 coupon experts. Their job is to make sure users always get the best and latest offers. Our team focuses on creating a smooth and friendly user experience, so visitors can quickly find the right deals without getting misled. They keep an eye on every code and update the site regularly. We have also put a comment section on each coupon page. If a coupon doesn’t work, the team makes sure to fix the issue and try to improve the services based on user feedback.
                          </p>
                          <p>
                            If you notice anything that isn’t right on our website, you can report the issue to us and we’ll address it shortly.
                          </p>
                        </div>
                        <div className="listExpert">
                          <ul className='row'>
                            <li className='col-md-6 zeroMobPadding'>
                              <div className='li'>
                                <small>
                                  <Image
                                   width={32}
                                   height={32}
                                   src={'/images/dinesh-v.webp'}
                                   loading='lazy'
                                  alt='dinesh'
                                 />
                                  <p>
                                    Dinesh
                                  </p>
                                </small>
                                <span className="exp">8 Years</span>
                              </div>
                            </li>
                            <li className='col-md-6 zeroMobPadding'>
                              <div className='li'>
                                <small>
                                   <Image
                                   width={32}
                                   height={32}
                                   src={'/images/mashma-m.webp'}
                                   loading='lazy'
                                  alt='dinesh'
                                 />
                                 
                                  <p>
                                    Mashma

                                  </p>
                                </small>
                                <span className="exp">6 Years</span>
                              </div>
                            </li>
                            <li className='col-md-6 zeroMobPadding'>
                              <div className='li'>
                                <small>
                                   <Image
                                   width={32}
                                   height={32}
                                   src={'/images/tanay-s.webp'}
                                   loading='lazy'
                                  alt='tanay'
                                 />
                                 
                                  <p>
                                    Tanay

                                  </p>
                                </small>
                                <span className="exp">6 Years</span>
                              </div>
                            </li>
                            <li className='col-md-6 zeroMobPadding'>
                              <div className='li'>
                                <small>
                                   <Image
                                   width={32}
                                   height={32}
                                   src={'/images/sikha.webp'}
                                   loading='lazy'
                                  alt='sikha'
                                 />
                                 
                                  <p>
                                    Sikha

                                  </p>
                                </small>
                                <span className="exp">5 Years</span>
                              </div>
                            </li>
                            <li className='col-md-6 zeroMobPadding'>
                              <div className='li'>
                                <small>
                                   <Image
                                   width={32}
                                   height={32}
                                   src={'/images/yash-c.webp'}
                                   loading='lazy'
                                  alt='yash'
                                 />
                                 
                                  <p>
                                    Yash

                                  </p>
                                </small>
                                <span className="exp">4 Years</span>
                              </div>
                            </li>
                            <li className='col-md-6 zeroMobPadding'>
                              <div className='li'>
                                <small>
                                   <Image
                                   width={32}
                                   height={32}
                                   src={'/images/yunush.webp'}
                                   loading='lazy'
                                  alt='yusuf'
                                 />
                                 
                                  <p>
                                    Yusuf

                                  </p>
                                </small>
                                <span class="exp">3 Years</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>



      {/* moximize Modal  */}
      <div
        className="modal fade maximizeImage"
        id="maximizeImage"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered modal-lg">
          <div className="modal-content">
            {/* <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div> */}
            <div className="modal-body">
              <Image
                src={screenshotURL || "/images/fallback.webp"}
                alt=""
                width={400} // replace with actual width
                height={250} // replace with actual height
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>
      {/* feedback modal */}
      <div
        className="modal fade"
        id="feedbackModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" >
            <div className="modal-header" style={{ justifyContent: "space-between" }}>
              <h5 className="modal-title" id="exampleModalLabel">

              </h5>
              <button
                type="button"
                className="btn btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center">

              <div className="modalCode d-flex align-items-center justify-content-center">
                <span>Thanks for your Feedback </span>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://admin.scoopcost.com/stores/',{
  headers: {
    'x-api-key': process.env.SECRET_KEY, // must be defined in .env.local
  },
});
  const stores = await res.json();

  const paths = stores.map(store => ({
    params: { slug: store.slug },
  }));

  return { paths, fallback: "blocking" };
}


async function parseHtmlToFaqs(htmlString) {
  const { JSDOM } = await import('jsdom');
  const dom = new JSDOM(htmlString);
  const document = dom.window.document;

  const faqs = [];

  const questions = document.querySelectorAll('h4.faq_question');
  const answers = document.querySelectorAll('p.faq_answer');

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i]?.textContent?.trim();
    const answer = answers[i]?.innerHTML?.trim(); // use innerHTML to preserve formatting

    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
}


export async function getStaticProps({ params }) {
  const slug = params.slug || req.headers.get('host')?.split('.')[0];

  const res = await fetch('https://admin.scoopcost.com/stores/' + slug + '/',{
  headers: {
    'x-api-key': process.env.SECRET_KEY, // must be defined in .env.local
  },
})
  var store = await res.json()
  if (store.detail) {
    return {
      notFound: true
    };
  }

  const addedByJson = await fetch(`https://admin.scoopcost.com/addedby-stores/`,{
  headers: {
    'x-api-key': process.env.SECRET_KEY, // must be defined in .env.local
  },
})
  const addedByData = await addedByJson.json()

  store.coupon_set.map(coupon => {
    if (coupon.title.includes("$")) {
      return coupon.title = "Best Deal";
    }
  });

  var simCat = [];
  if (store.category[0]) {
    const resRelStores = await fetch(`https://admin.scoopcost.com/stores/?category__id=${store.category[0].id}&ordering=-id`,{
  headers: {
    'x-api-key': process.env.SECRET_KEY, // must be defined in .env.local
  },
})
    var relStores = await resRelStores.json()
    relStores = relStores.filter((s) => s.id !== store.id);
    relStores = _.shuffle(relStores).slice(0, 12)

  } else {
    var relStores = [];
  }
  const baseDomain = "scoopcost.com";
  const store_names = relStores
    .filter(f => f.id !== store.id)
    .slice(0, 2)
    .map(item => `<a href="${item.subdomain ? `https://${item.slug}.${baseDomain}/${item.url_suffix}` : `/${item.url_suffix}/${item.slug}`}">${item.title}</a>`)
    .join(', ');

  const title = store.title || store.Title;
  const firstCouponCode = store.coupon_set?.find(c => c.coupon_type === 'code')?.coupon_code || '';
  const couponCount = store.coupon_set?.length || 0;
  const perc = store.coupon_set?.[0]?.title?.match(/\d+%/)?.[0] || '10%'; // fallback to 10%
  const currentYear = moment().format('YYYY');
  const hasCouponCode = !!firstCouponCode;

  store.store_description = store.store_description.replaceAll("%%storename%%", store.title);
  store.store_description = store.store_description.replaceAll("%pe­rcentage% off", perc + " off");
  store.store_description = store.store_description.replaceAll("%percentage% off", perc + " off");
  store.store_description = store.store_description.replaceAll("%pe­rcentage% Off", perc + " Off");
  store.store_description = store.store_description.replaceAll("%percentage% Off", perc + " Off");
  store.store_description = store.store_description.replaceAll("%pe­rcentage% OFF", perc + " OFF");
  store.store_description = store.store_description.replaceAll("%percentage% OFF", perc + " OFF");
  store.store_description = store.store_description.replaceAll("%pe­rcentage%", perc);
  store.store_description = store.store_description.replaceAll("%percentage%", perc);
  store.store_description = store.store_description.replace(/XXX/, store.coupon_set.filter(x => x.coupon_type == 'code').length > 0 ? store.coupon_set.filter(x => x.coupon_type == 'code')[0].coupon_code : "");
  store.store_description = store.store_description.replace(/XX/, store.coupon_set.length);
  store.store_description = store.store_description.replace('XXX', store.coupon_set.filter(x => x.coupon_type == 'code').length > 0 ? store.coupon_set.filter(x => x.coupon_type == 'code')[0].coupon_code : "");
  store.store_description = store.store_description.replace('XX', store.coupon_set.length);
  store.extra_info = store.extra_info.replace('XXX', store.coupon_set.filter(x => x.coupon_type == 'code').length > 0 ? store.coupon_set.filter(x => x.coupon_type == 'code')[0].coupon_code : "");
  store.extra_info = store.extra_info.replace('XX', store.coupon_set.length);
  store.store_description = store.store_description.replaceAll("%%currentmonth%%", moment().format('MMMM'));
  store.store_description = store.store_description.replaceAll("%%curre­ntmonth%%", moment().format('MMMM'));
  store.store_description = store.store_description.replaceAll("%%currentyear%%", moment().format('YYYY'));
  store.store_description = store.store_description.replaceAll("currentyear%%", moment().format('YYYY'));
  store.store_description = store.store_description.replaceAll(/%%categorystore%% and %%categorystore%%|%categorystore%, %categorystore%, and %categorystore%|%categorystore%, %categorystore%|%categorystore% and %categorystore%|%%categorystore%%, %%categorystore%%|%categorystore%, %categorystore%, %categorystore%|%categorystore% %categorystore%, %categorystore%|%categorystore% %categorystore% %categorystore%|%categorystore% %categorystore% and %categorystore%/gi, store_names);


  let metaTitle = store.seo_title
    .replace(/Storename/g, store.title)
    .replace(/XXX/g, hasCouponCode ? firstCouponCode : '')
    .replace(/CouponCount/g, store.Coupons?.length)
    .replace(/%percentage%/g, perc)
    .replace(/%%Year%%/g, moment().format('YYYY'))
    .replace(/\d{4}/, moment().format('YYYY'));

  // If no coupon code, replace leading "Code is" or similar phrase
  if (!hasCouponCode) {
    metaTitle = metaTitle.replace(/(\b(?:Coupon )?Code is\b)(?!.*Coupon Code)/i, 'Coupon Code');

  }

  // If title is below 50 characters and doesn't already contain "Discount"
  if (metaTitle.length < 50 && !metaTitle.includes("Discount")) {
    const lastCodeIndex = metaTitle.lastIndexOf("Code");
    if (lastCodeIndex !== -1) {
      metaTitle = metaTitle.substring(0, lastCodeIndex) + "Discount Code" + metaTitle.substring(lastCodeIndex + 4);
    }
  }

  store.seo_title = metaTitle;


  store.seo_description = store.seo_description
    .replace(/Storename/g, title)
    .replace(/XXX/g, firstCouponCode)
    .replace(/CouponCount/g, couponCount)
    .replace(/%percentage%/g, perc)
    .replace(/%%Year%%/g, currentYear)
  if (!hasCouponCode) {
    store.seo_description = store.seo_description.replace(' Apply coupon  to', '');
    store.seo_description = store.seo_description.replace("save", "Save");
    store.seo_description = store.seo_description.replace('Code is ', 'Code available');

  }


  store.store_h1 = store.store_h1
    .replace(/Storename/g, title)
    .replace(/XXX/g, firstCouponCode)
    .replace(/CouponCount/g, couponCount)
    .replace(/%percentage%/g, perc)
    .replace(/%%Year%%/g, currentYear);
  const faqs = await parseHtmlToFaqs(store.extra_info);
  delete store.extra_info
  return {
    props: {
      store,
      relStores,
      addedByData,
      faqs
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}