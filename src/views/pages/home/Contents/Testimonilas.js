import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import avatar from '../../../../assets/images/avatar/1.jpg'
import waveMiddleBg from '../../../../assets/images/wave-top.png'
import waveBottomBg from '../../../../assets/images/wave-top.png'

const testimonilas = [
    {
        avatar: avatar, 
        description: '"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "',
        postAuthor: 'Andy Dimasky',
        job: 'Restaurant Owner',
        social: 'Facebook'
    },
    {
        avatar: avatar, 
        description: '"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "',
        postAuthor: 'Frank Dellov',
        job: 'Hotel Owner',
        social: 'Twitter'
    },
    {
        avatar: avatar, 
        description: '"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "',
        postAuthor: 'Centa Simpson',
        job: 'Restaurant Owner',
        social: 'Facebook'
    },
    {
        avatar: avatar, 
        description: '"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "',
        postAuthor: 'Linda Svensky',
        job: 'Shop Owner',
        social: 'Instagram'
    },
]

export default function Testimonilas(props) {
    
    return (
        <section>
            <div className="container">
                <div className="section-title">
                    <h2> Testimonilas</h2>
                    <div className="section-subtitle">Clients Reviews</div>
                    <span className="section-separator"></span>
                    <p>Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla.</p>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="testimonilas-carousel-wrap fl-wrap">
                <div className="listing-carousel-button listing-carousel-button-next"><i className="fas fa-caret-right"></i></div>
                <div className="listing-carousel-button listing-carousel-button-prev"><i className="fas fa-caret-left"></i></div>
                <div className="testimonilas-carousel">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {/* testi-item--> */}
                            {testimonilas.map((testimonila, index) => (
                                <div className="swiper-slide" key={index}>
                                    <div className="testi-item fl-wrap">
                                        <div className="testi-avatar"><img src={testimonila.avatar} alt="" /></div>
                                        <div className="testimonilas-text fl-wrap">
                                            <div className="listing-rating card-popup-rainingvis" data-starrating2="5"></div>
                                            <p>{testimonila.description}</p>
                                            <a href="#" className="testi-link" target="_blank">Via {testimonila.social}</a>
                                            <div className="testimonilas-avatar fl-wrap">
                                                <h3>{testimonila.postAuthor}</h3>
                                                <h4>{testimonila.job}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* testi-item end--> */}
                        </div>
                    </div>
                </div>
                <div className="tc-pagination"></div>
            </div>
            <div className="waveWrapper waveAnimation">
                <div className="waveWrapperInner bgMiddle">
                <div className="wave-bg-anim waveMiddle" style={{backgroundImage: waveMiddleBg}}></div>
                </div>
                <div className="waveWrapperInner bgBottom">
                <div className="wave-bg-anim waveBottom" style={{backgroundImage: waveBottomBg}}></div>
                </div>
            </div> 						
        </section>
    );
}