import React, { useState } from "react"
import { 
    Row, Col,
    FormGroup, Form, 
    Label,Input, Button
} from 'reactstrap'

export default function StateForm(props) {
    const { onSubmitForm } = props

    const [contactInfo, setContactInfo] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    return (
        <div className="custom-form contact-form">
            <Form>
                <Row className="match-height mt-30 text-center justify-content-center">
                    <Col lg="12" md="12" sm="12">
                        <h3 className="quote-form-modal-question">How do we contact you?</h3>
                    </Col>
                </Row>
                <Row className="match-height text-center justify-content-center">
                    <Col lg="2" md="2" sm="2"></Col>
                    <Col lg="8" md="8" sm="8">
                        <input type="text" placeholder="First Name" value={contactInfo.firstName} onChange={(e) => setContactInfo({firstName: e.target.value})} required/>
                    </Col>
                </Row>
                <Row className="match-height text-center justify-content-center">
                    <Col lg="2" md="2" sm="2"></Col>
                    <Col lg="8" md="8" sm="8">
                        <input type="text" placeholder="Last Name" value={contactInfo.lastName} onChange={(e) => setContactInfo({lastName: e.target.value})} required/>
                    </Col>
                </Row>
                <Row className="match-height text-center justify-content-center">
                    <Col lg="2" md="2" sm="2"></Col>
                    <Col lg="8" md="8" sm="8">
                        <input type="email" placeholder="Email" value={contactInfo.email} onChange={(e) => setContactInfo({email: e.target.value})} required/>
                    </Col>
                </Row>
                <Row className="match-height text-center justify-content-center">
                    <Col lg="2" md="2" sm="2"></Col>
                    <Col lg="8" md="8" sm="8">
                        <input type="text" placeholder="phoneNumber"  required/>
                    </Col>
                </Row>
                <Row className="match-height text-center justify-content-center">
                    <Col lg="3" md="3" sm="3"></Col>
                    <Col lg="6" md="6" sm="6">
                        <label>
                            <input type="checkbox" className="form-control" />
                            {' '}Yes, I agree to the terms of use
                        </label>
                    </Col>
                </Row>
                <Row className="match-height text-center justify-content-center">
                    <Col lg="12" md="12" sm="12">
                        <button type="submit" className="btn quote-form-modal-btn" onClick={() => onSubmitForm('contactForm', contactInfo, 'contactForm')}>Get Quote</button>
                    </Col>
                    <Col lg="2" md="2" sm="2"></Col>
                    <Col lg="8" md="8" sm="8">
                        <p className="quote-form-modal-description">
                        By clicking Get Quote, you affirm you have read and agree to the {'agencyName'} Terms, 
                        and you agree and authorize {'agencyName'} and its affiliates, and their networks of Professionals, 
                        to deliver marketing calls or texts using automated technology to the number you provided above 
                        regarding your project and other services offers. Consent is not a condition of purchase.
                        </p>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
