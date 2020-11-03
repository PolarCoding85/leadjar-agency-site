import React, { useState, useEffect } from "react"


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
                    <li>
                        <div className="process-item">
                            <span className="process-count">01 </span>
                            <div className="time-line-icon"><i className="fal fa-check-circle"></i></div>
                            <h4> Select a Service</h4>
                            <p>Select from individual tax preparation to business payroll & bookkeeping. Our screened professionals are ready to help you today.</p>
                        </div>
                        <span className="pr-dec"></span>
                    </li>
                    <li>
                        <div className="process-item">
                            <span className="process-count">02</span>
                            <div className="time-line-icon"><i className="fal fa-magic"></i></div>
                            <h4> Get Matched</h4>
                            <p>Our system then matches you with one or more of our pre-vetted tax & accounting professionals in a matter of seconds.</p>
                        </div>
                        <span className="pr-dec"></span>
                    </li>
                    <li>
                        <div className="process-item">
                            <span className="process-count">03</span>
                            <div className="time-line-icon"><i className="fal fa-smile-beam"></i></div>
                            <h4> Save Time & Money</h4>
                            <p>Save time by eliminating endless Google searches. Then save money by getting your taxes & accounting needs handled right the first time!</p>
                        </div>
                    </li>
                </ul>
                <div className="process-end"><i className="fal fa-check"></i></div>
            </div>
        </div>
    </section>
  )
}
