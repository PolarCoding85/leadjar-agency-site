import React from 'react'
import { useHistory } from 'react-router-dom'

export default function TopServices(props) {
    
    return (
        <div className="hero-categories top-services fl-wrap">
            <div className="container">
                <h4 className="hero-categories_title top-services-title">Top Services:</h4>
                <ul className="no-list-style">
                    <li><a href="listing.html"><i className="far fa-calculator"></i><span>Bookkeeping Services</span></a></li>
                    <li><a href="listing.html"><i className="far fa-piggy-bank"></i><span>Personal Tax Preparation</span></a></li>
                    <li><a href="listing.html"><i className="far fa-landmark"></i><span>Small Business Tax Preparation</span></a></li>
                    <li><a href="listing.html"><i className="far fa-balance-scale"></i><span>Business Tax Audit Defense</span></a></li>
                    <li><a href="listing.html"><i className="far fa-envelope-open-dollar"></i><span>Payroll Services</span></a></li>
                    <li><a href="listing.html"><i className="far fa-briefcase"></i><span>Business Formation</span></a></li>
                </ul>
            </div>
        </div>
    );
}