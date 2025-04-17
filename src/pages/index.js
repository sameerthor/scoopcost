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
                  src="/images/coupontix-banner.webp" alt="shop now" /></a>
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

            <section className='newCat'>
                <div className="container">
                    <h2 className='secHeading'>Explore Category</h2>
                    <div className="row row-cols-2">
                        <div className="col-lg-2 col-md-4">
                            <MainDomainLink className="catItem" href='/category/Health-and-Wellness'>
                                <div className="imageBox">
                                    <Image
                width={400}
                 height={400} src="/images/health.png" alt="health-and-wellness Icon" />
                                </div>
                                <div className="catTitle">
                                    Health & Wellness
                                </div>
                            </MainDomainLink>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <MainDomainLink className="catItem" href='/category/Beauty-Products'>
                                <div className="imageBox">
                                    <Image
                width={400}
                 height={400} src="/images/beauty.png" alt="beauty Icon" />
                                </div>
                                <div className="catTitle">
                                    Beauty Product
                                </div>
                            </MainDomainLink>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <MainDomainLink className="catItem" href='category/Online-Courses'>
                                <div className="imageBox">
                                    <Image
                width={400}
                 height={400} src="/images/online-courses.png" alt="online-courses Icon" />
                                </div>
                                <div className="catTitle">
                                    Online Courses
                                </div>
                            </MainDomainLink>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <MainDomainLink className="catItem" href='/category/Software'>
                                <div className="imageBox">
                                    <Image
                width={400}
                 height={400} src="/images/software.png" alt="software Icon" />
                                </div>
                                <div className="catTitle">
                                    Software
                                </div>
                            </MainDomainLink>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <MainDomainLink className="catItem" href='/category/Stationery'>
                                <div className="imageBox">
                                    <Image
                width={400}
                 height={400} src="/images/stationery.png" alt="stationery Icon" />
                                </div>
                                <div className="catTitle">
                                    Stationery
                                </div>
                            </MainDomainLink>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <MainDomainLink className="catItem" href='/category/Clothing-and-Accessories'>
                                <div className="imageBox">
                                    <Image
                width={400}
                 height={400} src="/images/clothing.png" alt="clothing Icon" />
                                </div>
                                <div className="catTitle">
                                    Clothing & Accessories
                                </div>
                            </MainDomainLink>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pplBrands'>
                <div className="container">
                    <h2 className='secHeading'>Most Popular Brands</h2>
                    <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-2">
                        <div className="col mb-3">
                            <a className="pplItem" href='https://allcleartravel-co-uk.coupontix.com/'> 
                                <div className="pplImg">
                                    <Image
                width={400}
                 height={400} src="/images/AllClear-logo-Standard.svg" alt="all-clear" />
                                </div>
                                <div className='pplTitle'>
                                Enjoy 15% Off on Europe and Worldwide Travel Insurance.
                                </div>
                                <div className='btn'>
                                    UP TO 40% OFF
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className="pplItem" href='https://americangrazedbeef.coupontix.com/'> 
                                <div className="pplImg">
                                    <Image
                width={400}
                 height={400} src="/images/americangrazedbeef.webp" alt="americangrazedbeef" />
                                </div>
                                <div className='pplTitle'>
                                Enjoy Free Delivery on orders over $175. Shop now!
                                </div>
                                <div className='btn'>
                                   Free Delivery
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className="pplItem" href='https://curiebod.coupontix.com/'> 
                                <div className="pplImg">
                                    <Image
                width={400}
                 height={400} src="/images/curie.avif" alt="curie" />
                                </div>
                                <div className='pplTitle'>
                                Spend $35+ to get a free shipping offer from Curie.
                                </div>
                                <div className='btn'>
                                Free Shipping 
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className="pplItem" href='https://hitchfit.coupontix.com/'> 
                                <div className="pplImg">
                                    <Image
                width={400}
                 height={400} src="/images/hitchfit.png" alt="hitchfit" />
                                </div>
                                <div className='pplTitle'>
                                Up to 20% Off - Save Big at hitchfit.com
                                </div>
                                <div className='btn'>
                                    UP TO 20% OFF
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className="pplItem" href='https://artofliving-org.coupontix.com/'> 
                                <div className="pplImg">
                                    <Image
                width={400}
                 height={400} src="/images/art-of-living.png" alt="art-of-living" />
                                </div>
                                <div className='pplTitle'>
                                Art of Living Deal - 10% Off + Money Back Gaurantee
                                </div>
                                <div className='btn'>
                                    UP TO 15% OFF
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className="pplItem" href='https://arabellahair.coupontix.com/'> 
                                <div className="pplImg">
                                    <Image
                width={400}
                 height={400} src="/images/arabella.avif" alt="arabella" />
                                </div>
                                <div className='pplTitle'>
                                Enjoy Free Shipping on all orders in the US. Shop now!
                                </div>
                                <div className='btn'>
                                   Free Shipping
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className="pplItem" href='https://shopgoldleaf.coupontix.com/'> 
                                <div className="pplImg">
                                    <Image
                width={400}
                 height={400} src="/images/shopgoldleaf.webp" alt="shopgoldleaf" />
                                </div>
                                <div className='pplTitle'>
                                Goldleaf free shipping on domestic orders over $75.
                                </div>
                                <div className='btn'>
                                  Free Shipping 
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className="pplItem" href='https://reebok.coupontix.com/'> 
                                <div className="pplImg">
                                    <Image
                width={400}
                 height={400} src="/images/reebok.avif" alt="reebok" />
                                </div>
                                <div className='pplTitle'>
                                    Reebok Promo Code - Get 15% Off
                                </div>
                                <div className='btn'>
                                Redeem 15% Off 
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className="pplItem" href='https://eztaxreturn.coupontix.com/'> 
                                <div className="pplImg">
                                    <Image
                width={400}
                 height={400} src="/images/e-z.webp" alt="e-z" />
                                </div>
                                <div className='pplTitle'>
                                20% Off on Tax Preparation Services - Redeem Your Discount.
                                </div>
                                <div className='btn'>
                               20% Off 
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className="pplItem" href='https://grammarly.coupontix.com/'> 
                                <div className="pplImg">
                                    <Image
                width={400}
                 height={400} src="/images/grammerly.png" alt="grammerly" />
                                </div>
                                <div className='pplTitle'>
                                Save Big Today - 10% Off on Paraphrasing Tool
                                </div>
                                <div className='btn'>
                               30% Off 
                                </div>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className='topCouponCode'>
                <div className="container">
                    <h2 className='secHeading'>Today's Top Coupon Codes</h2>
                    <div className="row row-cols-lg-6 row-cols-md-3 row-cols-sm-2 row-cols-2">
                        <div className="col mb-3">
                            <a className='codeItem' href='https://etsy.coupontix.com/'>
                                <div className='codeHeader'>
                                    Etsy Offer
                                        
                                </div>
                                <div className='codeFooter'>
                                     <div className="imgBox">
                                        <Image
                width={400}
                 height={400} src="/images/etsy.webp" alt="etsy" />
                                     </div>
                                     <div className="off">
                                            Flat  20% off
                                      </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='codeItem' href='https://expressvpn.coupontix.com/'>
                                <div className='codeHeader'>
                                    Express VPN Offer
                                        
                                </div>
                                <div className='codeFooter'>
                                     <div className="imgBox">
                                        <Image
                width={400}
                 height={400} src="/images/expressvpn.svg" alt="express-vpn" />
                                     </div>
                                     <div className="off">
                                            Up to 20% off
                                      </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='codeItem' href='https://freshbooks.coupontix.com/'>
                                <div className='codeHeader'>
                                    Freshbook Offer
                                        
                                </div>
                                <div className='codeFooter'>
                                     <div className="imgBox" style={{background: "#002d7a"}}>
                                        <Image
                width={400}
                 height={400} src="/images/freshbook.svg" alt="freshbook" />
                                     </div>
                                     <div className="off">
                                            Up to 40% off
                                      </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='codeItem' href='https://icebarrel.coupontix.com/'>
                                <div className='codeHeader'>
                                    Ice Barrel Offer
                                        
                                </div>
                                <div className='codeFooter'>
                                     <div className="imgBox">
                                        <Image
                width={400}
                 height={400} src="/images/ice-barrel.avif" alt="ice-barrel" />
                                     </div>
                                     <div className="off">
                                            Up to 30% off
                                      </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='codeItem' href='https://kohler.coupontix.com/'>
                                <div className='codeHeader'>
                                    Kohler Offer
                                        
                                </div>
                                <div className='codeFooter'>
                                     <div className="imgBox">
                                        <Image
                width={400}
                 height={400} src="/images/kohler.svg" alt="kohler" />
                                     </div>
                                     <div className="off">
                                            Up to 40% off
                                      </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-3">
                            <a className='codeItem' href='https://maccosmetics.coupontix.com/'>
                                <div className='codeHeader'>
                                MAC Cosmetics 
                                        
                                </div>
                                <div className='codeFooter'>
                                     <div className="imgBox">
                                        <Image
                width={400}
                 height={400} src="/images/mac.png" alt="mac" />
                                     </div>
                                     <div className="off">
                                            Up to 10% off
                                      </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Explore Categories Section */}
            <section className="container-fluid categories-box">
                <div className="container">
                    <h2>Shop by categories</h2>
                    <div className="row">
                        {categories.data.map((category, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-sm-6 category-item">
                                <div className="category-brand container">
                                    <div className="d-flex justify-content-center align-items-center text-align-center">
                                        <a href={`category/${category.Slug}`}>
                                            <span>   <Image
                                                width={50}
                                                height={50}
                                                src={category.Image?.url ? process.env.NEXT_PUBLIC_IMAGE_URL + category.Image?.url : "/images/default-placeholder.png"}
                                                alt={(category.Title) + ' Icon' || "Category"}
                                            /></span>
                                            {category.Title}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="more-btn">
                        <a href="/category" className="btn btn-primary">Explore More</a>
                    </div>
                </div>
            </section>
            {/* Top Rated Stores Section */}
            <section className="topRatedStore">
                <div className="container">
                    <h2>Top Rated Stores</h2>
                    <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-2">
                        <div className="col">
                            <a href='https://costco.coupontix.com/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/costco.webp'
                                        alt='costco'
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
                                    Take 10% Off on Engagement Rings at catbirdnyc.com.
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://enemasupply.coupontix.com/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                                     width={400}
                                     height={400}
                                        src='/images/enemasupply.avif'
                                        alt='enemasupply'
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
                                    enemasupply.com - Enjoy free shipping on all orders over $50. Shop now!
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://disneystore.coupontix.com/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/disney-store.svg'
                                        alt='disney-store'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                    <div className="storeName">
                                        <small>Get Deal</small>
                                    </div>
                                    <div className="discount">
                                        40% OFF
                                    </div>
                                    <div className="description">
                                    Disney Store Deal - Enjoy Free Shipping on orders over $75 in the US.
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://eggwhitesint.coupontix.com/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/eggwhite.jpg'
                                        alt='eggwhite'
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
                                    Egg Whites International - Buy Omega-3 Fish Oil (3 Bottles) at a discount 15% Off.
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://traversebayfarms.coupontix.com/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/traverse-bay.webp'
                                        alt='traverse-bay'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                    <div className="storeName">
                                        <small>Get Code</small>
                                    </div>
                                    <div className="discount">
                                        15% OFF
                                    </div>
                                    <div className="description">
                                    Shop now and get 10% Off on Tart Cherry Juice Concentrate.
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://udemy.coupontix.com/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/udemy.svg'
                                        alt='udemy'
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
                                    Apply Udemy Promo Code to get 20% Off on all orders.
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://vitabalance-net.coupontix.com/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/vitabalance.png'
                                        alt='vitabalance'
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
                                       Vita Balance Deal - 15% Off + Free Shipping
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://zacalife.coupontix.com/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/zaca.webp'
                                        alt='zaca-life'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                    <div className="storeName">
                                        <small>Get Code</small>
                                    </div>
                                    <div className="discount">
                                        15% OFF
                                    </div>
                                    <div className="description">
                                    Subscribe and save 15% Off on your entire order at Zaca.
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://hugoboss.coupontix.com/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/hugo-boss.jpg'
                                        alt='hogo-boss'
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
                                    Hugo Boss Deal - 15% Off + Free Shipping
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://kendrascott.coupontix.com/' className="toprated">
                                <div className="topratedTop">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/kendra.svg'
                                        alt='hogo-boss'
                                    />
                                </div>
                                <div className="topRatedBottom">
                                    <div className="storeName">
                                        <small>Get code</small>
                                    </div>
                                    <div className="discount">
                                        10% OFF
                                    </div>
                                    <div className="description">
                                    Up to 20% Off on Kendra Scott
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
                            <a href='https://barkbox.coupontix.com/' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/bark-box.svg'
                                        alt='bark-box'
                                    />
                                </div>
                                <div className="dealCout">
                                    8 Deals
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://bestbuy.coupontix.com/' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/best-buy.jpg'
                                        alt='best-buy'
                                    />
                                </div>
                                <div className="dealCout">
                                    9 Deals
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://cartfuel-io.coupontix.com/' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/cartfuel.svg'
                                        alt='cartfuel'
                                    />
                                </div>
                                <div className="dealCout">
                                    7 Deals
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://catbirdnyc.coupontix.com/' className="pickedStore">
                                <div className="imgBox" style={{ background: "#000"}}>
                                    <Image
                width={400}
                 height={400}
                                        src='/images/catbird.webp'
                                        alt='catbird'
                                    />
                                </div>
                                <div className="dealCout">
                                    9 Deals
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://portionsmaster.coupontix.com/' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/partions.webp'
                                        alt='pationsmaster'
                                    />
                                </div>
                                <div className="dealCout">
                                    9 Deals
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://samsonite.coupontix.com/' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/samsnight.png'
                                        alt='samsnight'
                                    />
                                </div>
                                <div className="dealCout">
                                    9 Deals
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://thenorthface.coupontix.com/' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/north-face.svg'
                                        alt='north-face'
                                    />
                                </div>
                                <div className="dealCout">
                                    9 Deals
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://catbirdnyc.coupontix.com/' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/torrid.png'
                                        alt='catbird'
                                    />
                                </div>
                                <div className="dealCout">
                                    9 Deals
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://rhinokeyorganizer.coupontix.com/' className="pickedStore">
                                <div className="imgBox">
                                    <Image
                width={400}
                 height={400}
                                        src='/images/rhinokey.avif'
                                        alt='rhinokey'
                                    />
                                </div>
                                <div className="dealCout">
                                    7 Deals
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://sfuelsgolonger.coupontix.com/' className="pickedStore">
                                <div className="imgBox" style={{ background: "#137bba"}}>
                                    <Image
                width={400}
                 height={400}
                                        src='/images/sfuels.svg'
                                        alt='sfuels'
                                    />
                                </div>
                                <div className="dealCout">
                                    7 Deals
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
