import React from 'react'

import blankImage from '../../../../../../assets/images/gallery/thumbnail/1.png'

const places = [
    {image: blankImage, title: 'Iconic Cafe', location: '40 Journal Square Plaza, NJ, USA', category: 'Restaurants', subCategory: 'Cafe', rate: 4.1},
    {image: blankImage, title: 'MontePlaza Hotel', location: '70 Bright St New York, USA', category: 'Hotels', subCategory: '', rate: 5.0},
    {image: blankImage, title: 'Rocko Band in Marquee Club', location: '75 Prince St, NY, USA', category: 'Events', subCategory: '', rate: 4.1},
    {image: blankImage, title: 'Premium Fitness Gym', location: 'W 85th St, New York, USA', category: 'Fitness', subCategory: 'Gym', rate: 4.1},
]

const SimilarPlace = (props) => {
    const { place } = props

    return (
        <>
            <div className="widget-posts-img">
                <a href="listing-single.html"><img src={place.image} alt="" /></a>  
            </div>
            <div className="widget-posts-descr">
                <h4><a href="listing-single.html">{place.title}</a></h4>
                <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"></i> {place.location}</a></div>
                <div className="widget-posts-descr-link"><a href="listing.html" >{place.category} </a>   <a href="listing.html">{place.subCategory}</a></div>
                <div className="widget-posts-descr-score">{place.rate}</div>
            </div>
        </>
    )
}

export default function SimilarListings() {
    
    return (
        <div className="box-widget-item fl-wrap block_box">
            <div className="box-widget-item-header">
                <h3>Similar listings :</h3>
            </div>
            <div className="box-widget  fl-wrap">
                <div className="box-widget-content">
                    {/* widget-posts--> */}
                    <div className="widget-posts  fl-wrap">
                        <ul className="no-list-style">
                            {places.map((place, index) => (
                                <li key={index}>
                                    <SimilarPlace place={place} />
                                </li>
                            ))}
                        </ul>
                    </div>
                        {/* widget-posts end--> */}
                </div>
            </div>
        </div>
    );
}