import React, { useState } from "react"
import { 
    Row, Col,
    FormGroup, Form, Input, Button
} from 'reactstrap'

export default function StateForm(props) {
    const { onSubmitForm } = props

    const [businessState, setBusinessState] = useState('')

    return (
        <div className="custom-form state-form">
            {/* <Form onSubmit={onSubmitForm('stateForm', businessState, 'formationForm')}> */}
            <Form>
                <Row className="match-height mt-30 text-center justify-content-center">
                    <Col lg="12" md="12" sm="12">
                        <h3 className="quote-form-modal-question">What state would you like to form your business in?</h3>
                    </Col>
                    <Col lg="2" md="2" sm="2"></Col>
                    <Col lg="8" md="8" sm="8">
                        <input name="state" type="text" placeholder="Enter your state" onChange={(e) => setBusinessState(e.target.value)} required/>
                    </Col>
                    <Col lg="12" md="12" sm="12">
                        <button type="submit" className="btn quote-form-modal-btn" onClick={() => onSubmitForm('stateForm', businessState, 'formationForm')}>Continue</button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
