import { NextSeo } from 'next-seo';
import MetaTags from '@/components/MetaTags';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/home.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MainDomainLink from '@/components/MainDomainLink';


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
                title="CouponTix - Best Coupons & Deals"
                description="Find the best coupons, deals, and discounts for top brands"
            />
            <MetaTags />

            {/* Home Banner Section */}
            {/* Home Banner Section with react-responsive-carousel */}
            <section className='homeImageBanner'>
                <h1>Shop now to get discount</h1>
               <a href="/stores" aria-label="Shop Now and get discount" title='Shop Now and get discount'> <img
                  loading='lazy'
                  src="/images/suproffer-banner.webp" alt="shop now" /></a>
            </section>
            <section className="homeBanner">
                <div className="container">
                    <Carousel
                        showArrows={true}
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={5000}
                        stopOnHover={true}
                        swipeable={true}
                        dynamicHeight={false}
                        emulateTouch={true}
                        className="banner-carousel"
                    >
                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                            <div key={num} className="banner-slide">
                                <a href="#">
                                    <Image
                                        src={`/images/banner-${num}.jpg`}
                                        alt={`Banner ${num}`}
                                        width={1200}
                                        height={400}
                                        className="img-fluid"
                                        priority={num === 1} // Only prioritize first image
                                    />
                                </a>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>

           
            <section className="newPopular">
                <div className="container">
                    <h3 className="secHeading">Most Popular Brands</h3>
                    <div className="row row-col-2 row-cols-lg-5 row-cols-md-3 g-3">
                        <div className="col mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                <Image
                                    src="/images/adalysis.svg"
                                    alt="Adalysis"
                                    width={140}
                                    height={140}
                                    className="brand-logo"
                                    />
                                    
                                <div className="text-primary mb-2">Exclusive Discount</div>
                                <p className="brand-discount">Up to 40% OFF</p>
                                <a href='/' className="btn btn-purple brand-button">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                <Image
                                    src="/images/adalysis.svg"
                                    alt="Adalysis"
                                    width={140}
                                    height={140}
                                    className="brand-logo"
                                    />
                                    
                                <div className="text-primary mb-2">Exclusive Discount</div>
                                <p className="brand-discount">Up to 40% OFF</p>
                                <a href='/' className="btn btn-purple brand-button">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                <Image
                                    src="/images/adalysis.svg"
                                    alt="Adalysis"
                                    width={140}
                                    height={140}
                                    className="brand-logo"
                                    />
                                    
                                <div className="text-primary mb-2">Exclusive Discount</div>
                                <p className="brand-discount">Up to 40% OFF</p>
                                <a href='/' className="btn btn-purple brand-button">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                <Image
                                    src="/images/adalysis.svg"
                                    alt="Adalysis"
                                    width={140}
                                    height={140}
                                    className="brand-logo"
                                    />
                                    
                                <div className="text-primary mb-2">Exclusive Discount</div>
                                <p className="brand-discount">Up to 40% OFF</p>
                                <a href='/' className="btn btn-purple brand-button">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                <Image
                                    src="/images/adalysis.svg"
                                    alt="Adalysis"
                                    width={140}
                                    height={140}
                                    className="brand-logo"
                                    />
                                    
                                <div className="text-primary mb-2">Exclusive Discount</div>
                                <p className="brand-discount">Up to 40% OFF</p>
                                <a href='/' className="btn btn-purple brand-button">Shop Now</a>
                                </div>
                            </div>
                        </div>

                    {/* Add more cards as needed... */}

                    </div>
                </div>
            </section>

            <section className='topCouponCode'>
                <div className="container">
                    <h2 className='secHeading'>Today's Top Coupon Codes</h2>
                    <div className="row row-cols-lg-6 row-cols-md-3 row-cols-sm-2 row-cols-2">
                        <div className="col mb-3">
                            <a className='codeItem' href='https://coupontix.com/ezeasproducts-com-au-coupons'>
                                <div className='codeHeader'>
                                EzeAs Products
                                        
                                </div>
                                <div className='codeFooter'>
                                     <div className="imgBox">
                                        <Image
                width={400}
                 height={400} src="/images/eseas.webp" alt="eseas" />
                                     </div>
                                     <div className="off">
                                           UP TO 10% OFF
                                      </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='codeItem' href='https://coupontix.com/gummee.life/'>
                                <div className='codeHeader'>
                                Gummee Offer
                                        
                                </div>
                                <div className='codeFooter'>
                                     <div className="imgBox">
                                        <Image
                width={400}
                 height={400} src="/images/gummee.webp" alt="gummee" />
                                     </div>
                                     <div className="off">
                                            Up to 20% off
                                      </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='codeItem' href='https://coupontix.com/getterms.io'>
                                <div className='codeHeader'>
                                   GetTerms Offer
                                        
                                </div>
                                <div className='codeFooter'>
                                     <div className="imgBox">
                                        <Image
                width={400}
                 height={400} src="/images/getterms.png" alt="getterms" />
                                     </div>
                                     <div className="off">
                                            Up to 10% off
                                      </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='codeItem' href='https://coupontix.com/geneticlabsaustralia-coupons/'>
                                <div className='codeHeader'>
                                Genetic Labs Australia 
                                        
                                </div>
                                <div className='codeFooter'>
                                     <div className="imgBox" style={{ background: "#000"}}>
                                        <Image
                width={400}
                 height={400} src="/images/genetic-lab.avif" alt="genetic-lab" />
                                     </div>
                                     <div className="off">
                                           Free Shiping
                                      </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='codeItem' href='https://coupontix.com/happydownloads.net/'>
                                <div className='codeHeader'>
                                HappyDownloads Offer
                                        
                                </div>
                                <div className='codeFooter'>
                                     <div className="imgBox">
                                        <Image
                width={400}
                 height={400} src="/images/happy-download.webp" alt="happy-download" />
                                     </div>
                                     <div className="off">
                                            Up to 20% off
                                      </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='codeItem' href='https://coupontix.com/hoooyi-coupons/'>
                                <div className='codeHeader'>
                                Hoooyi Offer
                                        
                                </div>
                                <div className='codeFooter'>
                                     <div className="imgBox" style={{ background: "#000"}}>
                                        <Image
                width={400}
                 height={400} src="/images/hooyi.avif" alt="hoooyi" />
                                     </div>
                                     <div className="off">
                                            Up to 20% off
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
                    <h2>Top Rated Stores</h2>
                    <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-2">
                        <div className="col">
                            <a href='https://coupontix.com/nailsbestbuy-coupons/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/inails.webp'
                                        alt='inails'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                    <div className="storeName">
                                        <small>Get Deal</small>
                                    </div>
                                    <div className="discount">
                                        10% OFF
                                    </div>
                                    <div className="description">
                                    iNail Supply Promo Code - Save 15% Off
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://coupontix.com/level8cases-coupons' className="toprated">
                                <div className="topratedTop">
                                    <Image
                                     width={400}
                                     height={400}
                                        src='/images/level8.avif'
                                        alt='level8'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                    <div className="storeName">
                                        <small>Get Deal</small>
                                    </div>
                                    <div className="discount">
                                        15% OFF
                                    </div>
                                    <div className="description">
                                    Exclusive Discount - 15% Off on Lightweight Luggage
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://coupontix.com/mrimin-coupons' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/mrimin.webp'
                                        alt='disney-store'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                    <div className="storeName">
                                        <small>Get Deal</small>
                                    </div>
                                    <div className="discount">
                                        20% OFF
                                    </div>
                                    <div className="description">
                                    Up to 20% Off - Save More on Pleasure Toys
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://coupontix.com/moomenn-coupons/' className="toprated">
                                <div className="topratedTop" style={{ background: "#000"}}>
                                    <Image
                width={400}
                 height={400}
                                        src='/images/moomen.avif'
                                        alt='moomen'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                    <div className="storeName">
                                        <small>Get Code</small>
                                    </div>
                                    <div className="discount">
                                        10% OFF
                                    </div>
                                    <div className="description">
                                        Up to 20% Off Coupon Code - Save Big on Modest Clothing
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://coupontix.com/naturesoil-coupons/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/natures.jpg'
                                        alt='natures'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                    <div className="storeName">
                                        <small>Get Code</small>
                                    </div>
                                    <div className="discount">
                                        20% OFF
                                    </div>
                                    <div className="description">
                                    Up to 20% Off Coupon Code - Exclusive Offer on Fragrance Oils
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://coupontix.com/oakcitybeardcompany-coupons' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/oakcity.webp'
                                        alt='oakcity'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                    <div className="storeName">
                                        <small>Get Deal</small>
                                    </div>
                                    <div className="discount">
                                        20% OFF
                                    </div>
                                    <div className="description">
                                    Up to 20% Off - Save Big on Beard Care Products
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://coupontix.com/organicformulashop-coupons' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/organic.avif'
                                        alt='organic'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                    <div className="storeName">
                                        <small>Get Deal</small>
                                    </div>
                                    <div className="discount">
                                        15% OFF
                                    </div>
                                    <div className="description">
                                    15% Off on Hipp Dutch Organic Formula - Save Big Today
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://coupontix.com/ca-outsmarted-coupons' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/outsmarted.avif'
                                        alt='outsmarted'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                    <div className="storeName">
                                        <small>Get Code</small>
                                    </div>
                                    <div className="discount">
                                        30% OFF
                                    </div>
                                    <div className="description">
                                    Up to 30% Off - Save Big on Outsmarted The Family Bundle
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://coupontix.com/santasofficialnorthpolemail-coupons' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/santa.webp'
                                        alt='santa'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                    <div className="storeName">
                                        <small>Get Deal</small>
                                    </div>
                                    <div className="discount">
                                        20% OFF
                                    </div>
                                    <div className="description">
                                    Up to 20% Off - Save More on Personalized Letters
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://coupontix.com/omoshiroiblock-coupons' className="toprated">
                                <div className="topratedTop" style={{ background: "#000"}}>
                                    <Image
                width={400}
                 height={400}
                                        src='/images/omoshiroi.png'
                                        alt='omoshiroi'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                    <div className="storeName">
                                        <small>Get code</small>
                                    </div>
                                    <div className="discount">
                                        15% OFF
                                    </div>
                                    <div className="description">
                                    Omoshiroi Block Promo Code - Unlock 15% Off
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Online Stores Section */}
            <section className="online-store">
                <div className="container">
                    <h2>Top Online Stores</h2>
                    <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-2">
                        <div className="col">
                            <a href='https://coupontix.com/saucewarehouse-coupons' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/sauce.avif'
                                        alt='Sauce Warehouse Coupon'
                                    />
                                </div>
                                <div className="dealCout">
                                    9 Deals
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://coupontix.com/solti-coupons' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/solti.avif'
                                        alt='salti'
                                    />
                                </div>
                                <div className="dealCout">
                                    10 Deals
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://coupontix.com/sunnysunday.ca/' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/sunny-sunday.webp'
                                        alt='sunny-sunday'
                                    />
                                </div>
                                <div className="dealCout">
                                    8 Deals
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='http://coupontix.com/tampaschoolofrealestate-coupons/' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/tampa-school.avif'
                                        alt='tampa-school'
                                    />
                                </div>
                                <div className="dealCout">
                                    7 Deals
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://coupontix.com/thewatermachine-coupons' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/water-machine.avif'
                                        alt='water-machine'
                                    />
                                </div>
                                <div className="dealCout">
                                    7 Deals
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://coupontix.com/turnedninja-coupons' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/turned-ninja.png'
                                        alt='turned-ninja'
                                    />
                                </div>
                                <div className="dealCout">
                                    9 Deals
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://coupontix.com/viralecomadz-coupons' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/viral-ecom.avif'
                                        alt='north-face'
                                    />
                                </div>
                                <div className="dealCout">
                                    7 Deals
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://coupontix.com/wave-hawaii-coupons' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/wave-hawai.avif'
                                        alt='wave-hawaii'
                                    />
                                </div>
                                <div className="dealCout">
                                    9 Deals
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://coupontix.com/yerbae-coupons' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/yerbae.avif'
                                        alt='yerbae'
                                    />
                                </div>
                                <div className="dealCout">
                                    8 Deals
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://coupontix.com/zojila-coupons' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/zozila.webp'
                                        alt='zozila'
                                    />
                                </div>
                                <div className="dealCout">
                                    9 Deals
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
                        <h2>Trending Blogs</h2>
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
                <h2 className='secHeading'>Featured Stored</h2>
                    <div className="row row-cols-lg-6 row-cols-md-4 row-cols-sm-3 row-cols-3">
                        <div className='col p-0'>
                            <a href="/" aria-label='store'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/sauce.avif'
                                    alt='Sauce Warehouse Coupon'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="/" aria-label='store'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/eseas.webp'
                                    alt='Sauce Warehouse Coupon'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="/" aria-label='store'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/gummee.webp'
                                    alt='Sauce Warehouse Coupon'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="/" aria-label='store'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/getterms.png'
                                    alt='Sauce Warehouse Coupon'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="/" aria-label='store'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/happy-download.webp'
                                    alt='Sauce Warehouse Coupon'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="/" aria-label='store'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/level8.avif'
                                    alt='Sauce Warehouse Coupon'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="/" aria-label='store'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/mrimin.webp'
                                    alt='Sauce Warehouse Coupon'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="/" aria-label='store'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/natures.jpg'
                                    alt='Sauce Warehouse Coupon'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="/" aria-label='store'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/oakcity.webp'
                                    alt='Sauce Warehouse Coupon'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="/" aria-label='store'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/organic.avif'
                                    alt='Sauce Warehouse Coupon'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="/" aria-label='store'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/outsmarted.avif'
                                    alt='Sauce Warehouse Coupon'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="/" aria-label='store'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/sunny-sunday.webp'
                                    alt='Sauce Warehouse Coupon'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="/" aria-label='store'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/tampa-school.avif'
                                    alt='Sauce Warehouse Coupon'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="/" aria-label='store'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/water-machine.avif'
                                    alt='Sauce Warehouse Coupon'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="/" aria-label='store'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/viral-ecom.avif'
                                    alt='Sauce Warehouse Coupon'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="/" aria-label='store'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/wave-hawai.avif'
                                    alt='Sauce Warehouse Coupon'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="/" aria-label='store'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/yerbae.avif'
                                    alt='Sauce Warehouse Coupon'
                                            />
                            </a>
                        </div>
                        <div className='col p-0'>
                            <a href="/" aria-label='store'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/sauce.avif'
                                    alt='Sauce Warehouse Coupon'
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
    // Fetch all store categories
    const categoryRes = await fetch(`https://admin.coupontix.com/api/store-categories?pagination[pageSize]=8`);
    const categoryData = await categoryRes.json();

    // Fetch stores for each home_option
    const topRatedRes = await fetch(`https://admin.coupontix.com/api/stores?pagination[pageSize]=18&filters[home_options][$eq]=Top Rated Stores&populate=*`);
    const featuredRes = await fetch(`https://admin.coupontix.com/api/stores?pagination[pageSize]=18&filters[home_options][$eq]=Featured Stores&populate=*`);
    const topOnlineRes = await fetch(`https://admin.coupontix.com/api/stores?pagination[pageSize]=18&filters[home_options][$eq]=Top Online Stores&populate=*`);

    // Parse JSON responses
    const [topRatedData, featuredData, topOnlineData] = await Promise.all([
        topRatedRes.json(),
        featuredRes.json(),
        topOnlineRes.json(),
    ]);

    return {
        props: {
            categories: categoryData || [],
            topRatedStores: topRatedData || [],
            featuredStores: featuredData || [],
            topOnlineStores: topOnlineData || [],
        },
        revalidate: 10, // ISR - revalidate every 10 seconds
    };
}
