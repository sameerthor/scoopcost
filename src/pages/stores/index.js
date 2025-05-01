import { useState } from "react";
import Link from "next/link";
import "@/styles/a-z.css";
import { NextSeo } from "next-seo";
import MainDomainLink from '@/components/MainDomainLink';
const baseDomain = "suproffer.com"
export default function Stores({ initialStoreData }) {
    console.log(initialStoreData)
    const [storeData, setStoreData] = useState(initialStoreData);
    const [pageNumbers, setPageNumbers] = useState(
        Object.keys(initialStoreData).reduce((acc, key) => ({ ...acc, [key]: 1 }), {})
    );
    const [loading, setLoading] = useState({});
    const [hasMore, setHasMore] = useState(
        Object.keys(initialStoreData).reduce((acc, key) => ({
            ...acc,
            [key]: initialStoreData[key]?.length > 0, // Check if initial data is available
        }), {})
    );

    const alphabets = ["0-9", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))];

    const handleLoadMore = async (letter) => {
        if (!hasMore[letter]) return; // If no more data, stop fetching

        setLoading((prev) => ({ ...prev, [letter]: true }));
        try {
            const nextPage = pageNumbers[letter] + 1;
            const response = await fetch(
                `https://admin.suproffer.com/store-page/alphabetical-filter/?letter=${letter}&page=${nextPage}`
            );
            const data = await response.json();

            if (data.detail === "Invalid page.") {
                setHasMore((prev) => ({ ...prev, [letter]: false }));
            } else {
                setStoreData((prev) => ({
                    ...prev,
                    [letter]: [...prev[letter], ...(data.results || [])],
                }));
                setPageNumbers((prev) => ({ ...prev, [letter]: nextPage }));
            }
        } catch (error) {
            console.error(`Error loading more stores for ${letter}:`, error);
        } finally {
            setLoading((prev) => ({ ...prev, [letter]: false }));
        }
    };

   

    return (
        <>
            <NextSeo
                title="All Stores for 2025"
                description="Explore our All Stores page for the verified coupons, discount codes, and exclusive deals from top online stores. Save big on fashion, tech, travel, home goods, beauty products - all in one place. Updated regularly for maximum savings!"
            />
            <section className="allStorePage">
                <div className="container">
                    <div className="storeBox">
                        <div className="alpha-store">
                            <h1 className="text-center">Explore Our All Stores Page - Best Coupons and Deals</h1>
                            <div className="catInfo">
                                <p>
                                Welcome to the All Stores Page on Suproffer.com - your one-stop destination for the latest discount deals, promo codes, and verified coupons for all your favorite online stores. From fashion and beauty to electronics and travel, we bring together the best deals to help you save more every time you shop online. 
                                </p>
                                <h2>Why Shop With Suproffer?
                                </h2>
                                <p>
                                    <strong>Huge Collection of Coupon Codes and Deals </strong>
                                </p>
                                <p>
                                Browse an ever-growing list of top online stores offering exclusive discounts, limited-time offers, flash sales, and clearance events. We cover all product categories - clothing, gadgets, home decor, fitness gear, and more. Our team regularly updates the list so you will always find the latest offers and discounts. Shop and save online! 
                                </p>
                                <p>
                                    <strong>Verified & Working Promo Codes
                                    </strong>
                                </p>
                                <p>
                                Say goodbye to expired or fake codes. At Suproffer, we check and verify every single coupon code before listing it on our site. You get access to real-time offers that actually save you money. Shop confidently and explore daily deals and weekly sales without worrying about invalid coupons.

                                </p>
                                <p>
                                        <strong>Easy Search & Filter Options </strong>
                                </p>
                                <p>
                                Looking for a deal or coupon? Use our filters to find stores by name, category, or even keywords like “free shipping”, “coupon codes”, or “student discounts”. Whether you are shopping for home essentials, fashion, tech gadgets, pet supplies, or wellness products, finding the right deal is quick and simple. 

                                </p>
                                <p>
                                    <strong>Personalized Alerts for Your Favorite Stores
                                    </strong>
                                </p>
                                <p>
                                Create a free account on Suproffer to receive alerts, discount notifications, holiday sales, and seasonal deal reminders. Get notified about the latest offers for events like Cyber Monday, Black Friday, New Year, Christmas, Halloween, and Valentine’s Day. 

                                </p>
                                <p>Start saving at Suproffer.com! 
                                </p>
                            </div>
                            <div>
                                <p className="all_list">
                                    {alphabets.map((c) => (
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const target = document.querySelector(`#alpha${c.toUpperCase()}`);
                                                if (target) {
                                                    window.scrollTo({
                                                        top: target.offsetTop - 30,
                                                        behavior: "smooth",
                                                    });
                                                }
                                            }}
                                            className="getStore"
                                            aria-label={`Scroll to ${c.toUpperCase()} section`}
                                            key={c}
                                        >
                                            {c.toUpperCase()}
                                        </button>
                                    ))}
                                </p>
                            </div>

                            {Object.keys(storeData).map((c) => (
                                <div className="storeList" id={`alpha${c.toUpperCase()}`} key={c}>
                                    {storeData[c].length > 0 ? (
                                        <ul>
                                            {storeData[c].map((item, index) => (
                                                <li key={index}>
                                                    <MainDomainLink href={
                                                        item.subdomain
                                                            ? `https://${item.slug}.${baseDomain}`
                                                            : `/${item.slug}`
                                                    }>
                                                        {item.title}
                                                        <span>{item.coupon_set.length} Codes</span>
                                                    </MainDomainLink>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="no-data-message" style={{ textAlign: "center" }}>
                                            No stores available for {c.toUpperCase()}.
                                        </p>
                                    )}
                                    {hasMore[c] && storeData[c].length > 0 && (
                                        <div className="loadMoreCoupon text-center">
                                            <button
                                                onClick={() => handleLoadMore(c)}
                                                disabled={loading[c] || !hasMore[c]}
                                                aria-live="polite"
                                                className="load-more-btn"
                                            >
                                                {loading[c] ? "Loading..." : "Load More"}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export async function getStaticProps() {
    const alphabets = ["0-9", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))];
    const storeData = {};

    try {
        const responses = await Promise.all(
            alphabets.map((letter) =>
                fetch(`https://admin.suproffer.com/store-page/alphabetical-filter/?letter=${letter}&page=1`)
                    .then((res) => res.json())
                    .then((data) => ({ [letter]: data.results || [] }))
            )
        );

        responses.forEach((response) => {
            Object.assign(storeData, response);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return {
        props: {
            initialStoreData: storeData,
        },
        revalidate: 10,
    };
}
