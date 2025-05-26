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
                `https://admin.scoopcost.com/store-page/alphabetical-filter/?letter=${letter}&page=${nextPage}`
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
                            <h1 className="text-center">Explore Our All Gift Card Pages </h1>
                            <div className="catInfo">
                                
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
                fetch(`https://admin.scoopcost.com/giftcard-page/alphabetical-filter/?letter=${letter}&page=1`)
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
