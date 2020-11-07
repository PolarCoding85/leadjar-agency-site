import React from 'react'


export default function ReviewCard(props) {
    const { reviewItem } = props
    // const reviewImages = reviewItem.reviewImages
    
    return (
        <div className="reviews-comments-item">
            <div className="review-comments-avatar">
                <img src={reviewItem.avatar} alt="" /> 
            </div>
            <div className="reviews-comments-item-text fl-wrap">
                <div className="reviews-comments-header fl-wrap">
                    <h4><a href="#">{reviewItem.postedAuth}</a></h4>
                    <div className="review-score-user">
                        <span className="review-score-user_item">{reviewItem.reviewScore}</span>
                        <div className="listing-rating card-popup-rainingvis" data-starrating2={reviewItem.reviewRate}></div>
                    </div>
                </div>
                <p>{reviewItem.review}</p>
                <div className="review-images">
                    {/* {reviewImages.map((reviewImage, key) => (
                        <a href={reviewImage} className="image-popup" key={key}><img src={reviewImage} alt="" /></a>
                    ))} */}
                </div>
                <div className="reviews-comments-item-footer fl-wrap">
                    <div className="reviews-comments-item-date"><span><i className="far fa-calendar-check"></i>{reviewItem.postedDate}</span></div>
                    <a href="#" className="rate-review"><i className="fal fa-thumbs-up"></i>  Helpful Review  <span>{reviewItem.helpfulReview}</span> </a>
                </div>
            </div>
        </div>
    )
}