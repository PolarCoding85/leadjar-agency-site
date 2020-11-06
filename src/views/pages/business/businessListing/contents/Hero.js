import React from "react"

import HeroBgImage from '../../../../../assets/images/bg/hero/home-hero-image.png'
import avatar from '../../../../../assets/images/avatar/1.jpg'

export default function Content(props) {
  
    return (
        <section className="listing-hero-section hidden-section" data-scrollax-parent="true" id="sec1">
            <div className="bg-parallax-wrap">
                <div className="bg par-elem "  data-bg={HeroBgImage} data-scrollax="properties: { translateY: '30%' }"></div>
                <div className="overlay"></div>
            </div>
            <div className="container">
                <div className="list-single-header-item  fl-wrap">
                    <div className="row">
                        <div className="col-md-9">
                            <h1>Iconic Cafe in Manhattan <span className="verified-badge"><i className="fal fa-check"></i></span></h1>
                            <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"></i>  70 Bright St New York, USA</a> <a href="#"> <i className="fal fa-phone"></i>+38099231212</a> <a href="#"><i className="fal fa-envelope"></i> yourmail@domain.com</a></div>
                        </div>
                        <div className="col-md-3">
                            <a className="fl-wrap list-single-header-column custom-scroll-link " href="#sec5">
                                <div className="listing-rating-count-wrap single-list-count">
                                    <div className="review-score">4.1</div>
                                    <div className="listing-rating card-popup-rainingvis" data-starrating2="4"></div>
                                    <br />                                                
                                    <div className="reviews-count">2 reviews</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="list-single-header_bottom fl-wrap">
                    <a className="listing-item-category-wrap" href="#">
                        <div className="listing-item-category  red-bg"><i className="fal fa-cheeseburger"></i></div>
                        <span>Restaurants</span>
                    </a>
                    <div className="list-single-author"> <a href="author-single.html"><span className="author_avatar"> <img alt='' src={avatar} />  </span>By  Alisa Noory</a></div>
                    <div className="geodir_status_date gsd_open"><i className="fal fa-lock-open"></i>Open Now</div>
                    <div className="list-single-stats">
                        <ul className="no-list-style">
                            <li><span className="viewed-counter"><i className="fas fa-eye"></i> Viewed -  156 </span></li>
                            <li><span className="bookmark-counter"><i className="fas fa-heart"></i> Bookmark -  24 </span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
