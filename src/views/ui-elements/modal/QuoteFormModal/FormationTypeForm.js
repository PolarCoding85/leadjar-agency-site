import React, { useState } from "react"
import { 
    Row, Col,
    FormGroup, Label, Form, Input, Button
} from 'reactstrap'

export default function FormationTypeForm(props) {
    const { onSubmitForm } = props

    const [formation, setFormation] = useState('')

    return (
        <div className="custom-form state-form">
            {/* <Form onSubmit={onSubmitForm('formationForm', formation, 'businessNameForm')}> */}
            <Form>
                <Row className="match-height mt-30 text-center justify-content-center">
                    <Col lg="12" md="12" sm="12">
                        <h3 className="quote-form-modal-question">What type of formation?</h3>
                    </Col>
                    <Col lg="2" md="2" sm="2"></Col>
                    <Col lg="10" md="10" sm="10">
                        <label>
                            <input type="checkbox" className="form-control" onChange={(e) => setFormation(e.target.value)} />
                            {' '} Limited Liability Company (LLC)
                        </label>
                    </Col>
                    <Col lg="2" md="2" sm="2"></Col>
                    <Col lg="10" md="10" sm="10">
                        <label>
                            <input type="checkbox" className="form-control" onChange={(e) => setFormation(e.target.value)} />
                            {' '}Corporation (Inc.)
                        </label>
                    </Col>
                    <Col lg="2" md="2" sm="2"></Col>
                    <Col lg="10" md="10" sm="10">
                        <label>
                            <input type="checkbox" className="form-control" onChange={(e) => setFormation(e.target.value)} />
                            {' '}Nonprofit
                        </label>
                    </Col>
                    <Col lg="2" md="2" sm="2"></Col>
                    <Col lg="10" md="10" sm="10">
                        <label>
                            <input type="checkbox" className="form-control" onChange={(e) => setFormation(e.target.value)} />
                            {' '}Sole Prorietorship
                        </label>
                    </Col>
                    <Col lg="2" md="2" sm="2"></Col>
                    <Col lg="10" md="10" sm="10">
                        <label>
                            <input type="checkbox" className="form-control" onChange={(e) => setFormation(e.target.value)} />
                            {' '}Doing Business As (DBA)
                        </label>
                    </Col>
                    <Col lg="12" md="12" sm="12">
                        <button 
                            type="submit" className="btn quote-form-modal-btn" 
                            onClick={() => onSubmitForm('formationForm', formation, 'businessNameForm')}>Continue</button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
