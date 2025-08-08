import { useState } from "react";
import "@/styles/sitemap.css";
import { NextSeo } from "next-seo";
import MainDomainLink from "@/components/MainDomainLink";

const baseDomain = "scoopcost.com";

export default function Stores({ initialStoreData }) {
    const [storeData] = useState(initialStoreData);

    const alphabets = ["0-9", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))];

    return (
        <>
            <NextSeo
                title="Stores Sitemap – Scoopcost"
                description="Browse all stores listed on Scoopcost in alphabetical order."
            />
            <section className="allStorePage">
                <div className="container">
                    <div className="storeBox">
                        <div className="alpha-store">
                            <h1 className="text-center">Explore All Of The Stores Available On ScoopCost</h1>
                            

                            {/* A-Z Navigation */}
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

                            {/* Store Sections */}
                            {Object.keys(storeData).map((c) => (
                                <div className="storeList" id={`alpha${c.toUpperCase()}`} key={c}>
                                    {storeData[c].length > 0 ? (
                                        <ul>
                                            {storeData[c].map((item, index) => (
                                                <li key={index}>
                                                    <MainDomainLink href={
                                                        item.subdomain
                                                            ? `https://${item.slug}.${baseDomain}${item.url_suffix ? '/' + item.url_suffix : ''}`
                                                            : `${item.url_suffix ? '/' + item.url_suffix : ''}/${item.slug}`
                                                    }>
                                                        {item.title}
                                                        {/* <span>{item.coupon_set.length} Codes</span> */}
                                                    </MainDomainLink>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="no-data-message" style={{ textAlign: "center" }}>
                                            {/* No stores available for {c.toUpperCase()}. */}
                                        </p>
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
    const alphabets = [...Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)), "0-9"];
    const storeData = {};

    try {
        const responses = await Promise.all(
            alphabets.map(async (letter) => {
                const allStores = [];
                let page = 1;
                let keepFetching = true;

                while (keepFetching) {
                    const res = await fetch(`https://admin.scoopcost.com/store-page/alphabetical-filter/?letter=${letter}&page=${page}`, {
                        headers: {
                            'x-api-key': process.env.SECRET_KEY, // Define in .env.local
                        },
                    });

                    const data = await res.json();

                    if (data?.results?.length) {
                        allStores.push(...data.results);
                        page += 1;
                    } else {
                        keepFetching = false;
                    }
                }

                return { [letter]: allStores };
            })
        );

        responses.forEach((response) => {
            Object.assign(storeData, response);
        });
    } catch (error) {
        console.error("Error fetching store data:", error);
    }

    return {
        props: {
            initialStoreData: storeData,
        },
        revalidate: 3600, // Rebuild every hour
    };
}
