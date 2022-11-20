import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  <Script
    id="Adsense-id"
    data-ad-client="ca-pub-1150979373977622"
    async
    strategy="afterInteractive"
    onError={(e) => {
      console.error("Script failed to load", e);
    }}
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
  />;
  return <Component {...pageProps} />;
}

export default MyApp;
