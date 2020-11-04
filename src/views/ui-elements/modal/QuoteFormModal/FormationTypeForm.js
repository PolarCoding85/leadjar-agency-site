import React, { useState } from "react"
import { 
    Row, Col,
    FormGroup, Label, Form, Input, Button
} from 'reactstrap'

export default function FormationTypeForm(props) {
    const { onSubmitForm } = props

    const [formation, setFormation] = useState('')

    return (
        <Form onSubmit={onSubmitForm('formationForm', formation)}>
            <Row className="match-height mt-30 text-center state-form">
                <Col lg="12" md="12" sm="12">
                    <h3 className="form-title">What type of formation?</h3>
                </Col>
                <Col lg="12" md="12" sm="12">
                    <FormGroup>
                        <Label check>
                            <Input type="checkbox"/>{' '}
                            Limited Liability Company (LLC)
                        </Label>
                    </FormGroup>
                </Col>
                <Col lg="12" md="12" sm="12">
                    <FormGroup>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            Corporation (Inc.)
                        </Label>
                    </FormGroup>
                </Col>
                <Col lg="12" md="12" sm="12">
                    <FormGroup>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            Nonprofit
                        </Label>
                    </FormGroup>
                </Col>
                <Col lg="12" md="12" sm="12">
                    <FormGroup>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            Sole Prorietorship
                        </Label>
                    </FormGroup>
                </Col>
                <Col lg="12" md="12" sm="12">
                    <FormGroup>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            Doing Business As (DBA)
                        </Label>
                    </FormGroup>
                </Col>
                <Col lg="12" md="12" sm="12">
                    <Button type="submit" className="btn">Continue</Button>
                </Col>
            </Row>
        </Form>
    )
}
