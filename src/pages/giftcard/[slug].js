import { NextSeo } from 'next-seo';
import MetaTags from '@/components/MetaTags';
import RandomDatesList from '@/components/RandomDatesList';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/giftcard.css";
import MainDomainLink from '@/components/MainDomainLink';
import { useMemo } from 'react';
import { useState, useRef, useEffect } from 'react';
import ResponsiveCarousel from "@/components/ResponsiveCarousel";
import CustomSelect from '@/components/CustomSelect';
import moment from 'moment';
import { JSDOM } from 'jsdom';

export default function GiftCardPage({ gift_card, faqs }) {
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
                        ScoopCost
                    </div>
                    <div className='brandName'>
                        {gift_card.store_name} Gift Card
                    </div>

                </div>
                <Image
                    width={600}
                    height={300}
                    src={`${gift_card.image}`} loading="lazy" alt="logo" />
            </div>
        </div>,
        <div className="imgItem">
            <div className='overLay'>
                <div className='overLayBox'>
                    <div className='title'>
                        ScoopCost
                    </div>
                    <div className='brandName'>
                        Zomato Gift Card
                    </div>

                </div>
                <Image
                    width={600}
                    height={300}
                    src="/images/giftcard.png" loading="lazy" alt="logo" />
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
                        <div className="col-lg-6 topCarousel">
                            <ResponsiveCarousel
                                items={firstCarousel}
                                idPrefix="firstCarousel"
                                responsiveConfig={{ xs: 1, sm: 1, md: 1 }}
                            />
                            <div className='FlexBtns'>
                                <button data-bs-toggle='modal' data-bs-target='#redeemModal'>How To Redeem</button>
                                <button data-bs-toggle='modal' data-bs-target='#termsCondition'>Terms &amp; Conditions</button>
                            </div>
                            <div className='imp'>
                                <h2>Important Points</h2>
                            </div>
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
                                <div className="feature-card">
                                    <div className="icon-box">
                                        <Image
                                            width={40}
                                            height={40}
                                            src='/images/non-refundable.svg' loading="lazy" alt="logo" />
                                    </div>
                                    <div className="feature-text">
                                        <h4>Non Refundable</h4>
                                        <p>Gift card once purchased, can't be refunded.</p>
                                    </div>
                                </div>
                                
                                

                            </div>
                            <div className='barndInfo'>
                                <div className='left'>
                                    <div className='ttl'>Zomato</div>
                                    <div className='stars'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                        </svg>
                                    </div>
                                    <div className='infoBox'>
                                        {gift_card.phone_no && <div className='infoItem'>
                                            {gift_card.phone_no}
                                        </div>}
                                    </div>
                                    <div className='infoBox'>
                                        <div className='infoHead'>
                                            Categories
                                        </div>
                                        <div className='infoItem'>
                                            {gift_card.category.title}
                                        </div>
                                    </div>
                                    {gift_card.location && <div className='infoBox'>
                                        <div className='infoHead'>
                                            Location
                                        </div>
                                        <div className='infoItem'>
                                            {gift_card.location}
                                        </div>
                                    </div>}

                                </div>
                                <div className='right'>
                                    <div className="brandLogo">
                                        <Image
                                            width={150}
                                            height={50}
                                            src={`${gift_card.image}`} loading="lazy" alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                            <div className="checkOutContainer">
                                <div className='headFlex'>
                                    <div>
                                        <h1 className='brandName'>Zomato Gift Card</h1>
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
                                            src={`${gift_card.image}`} loading="lazy" alt="logo" />
                                    </div>
                                </div>
                                <form action="#">
                                    <div className="msgBox">
                                        <label className='' htmlFor='cardAmount'>Gift Amount</label>
                                        <label className='err  d-none'>Amount exceedec the max value</label>
                                        <label className='' htmlFor='cardAmount'>Max: $100000</label>
                                    </div>
                                    <div className='giftValues'>
                                        <button className='active'>$20</button>
                                        <button>$25</button>
                                        <button>$30</button>
                                        <button>$35</button>
                                    </div>
                                    <div className='inputBox'>
                                        <input type="text" id='cardAmount' className='form-control amtInput' value='$20' />
                                    </div>
                                    <div className="inputBox">
                                        <label htmlFor="paymentMethod">Payment method</label>
                                        <CustomSelect />
                                    </div>
                                    <div className="inputBox">
                                        <label htmlFor="paymentMethod">Billing Address</label>
                                        <input type="text" className='form-control' placeholder='Address' />
                                    </div>
                                    <div className="inputBox">
                                        <label htmlFor="paymentMethod">Email Address where Gift Card to be send</label>
                                        <input type="email" className='form-control' placeholder='Email' />
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
                                            <span>$ 20</span>
                                            <small>$ 25</small>
                                        </div>
                                    </div>
                                    <div className='payBtn'>
                                        <div className='btnGrp d-none'>
                                            <button type='submit' disabled>Proceed to pay | $95521.01</button>
                                            <button className='cartBtn'>Add to Card <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20l44 0 0 44c0 11 9 20 20 20s20-9 20-20l0-44 44 0c11 0 20-9 20-20s-9-20-20-20l-44 0 0-44c0-11-9-20-20-20s-20 9-20 20l0 44-44 0c-11 0-20 9-20 20z" /></svg></button>
                                        </div>
                                        <div className='outOfStock'>
                                            This Gift Card is Out Of Stock!
                                        </div>
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
                    </div>
                </div>
            </section>
            <section className='abtGiftcard'>
                <div className="container">
                    <div className="about-giftcard-section">
                        <h2 className="section-title">About {gift_card.store_name} Cards</h2>
                        <div dangerouslySetInnerHTML={{ __html: gift_card.about }}></div>
                    </div>

                </div>
            </section>
            <section className='faqssec'>
                <div className="container py-5">
                    <h2 className="mb-4 text-center secHeading">Frequently Asked Questions About Gift Cards</h2>

                    <div className="accordion" id="giftCardFaq">
                        {faqs.map((faq, index) => {
                            const faqId = `faq${index + 1}`;
                            const collapseId = `collapse${index + 1}`;
                            const isFirst = index === 0;

                            return (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header" id={faqId}>
                                        <button
                                            className={`accordion-button ${!isFirst ? 'collapsed' : ''}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#${collapseId}`}
                                            aria-expanded={isFirst ? 'true' : 'false'}
                                            aria-controls={collapseId}
                                        >
                                            {faq.question}
                                        </button>
                                    </h2>
                                    <div
                                        id={collapseId}
                                        className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
                                        aria-labelledby={faqId}
                                        data-bs-parent="#giftCardFaq"
                                    >
                                        <div
                                            className="accordion-body"
                                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>
            <section className="topBrands brand-grid">
                <div className="container">
                    <h2 className='secHeading'>Top Rated Gift Cards</h2>
                    <div className="row row-cols-lg-5 row-col-md-3 row-cols-2">
                        <div className="col mb-5">
                            <a class="brand-card" href=''>
                                <Image className='brand-logo'
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
                                <Image className='brand-logo'
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
                                <Image className='brand-logo'
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
                                <Image className='brand-logo'
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
                                <Image className='brand-logo'
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
            {/* modals */}
            <div
                className="modal fade giftModal"
                id="redeemModal"
                tabIndex="-1"
                aria-labelledby="redeemModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">How To Redeem</h5>
                            <button
                                type="button"
                                className="closeBtn ms-auto"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >x</button>
                        </div>
                        <div className="modal-body">
                            <div className="listItem">
                                <span className="method">Online</span>
                                <div
                                    className="custom-list"
                                    dangerouslySetInnerHTML={{ __html: gift_card.how_to_redeem }}
                                ></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* terms */}
            <div
                className="modal fade giftModal"
                id="termsCondition"
                tabIndex="-1"
                aria-labelledby="redeemModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Terms &amp; Conditions</h5>
                            <button
                                type="button"
                                className="closeBtn ms-auto"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >x</button>
                        </div>
                        <div className="modal-body">
                            <div className='listItem' dangerouslySetInnerHTML={{ __html: gift_card.terms_and_conditions }}>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


export async function getStaticPaths() {
    const res = await fetch('https://admin.scoopcost.com/gift-cards/');
    const gift_cards = await res.json();

    const paths = gift_cards.map(store => ({
        params: { slug: store.slug },
    }));

    return { paths, fallback: "blocking" };
}

function parseHtmlToFaqs(htmlString) {
    const dom = new JSDOM(htmlString);
    const text = dom.window.document.body.textContent || '';
    const lines = text.split(/\r?\n|\r|<br>/).map(l => l.trim()).filter(Boolean);

    const faqs = [];
    let question = '';
    let answer = [];

    const questionRegex = /^[A-Z].+\?$/;

    for (let line of lines) {
        if (questionRegex.test(line)) {
            if (question && answer.length > 0) {
                faqs.push({ question, answer: answer.join('<br />') });
                answer = [];
            }
            question = line;
        } else {
            answer.push(line);
        }
    }

    if (question && answer.length > 0) {
        faqs.push({ question, answer: answer.join('<br />') });
    }

    return faqs;
}

export async function getStaticProps({ params }) {

    const slug = params.slug || req.headers.get('host')?.split('.')[0];
    const res = await fetch('https://admin.scoopcost.com/gift-cards/' + slug + '/')
    var gift_card = await res.json()
    if (gift_card.detail) {
        return {
            notFound: true
        };
    }
    console.log(gift_card)
    let currentYear = moment().format('YYYY');
    let title = gift_card.store_name;
    let metaTitle = gift_card.seo_title
        .replace(/Storename/g, title)
        .replace(/%%Year%%/g, currentYear)
        .replace(/\d{4}/, currentYear);

    gift_card.seo_title = metaTitle;

    gift_card.seo_description = gift_card.seo_description.replace(/Storename/g, title)

    gift_card.store_h1 = gift_card.h1
        .replace(/Storename/g, title)
        .replace(/%%Year%%/g, currentYear)

    const faqs = parseHtmlToFaqs(gift_card.faqs);
    delete gift_card.faqs;

    return {
        props: {
            gift_card,
            faqs
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 60, // In seconds
    }
}
