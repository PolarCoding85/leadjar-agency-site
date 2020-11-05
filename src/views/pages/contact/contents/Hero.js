import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import HeroBgImage from '../../../../assets/images/bg/hero/home-hero-image.png'

export default function HeroSection(props) {
    const history = useHistory()
    
    return (
        <section className="parallax-section single-par" data-scrollax-parent="true">
            <div className="bg par-elem "  data-bg={HeroBgImage} data-scrollax="properties: { translateY: '30%' }"></div>
            <div className="overlay op7"></div>
            <div className="container">
                <div className="section-title center-align big-title">
                    <h2><span>Contact Us</span></h2>
                    <span className="section-separator"></span>
                    <div className="breadcrumbs fl-wrap"><a href="#">Home</a><a href="#">Pages</a><span>Contacts</span></div>
                </div>
            </div>
            <div className="header-sec-link">
                <a href="#sec1" className="custom-scroll-link"><i className="fal fa-angle-double-down"></i></a> 
            </div>
        </section>
    );
}