import MainDomainLink from '@/components/MainDomainLink';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/site-policy.css";

export default function privacyPolicy({ privacyPolicy }) {
    
  
    return (
        <>
            <NextSeo
                title="SuprOffer - Best Coupons & Deals"
                description="Find the best coupons, deals, and discounts for top brands"
            />
            <section className="sitePolicy">            
                <div className="container">                   
                    <div className="row">
                        <h1 className='text-center'> SuprOffer Privacy Policy</h1>
                        <p>
                        At SuprOffer, your privacy matters. This Privacy Policy explains how we collect, use, and share your personal information when you use our website. By using SavesesRight, you agree to the terms outlined below. If you do not agree please do not use our site or services.
                        </p>
                        <h2>What Information We Collect</h2>
                        <p>We collect two types of information when you visit or use SuprOffer:</p>
                        <p>
                           <b>a. Information Your Provide Directly
                           </b>
                        </p>
                        <p>
                        If you create an account, we may collect your name, email address, and any other personal details. We only collect this when you voluntarily provide it such as when you sign up for our newsletter or contact us. 
                        </p>
                        <p>
                                <b>b. Information We Collect Automatically
                                </b>
                        </p>
                        <p>
                            We collect information about how you use our website such as the pages you visit, the coupons you view and the links you click. We may also collect information about your device including your IP address, browser type, operating system and location. Also, we use cookies and similar technologies to collect information about your browsing activities and preferences. 
                        </p>
                        <h2>How We Use Your Information</h2>
                        <p>
                        We may use your details to improve your user experience with SuprOffer and to provide services that are relevant to you. We may use your information to:
                        </p>
                        <ul>
                            <li>Show you relevant coupon codes, discounts, and deals. 
                            </li>
                            <li>Improve the functionality, performance and layout of our website. 
                            </li>
                            <li>Respond to your questions or feedback. </li>
                            <li>Send your promotional emails and updates (only if you opt-in).
                            </li>
                            <li>Prevent fraud and ensure secure use of our services. 
                            </li>
                            <li>Enforce our Terms of Use. 
                            </li>
                        </ul>
                        <h2>How We Share Your Information</h2>
                        <p>
                        We respect your privacy. We do not sell, trade or rent your personal data. However, we may share your information in these limited circumstances:
                        </p>
                        <ul>
                                <li>With trusted service providers who help us operate our website such as hosting providers, analytics providers and email marketing services. These providers are contractually obligated to protect your personal information. 
                                </li>
                                <li>We may share your personal information to the extent that you have used a coupon from SuprOffer offered by a third party merchant. We will not share your information with third parties unless you directly interact with their offer. 
                                </li>
                                <li>We may disclose your information to law enforcement agencies, government authorities, or other third parties if required by law or legal purposes, or if we believe it is necessary to protect the rights, property or safety of SuprOffer or its users. 
                                </li>
                        </ul>
                        <h2>How We Protect Your Data</h2>
                        <p>
                        We care about the security of your information. We use reasonable measures to protect your data from unauthorized access, use or disclosure. However, no method of transmission over internet or electronic storage is completely secure. Therefore, while we strive to protect your details securely we cannot guarantee absolute safety.

                        </p>
                        <h2>Links to Third-Party Websites</h2>
                        <p>Our site includes coupons and deals from other websites. Please note:</p>
                        <ul>
                            <li>We do not control those third-party sites.
                            </li>
                            <li>Each site has its own privacy policy which may differ from us.</li>
                            <li>We are not responsible for their data practices, content or safety.</li>
                        </ul>
                        <p>
                        We recommend reviewing the privacy policy of any external site before interacting with it.
                        </p>
                        <h2>Children’s Privacy
                        </h2>
                        <p>Our website is not intended for children under the age of 13 (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children. If we discover we have received data from a child under thirteen, we will delete it immediately.</p>
                        <h2>Your Rights and Choices</h2>
                        <p>You have full control over your personal data. You can:
                        </p>
                        <ul>
                                <li>Access and view your data
                                </li>
                                <li>Update or correct your personal details.
                                </li>
                                <li>Request deletion of your information.
                                </li>
                                <li>Unsubscribe from emails or newsletters.</li>
                                <li>Refuse cookies from browser settings. </li>
                        </ul>
                        <p>To make any of these changes or requests, contact us using the link below. </p>
                        <h2>International Data Transfers</h2>
                        <p>If you are using SuprOffer from outside our country of operation, your data may be processed and stored in a country with different data laws. By using our website, you agree to the transfer of your data internationally. </p>
                        <h2>Changes to this Privacy Policy
                        </h2>
                        <p>We may update this Privacy Policy from time to time. When we do, we’ll post the updated policy on this page with the new effective date. Your continued use of the website after any such changes constitutes your acceptance of the new Privacy Policy. We recommend you to review our Privacy Policy periodically. 
                        </p>
                        <h2>Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at <MainDomainLink href="/contact">https://SuprOffer.com/contact</MainDomainLink>.</p>
                        <p>
                        By using SuprOffer, you consent to the terms described in this Privacy Policy. 
                        </p>    
                    </div>
                </div>   
            </section>
        </>
    );
}
