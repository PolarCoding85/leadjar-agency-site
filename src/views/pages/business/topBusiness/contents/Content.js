import React from "react"
import { Row, Col } from 'reactstrap'

import HeroSection from './Hero'
import CompareQuoteForm from '../../../../ui-elements/form/CompareQuoteForm'
import TopPersonTrainers from './TopPersonalTrainers'
import JoinNetworkForm from "../../../../ui-elements/form/JoinNetworkForm"
import PopularCity from '../../../../ui-elements/list/PopularCity'

export default function Content(props) {
  
  return (
    <div id="wrapper">
      <div id="content">
        <Row className="match-height">
            <Col lg="12" md="12" sm="12">
              <HeroSection />
            </Col>
            <Col lg="12" md="12" sm="12">
              <CompareQuoteForm />
            </Col>
            <Col lg="12" md="12" sm="12">
              <TopPersonTrainers />
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
