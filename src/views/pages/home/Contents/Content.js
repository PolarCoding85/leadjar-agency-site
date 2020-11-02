import React from "react"
import { Row, Col } from 'reactstrap'

import HeroSection from './Hero'
import SliderSection from './Slider'
import BestCitySection from './BestCity'
import ParallaxOne from './ParallaxOne'
import MostPopularPlaces from "./MostPopularPlaces"
import ParallaxTwo from './ParallaxTwo'
import Process from "./Process"
import AppAvailable from './AppAvailable'
import ClientsCarousel from './ClientsCarousel'
import Testimonilas from "./Testimonilas"

export default function Content(props) {
  
  return (
    <div id="wrapper">
      <div id="content">
        <Row className="match-height">
            <Col lg="12" md="12" sm="12">
              <HeroSection />
            </Col>
            <Col lg="12" md="12" sm="12">
              <SliderSection />
            </Col>
            <Col lg="12" md="12" sm="12">
              <BestCitySection />
            </Col>
            <Col lg="12" md="12" sm="12">
              <ParallaxOne />
            </Col>
            <Col lg="12" md="12" sm="12">
              <MostPopularPlaces />
            </Col>
            <Col lg="12" md="12" sm="12">
              <ParallaxTwo />
            </Col>
            <Col lg="12" md="12" sm="12">
              <Process />
            </Col>
            <Col lg="12" md="12" sm="12">
              <AppAvailable />
            </Col>
            <Col lg="12" md="12" sm="12">
              <Testimonilas />
            </Col>
            <Col lg="12" md="12" sm="12">
              <ClientsCarousel />
            </Col>
        </Row>
      </div>
    </div>
  )
}
