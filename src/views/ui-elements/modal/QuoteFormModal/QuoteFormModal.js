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

    const handleSubmitForm = (type, value) => {
        setFormType(type)
        // e.preventDefault();
        // const formData = new FormData(e.target)
        // const cardData = {
        //     cardNumber: formData.get('card_number'),
        //     name: formData.get('name'),
        //     expiration: formData.get('expiration'),
        //     securityCode: formData.get('security_code'),
        //     zipCode: formData.get('zip_code'),
        // }

    }

    return (
        <div className="quote-form-wrap modal">
            <div className="reg-overlay"></div>
            <div className="quote-form-holder tabs-act">
                <div className="quote-form-modal fl-wrap  modal_main">
                    <div className="quote-form-modal-title">Welcome to <span><strong>Town</strong>Hub<strong>.</strong></span></div>
                    <div className="close-reg"><i className="fal fa-times"></i></div>
                    <div className="tabs-container">
                        {formType === 'stateForm' ? <StateForm /> : null}
                        {formType === 'formationForm' ? <FormationTypeForm /> : null}
                        {formType === 'businessNameForm' ? <BusinessNameForm /> : null}
                        {formType === 'contactForm' ? <ContactForm /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

