import React from 'react'


export default function AlertCard(props) {
    const { cardDetail } = props

    return (
        <div className="dashboard-list fl-wrap">
            <div className="dashboard-message">
                <span className="new-dashboard-item"><i className="fal fa-times"></i></span>
                <div className="dashboard-message-text">
                    {cardDetail.state === 'approved' ? 
                        <>
                            <i className="far fa-check green-bg"></i> 
                            <p>Your listing <a href="#">{cardDetail.title}</a> has been approved! </p>
                        </> : null
                    }
                    {cardDetail.state === 'bookmarked' ? 
                        <>
                            <i className="far fa-heart purp-bg"></i>
                            <p>Someone bookmarked your <a href="#">{cardDetail.title}</a> listing! </p> 
                        </> : null
                    }
                    {cardDetail.state === 'review' ? 
                        <>
                            <i className="fal fa-comments-alt red-bg"></i>
                            <p>Someone left a review on <a href="#">{cardDetail.title}</a> listing! </p> 
                        </> : null
                    }
                </div>
                <div className="dashboard-message-time"><i className="fal fa-calendar-week"></i> {cardDetail.date}</div>
            </div>
        </div>
    )
}