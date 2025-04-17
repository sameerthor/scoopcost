import MainDomainLink from '@/components/MainDomainLink';
import 'bootstrap/dist/css/bootstrap.css';
import "@/styles/globals.css";
import Head from "next/head";
import { useEffect } from "react"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from 'next/script';
import CookieConsent from "@/components/CookieConsent";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <main>
      <Head>
      <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon"/>
        <style>{dom.css()}</style>
      </Head>
     
      <Header />
      <Component {...pageProps} />
      <Footer />
      <CookieConsent /> 

    </main>)
}
