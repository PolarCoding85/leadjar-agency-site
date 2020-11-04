import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PlaceCard from '../../../../ui-elements/cards/PlaceCard' 

const places = [
    {
        image: '',
        avatar: '',
        postAuthor: 'Alisa Noory',
        openState: true,
        reviewScore: 4.8,
        reviewRating: 5,
        reviewCount: 12,
        title: 'Luexary Resturant',
        location: '27th brooklyn New York, USA',
        description: 'Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.',
        category: 'Restaurants',
        icon: 'fal fa-cheeseburger',
        priceRating: 3,
        priceTooltip: 'Pricey',
        phone: '+38099231212',
        email: 'your@email.com'
    },
    {
        image: '',
        avatar: '',
        postAuthor: 'Alisa Noory',
        openState: false,
        reviewScore: 4.8,
        reviewRating: 5,
        reviewCount: 12,
        title: 'Luexary Resturant',
        location: '27th brooklyn New York, USA',
        description: 'Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.',
        category: 'Hotels',
        icon: 'fal fa-cheeseburger',
        priceRating: 3,
        priceTooltip: 'Pricey',
        phone: '+38099231212',
        email: 'your@email.com'
    },
    {
        image: '',
        avatar: '',
        postAuthor: 'Alisa Noory',
        openState: true,
        reviewScore: 4.8,
        reviewRating: 5,
        reviewCount: 12,
        title: 'Luexary Resturant',
        location: '27th brooklyn New York, USA',
        description: 'Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.',
        category: 'Events',
        icon: 'fal fa-cheeseburger',
        priceRating: 3,
        priceTooltip: 'Pricey',
        phone: '+38099231212',
        email: 'your@email.com'
    },
]

export default function TopPersonalTrainers(props) {
    
    return (
        <section>
            <div className="container">
                <div className="section-title">
                    <h2><span>Top Personal Trainers near you</span></h2>
                    <span className="section-separator"></span>
                </div>
                <div className="grid-item-holder three-columns-grid fl-wrap">
                    {places.map((place, index) => (
                        <PlaceCard place={place} key={index} gridType="three-columns-grid"/>
                    ))}
                </div>
                <div className="pagination">
                    <a href="#" className="prevposts-link"><i className="fas fa-caret-left"></i><span>Prev</span></a>
                    <a href="#" className="current-page">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">...</a>
                    <a href="#">7</a>
                    <a href="#" className="nextposts-link"><span>Next</span><i className="fas fa-caret-right"></i></a>
                </div>
            </div>
        </section>
    );
}