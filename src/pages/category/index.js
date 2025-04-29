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

        // Count "code" and "deal" types
        const codeCount = allCoupons.filter(coupon => coupon.coupon_type === "code").length;
        const dealCount = allCoupons.filter(coupon => coupon.coupon_type === "deal").length;
      
        // Generate the summary string
        const summaryParts = [];
        if (codeCount > 0) summaryParts.push(`${codeCount} ${codeCount > 1 ? 'Codes' : 'Code'}`);
        if (dealCount > 0) summaryParts.push(`${dealCount} ${dealCount > 1 ? 'Deals' : 'Deal'}`);
      
        const summary = summaryParts.join(" | ");
        return summary;
      };

    return (
        <>
            <NextSeo
                title="Categories 2025"
                description="Get the best online coupons and promo codes at SuprOffer. Shoppers will save on electronics, fashion, beauty essentials, travel, sports goods, groceries, pet supplies, health products, and more. Use our latest coupon codes to enjoy big discounts to your favorite products."
            />
             <MetaTags />
            <section className="categorySection">
                <div className="container">
                    <div className="row">
                        <div className="breadcrumb">
                            <ul>
                                <li><MainDomainLink href="/">suproffer.com</MainDomainLink> /</li>
                                <li>category</li>
                            </ul>
                        </div>
                    </div>
                    <h1 className='text-center pageH1'>All Categories</h1>
                    <div className="row row-cols-2">
                        {categories.map((category, index) => (
                            <div className="col-lg-2 col-md-3 col-sm-4 category-box" key={index}>
                                <div className="category-item">
                                    <div className="cat-img">
                                        <MainDomainLink href={`/category/${category.slug}`}>
                                            <Image
                                                width={100}
                                                height={100}
                                                src={category.image ? category.image : "/images/default-placeholder.png"}
                                                alt={(category.title) + " Icon" || "Category Icon" }
                                            />
                                        </MainDomainLink>
                                    </div>
                                    <div className="category-title">
                                        <MainDomainLink href={`/category/${category.slug}`}>
                                            {category.title}
                                            <span>{calculateCouponString(category.store_set || [])}</span>
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
    const res = await fetch(`https://admin.suproffer.com/categories?ordering=title`);
    const categories = await res.json();

    return {
        props: {
            categories,
        },
        revalidate: 10,
    };
}


export default CategoryListing;
