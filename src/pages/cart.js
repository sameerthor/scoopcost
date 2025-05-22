import { NextSeo } from 'next-seo';
import MetaTags from '@/components/MetaTags';
import "@/styles/cart.css";
import Image from 'next/image';
export default function cartPage({ categories,topRatedStores,featuredStores,topOnlineStores }) {

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
            <section className='cartPage'>
                <div className="container p-0">
                    <div className="cart-container">
                        <h1>Your Cart</h1>

                        <div className="cart-item">
                            <div className="item-left">
                                <input type="checkbox" className="item-check" />
                                <Image  className='item-img'
                                        width={100}
                                        height={100} 
                                        src="/images/zomato.webp" loading="lazy" alt="zomato" />
                                <div className="item-details">
                                <span className="item-name">Amazon Gift Card</span>
                                <span className="item-price">$50</span>
                                </div>
                            </div>
                            <div className="item-actions">
                                    <button aria-label='delete-item'>
                                        <Image  className='item-img'
                                        width={20}
                                        height={20} 
                                        src="/images/trash.svg" loading="lazy" alt="trash" />
                                </button>
                            </div>
                        </div>

                        <div className="cart-item">
                            <div className="item-left">
                                <input type="checkbox" className="item-check" />
                                <Image  className='item-img'
                                        width={100}
                                        height={100} 
                                        src="/images/zomato.webp" loading="lazy" alt="zomato" />
                                <div className="item-details">
                                <span className="item-name">Starbucks Gift Card</span>
                                <span className="item-price">$25</span>
                                </div>
                            </div>
                            <div className="item-actions">
                                <button aria-label='delete-item'>
                                        <Image  className='item-img'
                                        width={20}
                                        height={20} 
                                        src="/images/trash.svg" loading="lazy" alt="trash" />
                                </button>
                            </div>
                        </div>

                        <div className="cart-item">
                            <div className="item-left">
                                <input type="checkbox" className="item-check" />
                                <Image  className='item-img'
                                        width={100}
                                        height={100} 
                                        src="/images/zomato.webp" loading="lazy" alt="zomato" />
                                <div className="item-details">
                                <span className="item-name">Starbucks Gift Card</span>
                                <span className="item-price">$25</span>
                                </div>
                            </div>
                            <div className="item-actions">
                                <button aria-label='delete-item'>
                                        <Image  className='item-img'
                                        width={20}
                                        height={20} 
                                        src="/images/trash.svg" loading="lazy" alt="trash" />
                                </button>
                            </div>
                        </div>

                        <div className="cart-footer">
                            <div className="total-amount">Total: $75</div>
                            <button className="checkout-btn">Proceed to Checkout</button>
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
