import React from "react"
import { Row, Col } from "reactstrap"
import { useHistory } from "react-router-dom"

export default function PopularCity(props) {
  return (
    <div className="top-services popular-cities fl-wrap">
      <div className="container">
        <h4 className="hero-categories_title top-services-title popular-city-title">Most Popular Cities</h4>
        <Row className="match-height">
          <Col lg="3" md="6" sm="12">
            <ul className="no-list-style">
              <li>
                <a href="/listings">
                  <span>Atlanta, GA</span>
                </a>
              </li>
              <li>
                <a href="/listings">
                  <span>Charlotte, NC</span>
                </a>
              </li>
              <li>
                <a href="/listings">
                  <span>Chicago, IL</span>
                </a>
              </li>
              <li>
                <a href="/listings">
                  <span>Dallas, TX</span>
                </a>
              </li>
              <li>
                <a href="/listings">
                  <span>Denver, CO</span>
                </a>
              </li>
            </ul>
          </Col>
          <Col lg="3" md="6" sm="12">
            <ul className="no-list-style">
              <li>
                <a href="/listings">
                  <span>Houston, TX</span>
                </a>
              </li>
              <li>
                <a href="/listings">
                  <span>Los Angeles, CA</span>
                </a>
              </li>
              <li>
                <a href="/listings">
                  <span>Miami, FL</span>
                </a>
              </li>
              <li>
                <a href="/listings">
                  <span>Milwaukee, WI</span>
                </a>
              </li>
              <li>
                <a href="/listings">
                  <span>Minneapolis, MN</span>
                </a>
              </li>
            </ul>
          </Col>
          <Col lg="3" md="6" sm="12">
            <ul className="no-list-style">
              <li>
                <a href="/listings">
                  <span>New Orleans, LA</span>
                </a>
              </li>
              <li>
                <a href="/listings">
                  <span>New York, NY</span>
                </a>
              </li>
              <li>
                <a href="/listings">
                  <span>Philadelphia, PA</span>
                </a>
              </li>
              <li>
                <a href="/listings">
                  <span>Portland, OR</span>
                </a>
              </li>
              <li>
                <a href="/listings">
                  <span>Salt Lake City, UT</span>
                </a>
              </li>
            </ul>
          </Col>
          <Col lg="3" md="6" sm="12">
            <ul className="no-list-style">
              <li>
                <a href="/listings">
                  <span>San Antonio, TX</span>
                </a>
              </li>
              <li>
                <a href="/listings">
                  <span>San Diego, CA</span>
                </a>
              </li>
              <li>
                <a href="/listings">
                  <span>San Francisco, CA</span>
                </a>
              </li>
              <li>
                <a href="/listings">
                  <span>Seattle, WA</span>
                </a>
              </li>
              <li>
                <a href="/listings">
                  <span>Washington, DC</span>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  )
}
