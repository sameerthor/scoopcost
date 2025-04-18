import MainDomainLink from '@/components/MainDomainLink';
import MetaTags from '@/components/MetaTags';
import Head from 'next/head';
import Coupon from '../components/coupon';
import "@/styles/store.css";
import moment from 'moment';
import dynamic from "next/dynamic";
import { formatDistanceToNow } from "date-fns";
import { useState, useEffect } from 'react'
import Image from 'next/image';

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
  }

  return "";
};

const calculateCoupons = (store) => {
  if (!store.Coupons || !Array.isArray(store.Coupons)) return "";

  const deals = store.Coupons.filter(coupon => coupon.coupon_type === "Sale").length;
  const codes = store.Coupons.filter(coupon => coupon.coupon_code && coupon.coupon_code.trim() !== "").length;

  let result = [];
  if (deals > 0) result.push(`${deals} deal${deals > 1 ? 's' : ''}`);
  if (codes > 0) result.push(`${codes} code${codes > 1 ? 's' : ''}`);



  return result.join(" & ");
};
export default function StorePage({ store, relatedStores }) {
  const storeDescription = store.data.store_description;
  const paragraphs = storeDescription.split("</p>");
  const [activeCouponsType, setActiveCouponsType] = useState("All");
  const [screenshotURL, setScreenshotURL] = useState("");

  const totalOffers = store.data.Coupons.length;
  const activeCoupons = store.data.Coupons.filter(
    (coupon) => coupon.coupon_type === "Code"
  ).length;
  const freeShipping = store.data.Coupons.some((coupon) =>
    coupon.Title.toLowerCase().includes("free shipping")
  )
    ? 1
    : 0;
  const bestOffer = store.data.Coupons.reduce((best, coupon) => {
    const match = coupon.Title.match(/(\d+)% Off/);
    const discount = match ? parseInt(match[1], 10) : 0;
    return discount > best.discount ? { text: coupon.Title, discount } : best;
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
        "item": "https://coupontix.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `${store.data.Title} coupon code`,
        "item": "https://coupontix.com/"+store.data.Slug
      }
    ]
  }



  const saleEvents = store.data.Coupons.map((coupon) => ({
    "@context": "http://schema.org",
    "@type": "SaleEvent",
    "name": coupon.Title, // Dynamic name based on coupon title
    "description": coupon.Content, // Dynamic description
    "image": `${process.env.NEXT_PUBLIC_IMAGE_URL}/${store.data.store_image?.url}` , // Default or dynamic image
    "url": `https://coupontix.com/${store.data.Slug}#c=${coupon.id}`, // Dynamic URL
    "startDate": "2025-03-10", // Use dynamic start date if available
    "endDate": "2025-06-09", // Use dynamic end date if available
    "performer": { 
      "@type": "Organization", 
      "name": store.data.Title // Static or dynamic performer based on coupon details
    },
    "eventStatus": "http://schema.org/EventScheduled",
    "eventAttendanceMode": "http://schema.org/OnlineEventAttendanceMode",
    "location": { 
      "@type": "VirtualLocation", 
      "url": store.data.home_url
    },
    "offers": {
      "@type": "Offer",
      "availability": "http://schema.org/LimitedAvailability",
      "price": "0", // Adjust dynamically if needed
      "priceCurrency": "USD",
      "validFrom": "2025-03-10",
      "url": `https://coupontix.com/${store.data.Slug}`
    }
  }));
  
  return (
    <>
      <Head>
        <title>{store.data.seo.metaTitle}</title>
        <meta name="description" content={store.data.seo.metaDescription} />
        <meta name="twitter:title" content={store.data.seo.metaTitle} />
        <meta name="twitter:description" content={store.data.seo.metaDescription} />
        <meta property="og:title" content={store.data.seo.metaTitle} />
        <meta property="article:section" content={store.data.seo.metaDescription} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        {saleEvents.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </Head>
      <MetaTags />
      <section>
        <div className="container">
          <div className="affiDisc">
            <p>coupontix may earn a commission when you use coupons on this page. <MainDomainLink href="/affiliate-disclosure">Read our affiliate disclosure.</MainDomainLink></p>
          </div>
          <div className="breadcrumb">
            <ul>
              <li><MainDomainLink href="/">coupontix.com</MainDomainLink> &gt;</li>
              <li>{store.data.Title} coupon code</li>
            </ul>
            <div className="storeCat">
              <MainDomainLink href={`/category/${store.data.store_category.Slug}`}>{store.data.store_category.Title}</MainDomainLink>
            </div>
          </div>
        </div>
      </section>
      <section className='storeContent'>
        <div className="container">
          <div className="couponsection">
            <div className="contentBox">
              <div className="storeHeader row row-cols-2">
                <div className="header-content col-8 p-0">
                  <h1>{store.data.store_h1}</h1>
                  <p className="dealAvl">{calculateCoupons(store.data)}</p>
                  <p>Flat {getHeading(store.data.Coupons[0].Title)} at {store.data.Title}</p>
                </div>
                <aside className="col-4 p-0">
                  <div className="header-thumb">
                    <div className="header-store-thumb">
                      <a rel="nofollow" target="_blank" title={store.data.Title} href={store.data.affiliate_url}>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${store?.data?.store_image?.url}`}
                          alt={`${store.data.Title} Store Logo`}
                          width={128}
                          height={128}
                          className="attachment-wpcoupon_small_thumb size-wpcoupon_small_thumb"
                          loading="lazy"
                        />
                      </a>
                    </div>
                    <div className="star-rating stars">
                      <RatingBox key={'store_' + store.id} store_id={store.data.id} store_title={store.data.Title} />
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="couponSection">
        <div className="container">
          <div className="row">
            <div className="p-0">

              <div className="store-listing listCoupns">
                {store.data.Coupons
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
                      storeImage={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${store.data.store_image?.url}`}
                      storeName={store.data.Title}
                      affiliateUrl={store.data.affiliate_url}
                      homeUrl={store.data.home_url}
                      storeSlug={store.data.Slug}
                      storeId={store.data.id}
                      storeCreateTime={store.data.createdAt}
                      usesSubdomain={store.data.uses_subdomain}
                    />
                  ))
                }
              </div>

              {store.data.Coupons.some(coupon => coupon.screenshot && coupon.screenshot.url && coupon.coupon_type === "Code") && (
                <div className="testHistory">
                  <div className="sidebarHeading">{store.data.Title} Coupon Code Test History</div>
                  <p>Check verified proof of manual testing for {store.data.Title}</p>
                  <div className="row">
                    {store.data.Coupons
                      .filter(coupon => coupon.coupon_type === "Code")
                      .map((coupon) => (
                        coupon?.screenshot && (
                          <div key={coupon.id} className="col-md-6 mb-1 p-1">
                            <div className="historyItem">
                              <div className="historyHeader">
                                <span>{getHeading(coupon.Title)}</span>
                                <span className="code">{coupon.coupon_code || "No Code"}</span>
                                <span>
                                  {coupon.last_used_at && !isNaN(coupon.last_used_at)
                                    ? `Used ${formatDistanceToNow(new Date(Number(coupon.last_used_at)), { addSuffix: true })}`
                                    : ""}
                                </span>
                              </div>
                              <div className="historyImg">
                                <a
                                  href="javascript:void(0)"
                                  onClick={() =>
                                    setScreenshotURL(`${process.env.NEXT_PUBLIC_IMAGE_URL}${coupon.screenshot?.url}`)
                                  }
                                  data-bs-toggle="modal"
                                  data-bs-target="#maximizeImage"
                                >
                                  <Image
                                    src={
                                      coupon?.screenshot?.formats?.medium?.url
                                        ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${coupon.screenshot.formats.medium.url}`
                                        : "/images/history-img.webp"
                                    }
                                    alt={coupon.Title || "Coupon Image"}
                                    width={400}
                                    height={250}
                                    loading="lazy"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        )
                      ))}

                  </div>
                </div>

              )}

              <div className='about-store'>
                <div className="sidebarHeading">About {store.data.Title}</div>
                <div dangerouslySetInnerHTML={{ __html: paragraphs[0] + "</p>" }} />
              </div>
              <div className="offerToday">
                <div className='sidebarHeading'>Today's Offer for {store.data.Title}</div>
                <table>
                  <tbody>
                    <tr>
                      <td className="p-2">🛍️ Total Offers</td>
                      <td className="p-2 text-right font-medium">{totalOffers}</td>
                    </tr>
                    <tr>
                      <td className="p-2">🏷️ Active Coupon Codes</td>
                      <td className="p-2 text-right font-medium">{activeCoupons}</td>
                    </tr>
                    <tr>
                      <td className="p-2">🛒 Free Shipping</td>
                      <td className="p-2 text-right font-medium">{freeShipping}</td>
                    </tr>
                    <tr>
                      <td className="p-2">🔥 Best Offer</td>
                      <td className="p-2 text-right font-medium">{bestOffer}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='about-store'>
                <div dangerouslySetInnerHTML={{ __html: paragraphs.slice(1).join("</p>") }} />
              </div>
              <div className="faq-section" dangerouslySetInnerHTML={{ __html: store.data.extra_info }}>

              </div>
              <div className="couponOffer summary-container">
                <div class="sidebarHeading">Coupon Summary for {store.data.Title}</div>
                <table border="1" cellspacing="0" cellpadding="0">
                  <thead>
                    <tr>
                      <th width="20%">Deal</th>
                      <th width="60%">Title</th>
                      <th width="20%">Coupon</th>
                    </tr>
                  </thead>
                  <tbody>
                    {store.data.Coupons.map((coupon) => {
                      const dealMatch = coupon.Title.match(/(\d+% Off)/);
                      const dealText = dealMatch ? dealMatch[0] : "Special Offer";
                      return (
                        <tr key={coupon.id} className="border">
                          <td className="p-2 border text-center"><span className='deal-badge'>{dealText}</span></td>
                          <td className="p-2 border">{coupon.Title}</td>
                          <td className="p-2 border">
                            {coupon.coupon_code ? (
                              <span className='coupon-code'>
                                {coupon.coupon_code}
                              </span>
                            ) : (
                              <span className='hot-deal'>Hot Deal 🔥</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {store.data.Contact != "" &&
                <div className="contactBox">
                  <div class="sidebarHeading">Contact {store.data.Title}</div>
                  <p>{store.data.Contact}</p>
                </div>
              }

              {relatedStores.slice(2).length > 0 && (
                <div className="topStore mb-4">
                  <div className="sidebarHeading">Related Stores for {store.data.Title}</div>
                  <ul>
                    {relatedStores.slice(2).map((store, index) => (
                      <li key={index}>
                        <MainDomainLink
                          href={
                            store.uses_subdomain
                              ? `https://${store.Slug}.coupontix.com`
                              : `/${store.Slug}-coupons`
                          }
                        >
                          {store.Title}
                        </MainDomainLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}


              {/* comment */}
              <div className="comment-box">
                <div id="showComment">
                  <button onClick={toggleCommentBox} className="btn btn-primary">
                    {showCommentBox ? 'Hide Comment Box' : 'Leave a Comment'}
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

              <section className="whyTrustus">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className='sidebarHeading text-center'>Why Trust Us?</div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="founder">
                          <div className="img">
                            <Image
                              src="/images/co-founder.webp"
                              alt="founder"
                              height={60}
                              width={60}
                              quality={10} // Low quality for fast loading
                              loading="lazy" // Lazy load images
                            />
                          </div>
                          <div className="name">
                            <p>Rudresh <a href="https://www.linkedin.com/in/rudreh-dubey-86426b1a2/" target="_blank" title="Connect on LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" fill="#0077B5"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a></p>
                            <span>Founder &amp; CEO coupontix.com</span>
                          </div>
                        </div>
                        <div className="founderNote">
                          <p>
                            Rudresh Dubey is an experienced affiliate marketer having more than ten years experience in digital marketing, specializing in coupons industry. As the founder of coupontix.com, he has built a reliable platform that provides fully tested and verified coupon codes. His journey in affiliate marketing began a decade ago with the goal of helping customers save money while shopping online. <MainDomainLink href="/">coupontix.com</MainDomainLink> has transformed that vision into a thriving business that helps shoppers worldwide.
                          </p>
                          <p>
                            Rudresh’s approach to affiliate marketing sets him apart in the competitive coupon market. His expertise in understanding consumer needs helps keep the platform user-friendly and relevant. We have a team of coupon experts who select the best discount codes in different product categories from fashion and electronics to travel and software. By offering only the genuine and working coupons, <MainDomainLink href="/">coupontix.com</MainDomainLink> has become a go-to destination for online shoppers.
                          </p>

                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="ourExpert">
                          <div className='expHead'>Meet Coupon  Experts</div>
                          <div className="expertPara">
                            <p>
                              With an efficient coupon team of 6 people, Coupontix put the right effort to share updated and verified coupon codes. Our team reviews and coupons regularly. We have put a comment section on each coupon page. If a coupon doesn't work, the team makes sure to find the right coupon and also try to improve the services.

                            </p>
                            <p>
                              If you notice anything that isn’t right, you can report the issue to us, and we’ll address it promptly.
                            </p>

                          </div>
                          <div className="listExpert">
                            <ul>
                              <li>
                                <small>
                                  <Image
                                    src="/images/dinesh-v.webp"
                                    alt="expert"
                                    height={30}
                                    width={30}
                                    quality={10} // Low quality for fast loading
                                    loading="lazy" // Lazy load images
                                  />
                                  Dinesh
                                </small>
                                <span className="exp">8 Years Experience</span>
                              </li>
                              <li>
                                <small>
                                  <Image
                                    src="/images/mashma-m.webp"
                                    alt="expert"
                                    height={30}
                                    width={30}
                                    quality={10}
                                    loading="lazy"
                                  />
                                  Mashma
                                </small>
                                <span className="exp">6 Years Experience</span>
                              </li>
                              <li>
                                <small>
                                  <Image
                                    src="/images/tanay-s.webp"
                                    alt="expert"
                                    height={30}
                                    width={30}
                                    quality={10}
                                    loading="lazy"
                                  />
                                  Tanay
                                </small>
                                <span className="exp">6 Years Experience</span>
                              </li>
                              <li>
                                <small>
                                  <Image
                                    src="/images/sikha.webp"
                                    alt="expert"
                                    height={30}
                                    width={30}
                                    quality={10}
                                    loading="lazy"
                                  />
                                  Sikha
                                </small>
                                <span className="exp">5 Years Experience</span>
                              </li>
                              <li>
                                <small>
                                  <Image
                                    src="/images/yash-c.webp"
                                    alt="expert"
                                    height={30}
                                    width={30}
                                    quality={10}
                                    loading="lazy"
                                  />
                                  Yash
                                </small>
                                <span className="exp">4 Years Experience</span>
                              </li>
                              <li>
                                <small>
                                  <Image
                                    src="/images/yunush.webp"
                                    alt="expert"
                                    height={30}
                                    width={30}
                                    quality={10}
                                    loading="lazy"
                                  />
                                  Yusuf
                                </small>
                                <span className="exp">3 Years Experience</span>
                              </li>
                            </ul>
                          </div>
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
  const res = await fetch('https://admin.coupontix.com/api/stores');
  const stores = await res.json();

  const paths = stores.data.map(store => ({
    params: { slug: store.Slug },
  }));

  return { paths, fallback: "blocking" };
}


export async function getStaticProps({ params }) {

  const slug = params.slug || req.headers.get('host')?.split('.')[0];

  // 1. Fetch the current store by slug
  const storeRes = await fetch(
    `https://admin.coupontix.com/api/stores/${slug}`
  );
  const storeData = await storeRes.json();

  const store = storeData.data // Get the first (and only) store matching the slug
  
  if (!store) {
    return {
      notFound: true,
    };
  }

    
  // 2. If store exists, fetch related stores from the same category
  var relatedStores = [];
  if (store && store.store_category) {
    const categoryId = store.store_category.id;
    const relatedRes = await fetch(
      `https://admin.coupontix.com/api/stores?filters[store_category][id][$eq]=${categoryId}&fields[0]=Title&fields[1]=Slug&fields[2]=uses_subdomain&pagination[limit]=4&filters[Slug][$not]=${params.slug}`
    );
    const relatedData = await relatedRes.json();
    relatedStores = relatedData.data.map(store => ({
      Title: store.Title,
      Slug: store.Slug,
      uses_subdomain: store.uses_subdomain
    }));
  }

  // 3. Process the store data with your replacement logic
  if (store) {
    // Get related store links (limit to 2, exclude current store)
    const baseDomain = 'coupontix.com'

    const store_names = relatedStores
      .filter(f => f.id !== store.id)
      .slice(0, 2)
      .map(item => {
        const href = item.uses_subdomain
          ? `https://${item.Slug}.${baseDomain}`
          : `/${item.Slug}`
        return `<a href="${href}">${item.Title}</a>`
      })

    // Get first coupon code (if exists)
    const firstCouponCode = store.Coupons?.filter(x => x.coupon_type === 'Code')[0]?.coupon_code || "";
    const firstCouponTitle = store.Coupons[0]?.Title || "";
    let perc;

    // Try to extract the percentage from the first coupon title
    if (firstCouponTitle) {
      const match = firstCouponTitle.match(/(\d+)%/);
      perc = match ? match[1] : null;  // If a match is found, use it; otherwise, set to null
    }

    // Fallback to the last coupon if the first one doesn't have a percentage
    if (perc === null && store.Coupons.length > 0) {
      const lastCouponTitle = store.Coupons[store.Coupons.length - 1]?.Title || "";
      const lastMatch = lastCouponTitle.match(/(\d+)%/);
      perc = lastMatch ? lastMatch[1] : '30';  // Default to '30%' if no percentage is found
    }
    // Process store description
    if (store.store_description) {
      storeData.data.store_description = store.store_description
        .replaceAll("%%storename%%", store.Title)
        .replaceAll("%percentage% off", perc + "% Off")
        .replaceAll("%percentage% off", perc + "% Off")
        .replaceAll("%percentage% Off", perc + "% Off")
        .replaceAll("%percentage% Off", perc + "% Off")
        .replaceAll("%percentage% OFF", perc + "% Off")
        .replaceAll("%percentage% OFF", perc + "% Off")
        .replaceAll("%percentage%", perc + "%")
        .replaceAll("%percentage%", perc + "%")
        .replace(/XXX/g, firstCouponCode)
        .replace(/XX/g, store.Coupons?.length || 0)
        .replaceAll("%%currentmonth%%", moment().format('MMMM'))
        .replaceAll("%%currentmonth%%", moment().format('MMMM'))
        .replaceAll("%%currentyear%%", moment().format('YYYY'))
        .replaceAll("currentyear%%", moment().format('YYYY'))
        .replaceAll(
          /%%categorystore%% and %%categorystore%%|%categorystore%, %categorystore%, and %categorystore%|%categorystore%, %categorystore%|%categorystore% and %categorystore%|%%categorystore%%, %%categorystore%%|%categorystore%, %categorystore%, %categorystore%|%categorystore% %categorystore%, %categorystore%|%categorystore% %categorystore% %categorystore%|%categorystore% %categorystore% and %categorystore%/gi,
          store_names.join(", ")
        );
    }

    // Process extra info
    if (store.extra_info) {
      storeData.data.extra_info = store.extra_info
        .replaceAll('XXX', firstCouponCode)
        .replaceAll('XX', store.Coupons?.length || 0);
    }

    if (store.store_h1) {
      storeData.data.store_h1 = store.store_h1
        .replace(/Storename/g, store.Title)
        .replace(/XXX/g, firstCouponCode)
        .replace(/CouponCount/g, store.Coupons?.length)
        .replace(/%percentage%/g, perc + "%")
        .replace(/%%Year%%/g, moment().format('YYYY'))
        .replace(/\d{4}/, moment().format('YYYY')); // Replace any 4-digit year
    }

    // Process SEO metaTitle
    if (store.seo?.metaTitle) {
      const hasCouponCode = !!firstCouponCode;

      let metaTitle = store.seo.metaTitle
        .replace(/Storename/g, store.Title)
        .replace(/XXX/g, hasCouponCode ? firstCouponCode : moment().format('YYYY'))
        .replace(/CouponCount/g, store.Coupons?.length)
        .replace(/%percentage%/g, perc + "%")
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

      storeData.data.seo.metaTitle = metaTitle;
    }

    // Process SEO metaTitle
    if (store.seo?.metaDescription) {
      storeData.data.seo.metaDescription = store.seo.metaDescription
        .replace(/Storename/g, store.Title)
        .replace(/XXX/g, firstCouponCode)
        .replace(/CouponCount/g, store.Coupons?.length)
        .replace(/%percentage%/g, perc + "%")
        .replace(/%%Year%%/g, moment().format('YYYY'))
        .replace(/\d{4}/, moment().format('YYYY')); // Replace any 4-digit year
    }

  }
  return {
    props: {
      store: storeData || null,
      relatedStores
    },
    revalidate: 60, // In seconds
  };
}