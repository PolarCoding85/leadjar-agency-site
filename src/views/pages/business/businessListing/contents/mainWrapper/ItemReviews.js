import React from 'react'

import ReviewCard from '../../../../../ui-elements/cards/ReviewCard'

import BlankImage from '../../../../../../assets/images/api/1.jpg'
import Avatar from '../../../../../../assets/images/avatar/1.jpg'

const reviewScoreDetail = [
    {title: 'Quality', percent: '100%', rate: '5.0'},
    {title: 'Location', percent: '70%', rate: '4.0'},
    {title: 'Price', percent: '40%', rate: '2.0'},
    {title: 'Service', percent: '50%', rate: '3.0'},
]
const reviewItems = [
    {
        avatar: Avatar, 
        postedAuth: 'Adam Koncy', 
        reviewScore: 5.0, 
        reviewRate: 5, 
        review: '" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere convallis purus non cursus. Cras metus neque, gravida sodales massa ut. "',
        reviewImages: {BlankImage, BlankImage},
        postedDate: '03 December 2017',
        helpfulReview: 4,
    },
    {
        avatar: Avatar, 
        postedAuth: 'Adam Koncy', 
        reviewScore: 5.0, 
        reviewRate: 5, 
        review: '" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere convallis purus non cursus. Cras metus neque, gravida sodales massa ut. "',
        reviewImages: [BlankImage, BlankImage],
        postedDate: '03 December 2017',
        helpfulReview: 4,
    }
]

const ReviewScoreItem = (props) => {
    const { reviewScore } = props

    return (
        <div className="rate-item">
            <div className="rate-item-title"><span>{reviewScore.title}</span></div>
            <div className="rate-item-bg" data-percent={reviewScore.percent}>
                <div className="rate-item-line gradient-bg"></div>
            </div>
            <div className="rate-item-percent">{reviewScore.rate}</div>
        </div>
    )
}

export default function ItemReviews() {
    
    return (
        <div className="list-single-main-item fl-wrap block_box" id="sec5">
            <div className="list-single-main-item-title">
                <h3>Item Reviews -  <span> 2 </span></h3>
            </div>
            {/* reviews-score-wrap-->    */}
            <div className="reviews-score-wrap fl-wrap">
                <div className="review-score-total">
                    <span className="review-score-total-item">
                    4.1
                    </span>
                    <div className="listing-rating card-popup-rainingvis" data-starrating2="5"></div>
                </div>
                <div className="review-score-detail">
                     {/* review-score-detail-list--> */}
                    <div className="review-score-detail-list">
                        {reviewScoreDetail.map((item, index) => (
                            <ReviewScoreItem reviewScore={item} key={index} />
                        ))}
                    </div>
                     {/* review-score-detail-list end--> */}
                </div>
            </div>
             {/* reviews-score-wrap end --> */}
            <div className="list-single-main-item_content fl-wrap">
                <div className="reviews-comments-wrap">
                    {reviewItems.map((reviewItem, index) => (
                        <ReviewCard reviewItem={reviewItem} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}