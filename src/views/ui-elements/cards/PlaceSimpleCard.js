import React from 'react'

export default function PlaceSimpleCard(props) {
    const { place } = props

    return (
        <div className="listing-item listing_carditem">
            <article className="geodir-category-listing fl-wrap">
                <div className="geodir-category-img">
                    <div className="geodir-js-favorite_btn"><i className="fal fa-heart"></i><span>Save</span></div>
                    <a href="listing-single.html" className="geodir-category-img-wrap fl-wrap">
                        <img src={place.image} alt="" /> 
                    </a>
                    <div className="geodir_status_date gsd_open"><i className="fal fa-lock-open"></i>Open Now</div>
                    <div className="geodir-category-opt">
                        <div className="geodir-category-opt_title">
                            <h4><a href={place.link}>{place.title}</a></h4>
                            <div className="geodir-category-location"><a href="#"><i className="fas fa-map-marker-alt"></i>{place.location}</a></div>
                        </div>
                        <div className="listing-rating-count-wrap">
                            <div className="review-score">{place.reviewScore}</div>
                            <div className="listing-rating card-popup-rainingvis" data-starrating2="4"></div>
                            <br />
                            <div className="reviews-count">{place.reviewCount} reviews</div>
                        </div>
                        <div className="listing_carditem_footer fl-wrap">
                            <a className="listing-item-category-wrap" href="#">
                                <div className="listing-item-category red-bg"><i className="fal fa-cheeseburger"></i></div>
                                <span>{place.category}</span>
                            </a>
                            <div className="price-level geodir-category_price">
                                <span className="price-level-item" data-pricerating="2">{place.price}</span>
                                <span className="price-name-tooltip">{place.priceNameToolTip}</span>
                            </div>
                            <div className="post-author">
                                <a href="#"><img src={place.avatar} alt="" /><span>By , {place.postAuthor}</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}