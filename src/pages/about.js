import MainDomainLink from '@/components/MainDomainLink';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/site-policy.css";

export default function aboutSaveright({ aboutSaveright }) {
    
  
    return (
        <>
            <NextSeo
                title="Coupontix - Best Coupons & Deals"
                description="Find the best coupons, deals, and discounts for top brands"
            />

            <section className="sitePolicy">            
                <div className="container">                   
                    <div className="row">
                        <h1 className="text-center">About Suproffer</h1>
                        <p>
                        Suproffer is your go-to platform for the best and verified coupon codes, discounts, and deals. We regularly bring active promo codes, daily deals, freebies, and free shipping offers from trusted online stores. Whether you are shopping for clothes, electronics, home essentials, or gifts or simply planning your next vacation, Suproffer helps you spend less and save more.
                        </p>
                        <p>
                        We believe that saving money should be simple, stress-free and part of every online shopping experience. That’s why we have created a platform where deals are real, easy to use, and help you save money. From big brand names to niche online stores, our team constantly updates coupons and deals that actually work. Our users save an average of 15-40% on their purchases. 
                        </p>
                        <div className='h2'>
                        What We Offer?
                        </div>
                        <p>
                        We bring you the latest, easy-to-use and updated coupons and discounts. Every offer listed on Suproffer goes through a check, so you don’t have to worry about wasting your time with fake codes or expired promos. 
                        </p>
                        <p>
                                <em>Here’s What You’ll Find at Suproffer </em>
                        </p>
                       <ul>
                                <li><strong>Wide Category Coverage:</strong> We have thousands of coupons for different product categories including fashion, gadgets, groceries, toys, pet supplies or travel deals. </li>
                                <li><strong>Latest Coupon Codes:</strong> Partnering with top brands and online retailers, we deliver exclusive discount codes you won’t find anywhere else. </li>
                                <li><strong>Daily Updated Deals:</strong> Our offers are refreshed constantly so you always find what’s new and trending. From last minute tech deals to weekend fashion sales, we highlight the current deals and discounts. </li>
                                <li><strong>Verified Offers Only:</strong> Every offer you find on Suproffer is checked for accuracy and usability. </li>
                                <li><strong>User-friendly Filters:</strong> Whether you are a student, a parent, a gamer, or a pet owner, our filters help you find deals that actually matter to your lifestyle</li>
                       </ul>
                       <div className='h2'>
                       How Suproffer Helps You Save More
                       </div>
                       <p>
                       Suproffer simplifies the process of saving money on your online purchase. From major holidays like Black Friday and Cyber Monday to events like clearance sales, you will find the best deals and discounts here. Want to buy a new laptop? We’ll show you where to get the best price. Looking for a skincare bundle? We‘ll find the highest discount with free shipping.
                       </p>
                       <p>
                       And Suproffer covers a wide range of categories
                       </p>
                       <ul>
                            <li>Clothing & Accessories</li>
                            <li>Electronics</li>
                            <li>Home & Garden
                            </li>
                            <li>Beauty & Wellness</li>
                            <li>Travel & Hotels</li>
                            <li>Food & Grocery</li>
                            <li>Education & Online Courses</li>
                            <li>and many more…</li>
                       </ul>
                       <p>
                            <em>Here’s How Customers Can Save with SuprOffer </em>
                       </p>
                       <div className='h2'>
                       Browse by Category or Store Name
                       </div>
                       <p>
                       Find coupons in your desired category like beauty, electronics, fashion, travel, health, and more. Or directly search by brand to see all active offers.
                       </p>
                       <div className='h2'>
                       Pick the Best Deal or Coupon
                       </div>
                       <p>
                       Our team checks and verifies every coupon. You just need to choose the right coupon for yourself that saves more money. 
                       </p>
                       <div className='h2'>
                       Use the Promo Code
                       </div>
                       <p>
                       Click to reveal the code, copy the code and paste it at checkout on the store’s site. 

                       </p>
                       <div className='h2'>
                       Enjoy Your Savings
                       </div>
                       <p>
                       Watch the price drop and enjoy the savings on your online purchase. Using our coupons will help you get products at much lower prices.
                       </p>
                       <div className='h2'>
                       Our Core Values
                       </div>
                       <ul>
                            <li><strong>Transparency:</strong> Every coupon code and deal listed on Suproffer is tested and verified. Our team makes sure to keep our coupon listings up-to-date and remove expired coupons. 
                            </li>
                            <li><strong>Customer-Centric Approach:</strong> Your experience comes first! From browning to buying, we provide a hassle-free experience. </li>
                            <li><strong>Privacy:</strong> We value your privacy and shopping freedom. Your data stays private so you can shop with peace of mind.</li>
                       </ul>
                       <div className='h2'>
                       So…How Does Suproffer Make Money?
                       </div>
                       <p>
                       We work on an affiliate model. When you click a coupon on Suproffer, you are redirected to the store’s official website. If you end up buying something using the code, the retailer pays us a small commission at no extra cost to you. 
                       </p>
                       <p>
                       While you enjoy the discount on your purchase, we earn a commission from the retailer to keep the platform running smoothly. This affiliate model allows us to continue finding and sharing the best deals online from fashion and beauty to tech and travel.
                       </p>
                       <div className='h2'>
                       Get In Touch
                       </div>
                       <p>
                       If you have any questions, suggestions or encounter any issues, please contact us at <a href="https://suproffer.com/contact-us">https://suproffer.com/contact-us</a>.
                       </p>
                    </div> 
                </div>   
            </section>        
           
        </>
    );
}
