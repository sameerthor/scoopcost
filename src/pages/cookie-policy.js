import MainDomainLink from '@/components/MainDomainLink';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/site-policy.css";

export default function cookiePolicy({ cookiePolicy }) {
    
  
    return (
        <>
            <NextSeo
                title="Coupontix - Best Coupons & Deals"
                description="Find the best coupons, deals, and discounts for top brands"
            />
            <section className="sitePolicy">            
                <div className="container">                   
                    <div className="row">
                        <h1 className="text-center">Coupontix Cookie Policy</h1>
                        <p>This Cookie Policy explains how CouponTix (the “Website”) uses cookies and similar technologies to collect information when you visit our site. It explains what cookies are, how we use them and how you can manage your cookie settings. 
                        </p>
                        <h2>What are Cookies? 
                        </h2>
                        <p>Cookies are small text files stored on your device such as a computer, mobile phone or tablet when you visit a website. They help the website recognize your device and remember certain information such as your preferences, browsing history and language settings. Cookies are used to make websites work more efficiently as well as to provide information to the owners of the site. </p>
                        <h2>How CouponTix Uses Cookies?</h2>
                        <p>We use cookies to create a better browsing experience for you. Our cookies help us to: 
                        </p>
                        <ul>
                            <li>Understand how visitors interact with our site so we can improve navigation, speed, and content. </li>
                            <li>Save your settings such as language, location, and choices for a more personalized experience. </li>
                            <li>Show you more relevant coupons and deals based on your browsing habits. </li>
                            <li>Keep the site running smoothly and ensure users can access features like logins or saving favorite deals. </li>
                        </ul>
                        <p>
                        Some cookies are temporary (session cookies) while others remain on your device until you delete them (persistent cookies). 
                        </p>
                        <h2>Third-Party Cookies</h2>
                        <p>
                        In addition to our cookies (first-party cookies), we may allow trusted third-party services like ad networks, partners and analytic tools to place cookies on your device. Third-party cookies are not under our control, therefore, we suggest that you read their individual cookie policies for more information.
                        </p>
                        <h2>How to Control Cookies</h2>
                        <p>You have complete control over your cookies. Most web browsers allow you to:</p>
                        <ul>
                            <li>Accept or decline cookies
                            </li>
                            <li>Delete stored cookies</li>
                            <li>Set alerts before cookies are saved
                            </li>
                            <li>Block third party cookies
                            </li>
                        </ul>
                        <p>To manage cookies:</p>
                        <ul>
                                <li>Check your browser settings under ‘Privacy’ or ‘Security’</li>
                                <li>Use ‘Incognito’ or ‘Private Browsing’ modes to prevent cookie storage.</li>
                                <li>Use browser extensions or plugins for advanced cookie control. </li>
                        </ul>
                        <p>Disabling cookies may affect how the website works and some features may not be available. </p>
                        <h2>Changes to this Cookie Policy
                        </h2>
                        <p>
                        We may occasionally update this Cookie Policy. When we do, we’ll post the updated policy on this page with the new effective date. Your continued use of the website after any such changes constitutes your acceptance of the new Cookie Policy. We encourage you to review this Cookie Policy periodically. 

                        </p>
                        <h2>Contact Us
                        </h2>
                        <p>If you have any questions about this Cookie Policy, please contact us at <MainDomainLink href="/contact">https://coupontix.com/contact.</MainDomainLink></p>
                        <p>By using CouponTix, you consent to the use of cookies as described in this Cookie Policy. 
                        </p>
                    </div> 
                </div>   
            </section>
        </>
    );
}
