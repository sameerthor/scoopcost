import { NextSeo } from 'next-seo';
import MetaTags from '@/components/MetaTags';
import RandomDatesList from '@/components/RandomDatesList';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/giftcard.css";
import { Carousel } from 'react-responsive-carousel';
import MainDomainLink from '@/components/MainDomainLink';
import { useMemo } from 'react';
import { useState, useRef, useEffect } from 'react';
import ResponsiveCarousel from "@/components/ResponsiveCarousel";
import CustomSelect from '@/components/CustomSelect';


export default function HomePage({ categories,topRatedStores,featuredStores,topOnlineStores }) {
    // const accordionId = `accordion-${index}`;
    // const collapseId = `collapse-${index}`;
    const options = [
            { value: 'udemy', label: 'Udemy', image: '/images/udemy.svg' },
            { value: 'coursera', label: 'Coursera', image: '/images/coursera.svg' },
            { value: 'edx', label: 'edX', image: '/images/edx.svg' },
];
    const firstCarousel = [
        <div className="imgItem">
            <div className='overLay'>
                   <div className='overLayBox'>
                        <div className='title'> 
                                Pay <span>₹95,521.01</span> today to get <span>₹1,00,022</span> redemption at Zomato.
                        </div>
                        <Image 
                            width={130}
                            height={350} 
                            src="/images/banner-bg-1.png" loading="lazy" alt="logo" />
                          
                   </div>
                    <Image 
                        width={800}
                        height={340} 
                        src="/images/banner-bg.png" loading="lazy" alt="logo" />
            </div>
        </div>,
        <div className="imgItem">
            <div className='overLay'>
                   <div className='overLayBox'>
                        <div className='title'> 
                               You save an additional <span>₹4,500.99</span> at this Gift cart
                        </div>
                        <Image 
                            width={130}
                            height={350} 
                            src="/images/banner-bg-1.png" loading="lazy" alt="logo" />
                          
                   </div>
                    <Image 
                        width={800}
                        height={340} 
                        src="/images/banner-bg.png" loading="lazy" alt="logo" />
            </div>
        </div>,
        
    
    ];

    
 ;

  

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
    const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


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
                            <div className="checkOutContainer">
                                <div className='headFlex'>
                                    <div>
                                        <h1 className='brandName'>Zomato</h1>
                                        <div className='brandCat'>
                                            <label htmlFor="">Food</label>
                                        </div>
                                        <div className="brandDiscount">
                                                22% OFF
                                        </div>
                                    </div>
                                    <div className='brandImg'>
                                            <Image 
                                                width={150}
                                                height={50} 
                                                src="/images/zomato.webp" loading="lazy" alt="logo" />
                                    </div>
                                </div>
                                <form action="#">
                                    <div className="msgBox">
                                        <label className='err me-auto d-none'>Amount exceedec the max value</label>
                                        <label className='ms-auto' htmlFor='cardAmount'>Max: 100000INR</label>
                                    </div>
                                    <div className='inputBox'>
                                        <input type="text" id='cardAmount' className='form-control' value='₹100000' />
                                    </div>
                                    <div className="inputBox">
                                        <label htmlFor="paymentMethod">Payment method</label>
                                         <CustomSelect />
                                    </div>
                                    <div>
                                        <button
                                            className="promobtn"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#showInput"
                                            aria-expanded="false"
                                            aria-controls="showInput"
                                        >
                                           Have a promo code? Apply here
                                        </button>
                                    </div>
                                    <div
                                        id="showInput"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <div className='promoInputBox'>
                                                <input type="text" className='form-control' placeholder='Eg. SCOOP20' />
                                                <button>Apply Here</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="payAmt">You pay only</label>
                                        <div className='finalAmt'>
                                            <span>₹ 99999</span>
                                            <small>₹ 100022.00</small>
                                        </div>
                                    </div>
                                    <div className='payBtn'>
                                        <button type='submit'>Proceed to pay | ₹95521.01</button>
                                    </div>
                                    <div className='pgateway'>
                                        <span>Safe & Secure payment by razorpay</span>
                                         <Image 
                                                width={150}
                                                height={50} 
                                                src="/images/razorpay.svg" loading="lazy" alt="logo" />
                                    </div>
                                </form>
                            </div>
                         </div> 
                        <div className="col-lg-5 topCarousel">
                                <ResponsiveCarousel
                                    items={firstCarousel}
                                    idPrefix="firstCarousel"
                                    responsiveConfig={{ xs: 1, sm: 1, md: 1 }}
                                />
                                <div className="features-grid">
                                    <div className="feature-card">
                                        <div className="icon-box">
                                        💻
                                        </div>
                                        <div className="feature-text">
                                        <h4>Pay Online</h4>
                                        <p>Use it on apps and websites securely.</p>
                                        </div>
                                    </div>

                                    <div className="feature-card">
                                        <div className="icon-box">
                                        🔁
                                        </div>
                                        <div className="feature-text">
                                        <h4>Multi Use</h4>
                                        <p>Spend in parts until balance is used.</p>
                                        </div>
                                    </div>

                                    <div className="feature-card">
                                        <div className="icon-box">
                                        📅
                                        </div>
                                        <div className="feature-text">
                                        <h4>Valid for 4 Years</h4>
                                        <p>Redeemable up to 4 years after purchase.</p>
                                        </div>
                                    </div>

                                    <div className="feature-card">
                                        <div className="icon-box">
                                        🎁
                                        </div>
                                        <div className="feature-text">
                                        <h4>Clubbed with Offers</h4>
                                        <p>Combine with discounts and promos.</p>
                                        </div>
                                    </div>
 
                                </div>
                        </div>
                    </div>
                </div>
           </section>
           <section className='faqssec'>
                <div className="container py-5">
                    <h2 className="mb-4 text-center secHeading">Frequently Asked Questions About Gift Cards</h2>

                    <div className="accordion" id="giftCardFaq">
                        <div className="accordion-item">
                        <h2 className="accordion-header" id="faq1">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                              What is a gift card and how does it work?
                              
                            </button>
                        </h2>
                        <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#giftCardFaq">
                            <div className="accordion-body">
                            A gift card is a prepaid card that can be used to make purchases at specific stores or websites. Simply use it like a debit card at checkout.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="faq2">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                            Can I reload or top up my gift card?
                            </button>
                        </h2>
                        <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#giftCardFaq">
                            <div className="accordion-body">
                            Most gift cards are not reloadable, but some brands offer reloadable options. Check the card's terms or the issuing store’s policy.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="faq3">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                            Do gift cards expire?
                            </button>
                        </h2>
                        <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#giftCardFaq">
                            <div className="accordion-body">
                            Some gift cards have expiration dates, while others do not. Always check the expiration terms printed on the card or packaging.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="faq4">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            What happens if I lose my gift card?
                            </button>
                        </h2>
                        <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="faq4" data-bs-parent="#giftCardFaq">
                            <div className="accordion-body">
                            Lost gift cards are generally not replaceable unless they are registered and the provider offers a recovery policy. Always register your card if possible.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="faq5">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                            Can I use a gift card for online purchases?
                            </button>
                        </h2>
                        <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="faq5" data-bs-parent="#giftCardFaq">
                            <div className="accordion-body">
                            Yes, most gift cards can be used online. Ensure the site accepts gift cards, and you may need to enter the card number and security code.
                            </div>
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
                            <a class="brand-card" href=''>
                                <Image  className='brand-logo'
                                        width={80}
                                        height={80} 
                                        src="/images/udemy.svg" loading="lazy" alt="udemy" />
                                <div class="brand-name">Udemy</div>
                                <div class="brand-discount">8% Off</div>
                                <div class="discount-badge">Online Shoping</div>
                            </a>
                        </div>
                        <div className="col mb-5">
                            <a class="brand-card" href=''>
                                <Image  className='brand-logo'
                                        width={80}
                                        height={80} 
                                        src="/images/udemy.svg" loading="lazy" alt="udemy" />
                                <div class="brand-name">Udemy</div>
                                <div class="brand-discount">8% Off</div>
                                <div class="discount-badge">Online Shoping</div>
                            </a>
                        </div>
                        <div className="col mb-5">
                            <a class="brand-card" href=''>
                                <Image  className='brand-logo'
                                        width={80}
                                        height={80} 
                                        src="/images/udemy.svg" loading="lazy" alt="udemy" />
                                <div class="brand-name">Udemy</div>
                                <div class="brand-discount">8% Off</div>
                                <div class="discount-badge">Online Shoping</div>
                            </a>
                        </div>
                        <div className="col mb-5">
                            <a class="brand-card" href=''>
                                <Image  className='brand-logo'
                                        width={80}
                                        height={80} 
                                        src="/images/udemy.svg" loading="lazy" alt="udemy" />
                                <div class="brand-name">Udemy</div>
                                <div class="brand-discount">8% Off</div>
                                <div class="discount-badge">Online Shoping</div>
                            </a>
                        </div>
                        <div className="col mb-5">
                            <a class="brand-card" href=''>
                                <Image  className='brand-logo'
                                        width={80}
                                        height={80} 
                                        src="/images/udemy.svg" loading="lazy" alt="udemy" />
                                <div class="brand-name">Udemy</div>
                                <div class="brand-discount">8% Off</div>
                                <div class="discount-badge">Online Shoping</div>
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
