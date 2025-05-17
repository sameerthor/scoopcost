import MainDomainLink from '@/components/MainDomainLink';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/site-policy.css";

export default function affiliateDisclosure({ affiliateDisclosure }) {
    
  
    return (
        <>
            <NextSeo
                title="SuprOffer - Best Coupons & Deals"
                description="Find the best coupons, deals, and discounts for top brands"
            />

            <section className="sitePolicy">            
                <div className="container">                   
                    <div className="row">
                        <h1 className="text-center">Affiliate Disclosure</h1>
                        <p>
                        At Suproffer, our mission is to help users save money by finding and sharing the best deals, coupons and discounts from around the web. To support our work and continue providing the latest promo codes and offers, we participate in affiliate marketing. 

                        </p>
                        <p>
                        This Affiliate Disclosure explains how our website works and how we make money.
                        </p>
                        <p>
                        The links you see on our website are affiliate links. If you click one of those links and make a purchase from a third-party website, we may earn a commission - but it does not cost you anything extra. The commission is paid by the retailer or brand. The price of the product or service remains the same whether you use our affiliate link or go directly to the merchant’s website.
                        </p>
                        <p>
                        These commissions help us keep Suproffer running, cover maintenance costs and continue discovering new deals and discounts for our visitors. We are just an affiliate marketing website that brings free coupons and deals for your convenience.
                        </p>
                        <p>
                        It is also important to understand that:
                        </p>
                        <ul>
                            <li>Suproffer does not own, sell or endorse any products or services. </li>
                            <li>We do not receive free products, perks or incentives from brands in exchange for listing them.</li>
                            <li>The presence of a coupon or deal does not mean we have a partnership with the brand - we are simply sharing available discounts as part of our affiliate work.</li>
                            <li>We do not guarantee validity, accuracy, or availability of any coupon or offer listed on our site. Every purchase is between you and the merchant.</li>
                        </ul>
                        <p>
                        Ultimately, the decision to purchase any product or service is yours. You are under no obligation to click on our affiliate links or make a purchase. If you choose to shop through our links, it truly supports what we do and we appreciate it. 
                        </p>
                        <p>
                        We always recommend you to read the fine print, check reviews and research before making any purchase. If there is an issue with your order regarding product quality or delivery, you will need to resolve it directly with the seller. 
                        </p>
                        <div className='h2'>
                        Got Questions? 
                        </div>
                        <p>
                        If you have questions about how affiliate links work, feel free to contact us at <a href="https://scoopcost.com/contact">https://scoopcost.com/contact. </a>
                        </p>
                    </div> 
                </div>   
            </section>        
           
        </>
    );
}
