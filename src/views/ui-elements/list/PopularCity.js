import React from 'react'
import { Row, Col } from 'reactstrap'
import { useHistory } from 'react-router-dom'

export default function PopularCity(props) {
    
    return (
        <div className="top-services popular-cities fl-wrap">
            <div className="container">
                <h4 className="hero-categories_title top-services-title popular-city-title">Most Popular Cities</h4>
                <Row className="match-height">
                    <Col lg="3" md="6" sm="12">
                        <ul className="no-list-style">
                            <li><a href="listing.html"><span>Bookkeeping Services</span></a></li>
                            <li><a href="listing.html"><span>Personal Tax Preparation</span></a></li>
                            <li><a href="listing.html"><span>Small Business Tax Preparation</span></a></li>
                            <li><a href="listing.html"><span>Business Tax Audit Defense</span></a></li>
                            <li><a href="listing.html"><span>Payroll Services</span></a></li>
                            <li><a href="listing.html"><span>Business Formation</span></a></li>
                        </ul>
                    </Col>
                    <Col lg="3" md="6" sm="12">
                        <ul className="no-list-style">
                            <li><a href="listing.html"><span>Bookkeeping Services</span></a></li>
                            <li><a href="listing.html"><span>Personal Tax Preparation</span></a></li>
                            <li><a href="listing.html"><span>Small Business Tax Preparation</span></a></li>
                            <li><a href="listing.html"><span>Business Tax Audit Defense</span></a></li>
                            <li><a href="listing.html"><span>Payroll Services</span></a></li>
                            <li><a href="listing.html"><span>Business Formation</span></a></li>
                        </ul>

                    </Col>
                    <Col lg="3" md="6" sm="12">
                        <ul className="no-list-style">
                            <li><a href="listing.html"><span>Bookkeeping Services</span></a></li>
                            <li><a href="listing.html"><span>Personal Tax Preparation</span></a></li>
                            <li><a href="listing.html"><span>Small Business Tax Preparation</span></a></li>
                            <li><a href="listing.html"><span>Business Tax Audit Defense</span></a></li>
                            <li><a href="listing.html"><span>Payroll Services</span></a></li>
                            <li><a href="listing.html"><span>Business Formation</span></a></li>
                        </ul>

                    </Col>
                    <Col lg="3" md="6" sm="12">
                        <ul className="no-list-style">
                            <li><a href="listing.html"><span>Bookkeeping Services</span></a></li>
                            <li><a href="listing.html"><span>Personal Tax Preparation</span></a></li>
                            <li><a href="listing.html"><span>Small Business Tax Preparation</span></a></li>
                            <li><a href="listing.html"><span>Business Tax Audit Defense</span></a></li>
                            <li><a href="listing.html"><span>Payroll Services</span></a></li>
                            <li><a href="listing.html"><span>Business Formation</span></a></li>
                        </ul>

                    </Col>
                </Row>
            </div>
        </div>
    );
}