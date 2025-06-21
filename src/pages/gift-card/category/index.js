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
                title="ScoopCost Gift Category 2025"
                description="We have the updated and working Gift Card on different brands to enjoy big discounts on your favorite products & services."
            />
             <MetaTags />
            <section className="categorySection">
                <div className="container">
                    <div className="row">
                        <div className="breadcrumb">
                            <ul>
                                <li><MainDomainLink href="/">scoopcost.com</MainDomainLink> /</li>
                                <li>gift-card / category</li>
                            </ul>
                        </div>
                    </div>
                    <h1 className='text-center pageH1'>Discover Gift Cards by Interest, Brand & More</h1>
                    <div className='catInfo allcatInfo'>
                         <p>
                                Welcome to our Gift Cards Page! 
                         </p>
                         <p>
                                At ScoopCost, we believe saving money should be simple. Our e-gift cards give you that freedom. Whether you are shopping for someone else or treating yourself, our gift cards are a smart and flexible way to enjoy great savings across many categories. You can use them but fashion items, electronics, groceries, beauty products, and more while still taking advantage of the deals and discounts on our platform. 

                         </p>
                         <p>
                                Our gift cards or gift vouchers make a smart option for:
                         </p>
                         <ul>
                                <li>Last minute gifts</li>
                                <li>Rewarding employees or clients</li>
                                <li>Surprising a loved one</li>
                                <li>Treating yourself during festive sales</li>
                         </ul>
                         <h2>What are Gift Cards? </h2>
                         <p>
                                Gift cards are digital cards you can use like cash on online stores. They are available for many popular brands and cover all major shopping categories. You can either buy them for yourself or send them to someone as a thoughtful gift. These gift vouchers are convenient, easy to use, and often come with special promotions or discounts. 
                         </p>
                         <h2>How to Use ScoopCost Gift Cards? </h2>
                         <p>
                                Using your gift card is easy. Here’s how:
                         </p>
                         <ul>
                                <li>Pick a gift card from your preferred category or brand</li>
                                <li>Choose the amount you want to load (options usually start from $100).</li>
                                <li>Add to the cart and complete the payment.</li>
                                <li>Receive the card in your email or send it directly to someone else.</li>
                                <li>Use it at checkout on the brand’s website with the code provided.</li>
                         </ul>
                         <p>There is no long process or hidden terms - just simple steps and instant access.</p>
                         <h2>Why Use Gift Cards from ScoopCost? </h2>
                         <p><strong>1. Great for Gifting and Personal Use</strong></p>
                         <p>
                                While many people buy gift cards for birthdays, holidays, or special occasions, they are just as useful for your own purchases. Use our gift cards for online purchases and spend the value at your own convenience. It’s a flexible option that works for both giving and saving.
                         </p>
                         <p><strong>2. Easy to Buy and Send</strong></p>
                         <p>
                                You don’t need to wait for delivery. ScoopCost gift cards are digital which means you can purchase one in a few clicks. Want to gift it to someone? Just enter their email address and the card is delivered instantly. Prefer to use it yourself? You will get it in your inbox, ready to go. 
                         </p>
                         <p><strong>3. Wide Range of Categories</strong></p>
                         <p>We offer gift cards for almost every category, including:</p>
                         <ul>
                                <li>Clothing & Accessories</li>
                                <li>Electronics</li>
                                <li>Beauty & Personal Care</li>
                                <li>Groceries & Food Delivery</li>
                                <li>Tours & Travel</li>
                                <li>Home & Garden</li>
                                <li>Health & Fitness</li>
                                <li>Baby Products</li>
                                <li>Pet Supplies</li>
                                <li>And many more…</li>
                         </ul>
                         <p><strong>4. Budget-Friendly Shopping</strong></p>
                         <p>
                                ScoopCost e-gift cards are a great way to manage your spending. You choose how much money to put on the card and use only the amount. This way you don’t spend more than planned while staying within a budget.
                         </p>
                         <p><strong>5. Mobile Accessibility</strong></p>
                         <p>
                                Our E-gift cards can be accessed and used on smartphones and tablets, making them a convenient savings option for on-the-go shopping and gifting.
                         </p>
                         <p>
                                Explore our gift card collection now and start enjoying the benefits of smart shopping! 
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
    const res = await fetch(`https://admin.scoopcost.com/gift-card-categories/?count=true`,{
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
