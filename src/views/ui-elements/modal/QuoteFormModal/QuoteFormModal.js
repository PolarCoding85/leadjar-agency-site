// [ 20-09-24 by Angel ] -> Admin/Dashboard/Revenue/Setting Calender Modal

import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"

import StateForm from './StateForm'
import FormationTypeForm from './FormationTypeForm'
import BusinessNameForm from './BusinessNameForm'
import ContactForm from './ContactForm'

export default function QuoteFormModal(props) {
    const dispatch = useDispatch()
    const { onOpenModal, onCloseModal } = props

    const [formType, setFormType] = useState('stateForm')
    const [state, setState] = useState('')
    const [formation, setFormation] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [contact, setContact] = useState([])

    const handleSubmitForm = (type, value, nextType) => {
        setFormType(nextType)

        // if (type === 'stateForm') {
        //     setFormType(value)
        // } else if (type === 'formationForm') {
        //     setFormation(value)
        // } else if (type === 'businessNameForm') {
        //     setBusinessName(value)
         if (type === 'contactForm') {
            setContact(value)
        }
    }

    return (
        <div className="quote-form-wrap quote-form-modal">
            <div className="reg-overlay"></div>
            <div className="quote-form-holder">
                <div className="main-quote-form-modal fl-wrap">
                    <div className="quote-form-modal-title">Get connected with the best <span><strong>Business Formation</strong></span> Pro</div>
                    <div className="quote-form-modal-close-reg"><i className="fal fa-times"></i></div>
                    <div className="tabs-container">
                        {formType === 'stateForm' ? <StateForm onSubmitForm={handleSubmitForm} /> : null}
                        {formType === 'formationForm' ? <FormationTypeForm onSubmitForm={handleSubmitForm} /> : null}
                        {formType === 'businessNameForm' ? <BusinessNameForm onSubmitForm={handleSubmitForm} /> : null}
                        {formType === 'contactForm' ? <ContactForm onSubmitForm={handleSubmitForm} /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

