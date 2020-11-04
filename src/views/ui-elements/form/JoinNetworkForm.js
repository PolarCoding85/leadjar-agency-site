import React from 'react'
import { useHistory } from 'react-router-dom'

export default function JoinNetworkForm(props) {
    
    return (
        <div className="top-services fl-wrap">
            <div className="container compare-quote-form">
                <i className="far fa-thumbs-up join-network-form-icon"></i>
                <a href="dashboard-add-listing.html" className="compare-quote-btn color-bg">Join Our Network</a>
                <h4 className="top-services-title join-network-form-title">Are You a Quality Pro?</h4>
                <p className="quote-form-text">Let us help you grow your business</p>
            </div>
        </div>
    );
}