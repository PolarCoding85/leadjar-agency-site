import React from 'react'

import BlankImage from '../../../../../../assets/images/all/1.jpg'

export default function GalleryPhotos() {
    
    return (
        <div className="list-single-main-item fl-wrap block_box" id="sec3">
            <div className="list-single-main-item-title">
                <h3>Gallery / Photos</h3>
            </div>
            <div className="list-single-main-item_content fl-wrap">
                <div className="single-carousel-wrap fl-wrap lightgallery">
                    <div className="sc-next sc-btn color2-bg"><i className="fas fa-caret-right"></i></div>
                    <div className="sc-prev sc-btn color2-bg"><i className="fas fa-caret-left"></i></div>
                    <div className="single-carousel fl-wrap full-height">
                        <div className="swiper-container" dir="rtl">
                            <div className="swiper-wrapper">
                                 {/* swiper-slide-->    */}
                                <div className="swiper-slide">
                                    <div className="box-item">
                                        <img  src={BlankImage}   alt="" />
                                        <a href={BlankImage} className="gal-link popup-image"><i className="fa fa-search"  ></i></a>
                                    </div>
                                </div>
                                 {/* swiper-slide end-->    */}
                                 {/* swiper-slide-->    */}
                                <div className="swiper-slide">
                                    <div className="box-item">
                                        <img  src={BlankImage}   alt="" />
                                        <a href={BlankImage} className="gal-link popup-image"><i className="fa fa-search"  ></i></a>
                                    </div>
                                </div>
                                 {/* swiper-slide end-->                                                                   */}
                                 {/* swiper-slide-->    */}
                                <div className="swiper-slide">
                                    <div className="box-item">
                                        <img  src={BlankImage}   alt="" />
                                        <a href={BlankImage} className="gal-link popup-image"><i className="fa fa-search"  ></i></a>
                                    </div>
                                </div>
                                 {/* swiper-slide end-->                                                                  */}
                                 {/* swiper-slide-->    */}
                                <div className="swiper-slide">
                                    <div className="box-item">
                                        <img  src={BlankImage}   alt="" />
                                        <a href={BlankImage} className="gal-link popup-image"><i className="fa fa-search"  ></i></a>
                                    </div>
                                </div>
                                 {/* swiper-slide end-->                                                                   */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}