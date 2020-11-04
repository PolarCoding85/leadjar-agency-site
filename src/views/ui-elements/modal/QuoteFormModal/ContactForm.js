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
        <Form onSubmit={onSubmitForm('contactForm', contactInfo)}>
            <Row className="match-height mt-30 text-center state-form">
                <Col lg="12" md="12" sm="12">
                    <h3 className="form-title">How do we contact you?</h3>
                </Col>
                <Col lg="12" md="12" sm="12">
                    <FormGroup>
                        <Input placeholder="First Name" value={contactInfo.firstName} onChange={(e) => setContactInfo({firstName: e.target.value})} required/>
                    </FormGroup>
                </Col>
                <Col lg="12" md="12" sm="12">
                    <FormGroup>
                        <Input placeholder="Last Name" value={contactInfo.lastName} onChange={(e) => setContactInfo({lastName: e.target.value})} required/>
                    </FormGroup>
                </Col>
                <Col lg="12" md="12" sm="12">
                    <FormGroup>
                        <Input type="email" placeholder="Email" value={contactInfo.email} onChange={(e) => setContactInfo({email: e.target.value})} required/>
                    </FormGroup>
                </Col>
                <Col lg="12" md="12" sm="12">
                    <FormGroup>
                        <Input placeholder="" value="" required/>
                    </FormGroup>
                </Col>
                <Col lg="12" md="12" sm="12">
                    <FormGroup>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            Yes, I agree to the terms of use
                        </Label>
                    </FormGroup>
                </Col>
                <Col lg="12" md="12" sm="12">
                    <Button type="submit" className="btn">Get Quote</Button>
                </Col>
                <Col lg="12" md="12" sm="12">
                    <p className="quote-form-description">
                    By clicking Get Quote, you affirm you have read and agree to the {'agencyName'} Terms, 
                    and you agree and authorize {'agencyName'} and its affiliates, and their networks of Professionals, 
                    to deliver marketing calls or texts using automated technology to the number you provided above 
                    regarding your project and other services offers. Consent is not a condition of purchase.
                    </p>
                </Col>
            </Row>
        </Form>
    )
}
