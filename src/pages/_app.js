import 'bootstrap/dist/css/bootstrap.css';
import "@/styles/globals.css";
import { Poppins } from 'next/font/google';
import Head from "next/head";

import { useEffect, useState } from "react"
// import { config, dom } from '@fortawesome/-svg-core';
// config.autoAddCss = false;
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from 'next/script';
const poppins = Poppins({
  weight: ['400', '500', '600'],  // You can include more if needed
  subsets: ['latin'],             // Required
  display: 'swap',                // Eliminates layout shift
});


export default function App({ Component, pageProps }) {
  const [hasConsent, setHasConsent] = useState(null); // null for undecided

  useEffect(() => {
    window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
    const consent = localStorage.getItem('ga_consent');
    if (consent === 'granted') {
      setHasConsent(true);
    } else if (consent === 'denied') {
      setHasConsent(false);
    }
  }, []);

  const handleAccept = () => {
    setHasConsent(true);
    localStorage.setItem('ga_consent', 'granted');
  };

  const handleReject = () => {
    setHasConsent(false);
    localStorage.setItem('ga_consent', 'denied');
  };
  return (
    <main className={poppins.className}>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon"/>
        <meta name="theme-color" content="#003b94"/>

        {/* <style>{dom.css()}</style> */}
      </Head>
     
      <Header />
      {/* Google Analytics - Only load if user consents */}
      {hasConsent && (
        <>
          {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P0PSQ4W4GS"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P0PSQ4W4GS');
          `}
        </Script>
        </>
      )}

      {/* Consent Banner */}
      {hasConsent === null && (
        <div className="consent-banner">
          <p>We use cookies to enhance your experience. Do you consent to analytics tracking?</p>
          <div className='BtnBxx'>
          <button onClick={handleAccept} className="btn btn-primary">
            Accept
          </button>
          <button onClick={handleReject} className="btn btn-secondary">
            Reject
          </button>
          </div>
        </div>
      )}
      <Component {...pageProps} />
      <Footer />
    </main>)
}
