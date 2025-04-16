import MainDomainLink from '@/components/MainDomainLink';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/contact.css";

export default function contactPage({ contact }) {
    
  
    return (
        <>
            <NextSeo
                title="CouponTix - Best Coupons & Deals"
                description="Find the best coupons, deals, and discounts for top brands"
            />

            <section className="contactBox" style={{ backgroundImage: (`/images/banner-contact.webp`) }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 p-0">
                            <h1 className="text-center">Contact Coupontix</h1>
                            <form action="#NoWhere" className="contactForm row">
                                <div className="row p-0 inputGroup">
                                    <div className="col-md-6 mb-3">
                                        <input type="text" placeholder="Name" className="form-control" name="name" required/>
                                    </div>
                                    <div class=" col-md-6 mb-3">
                                        <input type="text" placeholder="Email" className="form-control" name="email" required/>
                                    </div>
                                </div>
                                <div className="col-md-12 inputGroup">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected> Select Visitor Type</option>
                                        <option value="1">Customer</option>
                                        <option value="2">Merchant</option>
                                        <option value="3">Non-Profit-Organization</option>
                                        <option value="4">Other</option>
                                    </select>
                                </div>
                                <div className="col-md-12 inputGroup">
                                    <textarea className="form-control" placeholder="Please provide some details" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="text-center contactBtn">
                                    <button className="btn" title="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section> 
           
        </>
    );
}


