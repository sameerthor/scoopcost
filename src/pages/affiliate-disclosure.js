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
                        <h1 className="text-center">SuprOffer Affiliate Disclosure</h1>
                        <p>At SuprOffer, transparency and honesty are the foundation of everything we do. You should know that SuprOffer participates in affiliate marketing. This means that when you click on certain links on our website and make a purchase, we may earn a commission or referral fee. 
                        This Affiliate Disclosure explains how our site works and how we make money. 
                        </p>
                        <h2>What is Affiliate Marketing?</h2>
                        <p>Affiliate marketing is a way for websites like SuprOffer to earn by linking products or services offered by other companies (Merchants). When you click our affiliate links and then complete a transaction with the merchant, we may receive a small percentage of the sale or a set fee.</p>
                        <h2>How do Affiliate Links Work?</h2>
                        <p>
                        When you click on a deal, coupon or promotion listed on SuprOffer and then make a purchase from the merchant’s website, we may earn an affiliate commission. These links are a part of affiliate programs we participate in. 

                        </p>
                        <p>
                        Important points to know:
                        </p>
                        <ul>
                            <li>You do not need to pay any additional costs.
                            </li>
                            <li>The price you pay for the product or service will be the same whether you use our link or go directly to the retailer’s website. 
                            </li>
                            <li>The commission is paid by the retailer not by you.
                            </li>
                        </ul>
                        <h2>Why Do We Use Affiliate Links?</h2>
                        <p>
                        Running and maintaining our website takes resources. From sharing coupons to maintaining website security and performance, there are costs involved. Affiliate marketing helps us to support our operations and continue to provide you with free coupons and deals.
                        </p>
                        <h2>No Obligation to Use Our Affiliate Links</h2>
                        <p>
                        We appreciate it when you use our affiliate links as it helps keep the platform going. However, there is no obligation to do so. You are free to:
                        </p>
                        <ul>
                            <li>Visit the retailer directly.
                            </li>
                            <li>Search for the same offer elsewhere.</li>
                            <li>Make independent purchasing decisions.</li>
                        </ul>
                        <p>We are just an affiliate marketing website that curates coupons and deals for your convenience.</p>
                        <h2>Our Commitment </h2>
                        <p>
                        We are committed to providing you with valuable and helpful information. Our goal is to help you save money. The fact that we may earn a commission does not influence the coupons and offers we feature. We strive to present a wide range of deals and promo codes from various third-party merchants.
                        </p>
                        <p>
                        We try to keep everything current but we can’t promise every deal will always be active. Please read the return policy, shipping info, and terms on the retailer’s site before completing a purchase. We are not responsible for product issues, delivery delays or customer service experiences. If anything goes wrong, reach out to the merchant directly.
                        </p>
                        <p>
                        Please note:
                        </p>
                        <ul>
                                <li>SuprOffer does not sell or endorse products. We only link to third-party retailers.</li>
                                <li>We do not own or produce any of the items or services.</li>
                                <li>We do not guarantee the quality and reliability of products or services.</li>
                                <li>We do not receive any free products or perks for including any particular retailer. </li>
                        </ul>
                        <h2>Contact Us
                        </h2>
                        <p>
                        If you have any questions about how affiliate links work on SuprOffer, please contact us through our <a href="/contact">Contact Page</a> and we will be happy to clarify. 
                        </p>
                    </div> 
                </div>   
            </section>        
           
        </>
    );
}
