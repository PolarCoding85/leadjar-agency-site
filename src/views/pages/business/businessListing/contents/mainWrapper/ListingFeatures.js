import React from 'react'

export default function ListingFeatures() {
    
    return (
        <div className="list-single-main-item fl-wrap block_box">
            <div className="list-single-main-item-title">
                <h3>Listing Features</h3>
            </div>
            <div className="list-single-main-item_content fl-wrap">
                <div className="listing-features fl-wrap">
                    <ul className="no-list-style">
                        <li><a href="#"><i className="fa fa-rocket"></i> Elevator in building</a></li>
                        <li><a href="#"><i className="fa fa-wifi"></i> Free Wi Fi</a></li>
                        <li><a href="#"><i className="fa fa-motorcycle"></i> Free Parking</a></li>
                        <li><a href="#"><i className="fa fa-cloud"></i> Air Conditioned</a></li>
                        <li><a href="#"><i className="fa fa-shopping-cart"></i> Online Ordering</a></li>
                        <li><a href="#"><i className="fa fa-paw"></i> Pet Friendly</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}