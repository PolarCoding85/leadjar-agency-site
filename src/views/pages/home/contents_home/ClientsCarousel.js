import React, { useState, useEffect } from "react"

import clientImage1 from '../../../../../assets/images/clients/1.png'

export default function ClientsCarousel(props) {
  return (
    <section className="gray-bg">
        <div className="container">
            <div className="clients-carousel-wrap fl-wrap">
                <div className="cc-btn cc-prev"><i className="fal fa-angle-left"></i></div>
                <div className="cc-btn cc-next"><i className="fal fa-angle-right"></i></div>
                <div className="clients-carousel">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <a href="#" className="client-item"><img src={clientImage1} alt="" /></a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-item"><img src={clientImage1} alt="" /></a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-item"><img src={clientImage1} alt="" /></a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-item"><img src={clientImage1} alt=""/></a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-item"><img src={clientImage1} alt="" /></a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#" className="client-item"><img src={clientImage1} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
