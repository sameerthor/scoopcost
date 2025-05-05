import MainDomainLink from '@/components/MainDomainLink';
import MetaTags from '@/components/MetaTags';
import "@/styles/category.css";
import Image from 'next/image'
import _ from 'lodash'
import { NextSeo } from 'next-seo';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import arrayShuffle from 'array-shuffle';
import moment from "moment";
const baseDomain="suproffer.com"
function Category({ category, stores, categories }) {

    const validImageSrc = (image) =>
        image && (image.startsWith("/") || image.startsWith("http"));

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

    return (
        <>
            <NextSeo
                title={category.meta_title.replaceAll("%%currentyear%%", moment().format('YYYY')) || `${category.title} Coupons`}
                description={category.meta_description.replaceAll("%%currentyear%%", moment().format('YYYY')) || `Best ${category.title} coupons and deals`}
            />
             <MetaTags />
            <section className="categorySection">
                <div className="container">
                    <div className="top-bar-store-bg">
                        <div className="store-bg-1">
                            <div className="row">
                                <div className="col-lg-3 col-md-12 p-0">
                                    <div className="text-center">
                                        <div className="cat-image-box">
                                            <Image
                                                src={validImageSrc(category.image) ? category.image : "/images/default-placeholder.png"}
                                                className="cat-image"
                                                alt={`${category.title} coupons`}
                                                width={200}
                                                height={81}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <h1 className='pageH1'> {category.title} Coupons &amp; Promo Codes 2025</h1>
                                    <div className="divider-line mt-2 mb-2" />
                                    <div className="">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>🛍️ Total Offers</th>
                                                    <td>{stores.reduce((count, store) => count + (store.coupon_set?.length || 0), 0)}</td>
                                                </tr>
                                                <tr>
                                                    <th>🏷️ Coupon Codes</th>
                                                    {/* <td>{stores.reduce((count, store) => count + (store.coupon_set?.filter(x => x.coupon_type === 'code').length || 0), 0)}</td> */}
                                                    <td>{stores.reduce((count, store) => count + (store.coupon_set?.length || 0), 0)}</td>
                                                </tr>
                                                <tr>
                                                    <th>🛒 Free Shipping</th>
                                                    <td>{stores.reduce((count, store) => count + (store.coupon_set?.filter(x => x.title?.toLowerCase().includes("shipping")).length || 0), 0)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className='pageH1'>Similar Categories</div>
                                    <div className="divider-line mt-2 mb-2" />
                                    <div className="similarCat">
                                        <ul>
                                            {categories
                                                .filter(item => item.id !== category.id)
                                                .slice(0, 4)
                                                .map(item => (
                                                    <li key={item.id}>
                                                        <MainDomainLink href={`/category/${item.slug}`}>{item.title}</MainDomainLink>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='catInfo'>
                          <div dangerouslySetInnerHTML={{ __html: category.body }} />
                    </div>
                    <div className="subCatBox">
                        <div className="row">
                            {stores.map((store) => (
                                store.coupon_set?.map((coupon, index) => (
                                    <div key={`${store.id}-${index}`} onClick={()=>localStorage.setItem('copied_code', coupon.id)} className="col-lg-4 col-md-6 col-sm-12 p-1 mb-2">
                                        <div className="storeItem">
                                            <div className="storeInfo">
                                                <div className="storeData">
                                                    <span className="discountValue">{getHeading(coupon.title)}</span>
                                                    <MainDomainLink href={
                                                        (store.subdomain
                                                            ? `https://${store.slug}.${baseDomain}`
                                                            : `/${store.slug}`)+`#code=${index+1}`
                                                    } className="storeUrl">
                                                        {store.title}
                                                    </MainDomainLink>
                                                </div>
                                                <div className="storeData">
                                                    <div className="storeImage">
                                                        <MainDomainLink title={store.title} href={
                                                            (store.subdomain
                                                                ? `https://${store.slug}.${baseDomain}`
                                                                : `/${store.slug}`)+`#code=${index+1}`
                                                        }>
                                                            <img
                                                                src={store.image || "/images/default-placeholder.png"}
                                                                alt={coupon.title}
                                                                title={`${store.title} coupons`}
                                                            />
                                                        </MainDomainLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="storeData">
                                                <MainDomainLink href={
                                                    (store.subdomain
                                                        ? `https://${store.slug}.${baseDomain}`
                                                        : `/${store.slug}`)+`#code=${index+1}`
                                                } className="storeName">
                                                    <p dangerouslySetInnerHTML={{ __html: coupon.title }} />
                                                </MainDomainLink>
                                            </div>
                                            <div className="dealBtnBox">
                                                <MainDomainLink className='tNc' href={
                                                        (store.subdomain
                                                            ? `https://${store.slug}.${baseDomain}`
                                                            : `/${store.slug}`)+`#code=${index+1}`
                                                    }  onClick={() => window.open(store.affiliate_url, '_blank', 'noopener,noreferrer')}>
                                                       
                                                        T & C
                                                    </MainDomainLink>

                                                <span className='tNc'>Expires{coupon.expires ? ` On:${coupon.expires}` : ''}</span>
                                                <p className="grabDeal">
                                                    {/* <MainDomainLink href={
                                                        store.subdomain
                                                            ? `https://${store.slug}.${baseDomain}`
                                                            : `/${store.slug}`
                                                    }>
                                                        Get Code
                                                       
                                                    </MainDomainLink> */}
                                                    <MainDomainLink href={
                                                        (store.subdomain
                                                            ? `https://${store.slug}.${baseDomain}`
                                                            : `/${store.slug}`)+`#code=${index+1}`
                                                    } class="angled-button">
                                                        *****************
                                                        <span class="btn-angle">Get Code</span>
                                                    </MainDomainLink>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }) {

    const res = await fetch(`https://admin.suproffer.com/categories/${params.slug}`)
    const category = await res.json()
    if (category.detail) {
        return {
            notFound: true
        };
    }
    const stores = category.store_set.results;

    const resCategories = await fetch(`https://admin.suproffer.com/categories/?ordering=-id`)
    const categoriesData = await resCategories.json()
    const categories = arrayShuffle(categoriesData);
    return {
        props: {
            category,
            stores,
            categories
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 60, // In seconds
    }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
    const res = await fetch('https://admin.suproffer.com/categories')
    const categories = await res.json()

    // Get the paths we want to pre-render based on categories
    const paths = categories.map((item) => ({
        params: { slug: item.slug },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
}

export default Category;