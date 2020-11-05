import React from "react"
import { Row, Col } from 'reactstrap'

import HeroSection from './Hero'
import AboutWrap from './AboutWrap'
import MapContainer from "./MapContainer"

export default function Content(props) {
  
    return (
        <div id="wrapper">
            <div id="content">
                <HeroSection />
                <AboutWrap />
                <MapContainer />
            </div>
        </div>
    )
}
