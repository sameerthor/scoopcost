import MainDomainLink from '@/components/MainDomainLink';
import MetaTags from '@/components/MetaTags';
import "@/styles/category.css";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';

function CategoryListing({ categories }) {
    console.log(categories)
    const validImageSrc = (image) => image && (image.startsWith("/") || image.startsWith("http"));

    const calculateCouponString = (stores) => {
        const allCoupons = stores.flatMap(store => store.Coupons || []);

        const codeCount = allCoupons.filter(coupon => coupon.coupon_type === "Code").length;
        const dealCount = allCoupons.filter(coupon => coupon.coupon_type === "Sale").length;

        const summaryParts = [];
        if (codeCount > 0) summaryParts.push(`${codeCount} ${codeCount > 1 ? 'Codes' : 'Code'}`);
        if (dealCount > 0) summaryParts.push(`${dealCount} ${dealCount > 1 ? 'Deals' : 'Deal'}`);

        return summaryParts.length > 0 ? summaryParts.join(" | ") : ""; 
    };

    return (
        <>
            <NextSeo
                title="Categories 2025"
                description="Get the best online coupons and promo codes at Coupontix. Shoppers will save on electronics, fashion, beauty essentials, travel, sports goods, groceries, pet supplies, health products, and more. Use our latest coupon codes to enjoy big discounts to your favorite products."
            />
             <MetaTags />
            <section className="categorySection">
                <div className="container">
                    <div className="row">
                        <div className="breadcrumb">
                            <ul>
                                <li><MainDomainLink href="/">coupontix.com</MainDomainLink> /</li>
                                <li>category</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row row-cols-2">
                        {categories.map((category, index) => (
                            <div className="col-lg-2 col-md-3 col-sm-4 category-box" key={index}>
                                <div className="category-item">
                                    <div className="cat-img">
                                        <MainDomainLink href={`/category/${category.Slug}`}>
                                            <Image
                                                width={100}
                                                height={100}
                                                src={category.Image?.url ? process.env.NEXT_PUBLIC_IMAGE_URL+category.Image?.url : "/images/default-placeholder.png"}
                                                alt={category.Title || "Category"}
                                            />
                                        </MainDomainLink>
                                    </div>
                                    <div className="category-title">
                                        <MainDomainLink href={`/category/${category.Slug}`}>
                                            {category.Title}
                                            <span>{calculateCouponString(category.stores || [])}</span>
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

export async function getStaticProps() {
    // Fetch all store categories
    const categoryRes = await fetch(`https://admin.coupontix.com/api/store-categories?pagination[pageSize]=4000`);
    const { data: categories } = await categoryRes.json();

    // Fetch all stores with coupons and categories
    const storeRes = await fetch(`https://admin.coupontix.com/api/stores?fields[0]=Title&fields[1]=Slug&populate[Coupons][populate]=screenshot&populate[store_category][fields][0]=id&pagination[pageSize]=4000`);
    const { data: stores } = await storeRes.json();

    // Ensure stores is properly accessed
    const storeList = stores || []; // Make sure it's an array

    // Attach stores to their respective categories
    const categoryData = categories.map(category => ({
        ...category,
        stores: storeList.filter(store => store.store_category && store.store_category.id === category.id)
    }));

    return {
        props: {
            categories: categoryData || [],
        },
        revalidate: 10, // ISR - revalidate every 10 seconds
    };
}


export default CategoryListing;
