import MainDomainLink from '@/components/MainDomainLink';
import MetaTags from '@/components/MetaTags';
import Head from 'next/head';
import Coupon from '../components/coupon';
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



export default function StorePage({ store, relStores, addedByData }) {
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
        "item": "https://suproffer.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `${store.title} coupon code`,
        "item": "https://suproffer.com/" + store.slug
      }
    ]
  }



  const saleEvents = store.coupon_set.map((coupon) => ({
    "@context": "http://schema.org",
    "@type": "SaleEvent",
    "name": coupon.title, // Dynamic name based on coupon title
    "description": coupon.Content, // Dynamic description
    "image": `${store.image}`, // Default or dynamic image
    "url": `https://suproffer.com/${store.slug}#c=${coupon.id}`, // Dynamic URL
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
      "url": `https://suproffer.com/${store.slug}`
    }
  }));
  const sectionRef = useRef(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };




  return (
    <>
      <Head>
        <title>{store.seo_title}</title>
        <meta name="description" content={store.seo_description} />
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
      <section>
        <div className="container">
          <div className="affiDisc">
            <p>suproffer may earn a commission when you use coupons on this page. <MainDomainLink href="/affiliate-disclosure">Read our affiliate disclosure.</MainDomainLink></p>
          </div>

        </div>
      </section>
      <section className='storeContent'>
        <ResponsiveRender
        mobile={
          <>
           
          </>
        }
        desktop={
          <>
            <div className='storeHeader topAside'>
              <aside className="">
                <div className="header-thumb">
                  <div className="header-store-thumb">
                    <a rel="nofollow" target="_blank" title={store.title} href={store.affiliate_url}>
                      <Image
                        src={`${store.image}`}
                        alt={`${store.title} Store Logo`}
                        width={128}
                        height={128}
                        className="attachment-wpcoupon_small_thumb size-wpcoupon_small_thumb"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div className="star-rating stars">
                    <RatingBox key={'store_' + store.id} store={store} />
                  </div>
                </div>
              </aside>
              <div className='offersnipet'>
                <div className="offerToday">
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
                <div className='about-store'>
                  <div dangerouslySetInnerHTML={{ __html: paragraphs.slice(1).join("</p>") }} />
                </div>
                <div className='strBtns'>
                  <a href={store.affiliate_url} target='_blank'> Visit this Store</a>
                  <button className='readRF' onClick={handleScroll} title='read review'>Read Review &amp; Faqs</button>
                </div>


                {store.contact != "" &&
                  <div className="contactBox">
                    <div class="sidebarHeading">Contact {store.title}</div>
                    <p>{store.contact}</p>
                  </div>
                }

              </div>
            </div>
          </>
        }
      />


        <div className="container">
          <div className="couponsection">
            <div className="contentBox">
              <div className="breadcrumb">
                <ul>
                  <li><MainDomainLink href="/" title='suproffer.com'>suproffer.com</MainDomainLink> &gt;</li>
                  <li>{store.title}</li>
                </ul>
                <div className="storeCat">
                  <MainDomainLink title='categoy page' href={`/category/${store.category[0].slug}`}>{store.category[0].title}</MainDomainLink>
                </div>
              </div>
              <div className="storeHeader row row-cols-2">
                <div className="header-content col-lg-12 col-8 p-0">
                  <h1>                                        {store.store_h1.replace("%%Year%%", moment().format('YYYY'))}
                  </h1>
                  <p className="dealAvl">{totalOffers} Codes</p>
                  <p>Flat {getHeading(store.coupon_set[0].title)} at {store.title}</p>
                </div>
                <ResponsiveRender
                  mobile={
                    <>
                         <aside className="col-4 regularAside">
                  <div className="header-thumb">
                    <div className="header-store-thumb">
                      <a rel="nofollow" target="_blank" title={store.title} href={store.affiliate_url}>
                        <Image
                          src={`${store.image}`}
                          alt={`${store.title} Store Logo`}
                          width={128}
                          height={128}
                          className="attachment-wpcoupon_small_thumb size-wpcoupon_small_thumb"
                          loading="lazy"
                        />
                      </a>
                    </div>
                    <div className="star-rating stars">
                      <RatingBox key={'store_' + store.id} store={store} />
                    </div>
                  </div>
                         </aside>
                    </>
                  }
                  desktop={
                    <>
                      
                    </>
                  }
                />


              </div>
            </div>
          </div>
          <div className='couponSection couponTop'>
            <div className="store-listing listCoupns">
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
            <section className="couponSection">
              <div className="container">
                <div className="row">
                  <div className="p-0">

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
                    <div className="faq-section" dangerouslySetInnerHTML={{ __html: store.extra_info }}>

                    </div>
                    {/* comment */}
                    <div className="comment-box">
                      <div id="showComment">
                        <button onClick={toggleCommentBox} className="btn btn-primary">
                          {showCommentBox ? 'Hide Review' : 'Leave a review'}
                        </button>
                      </div>
                      {showCommentBox && (
                        <div className="commentbox">
                          <div className="row comment mx-auto">
                            <h3>Let other know how much you saved</h3>
                            <p>
                              Your email address will not be published. Required fields are
                              marked <span>*</span>
                            </p>
                          </div>
                          <div className="row input mx-auto">
                            <form className="d-block" role="post">
                              <label htmlFor="thought" className="d-block">
                                <i className="fa-regular fa-user" /> What's in your mind <span>*</span>
                              </label>
                              <textarea
                                name="thought"
                                id='thought'
                                className="col-sm-12 col-md-10 col-lg-10 d-block"
                                rows={10}
                                placeholder="Input your thought ..."
                                required=""
                                defaultValue={""}
                              />
                              <label htmlFor="name" className="d-block">
                                <i className="fa-regular fa-user" /> Name <span>*</span>
                              </label>
                              <input
                                id="name"
                                name='name'
                                type="text"
                                placeholder="Name"
                                required=""
                                className="col-sm-12 col-md-10 col-lg-10 d-block"
                              />
                              <label htmlFor="email" className="d-block">
                                <i className="fa-regular fa-envelope" /> Email <span>*</span>
                              </label>
                              <input
                                id="email"
                                name='email'
                                type="email"
                                className="col-sm-12 col-md-10 col-lg-10 d-block"
                                placeholder="Enter your email address"
                                required=""
                              />
                              <label htmlFor="url" className="d-block">
                                <i className="fa-solid fa-globe" /> Website
                              </label>
                              <input
                                id="url"
                                name='url'
                                type="text"
                                className="col-sm-12 col-md-10 col-lg-10 d-block"
                                placeholder="website url"
                              />
                              <button type="submit" onclick="">
                                Post Comment
                              </button>
                            </form>
                          </div>
                        </div>
                      )}
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

                    {relStores.slice(2).length > 0 && (
                      <div className="topStore mb-4">
                        <div className="sidebarHeading">Related Stores for {store.title}</div>
                        <ul>
                          {relStores.slice(2).map((store, index) => (
                            <li key={index}>
                              <MainDomainLink
                                href={
                                  store.uses_subdomain
                                    ? `https://${store.slug}.suproffer.com`
                                    : `/${store.slug}-coupons`
                                }
                              >
                                {store.title}
                              </MainDomainLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}




                    <section className="whyTrustus">
                      <div className="container">
                        <div className="sidebarHeading">Why Trust Us?</div>
                        <div className="row g-4">
                          <div className="col-md-12 zeroMobPadding">
                            <div className="card-custom ourExpert">
                              <div className="expHead">Meet Our Coupon Experts</div>
                              <div className="expertPara">
                                <p>
                                  <a href="https://suproffer.com/">Suproffer.com</a> has an efficient team of 6 coupon experts. Their job is to make sure users always get the best and latest offers. Our team focuses on creating a smooth and friendly user experience, so visitors can quickly find the right deals without getting misled. They keep an eye on every code and update the site regularly. We have also put a comment section on each coupon page. If a coupon doesn’t work, the team makes sure to fix the issue and try to improve the services based on user feedback.
                                </p>
                                <p>
                                  If you notice anything that isn’t right on our website, you can report the issue to us and we’ll address it shortly.
                                </p>
                              </div>
                              <div className="listExpert">
                                <ul className='row'>
                                  <div className='col-md-6 zeroMobPadding'>
                                    <li>
                                      <small>
                                        <img src="/images/dinesh-v.webp" alt="dinesh" />
                                        <p>
                                          Dinesh
                                          <span>{addedByData.Dinesh} coupons published</span>
                                        </p>
                                      </small>
                                      <span className="exp">8 Years</span>
                                    </li>
                                  </div>
                                  <div className='col-md-6 zeroMobPadding'>
                                    <li>
                                      <small>
                                        <img src="/images/mashma-m.webp" alt="mashma" />
                                        <p>
                                          Mashma
                                          <span>{addedByData.Mashma} coupons published</span>
                                        </p>
                                      </small>
                                      <span className="exp">6 Years</span>
                                    </li>
                                  </div>
                                  <div className='col-md-6 zeroMobPadding'>
                                    <li>
                                      <small>
                                        <img src="/images/tanay-s.webp" alt="tanay" />
                                        <p>
                                          Tanay
                                          <span>{addedByData.Tanay} coupons published</span>
                                        </p>
                                      </small>
                                      <span className="exp">6 Years</span>
                                    </li>
                                  </div>
                                  <div className='col-md-6 zeroMobPadding'>
                                    <li>
                                      <small>
                                        <img src="/images/sikha.webp" alt="sikha" />
                                        <p>
                                          Sikha
                                          <span>{addedByData.Shikha} coupons published</span>
                                        </p>
                                      </small>
                                      <span className="exp">5 Years</span>
                                    </li>
                                  </div>
                                  <div className='col-md-6 zeroMobPadding'>
                                    <li>
                                      <small>
                                        <img src="/images/yash-c.webp" alt="yash" />
                                        <p>
                                          Yash
                                          <span>{addedByData.Yash} coupons published</span>
                                        </p>
                                      </small>
                                      <span className="exp">4 Years</span>
                                    </li>
                                  </div>
                                  <div className='col-md-6 zeroMobPadding'>
                                    <li>
                                      <small>
                                        <img src="/images/yunush.webp" alt="Yusuf" />
                                        <p>
                                          Yusuf
                                          <span>{addedByData.Yusuf} coupons published</span>
                                        </p>
                                      </small>
                                      <span class="exp">3 Years</span>
                                    </li>
                                  </div>
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
  const res = await fetch('https://admin.suproffer.com/stores/');
  const stores = await res.json();

  const paths = stores.map(store => ({
    params: { slug: store.slug },
  }));

  return { paths, fallback: "blocking" };
}


export async function getStaticProps({ params }) {

  const slug = params.slug || req.headers.get('host')?.split('.')[0];

  const res = await fetch('https://admin.suproffer.com/stores/' + slug + '/')
  var store = await res.json()
  if (store.detail) {
    return {
      notFound: true
    };
  }

  const addedByJson = await fetch(`https://admin.suproffer.com/addedby-stores/`)
  const addedByData = await addedByJson.json()

  store.coupon_set.map(coupon => {
    if (coupon.title.includes("$")) {
      return coupon.title = "Best Deal";
    }
  });

  var simCat = [];
  if (store.category[0]) {
    const resRelStores = await fetch(`https://admin.suproffer.com/stores/?category__id=${store.category[0].id}&ordering=-id`)
    var relStores = await resRelStores.json()
    relStores = relStores.filter((s) => s.id !== store.id);
    relStores = _.shuffle(relStores).slice(0, 12)

  } else {
    var relStores = [];
  }
  const baseDomain = "suproffer.com";
  const store_names = relStores
    .filter(f => f.id !== store.id)
    .slice(0, 2)
    .map(item => `<a href="${item.subdomain ? `https://${item.slug}.${baseDomain}` : `/${item.slug}`}">${item.title}</a>`)
    .join(', ');
  store.store_description = store.store_description.replaceAll("%%storename%%", store.title);
  store.store_description = store.store_description.replaceAll("%pe­rcentage% off", store.coupon_set[0].title);
  store.store_description = store.store_description.replaceAll("%percentage% off", store.coupon_set[0].title);
  store.store_description = store.store_description.replaceAll("%pe­rcentage% Off", store.coupon_set[0].title);
  store.store_description = store.store_description.replaceAll("%percentage% Off", store.coupon_set[0].title);
  store.store_description = store.store_description.replaceAll("%pe­rcentage% OFF", store.coupon_set[0].title);
  store.store_description = store.store_description.replaceAll("%percentage% OFF", store.coupon_set[0].title);
  store.store_description = store.store_description.replaceAll("%pe­rcentage%", store.coupon_set[0].title);
  store.store_description = store.store_description.replaceAll("%percentage%", store.coupon_set[0].title);
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



  const title = store.title || store.Title;
  const firstCouponCode = store.coupon_set?.find(c => c.coupon_type === 'code')?.coupon_code || '';
  const couponCount = store.coupon_set?.length || 0;
  const perc = store.coupon_set?.[0]?.title?.match(/\d+%/)?.[0] || '10%'; // fallback to 10%
  const currentYear = moment().format('YYYY');
  const hasCouponCode = !!firstCouponCode;

  let metaTitle = store.seo_title
    .replace(/Storename/g, store.title)
    .replace(/XXX/g, hasCouponCode ? firstCouponCode : moment().format('YYYY'))
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
    .replace(/%/g, perc)


  store.store_h1 = store.store_h1
    .replace(/Storename/g, title)
    .replace(/XXX/g, firstCouponCode)
    .replace(/CouponCount/g, couponCount)
    .replace(/%percentage%/g, perc)
    .replace(/%%Year%%/g, currentYear)
    .replace(/%/g, perc)


  return {
    props: {
      store,
      relStores,
      addedByData
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}