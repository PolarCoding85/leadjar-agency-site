import React from 'react'
import { Row, Col } from 'reactstrap'

import Navbar from '../../../layouts/navbar/Navbar'
import Footer from '../../../layouts/footer/Footer'
import Content from './Contents/Content'
import MapModal from '../../ui-elements/modal/MapModal'

export default function Home(props) {
    
    return (
        <div id="main">
            <Row className="match-height">
                <Col lg="12" md="12" sm="12">
                    <Navbar />
                </Col>
                <Col lg="12" md="12" sm="12">
                    <Content />
                </Col>
                <Col lg="12" md="12" sm="12">
                    <Footer />
                </Col>
                <Col lg="12" md="12" sm="12">
                    <MapModal />
                </Col>
            </Row>
        </div>
    );
}