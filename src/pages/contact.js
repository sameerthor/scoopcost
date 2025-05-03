import MainDomainLink from '@/components/MainDomainLink';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/site-policy.css";

export default function contactPage({ contact }) {
    
  
    return (
        <>
            <NextSeo
                title="SuprOffer - Best Coupons & Deals"
                description="Find the best coupons, deals, and discounts for top brands"
            />

<section className="sitePolicy"> 
                <div className="container">                   
                    <div className="row">
                         <p><strong>Let’s Make Saving Easy! </strong></p>
                         <p>
                         At <a href="https://suproffer.com/">Suproffer.com</a>, our team works best to help you score the right deals and discounts online. If you are looking forward to a great idea to share, or want to collaborate with us — we’re just a message away.
                         </p>
                         <p>
                             <strong>🛍 Need Help With Coupons?</strong>
                         </p>
                         <p>
                         If you are not able to apply any coupon code or if you are not sure how to apply a discount? Don’t worry — our team is here to guide you through it.

                         </p>
                         <p><strong>💭 Got Feedback or Suggestions?</strong></p>
                         <p>
                         We love hearing from our users! If there’s something we can do better or a feature you’d like to see, let us know — we’re all ears.
                         </p>
                         <p>
                            <strong>📬 Reach Out Anytime</strong>
                         </p>
                         <p>
                         Customer Support & General Questions: brand@suproffer.com
                         </p>
                         <p>
                         Business & Collaborations: info@suproffer.com
                         </p>
                         <p><strong>📢 Stay Connected</strong></p>
                         <p>
                         Never miss a deal! Follow us for the latest offers, tips, and coupon codes:
                         </p>
                         <p><strong>Facebook</strong>: Suproffer Facebook</p>
                         <p><strong>Twitter</strong>: Suproffer Twitter</p>
                         <p><strong>Instagram</strong>: Suproffer Instagram</p>
                         <p>We’re here to help you save smarter — and we’re excited to have you with us.</p>
                    </div>
                </div>   
            </section>   
           
        </>
    );
}


