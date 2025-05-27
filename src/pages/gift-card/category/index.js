import MainDomainLink from '@/components/MainDomainLink';
import MetaTags from '@/components/MetaTags';
import "@/styles/category.css";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';

function CategoryListing({ categories }) {
    console.log(categories)
    const validImageSrc = (image) => image && (image.startsWith("/") || image.startsWith("http"));

    
    const calculateCouponString = (storeSet) => {
        const allCoupons = storeSet.results.flatMap(store => store.coupon_set);

       
        return allCoupons.length + " Codes";
      };

    return (
        <>
            <NextSeo
                title="Categories 2025"
                description="Browse our Category page to find the latest coupons, promo codes, and deals. Shoppers will save on electronics, fashion, beauty essentials, travel, sports goods, groceries, pet supplies, health products, and more. Use our updated coupon codes to enjoy big discounts on your favorite products & services."
            />
             <MetaTags />
            <section className="categorySection">
                <div className="container">
                    <div className="row">
                        <div className="breadcrumb">
                            <ul>
                                <li><MainDomainLink href="/">scoopcost.com</MainDomainLink> /</li>
                                <li>category</li>
                            </ul>
                        </div>
                    </div>
                    <h1 className='text-center pageH1'>All Categories</h1>
                    <div className='catInfo allcatInfo'>
                         <p>
                         Welcome to our Categories Coupons page! At Suproffer, we bring together the best deals and discount codes across all major categories. From daily essentials to luxury items, we help you enjoy the best prices on your desired products and services. Whether you are upgrading your gadgets, refreshing your wardrobe, or booking your next vacation, Suproffer has handpicked coupon codes that will save you up to 40% Off on your online purchase. 

                         </p>
                         <p>
                         On our website, you will find the top deals on home goods, fashion trends, beauty products, pet supplies, sports goods, toys & games, and more. We provide you with the best online discounts, seasonal sales, limited-time offers, free shipping deals, buy-one-get-one offers, and verified promo codes.
                         </p>
                         <h2>Explore Our Top Categories and Start Saving Today! </h2>
                         <p>
                        <strong> Electronics Coupons & Deals:</strong> Find great discounts on phones, laptops, smartwatches, headphones, speakers, and other high-tech electronics. Upgrade your tech collection without breaking the bank! 
                         </p>
                         <p>
                         <strong>Fashion Deals & Discounts:</strong> Discover the latest offers for clothing, shoes, bags, and accessories for men, women, and kids from the most popular brands.
                         </p>
                         <p>
                         <strong>Beauty Deals:</strong> Treat yourself to skincare, haircare, cosmetics, beauty tools, and makeup products at discounted prices you’ll love.
                         </p>
                         <p>
                         <strong>Health & Fitness Coupons:</strong> Save big on gym equipment, supplements, yoga gear, and other health products that support your active lifestyle.
                         </p>
                         <p>
                         <strong>Home & Kitchen Appliances Offers:</strong> Get huge discounts on small kitchen appliances, cookware, coffee machines, water purifiers, kitchenware, and other home products. Our home essentials coupons help you save a lot of money on your online shopping for top brands.
                         </p>
                         <p>
                         <strong>Restaurants & Travel Coupons:</strong> Get great deals on hotel bookings, flights, car rentals, and vacation packages from travel providers.
                         </p>
                    </div>
                    <div className="row row-cols-2">
                        {categories.map((category, index) => (
                            <div className="col-lg-2 col-md-3 col-sm-4 category-box" key={index}>
                                <div className="category-item">
                                    <div className="cat-img">
                                        <MainDomainLink href={`/gift-card/category/${category.slug}`}>
                                            <Image
                                                width={100}
                                                height={100}
                                                src={category.image ? category.image : "/images/default-placeholder.png"}
                                                alt={(category.title) + " Icon" || "Category Icon" }
                                            />
                                        </MainDomainLink>
                                    </div>
                                    <div className="category-title">
                                        <MainDomainLink href={`/gift-card/category/${category.slug}`}>
                                            {category.title}
                                            <span>{category.gift_cards.count} Gift Cards</span>
                                        </MainDomainLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://admin.scoopcost.com/gift-card-categories/?count=true`);
    const categories = await res.json();

    return {
        props: {
            categories,
        },
        revalidate: 10,
    };
}


export default CategoryListing;
