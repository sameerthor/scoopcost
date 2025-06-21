import { useState } from "react";
import Link from "next/link";
import "@/styles/a-z.css";
import Image from 'next/image';
import { NextSeo } from "next-seo";
import MainDomainLink from '@/components/MainDomainLink';
const baseDomain = "scoopcost.com"
export default function GiftCard({ initialStoreData }) {
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
                `https://admin.scoopcost.com/store-page/alphabetical-filter/?letter=${letter}&page=${nextPage}`,{
  headers: {
    'x-api-key': process.env.SECRET_KEY, // must be defined in .env.local
  },
}
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
                            <h1 className="text-center">Find the Perfect Gift Card for Every Occasion </h1>
                            <div className="catInfo">
                                <p>
                                        Looking for a simple way to save money while shopping online? Try ScoopCost digital gift cards. Whether you are buying one for yourself or giving it to someone else, our gift vouchers make it easy to enjoy top deals, discounts and offers from popular brands. We offer egift cards from 1000+ reputed brands for every occasion.
                                </p>
                                <p>
                                        ScoopCost eGift Cards are a great way to set a shopping budget, treat yourself to a special deal or save money on things you need like clothing, electronics, groceries, beauty products, and more.
                                </p>
                                <h2>Why Buy Gift Cards from ScoopCost? </h2>
                                <ul>
                                     <li><strong>Simple to use -</strong> No need for physical cards. Everything is digital.</li>
                                     <li><strong>Instant Delivery - </strong>Delivered instantly via email after purchase.</li>
                                     <li><strong>Choose your amount -</strong> From small to large budgets, pick what works best. </li>
                                     <li><strong>Flexible use -</strong> Use them across a wide range of categories and brands.</li>
                                     <li><strong>Perfect for Gifting -</strong> Best for birthdays, anniversaries, and celebrations. </li>
                                </ul>
                                <h2>How to Use an e-Gift Card? </h2>
                                <ul>
                                    <li><strong>Buy the eGift Card - </strong>Select the amount you want and enter your or the recipient’s email address. </li>
                                    <li><strong>Receive by email - </strong>You’ll get the eGift card code instantly in your inbox.</li>
                                    <li><strong>Start Saving - </strong>Use the card to unlock deals, exclusive offers, or savings on your online purchase. </li>
                                </ul>
                                <h2>Safe, Secure, and Hassle-free</h2>
                                <p>
                                        We make sure our eGift Vouchers are easy to use and secure. YOu don’t need to worry about lost cards, delivery delays, or complicated steps. Just open your email, copy the code and start saving.
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
                                                    <Image
                                                        src={item.image}
                                                        alt={`${item.store_name} Store Logo`}
                                                        width={25}
                                                        height={25}
                                                        className="attachment-wpcoupon_small_thumb size-wpcoupon_small_thumb"
                                                        loading="lazy"
                                                    />
                                                    <MainDomainLink href={
                                                        item.subdomain
                                                            ? `https://${item.slug}.${baseDomain}`
                                                            : `/gift-card/${item.slug}`
                                                    }>
                                                        {item.store_name} Gift Card
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
                fetch(`https://admin.scoopcost.com/giftcard-page/alphabetical-filter/?letter=${letter}&page=1`,{
  headers: {
    'x-api-key': process.env.SECRET_KEY, // must be defined in .env.local
  },
})
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
