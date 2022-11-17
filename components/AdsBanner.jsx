import React, { useEffect } from "react";

const AdsBanner = () => {
  useEffect(() => {
    loadAds();
  }, []);
  const loadAds = () => {
    let ads = document.getElementsByClassName("adsbygoogle").length;
    for (let i = 0; i < ads; i++) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.log(err.message);
      }
    }
  };
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}
      data-ad-slot={process.env.NEXT_PUBLIC_SLOT_ID}
      data-ad-format="auto"
    />
  );
};

export default AdsBanner;
