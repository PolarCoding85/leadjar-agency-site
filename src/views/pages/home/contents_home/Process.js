import React from "react"

import ProcessCard from '../../../../ui-elements/cards/ProcessCard'

const processList = [
    {count: '01', icon: 'fa-check-circle', title: 'Select a Service', description: 'Select from individual tax preparation to business payroll & bookkeeping. Our screened professionals are ready to help you today.'},
    {count: '02', icon: 'fa-magic', title: 'Get Matched', description: 'Our system then matches you with one or more of our pre-vetted tax & accounting professionals in a matter of seconds.'},
    {count: '03', icon: 'fa-smile-beam', title: 'Save Time & Money', description: 'Save time by eliminating endless Google searches. Then save money by getting your taxes & accounting needs handled right the first time!'},
]

export default function Process(props) {
  return (
    <section data-scrollax-parent="true">
        <div className="container">
            <div className="section-title">
                <h2>How it works</h2>
                <div className="section-subtitle">Discover &amp; Connect </div>
                <span className="section-separator"></span>
                <p>We match you with pre-vetted tax & accounting professionals in your area.</p>
            </div>
            <div className="process-wrap fl-wrap">
                <ul className="no-list-style">
                    {processList.map((item, index) => (
                        <li key={index}>
                            <ProcessCard process={item} />
                        </li>
                    ))}
                </ul>
                <div className="process-end"><i className="fal fa-check"></i></div>
            </div>
        </div>
    </section>
  )
}
