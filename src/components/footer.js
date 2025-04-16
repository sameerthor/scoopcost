import Link from "next/link";
import { useEffect } from 'react';
import MainDomainLink from '@/components/MainDomainLink';

export default function Footer() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://security-seal.emsign.com/generateSeal?width=175';
        script.async = false;
        const sealContainer = document.getElementById('securitySealContainer');
        if (sealContainer) {
          sealContainer.appendChild(script);
        }
      }, []);

    return (
        <>
 <footer className="footer-box px-lg-5 px-md-3 px-2">
            <div className="row mx-auto">
                <div className="col-lg-5 col-md-12 col-sm-12 mb-3 about-scoop footer-items">
                    <div className="footer-logo">  <img src="/images/coupontix-logo.webp" alt="logo" /></div>
                    <p>Greetings! Welcome to coupontix.com, your ultimate destination for an extensive collection of coupons and deals. Discover unbeatable prices on top brands across various products and services. Keep an eye out for more updates!</p>
                   
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12 mb-3 footer-links">
                    <div className="linksHeading">NAVIGATIONS</div>
                    <MainDomainLink href="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>Home</MainDomainLink>
                    <MainDomainLink href="/about"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>About</MainDomainLink>
                    <MainDomainLink href="/stores"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>Store</MainDomainLink>
                    <MainDomainLink href="/category"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>Category</MainDomainLink>
                    <MainDomainLink href="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>Blog</MainDomainLink>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12 mb-3 footer-links">
                    <div className="linksHeading">QUICK LINKS</div>
                    <MainDomainLink href="/terms-of-use"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>Terms of use</MainDomainLink>
                    <MainDomainLink href="/privacy-policy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>Privacy Policy</MainDomainLink>
                    <MainDomainLink href="affiliate-disclosure"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>Affiliate Disclosure</MainDomainLink>
                    <MainDomainLink href="/cookie-policy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>Cookie Policy</MainDomainLink>
                    <MainDomainLink href="/contact"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>Contact Us</MainDomainLink>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 mb-3 footer-links">
                    <div className="linksHeading">Stay Updated</div>
                    <div className="subscribe">
                        <div className="subscribe-item">
                            <form action="">
                                <input type="text" placeholder="Your Email" />
                                <button>Subscribe</button>
                            </form>
                        </div>
                        <span>You can opt out of our newsletters at any time. See our privacy policy.</span>
                    </div>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-lg-8 mb-4">
                    <div className="policyBox">
                        <p>coupontix.com is a product of Social Labs Enterprises PVT. LTD.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="isoBox">
                        <div className="isoItem">
                            <div>
                                <img src="/images/iso-white.png" alt="iso" />
                            </div>
                            <p>
                                ISO 27001 <br />
                                Data Center
                            </p>
                        </div>
                        <div className="isoItem">
                            <div>
                                <img src="/images/ssl-white.png" alt="ssl" />
                            </div>
                            <p>
                                SSL Certified Site <br />
                                128-bit encryption
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
        <div id="securitySealContainer"  />
        <div className="container-fluid copyright">
          <div>
              <div className="row text-center px-md-5 py-2">
                  <p className="copyright-para mb-2">
                      coupontix earns affiliate commissions on qualifying purchases as an Amazon associate. "Amazon, and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.
                  </p>
                  <p className="lovtxt">
                      Made with love ❤️ from United Kingdom
                  </p>
                  <p className="lovtxt">
                  DISCLAIMER: coupontix is owned and operated by A Private Consultancy Firm and in no way represent any relation with any Government Authority or Body.
                  </p>
              </div>
          </div>
        </div>



        </>
    )
}
