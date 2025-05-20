import { NextSeo } from 'next-seo';
import MetaTags from '@/components/MetaTags';
export default function catType({ categories,topRatedStores,featuredStores,topOnlineStores }) {

    const getHeading = (title) => {
        if (!title) return "";
    
        // Check for percentage discount (e.g., "40% OFF")
        const percentMatch = title.match(/(\d+)%/);
        if (percentMatch) {
            return `${percentMatch[1]}% OFF`;
        }
    
        // Check for dollar discount (e.g., "$40 OFF")
        const dollarMatch = title.match(/\$(\d+)/);
        if (dollarMatch) {
            return `$${dollarMatch[1]} OFF`;
        }
    
        // Check for "Free Shipping"
        if (/free shipping/i.test(title)) {
            return "Free Shipping";
        }
    
        return "";
    };



    return (
        <>
            <NextSeo
                title="SuprOffer - Best Coupons & Deals"
                description="Find the best coupons, deals, and discounts for top brands"
            />
            <MetaTags />
            <section className='loginPage'>
                <div className="container">
                    <div class="login-container">
                        <h1>Register</h1>
                        <form>
                            <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" id="email" placeholder="Enter your email" required />
                            </div>
                            <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" required />
                            </div>
                            <div class="form-group">
                            <label for="password">Confirm Password</label>
                            <input type="password" id="password" placeholder="Enter your password" required />
                            </div>
                            <button type="submit" class="btn">Register</button>
                        </form>
                        <div class="form-footer">
                           Already have an account?
                            <a href="/login">Login</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export async function getStaticProps() {


    return {
        props: {
          
        },
        revalidate: 10, // ISR - revalidate every 10 seconds
    };
}
