import Script from "next/script";
import React from "react";

export default function CAdsense() {
  return (
    <Script
      id="Adsense-id"
      data-checked-head="true"
      data-ad-client="ca-pub-1150979373977622"
      async
      strategy="afterInteractive"
      onError={(e) => {
        console.error("Script failed to load", e);
      }}
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    />
  );
}
