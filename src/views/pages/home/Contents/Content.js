import React from "react"
import { Row, Col } from 'reactstrap'

import HeroSection from './Hero'
import TopServices from './TopServices'
import Process from "./Process"
import CompareQuoteForm from './CompareQuoteForm'
import Testimonilas from "./Testimonilas"
import JoinNetworkForm from "./JoinNetworkForm"
import PopularCity from './PopularCity'

export default function Content(props) {
  
  return (
    <div id="wrapper">
      <div id="content">
        <Row className="match-height">
            <Col lg="12" md="12" sm="12">
              <HeroSection />
            </Col>
            <Col lg="12" md="12" sm="12">
              <TopServices />
            </Col>
            <Col lg="12" md="12" sm="12">
              <Process />
            </Col>
            <Col lg="12" md="12" sm="12">
              <CompareQuoteForm />
            </Col>
            <Col lg="12" md="12" sm="12">
              <Testimonilas />
            </Col>
            <Col lg="12" md="12" sm="12">
              <JoinNetworkForm />
            </Col>
            <Col lg="12" md="12" sm="12">
              <PopularCity />
            </Col>
        </Row>
      </div>
    </div>
  )
}
