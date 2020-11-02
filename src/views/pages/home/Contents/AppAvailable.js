import React, { useState, useEffect } from "react"

import Logo from '../../../../assets/images/logo.png'
import ApiImage from '../../../../assets/images/api.png'
import ApiImage1 from '../../../../assets/images/api/1.jpg'

export default function ParallaxTwo(props) {
  return (
    <section className="gradient-bg hidden-section" data-scrollax-parent="true">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="colomn-text  pad-top-column-text fl-wrap">
                        <div className="colomn-text-title">
                            <h3>Our App   Available Now</h3>
                            <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit.</p>
                            <a href="#" className=" down-btn color3-bg"><i className="fab fa-apple"></i>  Apple Store </a>
                            <a href="#" className=" down-btn color3-bg"><i className="fab fa-android"></i>  Google Play </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="collage-image">
                        <img src={ApiImage} className="main-collage-image" alt="" />                               
                        <div className="images-collage-title color2-bg icdec"> 
                            <img src={Logo} alt="" />
                        </div>
                        <div className="images-collage_icon green-bg" style={{ right:-20, top:120 }}><i className="fal fa-thumbs-up"></i></div>
                        <div className="collage-image-min cim_1"><img src={ApiImage1} alt="" /></div>
                        <div className="collage-image-min cim_2"><img src={ApiImage1} alt="" /></div>
                        <div className="collage-image-btn green-bg">Booking now</div>
                        <div className="collage-image-input">Search <i className="fa fa-search"></i></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="gradient-bg-figure" style={{right:-30, top:10 }}></div>
        <div className="gradient-bg-figure" style={{left:-20, bottom:30 }}></div>
        <div className="circle-wrap" style={{left:270, top:120 }} data-scrollax="properties: { translateY: '-200px' }">
            <div className="circle_bg-bal circle_bg-bal_small"></div>
        </div>
        <div className="circle-wrap" style={{right:420, bottom:-70 }} data-scrollax="properties: { translateY: '150px' }">
            <div className="circle_bg-bal circle_bg-bal_big"></div>
        </div>
        <div className="circle-wrap" style={{left:420, top:-70 }} data-scrollax="properties: { translateY: '100px' }">
            <div className="circle_bg-bal circle_bg-bal_big"></div>
        </div>
        <div className="circle-wrap" style={{left: '40%', bottom:-70 }}  >
            <div className="circle_bg-bal circle_bg-bal_middle"></div>
        </div>
        <div className="circle-wrap" style={{right: '40%', top:-10 }}  >
            <div className="circle_bg-bal circle_bg-bal_versmall" data-scrollax="properties: { translateY: '-350px' }"></div>
        </div>
        <div className="circle-wrap" style={{right: '55%', top:90 }}  >
            <div className="circle_bg-bal circle_bg-bal_versmall" data-scrollax="properties: { translateY: '-350px' }"></div>
        </div>
    </section>
  )
}
