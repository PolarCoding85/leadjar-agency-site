import React, { useState, useEffect } from "react"

import parallaxBg from '../../../../../assets/images/bg/1.jpg'

export default function ParallaxTwo(props) {
  return (
        <section className="parallax-section" data-scrollax-parent="true">
            <div className="bg par-elem "  data-bg={parallaxBg} data-scrollax="properties: { translateY: '30%' }"></div>
            <div className="overlay op7"></div>
            <div className="container">
                <div className="video_section-title fl-wrap">
                    <h4>Aliquam erat volutpat interdum</h4>
                    <h2>Get ready to start your exciting journey. <br /> Our agency will lead you through the amazing digital world</h2>
                </div>
                <a href="https://vimeo.com/70851162" className="promo-link big_prom   image-popup"><i className="fal fa-play"></i><span>Promo Video</span></a>
            </div>
        </section>
  )
}
