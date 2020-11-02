import React, { useState, useEffect } from "react"


export default function MainMenu(props) {

    return (
        <div className="nav-holder main-menu">
            <nav>
                <ul className="no-list-style">
                    <li>
                        <a href="#" className="act-link">Home <i className="fa fa-caret-down"></i></a>
                        {/* second level     */}
                        <ul>
                            <li><a href="index.html">Parallax Image</a></li>
                            <li><a href="index2.html">Slider</a></li>
                            <li><a href="index3.html">Slideshow</a></li>
                            <li><a href="index4.html">Video</a></li>
                            <li><a href="index5.html">Map</a></li>
                        </ul>
                        {/* second level end */}
                    </li>
                    <li>
                        <a href="#">Listings <i className="fa fa-caret-down"></i></a>
                        {/* second level  */}
                        <ul>
                            <li><a href="listing.html">Column map</a></li>
                            <li><a href="listing2.html">Column map 2</a></li>
                            <li><a href="listing3.html">Fullwidth Map</a></li>
                            <li><a href="listing4.html">Fullwidth Map 2</a></li>
                            <li><a href="listing5.html">Without Map</a></li>
                            <li><a href="listing6.html">Without Map 2</a></li>
                            <li>
                                <a href="#">Single <i className="fa fa-caret-down"></i></a>
                                {/* third  level   */}
                                <ul>
                                    <li><a href="listing-single.html">Style 1</a></li>
                                    <li><a href="listing-single2.html">Style 2</a></li>
                                    <li><a href="listing-single3.html">Style 3</a></li>
                                    <li><a href="listing-single4.html">Style 4</a></li>
                                </ul>
                                {/* third  level end */}
                            </li>
                        </ul>
                        {/* second level end */}
                    </li>
                    <li>
                        <a href="blog.html">News</a>
                    </li>
                    <li>
                        <a href="#">Pages <i className="fa fa-caret-down"></i></a>
                        {/* second level     */}
                        <ul>
                            <li>
                                <a href="#">Shop<i className="fa fa-caret-down"></i></a>
                                {/* third  level   */}
                                <ul>
                                    <li><a href="shop.html">Products</a></li>
                                    <li><a href="product-single.html">Product single</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                </ul>
                                {/* third  level end */}
                            </li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contacts.html">Contacts</a></li>
                            <li><a href="author-single.html">User single</a></li>
                            <li><a href="help.html">How it Works</a></li>
                            <li><a href="booking.html">Booking</a></li>
                            <li><a href="pricing-tables.html">Pricing</a></li>
                            <li><a href="dashboard.html">User Dasboard</a></li>
                            <li><a href="blog-single.html">Blog Single</a></li>
                            <li><a href="dashboard-add-listing.html">Add Listing</a></li>
                            <li><a href="invoice.html">Invoice</a></li>
                            <li><a href="404.html">404</a></li>
                        </ul>
                        {/* second level end */}
                    </li>
                </ul>
            </nav>
        </div>
    )
}
