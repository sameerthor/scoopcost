import { NextSeo } from 'next-seo';
import MetaTags from '@/components/MetaTags';
import RandomDatesList from '@/components/RandomDatesList';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/home.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MainDomainLink from '@/components/MainDomainLink';
import { useMemo } from 'react';
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/ResponsiveCarousel";


export default function HomePage({ categories,topRatedStores,featuredStores,topOnlineStores }) {
    
    const firstCarousel = [
        <div className="imgItem">
            <Image 
                width={800}
                height={340} 
                src="/images/scoopcost-banner-1.png" loading="lazy" alt="logo" />
        </div>,
        <div className="imgItem">
            <Image 
                width={800}
                height={340} 
                src="/images/scoopcost-banner-2.png" loading="lazy" alt="logo" />
        </div>,
    
    ];

    
    const carouselStore = [
        <a className="brand-card" href='https://scoopcost.com/gift-card/theiuga'>
            <Image  className='brand-logo'
                    width={180}
                    height={80} 
                    src="/images/theiuga.webp" loading="lazy" alt="IUGA " />
            <div className="brand-category">Clothing &amp; Accessories</div>
            <div className="brand-name">IUGA </div>
            <div className="brand-discount">22% Off</div>
        </a>,
        <a className="brand-card" href='https://scoopcost.com/gift-card/insighthealthapps'>
            <Image  className='brand-logo'
                    width={180}
                    height={80} 
                    src="/images/insighthealthandwellness.avif" loading="lazy" alt="Insight Health Apps" />
            <div className="brand-category">Health &amp; Wellness</div>
            <div className="brand-name">Insight Health Apps</div>
            <div className="brand-discount">22% Off</div>
        </a>,
        <a className="brand-card" href='https://scoopcost.com/gift-card/justwater'>
            <Image  className='brand-logo'
                    width={180}
                    height={80} 
                    src="/images/just.webp" loading="lazy" alt="Just Water" />
            <div className="brand-category">Food &amp; Drink</div>
            <div className="brand-name">Just Water</div>
            <div className="brand-discount">22% Off</div>
        </a>,
        <a className="brand-card" href='https://scoopcost.com/gift-card/pix-brix'>
            <Image  className='brand-logo'
                    width={180}
                    height={80} 
                    src="/images/pix-brix.avif" loading="lazy" alt="Pix Brix" />
            <div className="brand-category">Toys &amp; Games</div>
            <div className="brand-name">Pix Brix</div>
            <div className="brand-discount">22% Off</div>
        </a>,
        <a className="brand-card" href='https://scoopcost.com/gift-card/questhealth'>
            <Image  className='brand-logo'
                    width={180}
                    height={80} 
                    src="/images/quest.svg" loading="lazy" alt="Quest Health" />
            <div className="brand-category">Health &amp; Wellness</div>
            <div className="brand-name">Quest Health</div>
            <div className="brand-discount">22% Off</div>
        </a>,
        <a className="brand-card" href='https://scoopcost.com/gift-card/rejuvahealth'>
            <Image  className='brand-logo'
                    width={180}
                    height={80} 
                    src="/images/rejuvahealth.avif" loading="lazy" alt="Rejuva Health" />
            <div className="brand-category">Clothing &amp; Accessories</div>
            <div className="brand-name">Rejuva Health</div>
            <div className="brand-discount">20% Off</div>
        </a>,
        <a className="brand-card" href='https://scoopcost.com/gift-card/bambooclothes'>
            <Image  className='brand-logo'
                    width={180}
                    height={80} 
                    src="/images/bambooclothes.avif" loading="lazy" alt="Spun Bamboo Clothing" />
            <div className="brand-category">Clothing &amp; Accessories</div>
            <div className="brand-name">Spun Bamboo Clothing</div>
            <div className="brand-discount">25% Off</div>
        </a>,
        <a className="brand-card" href='https://scoopcost.com/gift-card/surfsidesupply'>
            <Image  className='brand-logo'
                    width={180}
                    height={80} 
                    src="/images/surfsidesupply.webp" loading="lazy" alt="Surfside Supply" />
            <div className="brand-category">Clothing &amp; Accessories</div>
            <div className="brand-name">Surfside Supply</div>
            <div className="brand-discount">15% Off</div>
        </a>,
        <a className="brand-card" href='https://scoopcost.com/gift-card/sewingsupplydepot'>
            <Image  className='brand-logo'
                    width={180}
                    height={80} 
                    src="/images/sewingsupplydepot.webp" loading="lazy" alt="Sewing Supply Depot" />
            <div className="brand-category">Art &amp; Craft</div>
            <div className="brand-name">Sewing Supply Depot</div>
            <div className="brand-discount">10% Off</div>
        </a>,
        <a className="brand-card" href='https://scoopcost.com/gift-card/trendystraps'>
            <Image  className='brand-logo'
                    width={180}
                    height={80} 
                    src="/images/trendystraps.webp" loading="lazy" alt="Trendystraps " />
            <div className="brand-category">Accessories</div>
            <div className="brand-name">Trendystraps </div>
            <div className="brand-discount">20% Off</div>
        </a>,
    
    ];

  

    const getHeading = (title) => {
        if (!title) return "";
    
        // Check for percentage discount (e.g., "40% OFF")
        const percentMatch = title.match(/(\d+)%/);
        if (percentMatch) {
            return `${percentMatch[1]}% OFF`;
        }
    
        // Check for dollar discount (e.g., "$40 OFF")
        const dollarMatch = title.match(/\$(\d+)/);
        if (dollarMatch) {
            return `$${dollarMatch[1]} OFF`;
        }
    
        // Check for "Free Shipping"
        if (/free shipping/i.test(title)) {
            return "Free Shipping";
        }
    
        return "";
    };


    return (
        <>
            <NextSeo
                title="SuprOffer - Best Coupons & Deals"
                description="Find the best coupons, deals, and discounts for top brands"
            />
            <MetaTags />

            <section className='firstSec'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mb-3">
                            <div className="hero">
                                <h1>
                                    <span className="green">Your Shortcut to Savings</span><br />
                                    <span className="black">Gift Cards for Every Brand</span><br />
                                    <span className="orange">You Love ❤️</span>
                                </h1>

                                <div className="cta-button">
                                    <button>
                                    <svg fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M10 15l5-3-5-3v6zm11-3c0-5.523-4.477-10-10-10S1 6.477 1 12s4.477 10 10 10 10-4.477 10-10zM3 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8-8-3.589-8-8z" />
                                    </svg>
                                    Save with scoopCost
                                    </button>
                                </div>

                                <div className="features">
                                    <div className="feature">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#ef4444'>
                                            <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"/>
                                        </svg>
                                        Lightning-Fast Checkout
                                    </div>
                                    <div className="feature">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#10b981'>
                                            <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"/>
                                        </svg>
                                        Secure Payments
                                    </div>
                                    <div className="feature">
                                        <svg width="64" height="64" viewBox="0 0 64 64" fill="#10b981" xmlns="http://www.w3.org/2000/svg">
                                        
                                            <circle cx="32" cy="32" r="28" stroke="#007bff" stroke-width="4" fill="none"/>
                                            

                                            <line x1="32" y1="32" x2="32" y2="18" stroke="#007bff" stroke-width="4" stroke-linecap="round"/>
                                            

                                            <line x1="32" y1="32" x2="44" y2="32" stroke="#007bff" stroke-width="3" stroke-linecap="round"/>

                                            
                                            <circle cx="32" cy="32" r="2" fill="#007bff"/>
                                        </svg>

                                        24/7 Human Support
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 topCarousel">
                                <ResponsiveCarousel
                                    items={firstCarousel}
                                    idPrefix="firstCarousel"
                                    responsiveConfig={{ xs: 1, sm: 1, md: 1 }}
                                />
                        </div>
                    </div>
                </div>
           </section>
            
           
            <section className='greatDiscount'>
                <div className="container">
                    <h2 className='secHeading'>Great discount on top brands</h2>
                    <div className="row row-cols-lg-5 row-col-md-3 row-cols-2">
                        <div className="col mb-3">
                            <a className='catItem' href=''>
                                <div className='name'>
                                    <span>Food</span>
                                    <Image 
                                        width={40}
                                        height={40} 
                                        src="/images/books.png" loading="lazy" alt="books" />
                                </div>
                                <div className='dec'>Upto 60% Off</div>
                                <div className='avl'>Offers Available on 22+ brands</div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='catItem' href=''>
                                <div className='name'>
                                    <span>Food</span>
                                    <Image 
                                        width={40}
                                        height={40} 
                                        src="/images/books.png" loading="lazy" alt="books" />
                                </div>
                                <div className='dec'>Upto 60% Off</div>
                                <div className='avl'>Offers Available on 22+ brands</div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='catItem' href=''>
                                <div className='name'>
                                    <span>Food</span>
                                    <Image 
                                        width={40}
                                        height={40} 
                                        src="/images/books.png" loading="lazy" alt="books" />
                                </div>
                                <div className='dec'>Upto 60% Off</div>
                                <div className='avl'>Offers Available on 22+ brands</div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='catItem' href=''>
                                <div className='name'>
                                    <span>Food</span>
                                    <Image 
                                        width={40}
                                        height={40} 
                                        src="/images/books.png" loading="lazy" alt="books" />
                                </div>
                                <div className='dec'>Upto 60% Off</div>
                                <div className='avl'>Offers Available on 22+ brands</div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='catItem' href=''>
                                <div className='name'>
                                    <span>Food</span>
                                    <Image 
                                        width={40}
                                        height={40} 
                                        src="/images/books.png" loading="lazy" alt="books" />
                                </div>
                                <div className='dec'>Upto 60% Off</div>
                                <div className='avl'>Offers Available on 22+ brands</div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='catItem' href=''>
                                <div className='name'>
                                    <span>Food</span>
                                    <Image 
                                        width={40}
                                        height={40} 
                                        src="/images/books.png" loading="lazy" alt="books" />
                                </div>
                                <div className='dec'>Upto 60% Off</div>
                                <div className='avl'>Offers Available on 22+ brands</div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='catItem' href=''>
                                <div className='name'>
                                    <span>Food</span>
                                    <Image 
                                        width={40}
                                        height={40} 
                                        src="/images/books.png" loading="lazy" alt="books" />
                                </div>
                                <div className='dec'>Upto 60% Off</div>
                                <div className='avl'>Offers Available on 22+ brands</div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='catItem' href=''>
                                <div className='name'>
                                    <span>Food</span>
                                    <Image 
                                        width={40}
                                        height={40} 
                                        src="/images/books.png" loading="lazy" alt="books" />
                                </div>
                                <div className='dec'>Upto 60% Off</div>
                                <div className='avl'>Offers Available on 22+ brands</div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='catItem' href=''>
                                <div className='name'>
                                    <span>Food</span>
                                    <Image 
                                        width={40}
                                        height={40} 
                                        src="/images/books.png" loading="lazy" alt="books" />
                                </div>
                                <div className='dec'>Upto 60% Off</div>
                                <div className='avl'>Offers Available on 22+ brands</div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='catItem' href=''>
                                <div className='name'>
                                    <span>Food</span>
                                    <Image 
                                        width={40}
                                        height={40} 
                                        src="/images/books.png" loading="lazy" alt="books" />
                                </div>
                                <div className='dec'>Upto 60% Off</div>
                                <div className='avl'>Offers Available on 22+ brands</div>
                            </a>
                        </div>
                    </div>
                    <div className='centerBtn'>
                        <button>Show More</button>
                    </div>
                </div>

            </section>
            <section className='promoSection'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mb-3">
                            <div class="promo-card purple-gradient">
                                <div class="promo-icon">🎁</div>
                                <div class="promo-text">Invite friends & get ₹100 bonus!</div>
                                <div class="promo-arrow">→</div>
                            </div>
                       </div>
                    <div className='col-lg-5'>
                        <div class="promo-card blue-gradient">
                            <div class="promo-icon">🛡️</div>
                            <div class="promo-text">Safe payments guaranteed</div>
                            <div class="promo-arrow">→</div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
           
           <section className="topBrands brand-grid">
                <div className="container">
                    <h2 className='secHeading'>Top Rated Brands</h2>
                    <div className="row row-cols-lg-5 row-col-md-3 row-cols-2">
                        <div className="col mb-5">
                            <a class="brand-card" href='https://scoopcost.com/gift-card/8000kicks'>
                                <Image  className='brand-logo'
                                        width={80}
                                        height={80} 
                                        src="/images/800-kicks.webp" loading="lazy" alt="800-kicks" />
                                <div class="brand-name">8000Kicks</div>
                                <div class="discount-badge">Footwear</div>
                            </a>
                        </div>
                         <div className="col mb-5">
                            <a class="brand-card" href='https://scoopcost.com/gift-card/alethahealth'>
                                <Image  className='brand-logo'
                                        width={80}
                                        height={80} 
                                        src="/images/alethahealth.webp" loading="lazy" alt="alethahealth" />
                                <div class="brand-name">Aletha Health</div>
                               
                                <div class="discount-badge">Health &amp; Wellness</div>
                            </a>
                        </div>
                        <div className="col mb-5">
                            <a class="brand-card" href='https://scoopcost.com/gift-card/camelicioususa'>
                                <Image  className='brand-logo'
                                        width={80}
                                        height={80} 
                                        src="/images/camelicioususa.avif" loading="lazy" alt="Camelicious" />
                                <div class="brand-name">Camelicious USA</div>
                       
                                <div class="discount-badge">Food &amp; Drink</div>
                            </a>
                        </div>
                        <div className="col mb-5">
                            <a class="brand-card" href='https://scoopcost.com/gift-card/drmorses'>
                                <Image  className='brand-logo'
                                        width={80}
                                        height={80} 
                                        src="/images/drmorses.avif" loading="lazy" alt="udemy" />
                                <div class="brand-name">Dr. Morse's Herbal Health Club</div>
                                
                                <div class="discount-badge">Health &amp; Wellness</div>
                            </a>
                        </div>
                        <div className="col mb-5">
                            <a class="brand-card" href='https://scoopcost.com/gift-card/dorado'>
                                <Image  className='brand-logo'
                                        width={80}
                                        height={80} 
                                        src="/images/dorado.webp" loading="lazy" alt="Dorado" />
                                <div class="brand-name">Dorado </div>
                                
                                <div class="discount-badge">Jewelry</div>
                            </a>
                        </div>
                        <div className="col mb-5">
                            <a class="brand-card" href='https://scoopcost.com/gift-card/vivarays'>
                                <Image  className='brand-logo'
                                        width={80}
                                        height={80} 
                                        src="/images/vivarays.webp" loading="lazy" alt="Automotive" />
                                <div class="brand-name">VivaRays </div>
                                
                                <div class="discount-badge">Eyewear</div>
                            </a>
                        </div>
                        <div className="col mb-5">
                            <a class="brand-card" href='https://scoopcost.com/gift-card/everlywell'>
                                <Image  className='brand-logo'
                                        width={80}
                                        height={80} 
                                        src="/images/everlywell.webp" loading="lazy" alt="Everlywell" />
                                <div class="brand-name">Everlywell </div>
                                <div class="discount-badge">Health &amp; Wellness</div>
                            </a>
                        </div>
                        <div className="col mb-5">
                            <a class="brand-card" href='https://scoopcost.com/gift-card/echowater'>
                                <Image  className='brand-logo'
                                        width={80}
                                        height={80} 
                                       
                                        src="/images/waterdrop.svg" loading="lazy" alt="Waterdrop" />
                                <div class="brand-name">Waterdrop </div>
                               
                                <div class="discount-badge">Food &amp; Drink</div>
                            </a>
                        </div>
                        <div className="col mb-5">
                            <a class="brand-card" href='https://scoopcost.com/gift-card/gelblaster'>
                                <Image  className='brand-logo'
                                        width={80}
                                        height={80} 
                                        src="/images/gelblaster.avif" loading="lazy" alt="Gel Blaster Gift" />
                                <div class="brand-name">Gel Blaster Gift</div>
                               
                                <div class="discount-badge">Toys &amp; Games</div>
                            </a>
                        </div>
                        <div className="col mb-5">
                            <a class="brand-card" href='https://scoopcost.com/gift-card/hydrohbottle'>
                                <Image  className='brand-logo'
                                        width={80}
                                        height={80} 
                                        src="/images/hydroh.avif" loading="lazy" alt="Hydroh Bottle" />
                                <div class="brand-name">Hydroh Bottle</div>
                           
                                <div class="discount-badge">Health &amp; Wellness</div>
                            </a>
                        </div>

                        
                    </div>
                    <div className="centerBtn"><a href='https://scoopcost.com/gift-card'>Show More</a></div>
                </div>
           </section>
           <section className='carouselStore'>
                <div className="container">
                    <h2 className='secHeading'>Popular Brand</h2>
                    <ResponsiveCarousel
                                items={carouselStore}
                                idPrefix="carouselStore"
                                responsiveConfig={{ xs: 1, sm: 2, md: 5 }}
                            />
                </div>
           </section>
           <section className='faqs'>
                <div className="container">
                    <h2 className='secHeading'>Frequently Ask Question</h2>

                    <div className="row row-cols col-cols-lg-2 flex-lg-row flex-column-reverse">
                        <div className='col-lg-7 mobilePadding'>
                            <div className="feature-list">
                                <div className="feature-item">
                                    <div className="feature-title">
                                       What are eGift Cards?
                                    </div>
                                    <div className="feature-description">
                                        eGift Cards or electronic gift cards are prepaid cards that work like cash. The recipient gets a code sent via email or text which can be used to shop online or in-store (if supported). They are a convenient way to shop, save, or give someone a thoughtful gift. 

                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-title">
                                       How do Gift Cards work?
                                    </div>
                                    <div className="feature-description">
                                        Once you receive a Gift card, it usually includes a unique card number and PIN. To use it, simply enter these details at checkout when shopping online. Always read the usage instructions to know how to redeem the gift card. 
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-title">
                                       Where can I find Gift Cards for my shopping spree? 
                                    </div>
                                    <div className="feature-description">
                                        The best place to find gift cards & vouchers online is Scoopcost. Our platform helps shoppers to easily explore and purchase GCs/GVs for popular brands at great prices. We make it quick, safe, and convenient to send digital gift cards straight to someone’s inbox. 
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-title">
                                       What are the benefits of using Gift Cards? 
                                    </div>
                                    <div className="feature-description">
                                        Gift cards are convenient and flexible. You can use them like cash when shopping at online platforms. They are great for personal shopping or gifting and sometimes come with extra discounts or rewards. 

                                    </div>
                                </div>
                               
                                

                            </div>
                        </div>
                         <div className='col'>
                            <div className="imgBox">
                                <Image  className='brand-logo'
                                    width={600}
                                    height={600} 
                                    src="/images/faqs.png" loading="lazy" alt="faqs" />
                            </div>
                        </div>
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
// Deployment Fixes