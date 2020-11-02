import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import categoryImage from '../../../../assets/images/all/1.jpg'
import avatar from '../../../../assets/images/avatar/1.jpg'

const swiperSlides = [
    {image: categoryImage, link: '/', title: 'The Goggi Restaurant', location: '34-42 Montgomery St , NY, USA', reviewScore: 4.1, reviewCount: 26, category: 'Restaurants', price: '', priceNameToolTip: 'Pricey', avatar: avatar, postAuthor: 'Alisa Noory'},
    {image: categoryImage, link: '/', title: 'Gym in the Center', location: '70 Bright St New York, USA', reviewScore: 5, reviewCount: 55, category: 'Fitness / Gym', price: '', priceNameToolTip: 'Moderate', avatar: avatar, postAuthor: 'Mark Rose'},
    {image: categoryImage, link: '/', title: 'Gym in the Center', location: '170 Bright St New York, USA', reviewScore: 15, reviewCount: 155, category: 'Fitness / Gym', price: '', priceNameToolTip: 'Moderate', avatar: avatar, postAuthor: 'Mark Rose'},
    {image: categoryImage, link: '/', title: 'Gym in the Center', location: '270 Bright St New York, USA', reviewScore: 25, reviewCount: 255, category: 'Fitness / Gym', price: '', priceNameToolTip: 'Moderate', avatar: avatar, postAuthor: 'Mark Rose'},
]

export default function Slider(props) {
    
    return (
        <section className="slw-sec" id="sec1">
            <div className="section-title">
                <h2>The Latest Listings</h2>
                <div className="section-subtitle">Newest  Listings</div>
                <span className="section-separator"></span>
                <p>Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum.</p>
            </div>
            <div className="listing-slider-wrap fl-wrap">
                <div className="listing-slider fl-wrap">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                             {/* swiper-slide  --> */}
                            {swiperSlides.map((swiperSlide, index) => (
                                <div className="swiper-slide" key={index}>
                                    <div className="listing-slider-item fl-wrap">
                                        {/* listing-item  --> */}
                                        <div className="listing-item listing_carditem">
                                            <article className="geodir-category-listing fl-wrap">
                                                <div className="geodir-category-img">
                                                    <div className="geodir-js-favorite_btn"><i className="fal fa-heart"></i><span>Save</span></div>
                                                    <a href="listing-single.html" className="geodir-category-img-wrap fl-wrap">
                                                        <img src={swiperSlide.image} alt="" /> 
                                                    </a>
                                                    <div className="geodir_status_date gsd_open"><i className="fal fa-lock-open"></i>Open Now</div>
                                                    <div className="geodir-category-opt">
                                                        <div className="geodir-category-opt_title">
                                                            <h4><a href={swiperSlide.link}>{swiperSlide.title}</a></h4>
                                                            <div className="geodir-category-location"><a href="#"><i className="fas fa-map-marker-alt"></i>{swiperSlide.location}</a></div>
                                                        </div>
                                                        <div className="listing-rating-count-wrap">
                                                            <div className="review-score">{swiperSlide.reviewScore}</div>
                                                            <div className="listing-rating card-popup-rainingvis" data-starrating2="4"></div>
                                                            <br />
                                                            <div className="reviews-count">{swiperSlide.reviewCount} reviews</div>
                                                        </div>
                                                        <div className="listing_carditem_footer fl-wrap">
                                                            <a className="listing-item-category-wrap" href="#">
                                                                <div className="listing-item-category red-bg"><i className="fal fa-cheeseburger"></i></div>
                                                                <span>{swiperSlide.category}</span>
                                                            </a>
                                                            <div className="price-level geodir-category_price">
                                                                <span className="price-level-item" data-pricerating="2">{swiperSlide.price}</span>
                                                                <span className="price-name-tooltip">{swiperSlide.priceNameToolTip}</span>
                                                            </div>
                                                            <div className="post-author">
                                                                <a href="#"><img src={swiperSlide.avatar} alt="" /><span>By , {swiperSlide.postAuthor}</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                        {/* listing-item end --> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="listing-carousel-button listing-carousel-button-next2"><i className="fas fa-caret-right"></i></div>
                    <div className="listing-carousel-button listing-carousel-button-prev2"><i className="fas fa-caret-left"></i></div>
                </div>
                <div className="tc-pagination_wrap">
                    <div className="tc-pagination2"></div>
                </div>
            </div>
        </section>
    );
}