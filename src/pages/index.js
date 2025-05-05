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


export default function HomePage({ categories,topRatedStores,featuredStores,topOnlineStores }) {
    
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

            {/* Home Banner Section */}
            {/* Home Banner Section with react-responsive-carousel */}
            <section className='homeImageBanner'>
                <h1>Click to Click to Click to Reedem to get discount</h1>
               <a  href="/stores" aria-label="Click to Click to Click to Reedem and get discount" title='Click to Click to Click to Reedem and get discount'> 
                    <Image
                        width={1000}
                        height={500}
                        loading='lazy'
                        src="/images/suproffer-banner.webp" alt="Click  to Shop Now" />
                </a>
            </section>
           

           
            <section className="newPopular">
                <div className="container">
                    <div className="secHeading">Most Popular Brands</div>
                    <div className="row row-col-2 row-cols-lg-5 row-cols-md-3 g-3">
                        <div className="col mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                 <Image 
                                    style={{
                                        backgroundColor: '#3f51b7',
                                        borderRadius: '4px',
                                        padding: '5px',
                                        marginBottom: '.5rem'
                                      }}
                                    src="/images/airdna.avif"
                                    alt="Adalysis"
                                    width={140}
                                    height={140}
                                    className="brand-logo"
                                    />
                                    
                                    <div className="text-primary mb-2">AirDNA</div>
                                    <p className="brand-discount">Up to 10% OFF</p>
                                    <MainDomainLink href='https://airdna-co.suproffer.com/'class="angled-button">
                                        ************************
                                        <span class="btn-angle">Click to Reedem</span>
                                    </MainDomainLink>
                                    <div className='expTc'>
                                        <MainDomainLink href='https://airdna-co.suproffer.com/'class="">
                                        T &amp; C
                                        </MainDomainLink>
                                        <span >
                                                Expires
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                <Image
                                    src="/images/Luma-Soothe-Logo.webp"
                                    alt="Luma-Soothe-Logo"
                                    width={140}
                                    height={140}
                                    className="brand-logo"
                                    />
                                    
                                <div className="text-primary mb-2">LumaSoothe Coupons</div>
                                <p className="brand-discount">Up to 40% OFF</p>
                               
                                <MainDomainLink href='https://lumasoothe.suproffer.com/'class="angled-button">
                                    ************************
                                    <span class="btn-angle">Click to Reedem</span>
                                </MainDomainLink>
                                <div className='expTc'>
                                        <MainDomainLink href='https://lumasoothe.suproffer.com/'class="">
                                        T &amp; C
                                        </MainDomainLink>
                                        {/* <span >
                                                Expires:  <RandomDatesList count={1} uniqueId="offer_1" />
                                                
                                        </span> */}
                                        <span>Expires</span>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                <Image
                                     style={{
                                        backgroundColor: '#000',
                                        borderRadius: '4px',
                                        padding: '5px',
                                        marginBottom: '.5rem'
                                      }}
                                    src="/images/toonly.webp"
                                    alt="Adalysis"
                                    width={140}
                                    height={140}
                                    className="brand-logo"
                                    />
                                    
                                <div className="text-primary mb-2">Toonly Coupons</div>
                                <p className="brand-discount">Up to 25% OFF</p>
                               
                                <MainDomainLink href='https://toonly.suproffer.com/'class="angled-button">
                                    ************************
                                    <span class="btn-angle">Click to Reedem</span>
                                </MainDomainLink>
                                <div className='expTc'>
                                        <MainDomainLink href='https://toonly.suproffer.com/'class="">
                                        T &amp; C
                                        </MainDomainLink>
                                        <span >
                                                Expires
                                        </span>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                <Image
                                    src="/images/accerlist.svg"
                                    alt="Adalysis"
                                    width={140}
                                    height={140}
                                    className="brand-logo"
                                    />
                                    
                                <div className="text-primary mb-2">AccelerList </div>
                                <p className="brand-discount">UP TO 20% OFF </p>

                                <MainDomainLink href='https://accelerlist.suproffer.com/'class="angled-button">
                                    ************************
                                    <span class="btn-angle">Click to Reedem</span>
                                </MainDomainLink>
                                <div className='expTc'>
                                        <MainDomainLink href='https://accelerlist.suproffer.com/'class="">
                                        T &amp; C
                                        </MainDomainLink>
                                        <span >
                                                Expires
                                        </span>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                <Image
                                    src="/images/black.avif"
                                    alt="Adalysis"
                                    width={140}
                                    height={140}
                                    className="brand-logo"
                                    />
                                    
                                <div className="text-primary mb-2">Blak Headwear Co </div>
                                <p className="brand-discount">Up to 40% OFF</p>
                               
                                <MainDomainLink href='https://blakheadwear.suproffer.com/'class="angled-button">
                                    ************************
                                    <span class="btn-angle">Click to Reedem</span>
                                </MainDomainLink>
                                <div className='expTc'>
                                        <MainDomainLink href='https://blakheadwear.suproffer.com/'class="">
                                        T &amp; C
                                        </MainDomainLink>
                                        <span >
                                                Expires
                                        </span>
                                </div>
                                </div>
                            </div>
                        </div>

                    {/* Add more cards as needed... */}

                    </div>
                </div>
            </section>

            <section className='topCouponCode'>
                <div className="container">
                    <div className='secHeading'>Today's Top Coupon Codes</div>
                    <div className="row row-cols-lg-6 row-cols-md-3 row-cols-sm-2 row-cols-2">
                        <div className="col mb-3">
                            <a className='codeItem' href='https://bottleofitaly.suproffer.com/'>
                                <div className='codeHeader'>
                                Bottle of Italy
                                        
                                </div>
                                <div className='codeFooter'>
                                     <div className="imgBox">
                                        <Image
                width={400}
                 height={400} src="/images/bottle-of-italy.webp" alt="bottle-of-italy" />
                                     </div>
                                     <div className="off">
                                           UP TO 10% OFF
                                      </div>
                                      <div className='expTc'>
                                            <span>
                                            T &amp; C
                                            </span>
                                            <span >
                                                    Expires
                                            </span>
                                      </div>
                                </div>
                                
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='codeItem' href='https://bettergrounds.suproffer.com/'>
                                <div className='codeHeader'>
                                Better Grounds
                                        
                                </div>
                                <div className='codeFooter'>
                                     <div className="imgBox">
                                        <Image
                width={400}
                 height={400} src="/images/better-grounds.avif" alt="Better Grounds" />
                                     </div>
                                     <div className="off">
                                            Up to 10% off
                                      </div>
                                      <div className='expTc'>
                                            <span>
                                            T &amp; C
                                            </span>
                                            <span >
                                                    Expires
                                            </span>
                                      </div>
                                      
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='codeItem' href='https://blessedcbd-co-uk.suproffer.com/'>
                                <div className='codeHeader'>
                                Blessed CBD Offer
                                        
                                </div>
                                <div className='codeFooter'>
                                     <div className="imgBox">
                                        <Image
                width={400}
                 height={400} src="/images/blassed-cbd.svg" alt="Blessed CBD" />
                                     </div>
                                     <div className="off">
                                            Up to 10% off
                                      </div>
                                      <div className='expTc'>
                                            <span>
                                            T &amp; C
                                            </span>
                                            <span >
                                                    Expires
                                            </span>
                                      </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='codeItem' href='https://cycle-peak.suproffer.com/'>
                                <div className='codeHeader'>
                                Cycle Peak
                                        
                                </div>
                                <div className='codeFooter'>
                                     <div className="imgBox">
                                        <Image
                width={400}
                 height={400} src="/images/cycle-peak.webp" alt="cycle-peak" />
                                     </div>
                                     <div className="off">
                                           Free Shiping
                                      </div>
                                      <div className='expTc'>
                                            <span>
                                            T &amp; C
                                            </span>
                                            <span >
                                                    Expires
                                            </span>
                                      </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='codeItem' href='https://colorcommall.suproffer.com/'>
                                <div className='codeHeader'>
                                Colorcommall Coupons
                                        
                                </div>
                                <div className='codeFooter'>
                                     <div className="imgBox">
                                        <Image
                width={400}
                 height={400} src="/images/colorcommall.avif" alt="Colorcommall Coupons" />
                                     </div>
                                     <div className="off">
                                            Up to 20% off
                                      </div>
                                      <div className='expTc'>
                                            <span>
                                            T &amp; C
                                            </span>
                                            <span >
                                                    Expires
                                            </span>
                                      </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='codeItem' href='https://cbdnorth-co.suproffer.com/'>
                                <div className='codeHeader'>
                                CBDNorth
                                        
                                </div>
                                <div className='codeFooter'>
                                     <div className="imgBox">
                                        <Image
                width={400}
                 height={400} src="/images/cbd-north.webp" alt="CBDNorth" />
                                     </div>
                                     <div className="off">
                                            Up to 20% off
                                      </div>
                                      <div className='expTc'>
                                            <span>
                                            T &amp; C
                                            </span>
                                            <span >
                                                    Expires
                                            </span>
                                      </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Top Rated Stores Section */}
            <section className="topRatedStore">
                <div className="container">
                    <div className='secHeading'>Top Rated Stores</div>
                    <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-2">
                        <div className="col">
                            <a href='https://miami-hair-shop.suproffer.com/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/miami.webp'
                                        alt='miami-hair'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                   <div class="angled-button">****************************<span class="btn-angle">Show Code</span></div>
                                    <div className="discount">
                                       Free Shiping
                                    </div>
                                    <div className="description">
                                    Buy at Miami Hair Shop - Free Shipping Included
                                    </div>
                                    <div class="expTc"><span>T &amp; C</span><span>Expires</span></div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://majolietoile.suproffer.com/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                                     width={400}
                                     height={400}
                                        src='/images/majolietoile.avif'
                                        alt='majolietoile'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                <div class="angled-button">****************************<span class="btn-angle">Show Code</span></div>
                                    
                                    <div className="discount">
                                        20% OFF
                                    </div>
                                    <div className="description">
                                    20% Off on Wall Art at Ma Jolie Toile - Save with Verified Coupon
                                    </div>
                                    <div class="expTc"><span>T &amp; C</span><span>Expires</span></div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://nationalhighwaysafetyadministration.suproffer.com/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/national-highway.webp'
                                        alt='national-highway'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                <div class="angled-button">****************************<span class="btn-angle">Show Code</span></div>
                                    
                                    <div className="discount">
                                        15% OFF
                                    </div>
                                    <div className="description">
                                    NHSA Coupon Code - Save 15% Off at Checkout
                                    </div>
                                    <div class="expTc"><span>T &amp; C</span><span>Expires</span></div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://orangecounty-cbd.suproffer.com/' className="toprated">
                                <div className="topratedTop" style={{ background: "#ff6c0d"}}>
                                    <Image
                width={400}
                 height={400}
                                        src='/images/orange-country.webp'
                                        alt='orangecounty'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                <div class="angled-button">****************************<span class="btn-angle">Show Code</span></div>
                                   
                                    <div className="discount">
                                        10% OFF
                                    </div>
                                    <div className="description">
                                    Orange County CBD Deal - 10% Off + Free Shipping over £25
                                    </div>
                                    <div class="expTc"><span>T &amp; C</span><span>Expires</span></div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://onetify.suproffer.com/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/onefity.avif'
                                        alt='natures'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                <div class="angled-button">****************************<span class="btn-angle">Show Code</span></div>
                                    
                                    <div className="discount">
                                        15% OFF
                                    </div>
                                    <div className="description">
                                    15% Off on Apparel at Onetify - Save with Verified Coupon
                                    </div>
                                    <div class="expTc"><span>T &amp; C</span><span>Expires</span></div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://ofcasafurniture.suproffer.com/' className="toprated">
                                <div className="topratedTop" style={{ background: "#272727"}}>
                                    <Image
                width={400}
                 height={400}
                                        src='/images/ofcasafurniture.avif'
                                        alt='ofcasafurniture'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                <div class="angled-button">****************************<span class="btn-angle">Show Code</span></div>
                                    
                                    <div className="discount">
                                        20% OFF
                                    </div>
                                    <div className="description">
                                    Enjoy 20% Off - Save Big at Ofcasa Furniture
                                    </div>
                                    <div class="expTc"><span>T &amp; C</span><span>Expires</span></div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://wonderfulsubs.suproffer.com/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/wonderfulsubs.avif'
                                        alt='organic'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                <div class="angled-button">****************************<span class="btn-angle">Show Code</span></div>
                                    
                                    <div className="discount">
                                        15% OFF
                                    </div>
                                    <div className="description">
                                    Optimize Life Coupon Code - Enjoy 15% Off at Checkout
                                    </div>
                                    <div class="expTc"><span>T &amp; C</span><span>Expires</span></div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://onlyformula.suproffer.com/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/onlyformula.avif'
                                        alt='onlyformula'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                <div class="angled-button">****************************<span class="btn-angle">Show Code</span></div>
                                   
                                    <div className="discount">
                                        25% OFF
                                    </div>
                                    <div className="description">
                                    25% Off on Baby Formulas at OnlyFormula - Use this Promo Code
                                    </div>
                                    <div class="expTc"><span>T &amp; C</span><span>Expires</span></div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://purerawz-co.suproffer.com/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/pureraz.webp'
                                        alt='purerawz-co'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                <div class="angled-button">****************************<span class="btn-angle">Show Code</span></div>
                                    
                                    <div className="discount">
                                        10% OFF
                                    </div>
                                    <div className="description">
                                    Don’t Miss Out - 10% Off at PureRawz
                                    </div>
                                    <div class="expTc"><span>T &amp; C</span><span>Expires</span></div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://peak365nutrition.suproffer.com/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/peak365.webp'
                                        alt='peak365nutrition'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                <div class="angled-button">****************************<span class="btn-angle">Show Code</span></div>
                                    
                                    <div className="discount">
                                        15% OFF
                                    </div>
                                    <div className="description">
                                    15% Off on Health Supplements - Save More at Peak 365 Nutrition
                                    </div>
                                    <div class="expTc"><span>T &amp; C</span><span>Expires</span></div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Online Stores Section */}
            <section className="online-store">
                <div className="container">
                    <div className='secHeading'>Top Online Stores</div>
                    <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-2">
                        <div className="col">
                            <a href='https://chayagallery.suproffer.com/' className="pickedStore" aria-label='chayagallery'>
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/chaya.avif'
                                        alt='Sauce Warehouse Coupon'
                                    />
                                </div>
                                <div className="dealCout">
                                    9 Codes
                                </div>
                            </a>
                        </div>
                      
                        <div className="col">
                            <a href='https://dryfarmwines.suproffer.com/' className="pickedStore">
                                <div className="imgBox">
                                    <Image style={{
                                        backgroundColor: '#000'
                                      }}
                width={400}
                 height={400}
                                        src='/images/dryfarmswines-text-logo-new.avif'
                                        alt='dryfarmswines'
                                    />
                                </div>
                                <div className="dealCout">
                                    8 Codes
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://drshadez.suproffer.com/' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/dr-shadez.webp'
                                        alt='drshadez'
                                    />
                                </div>
                                <div className="dealCout">
                                    7 Codes
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://designyourown-wine.suproffer.com/' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/designyourwine.avif'
                                        alt='designyourown-wine'
                                    />
                                </div>
                                <div className="dealCout">
                                    7 Codes
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://doodly.suproffer.com/' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                                    style={{ backgroundColor: '#1f729e' }}
                width={400}
                 height={400}
                                        src='/images/doodly.webp'
                                        alt='turned-ninja'
                                    />
                                </div>
                                <div className="dealCout">
                                    9 Codes
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://voromotors.suproffer.com/' className="pickedStore">
                                <div className="imgBox" style={{background: '#000'}}>
                                    <Image
                width={400}
                 height={400}
                                        src='/images/voro-motors.avif'
                                        alt='voro-motors'
                                    />
                                </div>
                                <div className="dealCout">
                                    7 Codes
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://expertpeptides.suproffer.com/' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/expert_peptides.webp'
                                        alt='wave-hawaii'
                                    />
                                </div>
                                <div className="dealCout">
                                    9 Codes
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://echowater.suproffer.com/' className="pickedStore">
                                <div className="imgBox">
                                    <Image style={{ backgroundColor: '#000' }}
                width={400}
                 height={400}
                                        src='/images/echo.webp'
                                        alt='echowater'
                                    />
                                </div>
                                <div className="dealCout">
                                    8 Codes
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://fadirtools.suproffer.com/' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/fadirtool.avif'
                                        alt='zozila'
                                    />
                                </div>
                                <div className="dealCout">
                                    9 Codes
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://gohighlevel.suproffer.com/' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/hohighlevel.webp'
                                        alt='zozila'
                                    />
                                </div>
                                <div className="dealCout">
                                    9 Codes
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="more-btn ms-auto">
                            <a href="/stores" className="btn btn-primary">Explore More</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trending Blog Section */}
            <section className="container-fluid tranding">
                <div className="container">
                    <div className="row tranding-blog">
                        <div className='secHeading'>Trending Blogs</div>
                        {[
                            {
                                title: 'List Of Amazon Upcoming Sale July 2023 | Prime Day Sale 50% OFF on...',
                                image: 'amazzon-sale.webp',
                                date: '5-Aug-2023'
                            },
                            {
                                title: 'Latest Apple Student Discount 2023 | Steps to Claim This Offer and...',
                                image: 'apple.webp',
                                date: '5-Aug-2023'
                            },
                            {
                                title: 'Yulu Bike Price And Rental Charges | Find All Details To Book Now...',
                                image: 'yulu-bike.webp',
                                date: '5-Aug-2023'
                            },
                            {
                                title: 'Top 10 Hotel Booking Sites In India | Why You Should Choose Them?..',
                                image: 'top-10-hotel-booking.webp',
                                date: '5-Aug-2023'
                            },
                            {
                                title: 'Emirates Student Offer | Details On Various Discount, T&C And More...',
                                image: 'student-offer.webp',
                                date: '5-Aug-2023'
                            },
                            {
                                title: 'Woodland Heels For Ladies: Catch The Latest Deals On Exclusive Designs...',
                                image: 'Woodland-Heels-For-Ladies.jpg.webp',
                                date: '5-Aug-2023'
                            },
                            {
                                title: 'Buy Jiobook Online: Get Details Of Price, Specifications, & Best Offers...',
                                image: 'Buy-jiobook-online.jpg.webp',
                                date: '5-Aug-2023'
                            },
                            {
                                title: 'Croma Republic Day Sale |Avail Of The Latest Bank Offers, Discount On...',
                                image: 'croma-republic-day-sale.jpg.webp',
                                date: '5-Aug-2023'
                            },
                        ].map((blog, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-sm-12 blog-box">
                                <div className="blog-item shadow-sm">
                                    <a href="/blog-details">
                                        <Image
                                            src={`/images/${blog.image}`}
                                            alt={blog.title}
                                            width={300}
                                            height={200}
                                        />
                                    </a>
                                    <a href="/blog-details"><p>{blog.title}</p></a>
                                    <span className="date">{blog.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="more-btn">
                        <a href="/all-blogs" className="btn btn-primary">More Blogs</a>
                    </div>
                </div>
            </section>
            <section className='featuredStore'>
                <div className="container">
                <div className='secHeading'>Featured Stored</div>
                    <div className="row row-cols-lg-6 row-cols-md-4 row-cols-sm-3 row-cols-3">
                        <div className='col p-0'>
                            <a href="https://hemplucid.suproffer.com/" aria-label='hemplucid'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/helplucid.svg'
                                    alt='hemplucid'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="https://herbalmana.suproffer.com/" aria-label='herbalmana'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/herbal-mana.avif'
                                    alt='herbalmana'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="https://heritagetype.suproffer.com/" aria-label='heritagetype'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/heritage.avif'
                                    alt='heritagetype'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="https://icedrop-de.suproffer.com/" aria-label='iiidmax'>
                                <Image 
                                    style={{background: '#000'}}
                                    width={100}
                                    height={100}
                                    src='/images/icedrop.avif'
                                    alt='iiidmax'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="https://iubenda.suproffer.com/" aria-label='iubenda'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/iubenda.svg'
                                    alt='iubenda'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="https://koinly-io.suproffer.com/" aria-label='koinly-io'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/koinly-review-square-logo.avif'
                                    alt='koinly-review-square-logo'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="https://justonedime.suproffer.com/" aria-label='store'>
                                <Image 
                                   style={{background: '#012f51'}}
                                    width={100}
                                    height={100}
                                    src='/images/just-one-dime.svg'
                                    alt='justonedime'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="https://platinumtherapylights.suproffer.com/" aria-label='platinumtherapylights' style={{background: '#750d02'}}>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/platinumtherapy.webp'
                                    alt='platinumtherapy'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="https://seamosskulture.suproffer.com/" aria-label='seamosskulture'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/seamosskulture.avif'
                                    alt='seamosskulture'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="https://streamyard.suproffer.com/" aria-label='streamyard'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/streamyard.svg'
                                    alt='streamyard'
                                            />
                            </a>
                        </div>
                        
                        <div className='col p-0'>
                            <a href="https://smbsm.suproffer.com/" aria-label='smbsm'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/smbsm.webp'
                                    alt='samtalbot'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="https://sellerlabs.suproffer.com/" aria-label='sellerlabs'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/sellerlabs.webp'
                                    alt='sellerlabs'
                                            />
                            </a>
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
