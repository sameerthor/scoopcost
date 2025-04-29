import MainDomainLink from '@/components/MainDomainLink';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/site-policy.css";

export default function termsOfUse({ termsOfUse }) {
    
  
    return (
        <>
            <NextSeo
                title="Coupontix - Best Coupons & Deals"
                description="Find the best coupons, deals, and discounts for top brands"
            />
            <section className="sitePolicy">            
                <div className="container">                   
                    <div className="row">
                        <h1 className="text-center">Terms of Use</h1>
                        <p>
                            Welcome to Suproffer! These Terms of Use lay out the rules and expectations of how you can use our website and the services we offer. By browsing, using or interacting with Suproffer, you are agreeing to follow these terms. Please take a moment to read them carefully. 
                        </p>
                        <div className='h2'>
                        Agreement of Terms 
                        </div>
                        <p>
                            By using Suproffer (the “Website”), you agree to follow these Terms of Use. If you do not agree with anything stated there, kindly don’t use our site. Using the website means you have read, understood and accepted these terms. 
                        </p>
                        <div className='h2'>
                        What Suproffer Does
                        </div>
                        <p>
                        Suproffer is a platform that helps users discover the latest coupons, discounts, and deals from third-party retailers and brands. We do not sell any products or services directly. Our aim is to help you save money by making it easier to find special offers and promo codes all in one convenient place.
                        </p>
                        <div className='h2'>
                        Use of the Website
                        </div>
                        <p>
                        To use Suproffer:

                        </p>
                        <ul>
                            <li>You need to be at least 18 years old. 
                            </li>
                            <li>You also agree to use our website only for personal, non-commercial use.</li>
                            <li>You can’t copy, share or use anything from our website for any commercial purpose without our permission.</li>
                            <li>Don’t misuse the site or do anything that could harm the site or violate the privacy of other users.</li>
                            <li>You agree not to use bots, crawlers or scraping tools to collect information from the website without our prior permission.</li>
                        </ul>
                        <div className='h2'>
                        Accuracy of Coupons and Deals
                        </div>
                        <p>
                        We always try our best to make sure coupons and deals listed on Suproffer are accurate and up to date. However, all coupons and promotions come from third-party retailers. We can not guarantee that every coupon will always work or be exactly as described. Offers may change or expire based on the retailer’s own terms.
                        </p>
                        <p>
                            The businesses offering coupons are responsible for them. Any issues you have with a discount code or deal are between you and the retailer. Suproffer is not responsible for any errors or misrepresentations made by the merchants regarding their offers. 
                            It is your responsibility to verify the terms and conditions of any coupon or offer before making a purchase.

                        </p>
                        <p>
                        Additionally, we can change or remove coupons and deals from our website at any time without notice.
                        </p>
                        <div className='h2'>
                        Intellectual Property
                        </div>
                        <p>
                        All the content on Suproffer including name, logo, images, text, and graphics are owned by us and are protected by copyright laws. Please don’t copy, reproduce or share anything from the site. You can’t use our trademarks or logos without our permission. 
                        </p>
                        <div className='h2'>
                        Links to Other Websites
                        </div>
                        <p>
                        You will find third-party links on Suproffer that redirect you to other websites. These are typically retailer sites or offer pages. We don’t control those sites and we are not responsible for their content, privacy policies or practices. Be sure to check their terms and policies and access these websites at your own discretion. 
                        </p>
                        <div className='h2'>
                        Limitation Of Liability
                        </div>
                        <p>
                        Suproffer is provided to you “as is” with no warranties of any kind. While we do our best to keep everything working smoothly, we can’t guarantee that every coupon will be valid or the site will always be error-free. We are not responsible for any problems, losses or damage that come from using the site or clicking on third-party offers.
                        </p>
                        <div className='h2'>
                        Indemnification
                        </div>
                        <p>
                        By using Suproffer, you agree to defend, indemnify and hold us harmless from any claims, damages, losses, liabilities, costs and expenses (including legal fees) that arise from: 
                        </p>
                        <ul>
                            <li>Your use of the website. 
                            </li>
                            <li>Your violation of these terms. </li>
                            <li>Any content you submit or share.</li>
                            <li>Any interactions or transactions you make with third-party sites.</li>
                        </ul>
                        <p>
                        Basically, if your actions cause legal trouble for use, you agree to cover it. 
                        </p>
                        <div className='h2'>
                        Termination of Use
                        </div>
                        <p>
                        We reserve the right to suspend or terminate your access to Suproffer with or without notice if we believe you have violated these Terms of Use or misused the site in any way. 
                        </p>
                        <div className='h2'>
                        Changes to Terms of Use
                        </div>
                        <p>
                        We may make changes to these Terms of Use from time to time. If we do, we will update this page. By continuing to use Suproffer after we make changes, you are agreeing to the new terms. We recommend you to review these terms periodically.
                        </p>
                        <div className='h2'>
                        Contact Us
                        </div>
                        <p>
                        If you have any questions about these Terms of Use, please contact us through our <a href="https://suproffer.com/contact">contact page.</a>
                        </p>
                        <p>
                        By using Suproffer, you acknowledge that you have read, understand, and agree to be bound by these Terms of Use. 

                        </p>
                    </div> 
                </div>   
            </section>
        </>
    );
}
