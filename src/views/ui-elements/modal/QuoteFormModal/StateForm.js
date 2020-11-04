import React, { useState } from "react"
import { 
    Row, Col,
    FormGroup, Form, Input, Button
} from 'reactstrap'

export default function StateForm(props) {
    const { onSubmitForm } = props

    const [businessState, setBusinessState] = useState('')

    return (
        <Form onSubmit={onSubmitForm('stateForm', businessState)}>
            <Row className="match-height mt-30 text-center state-form">
                <Col lg="12" md="12" sm="12">
                    <h3 className="form-title">What state would you like to form your business in?</h3>
                </Col>
                <Col lg="12" md="12" sm="12">
                    <FormGroup>
                        <Input placeholder="Enter your state" value={businessState} onChange={(e) => setBusinessState(e.target.value)} required/>
                    </FormGroup>
                </Col>
                <Col lg="12" md="12" sm="12">
                    <Button type="submit" className="btn">Continue</Button>
                </Col>
            </Row>
        </Form>
    )
}
