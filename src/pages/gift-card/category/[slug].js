import MainDomainLink from '@/components/MainDomainLink';
import MetaTags from '@/components/MetaTags';
import "@/styles/category.css";
import "@/styles/gift-cat.css";
import Image from 'next/image'
import _ from 'lodash'
import { NextSeo } from 'next-seo';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import arrayShuffle from 'array-shuffle';
import moment from "moment";
const baseDomain = "scoopcost.com"
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
                                    <h1 className='pageH1'> {category.title} Gift Cards 2025</h1>
                                    <div className="divider-line mt-2 mb-2" />
                                    <div className="">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>🛍️ Total Gift Cards</th>
                                                    <td>{category.gift_cards.length}</td>
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
                                                        <MainDomainLink href={`/gift-card/category/${item.slug}`}>{item.title}</MainDomainLink>
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

                            {category.gift_cards?.map((gift_card, index) => (
                                <div key={`${gift_card.slug}-${index}`} className="col-lg-4 col-md-6 col-sm-12 p-1 mb-2">
                                    <div className="storeItem">

                                        <div className="storeInfo">
                                            <div className="storeData">
                                                <MainDomainLink
                                                    href={`/gift-card/${gift_card.slug}`}
                                                    className="storeUrl"
                                                >
                                                    {gift_card.store_name}
                                                </MainDomainLink>
                                            </div>

                                            <div className="storeData">
                                                <div className="storeImage">
                                                    <MainDomainLink
                                                        title={gift_card.store_name}
                                                        href={`/gift-card/${gift_card.slug}`}
                                                    >
                                                        <img
                                                            src={gift_card.image || "/images/default-placeholder.png"}
                                                            alt={gift_card.store_name}
                                                            title={`${gift_card.store_name} gift card`}
                                                        />
                                                    </MainDomainLink>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="dealBtnBox">
                                            <MainDomainLink
                                                href={`/gift-card/${gift_card.slug}`}
                                                className="giftCardBtn"
                                            >
                                                <span>Get Gift Card</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z"/>
                                                </svg>
                                            </MainDomainLink>
                                        </div>

                                    </div>
                                </div>
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

    const res = await fetch(`https://admin.scoopcost.com/gift-card-categories/${params.slug}`,{
  headers: {
    'x-api-key': process.env.SECRET_KEY, // must be defined in .env.local
  },
})
    const category = await res.json()
    if (category.detail) {
        return {
            notFound: true
        };
    }

    const resCategories = await fetch(`https://admin.scoopcost.com/gift-card-categories/?ordering=-id&count=true`,{
  headers: {
    'x-api-key': process.env.SECRET_KEY, // must be defined in .env.local
  },
})
    const categories = await resCategories.json()
    return {
        props: {
            category,
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
    const res = await fetch('https://admin.scoopcost.com/categories',{
  headers: {
    'x-api-key': process.env.SECRET_KEY, // must be defined in .env.local
  },
})
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