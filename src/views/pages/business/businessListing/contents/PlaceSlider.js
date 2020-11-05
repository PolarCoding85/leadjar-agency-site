import React from 'react'

import PlaceSimpleCard from '../../../../ui-elements/cards/PlaceSimpleCard'

import categoryImage from '../../../../../assets/images/all/1.jpg'
import avatar from '../../../../../assets/images/avatar/1.jpg'

const places = [
    {image: categoryImage, link: '/', title: 'The Goggi Restaurant', location: '34-42 Montgomery St , NY, USA', reviewScore: 4.1, reviewCount: 26, category: 'Restaurants', price: '', priceNameToolTip: 'Pricey', avatar: avatar, postAuthor: 'Alisa Noory'},
    {image: categoryImage, link: '/', title: 'Gym in the Center', location: '70 Bright St New York, USA', reviewScore: 5, reviewCount: 55, category: 'Fitness / Gym', price: '', priceNameToolTip: 'Moderate', avatar: avatar, postAuthor: 'Mark Rose'},
    {image: categoryImage, link: '/', title: 'Gym in the Center', location: '170 Bright St New York, USA', reviewScore: 15, reviewCount: 155, category: 'Fitness / Gym', price: '', priceNameToolTip: 'Moderate', avatar: avatar, postAuthor: 'Mark Rose'},
    {image: categoryImage, link: '/', title: 'Gym in the Center', location: '270 Bright St New York, USA', reviewScore: 25, reviewCount: 255, category: 'Fitness / Gym', price: '', priceNameToolTip: 'Moderate', avatar: avatar, postAuthor: 'Mark Rose'},
]

export default function PlaceSlider(props) {
    
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
                            {places.map((place, index) => (
                                <div className="swiper-slide" key={index}>
                                    <div className="listing-slider-item fl-wrap">
                                        <PlaceSimpleCard place={place} />
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