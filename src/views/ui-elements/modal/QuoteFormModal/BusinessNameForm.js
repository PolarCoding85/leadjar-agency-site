import React, { useState } from "react"
import { 
    Row, Col,
    FormGroup, Form, Input, Button
} from 'reactstrap'

export default function BusinessNameForm(props) {
    const { onSubmitForm } = props

    const [businessName, setBusinessName] = useState('')

    return (
        <div className="custom-form businessName-form">
            <form>
                <Row className="match-height mt-30 text-center justify-content-center">
                    <Col lg="12" md="12" sm="12">
                        <h3 className="quote-form-modal-question">What will the name of your business be?</h3>
                    </Col>
                    <Col lg="2" md="32" sm="2"></Col>
                    <Col lg="8" md="8" sm="8">
                        <input placeholder="Name of your business" type="text" onChange={(e) => setBusinessName(e.target.value)} required/>
                    </Col>
                    <Col lg="12" md="12" sm="12">
                        <button type="submit" className="btn quote-form-modal-btn" onClick={() => onSubmitForm('businessNameForm', businessName, 'contactForm')}>Continue</button>
                    </Col>
                </Row>
            </form>
        </div>
    )
}
