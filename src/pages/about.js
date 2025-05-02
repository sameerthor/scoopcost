import MainDomainLink from '@/components/MainDomainLink';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/site-policy.css";

export default function aboutSaveright({ aboutSaveright }) {
    
  
    return (
        <>
            <NextSeo
                title="SuprOffer - Best Coupons & Deals"
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
                        <div className="whyTrustus">
                                <div className="container">
                                    <div className="row g-4">
                                    {/* Left Column */}
                                    <div className="col-md-6 mb-3 zeroMobPadding">
                                        <div className="card-custom">
                                        <div className="founder">
                                            <div className="img">
                                            <img src="/images/co-founder.webp" alt="Rudresh Dubey" />
                                            </div>
                                            <div className="name">
                                            <p>
                                                Rudresh{" "}
                                                <a
                                                href="https://www.linkedin.com/in/rudreh-dubey-86426b1a2/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="LinkedIn"
                                                >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" fill="#0077B5"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                                                </a>
                                            </p>
                                            <span>Founder & CEO @ suproffer.com</span>
                                            </div>
                                        </div>
                                        <div className="founderNote">
                                            <p>
                                            Rudresh Dubey is an experienced affiliate marketer with over 10 years of experience in digital marketing. His journey in the coupon industry began a decade ago to help people save money while shopping online. As the founder of <a href="https://suproffer.com/">Suproffer.com</a>, Rudresh turned his vision into a reality by creating a trusted platform that offers only tested and verified coupon codes. What started as a small idea for online shoppers has now grown into a reliable name for deals and discounts.
                                            </p>
                                            <p>
                                            Rudresh's goal has always been simple - make online shopping affordable and stress-free. He leads a hardworking team of 6 members who carefully pick the best promo codes across many categories like fashion, electronics, travel, and software. Every coupon goes through a proper check to make sure it is genuine and active. <a href="https://suproffer.com/">Suproffer.com</a> has become a go-to destination for online buyers who want to save money without wasting time on fake deals or expired coupons.
                                            </p>
                                        </div>
                                        </div>
                                    </div>

                                    {/* Right Column */}
                                    <div className="col-md-6 zeroMobPadding">
                                        <div className="card-custom ourExpert">
                                        <div className="expHead">Meet Our Coupon Experts</div>
                                        <div className="expertPara">
                                            <p>
                                            <a href="https://suproffer.com/">Suproffer.com</a> has an efficient team of 6 coupon experts. Their job is to make sure users always get the best and latest offers. Our team focuses on creating a smooth and friendly user experience, so visitors can quickly find the right deals without getting misled. They keep an eye on every code and update the site regularly. We have also put a comment section on each coupon page. If a coupon doesn’t work, the team makes sure to fix the issue and try to improve the services based on user feedback.
                                            </p>
                                            <p>
                                            If you notice anything that isn’t right on our website, you can report the issue to us and we’ll address it shortly.
                                            </p>
                                        </div>
                                        <div className="listExpert">
                                            <ul>
                                            <li>
                                                <small>
                                                    <img src="/images/dinesh-v.webp" alt="dinesh" />
                                                    <p>Dinesh<span>33,636 coupons published</span></p>
                                                </small>
                                                <span className="exp">8 Years</span>
                                            </li>
                                            <li>
                                                <small>
                                                <img src="/images/mashma-m.webp" alt="mashma" />
                                                <p>Mashma<span>33,636 coupons published</span></p>
                                                </small>
                                                <span className="exp">6 Years</span>
                                            </li>
                                            <li>
                                                <small>
                                                <img src="/images/tanay-s.webp" alt="tanay" />
                                                <p>Tanay<span>33,636 coupons published</span></p>
                                                </small>
                                                <span className="exp">6 Years</span>
                                            </li>
                                            <li>
                                                <small>
                                                <img src="/images/sikha.webp" alt="sikha" /> 
                                                <p>Sikha<span>33,636 coupons published</span></p>
                                                </small>
                                                <span className="exp">5 Years</span>
                                            </li>
                                            <li>
                                                <small>
                                                <img src="/images/yash-c.webp" alt="yash" /> 
                                                <p>Yash<span>33,636 coupons published</span></p>
                                                </small>
                                                <span className="exp">4 Years</span>
                                            </li>
                                            <li>
                                                <small><img src="/images/yunush.webp" alt="Yusuf" /> 
                                                <p>Yusuf<span>33,636 coupons published</span></p>
                                                
                                                </small>
                                                
                                                <span class="exp">3 Years</span>
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                        </div>
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
                       If you have any questions, suggestions or encounter any issues, please contact us at <a href="https://suproffer.com/contact">https://suproffer.com/contact</a>.
                       </p>
                    </div> 
                </div>   
            </section>        
           
        </>
    );
}
