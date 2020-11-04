import React from 'react'

import blankImage from '../../../assets/images/all/1.jpg'
import blankAvatar from '../../../assets/images/avatar/1.jpg'

export default function PlaceCard(props) {
    const { place, gridType } = props

    return (
        <div className={gridType + "restaurant events"}>
            {/* listing-item  --> */}
            <div className="listing-item">
                <article className="geodir-category-listing fl-wrap">
                    <div className="geodir-category-img">
                        <div className="geodir-js-favorite_btn"><i className="fal fa-heart"></i><span>Save</span></div>
                        <a href="listing-single.html" className="geodir-category-img-wrap fl-wrap">
                            <img src={place.image ? place.image : blankImage} alt="" /> 
                        </a>
                        <div className="listing-avatar">
                            <a href="author-single.html"><img src={place.avatar ? place.avatar : blankAvatar} alt="" /></a>
                            <span className="avatar-tooltip">Added By  <strong>{place.postAuthor}</strong></span>
                        </div>
                        {place.openState ? 
                            <div className="geodir_status_date gsd_open"><i className="fal fa-lock-open"></i>Open Now</div> :
                            <div className="geodir_status_date gsd_close"><i className="fal fa-lock"></i>Close Now</div>
                        }
                        <div className="geodir-category-opt">
                            <div className="listing-rating-count-wrap">
                                <div className="review-score">{place.reviewScore}</div>
                                <div className="listing-rating card-popup-rainingvis" data-starrating2={place.reviewRating}></div>
                                <br />
                                <div className="reviews-count">{place.reviewCount} reviews</div>
                            </div>
                        </div>
                    </div>
                    <div className="geodir-category-content fl-wrap title-sin_item">
                        <div className="geodir-category-content-title fl-wrap">
                            <div className="geodir-category-content-title-item">
                                <h3 className="title-sin_map">
                                    <a href="listing-single.html">{place.title}</a><span className="verified-badge"><i className="fal fa-check"></i></span>
                                </h3>
                                <div className="geodir-category-location fl-wrap">
                                    <a href="#" ><i className="fas fa-map-marker-alt"></i> {place.location}</a>
                                </div>
                            </div>
                        </div>
                        <div className="geodir-category-text fl-wrap">
                            <p className="small-text">{place.description}</p>
                            <div className="facilities-list fl-wrap">
                                <div className="facilities-list-title">Facilities : </div>
                                <ul className="no-list-style">
                                    <li className="tolt"  data-microtip-position="top" data-tooltip="Free WiFi"><i className="fal fa-wifi"></i></li>
                                    <li className="tolt"  data-microtip-position="top" data-tooltip="Parking"><i className="fal fa-parking"></i></li>
                                    <li className="tolt"  data-microtip-position="top" data-tooltip="Non-smoking Rooms"><i className="fal fa-smoking-ban"></i></li>
                                    <li className="tolt"  data-microtip-position="top" data-tooltip="Pets Friendly"><i className="fal fa-dog-leashed"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="geodir-category-footer fl-wrap">
                            <a className="listing-item-category-wrap">
                                <div className="listing-item-category red-bg"><i className="fal fa-cheeseburger"></i></div>
                                <span>{place.category}</span>
                            </a>
                            <div className="geodir-opt-list">
                                <ul className="no-list-style">
                                    <li>
                                        <a href="#" className="show_gcc"><i className="fal fa-envelope"></i><span className="geodir-opt-tooltip">Contact Info</span></a>
                                    </li>
                                    <li>
                                        <a href="#1" className="single-map-item" data-newlatitude="40.72956781" data-newlongitude="-73.99726866"><i className="fal fa-map-marker-alt"></i><span className="geodir-opt-tooltip">On the map <strong>1</strong></span></a>
                                    </li>
                                    <li>
                                        <div className="dynamic-gal gdop-list-link" data-dynamicpath="[{'src': 'images/all/1.jpg'},{'src': 'images/all/1.jpg'}, {'src': 'images/all/1.jpg'}]">
                                            <i className="fal fa-search-plus"></i><span className="geodir-opt-tooltip">Gallery</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="price-level geodir-category_price">
                                <span className="price-level-item" data-pricerating={place.priceRating}></span>
                                <span className="price-name-tooltip">{place.priceTooltip}</span>
                            </div>
                            <div className="geodir-category_contacts">
                                <div className="close_gcc"><i className="fal fa-times-circle"></i></div>
                                <ul className="no-list-style">
                                    <li><span><i className="fal fa-phone"></i> Call : </span><a href="#">{place.phone}</a></li>
                                    <li><span><i className="fal fa-envelope"></i> Write : </span><a href="#">{place.email}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            {/* listing-item end -->  */}
        </div>
    );
}