import React from 'react'

import ReviewCard from '../../../../ui-elements/cards/ReviewCard'

import BlankImage from '../../../../../assets/images/api/1.jpg'
import Avatar from '../../../../../assets/images/avatar/1.jpg'

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

export default function ReviewList(props) {

    return (
        <>
            <div className="dashboard-title dt-inbox fl-wrap">
                <h3>Your Reviews</h3>
            </div>
            <div className="profile-edit-container fl-wrap block_box">
                <div className="reviews-comments-wrap">
                    {reviewItems.map((reviewItem, index) => (
                        <ReviewCard reviewItem={reviewItem} key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}