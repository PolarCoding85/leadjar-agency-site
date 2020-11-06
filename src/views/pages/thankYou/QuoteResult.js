import React from 'react'


const quoteCards = [
    {title: 'Bookkeepers LLC', reviewScore: 4.1, reviewRate: 4, isSave: false, reviewCount: 62},
    {title: 'MyBook', reviewScore: 4.9, reviewRate: 5, isSave: false, reviewCount: 17},
    {title: 'cloudBook LLC', reviewScore: 4.4, reviewRate: 4, isSave: false, reviewCount: 94},
]

const QuoteCard = (props) => {
    const { reviewDetail } = props

    return (
        <div className="compare-quote fl-wrap">
            <div className="container compare-quote-form row align-items-center">
                <div className="col-lg-10 col-md-10 col-sm-12">
                    <div className="row">
                        <h4 className="quote-card-title">{reviewDetail.title}</h4>
                        <span className="quote-card-save-icon"><i className="fa fa-heart"></i> save</span>
                    </div>
                    <div className="row">
                        <p className="quote-card-review-score">{reviewDetail.reviewScore}</p>
                        <div className="quote-card-review-rate">
                            <div className="card-popup-rainingvis quote-card-star-rate" data-starrating2={reviewDetail.reviewRate}></div>
                            <div className="quote-card-review-count">({reviewDetail.reviewCount}) reviews</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12">
                    <a href="dashboard-add-listing.html" className="compare-quote-btn color-bg">Call Now</a>
                </div>
            </div>
        </div>
    )
}

export default function QuoteResult() {

    return (
        <section data-scrollax-parent="true" className="thank-you-page">
            <div className="container">
                <div className="section-title">
                    <h2>Your Results</h2>
                    <div className="section-subtitle">Top Props </div>
                    {/* <span className="section-separator"></span>
                    <p>We match you with pre-vetted tax & accounting professionals in your area.</p> */}
                </div>
                <div className="quote-result-wrap fl-wrap">
                    <ul className="no-list-style">
                        {quoteCards.map((item, index) => (
                            <li key={index}>
                                <QuoteCard reviewDetail={item} />
                            </li>
                        ))}
                    </ul>
                    <div className="quote-result-end">
                        <a href="dashboard-add-listing.html" className="compare-quote-btn color-bg">Start a New Quote</a>
                    </div>
                </div>
            </div>
        </section>
    )
}