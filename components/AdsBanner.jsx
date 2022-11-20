import React, { useEffect } from "react";

const AdsBanner = () => {
  useEffect(() => {
    loadAds();
  }, []);
  const loadAds = () => {
    let ads = document.getElementsByClassName("adsbygoogle").length;
    var adsbygoogle;
    for (let i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.log(err.message);
      }
    }
  };
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-1150979373977622"
      data-ad-slot="7144485162"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdsBanner;
