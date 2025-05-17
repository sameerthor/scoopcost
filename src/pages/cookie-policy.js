import MainDomainLink from '@/components/MainDomainLink';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/site-policy.css";

export default function cookiePolicy({ cookiePolicy }) {
    
  
    return (
        <>
            <NextSeo
                title="SuprOffer - Best Coupons & Deals"
                description="Find the best coupons, deals, and discounts for top brands"
            />
            <section className="sitePolicy">            
                <div className="container">                   
                    <div className="row">
                        <h1 className="text-center">Suproffer Cookie Policy</h1>
                        <p>
                        At Suproffer, we use cookies to make your browsing experience easier, faster and more personalized. This Cookie Policy explains how Suproffer (the “Website”) uses cookies and similar technologies to collect information when you visit our site. It explains what cookies are, how we use them and how you can manage your cookie preferences.
                        </p>
                        <div className='h2'>
                        What are Cookies?
                        </div>
                        <p>
                        Cookies are small text files stored on your device (such as a computer or smartphone) when you visit a website. These files help websites remember your preferences, recognize you on future visits, and improve your overall experience. Cookies help the website remember certain information such as your preferences, browsing history and language settings. Some cookies are temporary (session cookies) and disappear once you close your browser. While others remain on your device until you delete them (persistent cookies).
                        </p>
                        <div className='h2'>
                        Purpose of Using Cookies
                        </div>
                        <p>Suproffer uses cookies for several important reasons:</p>
                        <ul>
                            <li>Some cookies are necessary to make the website work properly. </li>
                            <li>
                            Cookies help remember your settings like your preferred language, location, or last-searched deals.
                            </li>
                            <li>
                            We may use cookies to show you coupons and offers based on your activity and interests.
                            </li>
                            <li>
                            Cookies help us understand how users interact with the website so we can improve our content, design and performance.
                            </li>
                        </ul>
                        <div className='h2'>
                        Third-Party Cookies
                        </div>
                        <p>
                        In some cases, third party tools like analytics, advertising platforms or partners may place cookies on your device. These third-party cookies can track your browsing behavior across different websites. These cookies are governed by the third party policies and we do not control these cookies directly. For details on how these services use your data, we recommend reviewing their individual cookie or privacy policies. 
                        </p>
                        <div className='h2'>
                        How to Manage Your Cookie Preferences

                        </div>
                        <p>
                        You have control over how cookies are used on your device. Most web browsers let you:
                        </p>
                        <ul>
                            <li>Accept or decline all cookies. </li>
                            <li>Delete specific cookies or all cookies.</li>
                            <li>Block third-party cookies.</li>
                            <li>Set alerts before cookies are saved. </li>
                        </ul>
                        <p>
                        To manage cookies:
                        </p>
                        <ul>
                            <li>Check your browser settings under ‘Privacy’ or ‘Security’ tab. </li>
                            <li>Use ‘Incognito’ or ‘Private Browsing’ to prevent cookie storage.</li>
                            <li>Use browser extensions or plugins to manage tracking and cookie use more effectively.</li>
                        </ul>
                        <p>
                        Turning off certain cookies may limit some features of the website and may affect how the website works.
                        </p>
                        <div className='h2'>
                        Updates to this Cookie Policy
                        </div>
                        <p>
                        We may occasionally revise this Cookie Policy to reflect changes in technology, legal requirements or how we use cookies. When we do, we’ll post an updated policy on this page with the new effective date. Your continued use of the website after such changes constitutes your acceptance of the revised Cookie Policy. We recommend you to review this Cookie Policy periodically.
                        </p>
                        <div className='h2'>
                        Contact Us
                        </div>
                        <p>
                        If you have any questions or concerns about this Cookie Policy, reach out to us at <a href="https://scoopcost.com/contact">https://scoopcost.com/contact.</a>
                        </p>
                        <p>
                        By using Suproffer, you consent to use cookies as described in this Cookie Policy.
                        </p>
                    </div> 
                </div>   
            </section>
        </>
    );
}
