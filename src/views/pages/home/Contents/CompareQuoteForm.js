import React from 'react'
import { useHistory } from 'react-router-dom'

export default function CompareQuoteForm(props) {
    
    return (
        <div className="top-services fl-wrap">
            <div className="container compare-quote-form">
                <a href="dashboard-add-listing.html" className="compare-quote-btn color-bg">Compare a Quote</a>
                <h4 className="hero-categories_title top-services-title">Compare multiple quotes with a single request</h4>
                <p className="quote-form-text">Answer a few questions to get a personalized quote</p>
            </div>
        </div>
    );
}