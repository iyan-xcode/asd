import React, { useEffect } from "react";

export default function Adsense() {
  useEffect(() => {
    loadAds();
  }, []);

  const loadAds = () => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}
      data-ad-slot={process.env.NEXT_PUBLIC_SLOT_ID}
      data-ad-format="auto"
      data-full-width-responsive="true"
      data-adtest="on"
    ></ins>
  );
}
