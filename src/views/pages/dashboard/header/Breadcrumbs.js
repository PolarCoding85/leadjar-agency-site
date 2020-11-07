import React from 'react'
import { Breadcrumb } from 'reactstrap'


export default function Breadcrumbs() {

    return (
        <div className="container">
            <div className="dashboard-breadcrumbs breadcrumbs"><a href="#">Home</a><a href="#">Dashboard</a><span>Main page</span></div>
            {/* Tariff Plan menu--> */}
            <div   className="tfp-btn"><span>Tariff Plan : </span> <strong>Extended</strong></div>
            <div className="tfp-det">
                <p>You Are on <a href="#">Extended</a> . Use link bellow to view details or upgrade. </p>
                <a href="#" className="tfp-det-btn color2-bg">Details</a>
            </div>
            {/* Tariff Plan menu end--> */}
            <div className="dashboard-header_conatiner fl-wrap dashboard-header_title">
                <h1>Welcome  : <span>Alisa Noory</span></h1>
            </div>
        </div>
    )
}