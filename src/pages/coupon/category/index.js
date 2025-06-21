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
                title="ScoopCost Coupon Category 2025"
                description="Browse our Category and save on electronics, fashion, beauty essentials, travel, sports goods, groceries, pet supplies, health products, and more."
                noindex={true}
                nofollow={true}
            />
             <MetaTags />
            <section className="categorySection">
                <div className="container">
                    <div className="row">
                        <div className="breadcrumb">
                            <ul>
                                <li><MainDomainLink href="/">scoopcost.com</MainDomainLink> /</li>
                                <li>coupon / category</li>
                            </ul>
                        </div>
                    </div>
                    <h1 className='text-center pageH1'>Save More on What You Love – Browse Coupon Categories</h1>
                    <div className='catInfo allcatInfo'>
                         <p>
                            At ScoopCost, saving money is easy. We bring the best coupons, promo codes, and discounts for almost all product categories. From tech gadgets and fashion to travel and groceries, we have offers that help you spend less and save more. Our platform brings together exclusive discounts, seasonal promotions, and limited-time deals you hardly find anywhere else. 
                         </p>
                         <p>
                                Whether you are shopping for yourself, your home, or planning your next trip, browse through these shopping categories to unlock amazing savings from top brands and retailers. Our aim is to make your shopping experience better and more affordable.
                         </p>
                         <p>
                                On our website, you will find top offers across a wide range of categories like home decor, fashion, electronics, pet supplies, beauty products, toys, sports gear, and much more.
                         </p>
                         <h2>Some Top Categories You’ll Find on ScoopCost</h2>
                         <p>
                                <strong>Fashion Discounts:</strong> Grab exciting deals on all your favorite fashion brands. Shop the newest trends in clothing, shoes, and accessories for men, women, and kids at much lower prices. Our fashion coupons help you stay stylish without overspending.
                         </p>
                         <p>
                            <strong>Electronics Deals:</strong> Get the best online discounts on the latest gadgets and devices. Enjoy deals on smartphones, laptops, headphones, smartwatches, computer peripherals, and other high-tech electronic items. 
                         </p>
                         <p>
                                <strong>Home & Garden Coupons:</strong> Upgrade up your space with savings on home decor, appliances, furniture, and garden supplies. Here, you will discover exclusive deals and coupon codes for kitchenware, home & office furniture, kitchen appliances, wall decor, and more. Our home products coupons help you save more money every time you shop online.
                         </p>
                         <p>
                            <strong>Beauty Deals:</strong> Save big on skincare, makeup, hair care, and beauty tools. Our beauty & cosmetics category brings you offers from trusted brands and retailers. We feature deals from the most popular beauty brands so you can maintain your without making a hole in your pocket.
                         </p>
                         <p>
                            <strong>Health & Fitness Offers:</strong> Fuel your fitness journey with discounts on gym gear, activewear, yoga mats, exercise machines, and health supplements. Whether you are working out at home or at the gym, our health & fitness coupons help you stay healthy without spending too much.
                         </p>
                    </div>
                    <div className="row row-cols-2">
                        {categories.map((category, index) => (
                            <div className="col-lg-2 col-md-3 col-sm-4 category-box" key={index}>
                                <div className="category-item">
                                    <div className="cat-img">
                                        <MainDomainLink href={`/coupon/category/${category.slug}`}>
                                            <Image
                                                width={100}
                                                height={100}
                                                src={category.image ? category.image : "/images/default-placeholder.png"}
                                                alt={(category.title) + " Icon" || "Category Icon" }
                                            />
                                        </MainDomainLink>
                                    </div>
                                    <div className="category-title">
                                        <MainDomainLink href={`/coupon/category/${category.slug}`}>
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
    const res = await fetch(`https://admin.scoopcost.com/categories?ordering=title`,{
  headers: {
    'x-api-key': process.env.SECRET_KEY, // must be defined in .env.local
  },
});
    const categories = await res.json();

    return {
        props: {
            categories,
        },
        revalidate: 10,
    };
}


export default CategoryListing;
