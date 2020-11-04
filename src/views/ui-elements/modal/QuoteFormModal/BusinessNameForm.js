import React, { useState } from "react"
import { 
    Row, Col,
    FormGroup, Form, Input, Button
} from 'reactstrap'

export default function BusinessNameForm(props) {
    const { onSubmitForm } = props

    const [businessName, setBusinessName] = useState('')

    return (
        <Form onSubmit={onSubmitForm('businessNameForm', businessName)}>
            <Row className="match-height mt-30 text-center state-form">
                <Col lg="12" md="12" sm="12">
                    <h3 className="form-title">What will the name of your business be?</h3>
                </Col>
                <Col lg="12" md="12" sm="12">
                    <FormGroup>
                        <Input placeholder="Name of your business" value={businessName} onChange={(e) => setBusinessName(e.target.value)} required/>
                    </FormGroup>
                </Col>
                <Col lg="12" md="12" sm="12">
                    <Button type="submit" className="btn">Continue</Button>
                </Col>
            </Row>
        </Form>
    )
}
