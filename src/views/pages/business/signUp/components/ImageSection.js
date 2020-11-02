import React from "react"

import BgImage from '../../../../../assets/images/bg/1.jpg'

export default function ImageTopSection(props) {
  
  return (
    <section className="parallax-section single-par" data-scrollax-parent="true">
        <div className="bg par-elem"  data-bg={BgImage} data-scrollax="properties: { translateY: '30%' }"></div>
        <div className="overlay op7"></div>
        <div className="container">
            <div className="section-title center-align big-title">
                <h2><span>About Our Company</span></h2>
                <span className="section-separator"></span>
                <div className="breadcrumbs fl-wrap"><a href="#">Home</a><a href="#">Pages</a><span>About us</span></div>
            </div>
        </div>
        <div className="header-sec-link">
            <a href="#sec1" className="custom-scroll-link"><i className="fal fa-angle-double-down"></i></a> 
        </div>
    </section>
  )
}
