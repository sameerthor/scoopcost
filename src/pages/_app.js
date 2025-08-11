import 'bootstrap/dist/css/bootstrap.css';
import "@/styles/globals.css";
import { Poppins } from 'next/font/google';
import Head from "next/head";

import { useEffect, useState } from "react"

import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from 'next/script';
const poppins = Poppins({
  weight: ['400', '500', '600'],  
  subsets: ['latin'],             
  display: 'swap',             
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
        <meta property="og:image" content="https://scoopcost.com/images/favicon.ico" />
        <meta name="theme-color" content="#003b94"/>

        <meta property="og:image:width" content="60" />
        <meta property="og:image:height" content="60" />
      </Head>
     
      <Header />
      {/* Google Analytics - Only load if user consents */}
      {hasConsent && (
        <>
    
         {/* Google Analytics in body */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F15H7MZYYW"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F15H7MZYYW', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
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
