import MainDomainLink from '@/components/MainDomainLink';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/site-policy.css";

export default function termsOfUse({ termsOfUse }) {
    
  
    return (
        <>
            <NextSeo
                title="SuprOffer - Best Coupons & Deals"
                description="Find the best coupons, deals, and discounts for top brands"
            />
            <section className="sitePolicy">            
                <div className="container">                   
                    <div className="row">
                        <h1 className="text-center">SuprOffer Terms of use</h1>
                        <p>
                            Welcome to SuprOffer (the “Website”). These Terms of Use explain how you can use our website and services. By accessing or using SuprOffer, you agree to follow the rules outlined here. Please read everything carefully as it outlines your legal rights and obligations. 
                        </p>
                        <h2>Acceptance of Terms </h2>
                        <p>
                            By using SuprOffer in any way - whether browsing, clicking on a deal or using a coupon, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website. Your continued use of the site means you accept all current terms. 
                        </p>
                        <h2>Description of Our Service </h2>
                        <p>SuprOffer provides users with coupons, discounts, and promotional offers from various retailers and service providers. We do not sell the products or services offered by the merchants. Our role is to solely provide available coupons and offers to help you save money. </p>
                        <h2>Use of the Website </h2>
                        <ul>
                            <li>You must be 18 years or older to use our site.</li>
                            <li>You may use SuprOffer for your personal, non-commercial use only.</li>
                            <li>You agree not to use the website for any unlawful purpose or in any way that could harm, disable, or impair the site.</li>
                            <li>You agree not to attempt to gain unauthorized access to any part of the website, other user accounts, or networks connected to the website.</li>
                            <li>You agree not to use any automated means such as bots or scrapers to collect information from the website without our written permission.</li>
                       </ul>
                       <p>We want to keep the site friendly and fair for everyone. </p>
                       <h2>Validity of Coupons and Deals   </h2>
                       <p>We work to keep our deals and promo codes up to date. However, 
                       </p>
                       <ul>
                            <li>
                                The coupons and deals displayed on SuprOffer are provided by the merchants and are subject to their respective terms and conditions including expiry dates and eligibility requirements.
                            </li>
                            <li>
                                SuprOffer does not guarantee the validity, accuracy, availability or usability of any coupon or offer.
                            </li>
                            <li>
                                It is your responsibility to verify the terms and conditions of any coupon or offer before making a purchase or using the offer.
                            </li>
                            <li>
                                SuprOffer is not responsible for any errors, omissions or misrepresentations made by the merchants regarding their offers.
                            </li>
                        </ul>
                        <h2>Intellectual Property</h2>
                        <p>
                        The content on SuprOffer including text, graphics, logo, and images is protected by copyright and other intellectual laws. You may not copy, reproduce or distribute any part of our website without written permission. The SuprOffer name and logo are trademarks of SuprOffer. You may not use these marks without our permission. 

                        </p>
                        <h2>Third-Party Links</h2>
                        <p>
                        SuprOffer contains links to third-party websites that are not owned or controlled by us. We are not responsible for the content, privacy policies or practices of any third-party websites. You access these websites at your own discretion.
                        </p>
                        <h2>Limitation of Liability</h2>
                        <p>
                        We do our best to provide reliable information but we cannot guarantee that everything will always be accurate or error-free. 
                        </p>
                        <ul>
                            <li>We are not responsible for any losses, damages, or issues that come from using the website or third-party services linked from here. </li>
                            <li>The site is provided “as is” with no warranties of any kind. 
                            </li>
                        </ul>
                        <h2>Indemnification</h2>
                        <p>By using SuprOffer, you agree to indemnify and hold harmless SuprOffer, its team, partners, and affiliates from and against any claims, losses, damages, obligations, or expenses (including reasonable legal fees) that arise from: 
                        </p>
                        <ul>
                            <li>Your use or access of the website. 
                            </li>
                            <li>Your violation of these Terms of Use. </li>
                            <li>Your infringement of any rights of another person or third party. 
                            </li>
                        </ul>
                        <p>
                        This means you agree to take full responsibility and cover any costs if your actions cause legal trouble for us. 

                        </p>
                        <h2>Termination of Use</h2>
                        <p>We reserve the right to suspend or terminate your access to SuprOffer, if
                        </p>
                        <ul>
                            <li>You violate these Terms. </li>
                            <li>You engage in harmful or unlawful activity.
                            </li>
                            <li>We believe your actions put the site or its users at risk. 
                            </li>
                        </ul>
                        <h2>Changes to Terms of Use</h2>
                        <p>
                        We may update these Terms of Use from time to time. We will post any changes on this page and update the “Last Updated” date. Your continued use of the website after any such changes constitutes your acceptance of the new Terms. We recommend you to review these terms periodically. 

                        </p>
                        <h2>Contact Us</h2>
                        <p>
                        Have a question or concern? We are here to help! Reach out at <MainDomainLink href="/contact">https://SuprOffer.com/contact</MainDomainLink>
                        </p>
                        <p>By using SuprOffer, you acknowledge that you have read and understand these Terms of Use and agree to be bound by them. </p>
                    </div> 
                </div>   
            </section>
        </>
    );
}
