import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'

import GalleryIcon from '../../../assets/images/gallery/thumbnail/1.png'

const wishlists = [
    {
        image: '',
        title: 'Iconic Cafe',
        location: '40 Journal Square Plaza, NJ, USA',
        category: ['Restaurants', 'Cafe'],
        score: 4.1
    },
    {
        image: '',
        title: 'Rocko Band in Marquee Club',
        location: '75 Prince St, NY, USA',
        category: ['Events'],
        score: 4.2
    },
    {
        image: '',
        title: 'MontePlaza Hotel',
        location: '70 Bright St New York, USA',
        category: ['Hotels'],
        score: 5.0
    },
    {
        image: '',
        title: 'Premium Fitness Gym',
        location: 'W 85th St, New York, USA',
        category: ['Fitness', 'Gym'],
        score: 5.0
    }
]

const Wishlist = (props) => {
    const { wishlist } = props

    return (
        <li>
            <div className="widget-posts-img">
                <a href="listing-single.html">
                <img src={wishlist.image ? wishlist.image : GalleryIcon} alt="" />
                </a>
            </div>
            <div className="widget-posts-descr">
                <h4><a href="listing-single.html">{wishlist.title}</a></h4>
                <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"></i> {wishlist.location}</a></div>
                <div className="widget-posts-descr-link">
                    {wishlist.category.map((category, index) => (
                        <a href="listing.html" key={index}>{category}</a> 
                    ))}
                </div>
                <div className="widget-posts-descr-score">5.0</div>
                <div className="clear-wishlist"><i className="fal fa-times-circle"></i></div>
            </div>
        </li>
    )
}

export default function WishlistModal(props) {
    const history = useHistory()

    return (
        <div className="header-modal novis_wishlist">
            {/*  header-modal-container  */}
            <div className="header-modal-container scrollbar-inner fl-wrap" data-simplebar>
                {/* widget-posts */}
                <div className="widget-posts  fl-wrap">
                    <ul className="no-list-style">
                        {wishlists.map((wishlist, index) => (
                            <Wishlist wishlist={wishlist} key={index}/>
                        ))}
                    </ul>
                </div>
                {/*  widget-posts end */}
            </div>
            {/*  header-modal-container end  */}
            <div className="header-modal-top fl-wrap">
                <h4>Your Wishlist : <span><strong></strong> Locations</span></h4>
                <div className="close-header-modal"><i className="far fa-times"></i></div>
            </div>
        </div>
    )
}