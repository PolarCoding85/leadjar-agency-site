import React from 'react'


export default function FactCard(props) {
    const { cardDetail } = props

    return (
        <div className="inline-facts-wrap gradient-bg ">
            <div className="inline-facts">
                <i className={"fal " + cardDetail.icon}></i>
                <div className="milestone-counter">
                    <div className="stats animaper">
                        <div className="num" data-content="0" data-num="1054">{cardDetail.number}</div>
                    </div>
                </div>
                <h6>{cardDetail.title}</h6>
            </div>
            <div className="stat-wave">
                <svg viewBox="0 0 100 25">
                    <path fill="#fff" d="M0 30 V12 Q30 17 55 2 T100 11 V30z" />
                </svg>
            </div>
        </div>
    )
}