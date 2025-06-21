import { NextSeo } from 'next-seo';
import MetaTags from '@/components/MetaTags';
import RandomDatesList from '@/components/RandomDatesList';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/reward.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MainDomainLink from '@/components/MainDomainLink';
import { useMemo } from 'react';
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/ResponsiveCarousel";


export default function RewardPage({  }) {
    

    return (
        <>
            <NextSeo
                title="ScoopCost - Best Gift Card For 2025"
                description="Find the best Gift Card online. We have curated the largest gift card store. 200+ brands across 20+ categories. Avail exclusive offers on top brand gift cards. Instant delivery."
            />
            <MetaTags />
            <section className='hero-section'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 mb-4 mb-lg-0 text-center text-lg-start mobilePadding">
                        <h1 className="hero-title">ScoopCost gives you guaranteed points on every qualified purchase.</h1>
                        
                        <a href='' className="shop-button">Shop All Products</a>

                        <div className="row row-cols-1 row-cols-lg-2 features mt-4">
                            <div className="col col-md-6 feature-item mobilePadding">
                            <i> 
                                <Image
                                    src="/images/shoping-bag.svg"
                                    alt="shoping"
                                    width={30}
                                    height={30}
                                /> 
                            </i> 
                                Shop from Top Brands.
                            </div>
                            <div className="col feature-item mobilePadding">
                            <i> 
                                <Image
                                src="/images/dollar.svg"
                                alt="shoping"
                                width={30}
                                height={30}
                                /> 
                            </i>  
                            Earn on Every Qualified Purchase.
                            </div>
                            <div className="col feature-item mobilePadding">
                                <i>
                                    <Image
                                    src="/images/save-more.svg"
                                    alt="shoping"
                                    width={30}
                                    height={30}
                                    /> 
                                </i> 
                                Save More with Every Checkout

                            </div>
                            <div className="col feature-item mobilePadding">
                                <i>
                                    <Image
                                    src="/images/tracking.svg"
                                    alt="shoping"
                                    width={30}
                                    height={30}
                                    />
                                </i> 
                                Hassle-Free Rewards Tracking
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-7 col-md-12 product-image text-center">
                            <Image
                                src="/images/reward.webp"
                                alt="Reward Hero Image"
                                width={700}
                                height={500}
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className='usersection'>
                <div className="container">
                    <div className='userBox'>
                            <div className='userName'>Hi, MS DHONI</div>
                            <div className='points'>You have <span>50</span> points</div>

                            <div class="expiry-warning">
                                <i>⚠</i> Your <b>50</b> Loyalty Points will expire on <b>06/07/2026</b>
                            </div>

                            <div class="btn-container">
                                <a href='' class="btn">Redeem Now</a>
                                 <a href='/reward-history' class="btn">Rewards History</a>
                            </div>
                    </div>
                </div>
            </section>
            <section className="rewards-section">
                <div className="container" style={{borderBottom: "1px solid #ccc"}}>
                     <h2>Ways to Earn Points</h2>
                    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
                        <div className="col">
                            <div className="reward-box">
                                <div className="reward-icon">👤</div>
                                <div className="reward-title">50 Points</div>
                                <div className="reward-desc">Create An Account</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="reward-box">
                                <div className="reward-icon">🛒</div>
                                <div className="reward-title">1 Point</div>
                                <div className="reward-desc">For Every $ Spent</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="reward-box">
                                <div className="reward-icon">💬</div>
                                <div className="reward-title">30+ Points</div>
                                <div className="reward-desc">Leave a Review</div>
                            </div>
                        </div>

                
                        <div className="col">
                            <div className="reward-box">
                                <div className="reward-icon">🎂</div>
                                <div className="reward-title">100 Points</div>
                                <div className="reward-desc">Happy Birthday</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="rewards-section">
                <div className="container">
                     <h2>How our reward program works ?</h2>
                    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
                        <div className="col">
                            <div className="reward-box">
                                <div className="reward-icon">
                                    <Image
                                        src="/images/join.svg"
                                        alt="join"
                                        width={50}
                                        height={50}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="reward-title">Join</div>
                                <div className="reward-desc">Sign up and start collecting points today!</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="reward-box">
                                <div className="reward-icon">
                                    <Image
                                        src="/images/purchase.svg"
                                        alt="join"
                                        width={50}
                                        height={50}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="reward-title">Qualified Purchase</div>
                                <div className="reward-desc">Get points with every qualified purchase.</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="reward-box">
                                <div className="reward-icon">
                                    <Image
                                        src="/images/earn-points.svg"
                                        alt="join"
                                        width={50}
                                        height={50}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="reward-title">Collect Points</div>
                                <div className="reward-desc">Every purchase brings you some points</div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="reward-box">
                                <div className="reward-icon">
                                    <Image
                                        src="/images/redeem.svg"
                                        alt="join"
                                        width={50}
                                        height={50}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="reward-title">Redeem</div>
                                <div className="reward-desc">Instantaly convert all your points into dollars</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="subscribe-section">
                <div class="container">
                    <div class="subscribe-box">
                        <h2>🎁 Unlock Exclusive Rewards!</h2>
                        <p>Join our newsletter and start earning points, deals, and surprise perks straight to your inbox.</p>
                        <form class="subscribe-form">
                            <div>
                                <input type="email" class="form-control" placeholder="Enter your email" required />
                            </div>
                            <div>
                                <button type="submit" class="btn btn-subscribe w-100">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    );
}

export async function getStaticProps() {


    return {
        props: {
          
        },
        revalidate: 10, // ISR - revalidate every 10 seconds
    };
}
// Hello this line is for testing purposes only