import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

import HeroBgImage from "../../../../assets/images/bg/hero/home-hero-image.png";

export default function HeroSection({hero}) {
  const history = useHistory();
  const [HeroBGImage, setBGImage] = useState(null);

  useEffect(() => {
    let filename = hero && hero.image;
    if (filename) {
      let url = `${process.env.REACT_APP_API_URL}hero/${filename}`;
      setBGImage(url);
    }
  }, [hero]);

  return (
    <section className="hero-section" data-scrollax-parent="true">
      <div className="bg-tabs-wrap">
        <div
          className="bg-parallax-wrap"
          data-scrollax="properties: { translateY: '200px' }"
        >
          <div
            className="bg bg_tabs"
            data-bg={HeroBGImage}
            style={{backgroundImage: `url(${HeroBGImage})`}}
          ></div>
          <div className="overlay op7"></div>
        </div>
      </div>
      <div className="container small-container">
        <div className="intro-item fl-wrap">
          <span className="section-separator"></span>
          <div className="bubbles">
            <h1 id="title"></h1>
          </div>
          <h3>
            {hero && hero.subTitle}
          </h3>
        </div>
        <div className="tabs-container fl-wrap">
          {/* main-search-input-tabs--> */}
          <div className="main-search-input-tabs tabs-act fl-wrap">
            {/* tabs --> */}
            <div className="tabs-container fl-wrap">
              <div className="main-search-input-wrap fl-wrap">
                <div className="main-search-input fl-wrap">
                  <div className="main-search-input-item">
                    <input
                      type="text"
                      placeholder={hero && hero.searchPlaceholder || "What service do you need?" }
                    />
                  </div>
                  <button
                    className="main-search-button color2-bg"
                    onClick={() => {
                      history.push("/listing");
                    }}
                  >
                   {hero && hero.searchButton || "Get Pricing" }
                  </button>
                </div>
              </div>
            </div>
            {/* tabs end--> */}
          </div>
        </div>
        {/* main-search-input-tabs end--> */}
      </div>
      <div className="header-sec-link">
        <a href="#sec1" className="custom-scroll-link">
          <i className="fal fa-angle-double-down"></i>
        </a>
      </div>
    </section>
  );
}
