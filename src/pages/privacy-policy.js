import MainDomainLink from '@/components/MainDomainLink';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/site-policy.css";

export default function privacyPolicy({ privacyPolicy }) {
    
  
    return (
        <>
            <NextSeo
                title="Coupontix - Best Coupons & Deals"
                description="Find the best coupons, deals, and discounts for top brands"
            />
            <section className="sitePolicy">            
                <div className="container">                   
                    <div className="row">
                        <h1 className='text-center'> Suproffer Privacy Policy </h1>
                        <p>
                             Welcome to Suproffer! Your privacy matters to us and we are committed to protecting your personal data. This Privacy Policy explains how we collect, use, share and protect your information when you browse our website or use our services. By accessing Suproffer, you agree to the terms outlined in this policy.
                        </p>
                        <div className='h2'>
                        Information We Collect
                        </div>
                        <p>
                        We collect two types of information when you visit or use Suproffer:

                        </p>
                        <p>
                            <strong>i. Personal Information
                            </strong>
                            <p>
                            This refers to any data that can identify you as an individual. It may include:

                            </p>
                            <ul>
                                <li>Your name and email address (if you sign up for our newsletter or contact us). 
                                </li>
                                <li>Any other personal details you voluntarily provide via forms or account creation. 
                                </li>
                            </ul>
                            <p>
                                <strong>ii. Non-Personal Information
                                </strong>
                            </p>
                            <p>
                            We also collect data automatically when you use our site. This includes your IP address, browser type, device model, location, and operating system. Also, we gather user behavior such as pages visited, time spent on site, and clicks on coupons or affiliate links.
                            </p>
                            <p>
                            We use cookies and similar technologies to gather this data. Read our <a href="https://suproffer.com/cookie-policy">Cookie Policy</a> to learn more. 
                            </p>
                            <div className='h2'>
                            How We Use Your Information

                            </div>
                            <p>
                            We use your data to enhance your experience and maintain the performance of Suproffer. We may use  your information to:

                            </p>
                            <ul>
                                <li>Show you relevant coupons, discount codes, and deals. 
                                </li>
                                <li>Improve our website and user experience.</li>
                                <li>Send email updates, exclusive deals and offers (only if you opt-in).</li>
                                <li>Ensure security, detect abuse, and protect against fraud.</li>
                                <li>Enforce our Terms of Use.</li>
                            </ul>
                            <div className='h2'>
                            Sharing of Information
                            </div>
                            <p>
                            Your trust is essential to us. We do not sell or trade your personal data. We may share limited info with trusted partners like analytics providers and email marketing services who help us operate smoothly. These providers are contractually bound to keep your data secure and confidential. We may also disclose your information if we are required to comply with a law, enforce our site policies or protect Suproffer and its users.
                            </p>
                            <div className='h2'>
                            Data Security
                            </div>
                            <p>
                            We use various security measures to protect your data. 
                            </p>
                            <ul>
                                <li>Encryption: Sensitive data is encrypted in transit using secure protocols.</li>
                                <li>Access Controls: Only authorized personnel have access to your personal data.</li>
                                <li>Monitoring & Updates: Our systems are regularly monitored and updated to prevent breaches.</li>
                            </ul>
                            <p>
                            While we do our best to safeguard your data, no online system can guarantee complete security.
                            </p>
                            <div className='h2'>
                            Links to Third-Party Websites
                            </div>
                            <p>
                            Suproffer Privacy Policy applies only to our services. Our website includes links to third-party websites that we do not control. These sites have their own privacy policies which are different from us and we do not control these third-party sites. Also, we are not responsible for their data practices, content or safety. We recommend you to review the policies of any linked websites before sharing personal data or using their promotions.
                            </p>
                            <div className='h2'>
                            Children's Privacy

                            </div>
                            <p>
                            Suproffer is designed for users aged 13 and above. We do not knowingly collect personal information from children under thirteen years of age. If you find that a child has provided us with their data please contact us immediately and we will take appropriate steps to remove it.
                            </p>
                            <div className='h2'>
                            Your Rights and Choices

                            </div>
                            <p>
                            You have the right to:
                            </p>
                            <ul>
                                <li>Access or review the information we have about you. </li>
                                <li>Update or delete your personal data upon request.</li>
                                <li>Unsubscribe from our emails or newsletters at any time.</li>
                                <li>Refuse cookies from browser settings.</li>
                            </ul>
                            <div className='h2'>
                            International Data Transfers
                            </div>
                            <p>
                            If you are using Suproffer from outside our country of operation, your information may be processed and stored with different data laws. By using our site, you agree to data transfer internationally.
                            </p>
                            <div className='h2'>
                            Updates to this Privacy Policy
                            </div>
                            <p>
                            We may update this policy from time to time to reflect legal requirements or service improvements. When we do, we will post the latest version here with a new date. We encourage you to review our Privacy Policy periodically to stay informed. If you do not agree with any part of the updated policy, you may discontinue using our services.
                            </p>
                            <div className='h2'>
                            Contact Us
                            </div>
                            <p>
                            Have questions, concerns or requests about your privacy? We are here to help. Reach out to us at <a href="https://suproffer.com/contact"> https://suproffer.com/contact</a>
                            </p>
                            <p>
                            By using Suproffer, you consent to the terms described in this Privacy Policy. 

                            </p>
                        </p>
                    </div>
                </div>   
            </section>
        </>
    );
}
