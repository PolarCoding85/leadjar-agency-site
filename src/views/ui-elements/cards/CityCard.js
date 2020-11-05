import React from 'react'

export default function CityCard(props) {
    const { city } = props

    return (
        <div className="listing-item-grid">
            <div className="bg" data-bg={city.image}></div>
            <div className="d-gr-sec"></div>
            <div className="listing-counter color2-bg"><span>{city.locations} </span> Locations</div>
            <div className="listing-item-grid_title">
                <h3><a href="listing.html">{city.city}</a></h3>
                <p>{city.description}</p>
            </div>
        </div>
    );
}