import React from 'react'


const quoteCards = [
    {title: 'Bookkeepers LLC', reviewScore: 4.1, reviewRate: 4, isSave: false, reviewCount: 62},
]

const ContactCard = (props) => {

    return (
        <div className="compare-quote fl-wrap">
            <div className="container compare-quote-form row align-items-center">
                <div className="col-lg-10 col-md-10 col-sm-12">
                    <div className="row">
                        <h4 className="contact-card-title">Dedicated Rep</h4>
                        <p className="contact-card-txt contact-card-name">Mike Jones</p>
                    </div>
                    <div className="row">
                        <h4 className="contact-card-title">Contact Info</h4>
                        <p className="contact-card-txt">(888) 555-5555 ext 111</p>
                        <p className="contact-card-txt">mike.jones@hellotaxes.com</p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12">
                    <a href="dashboard-add-listing.html" className="compare-quote-btn color-bg">Call Now</a>
                </div>
            </div>
        </div>
    )
}

export default function ContactInfo() {

    return (
        <section data-scrollax-parent="true" className="thank-you-page">
            <div className="container">
                <div className="section-title business-thankyou-title">
                    <h2>Configurations</h2>
                    <div className="section-subtitle">Let's Grow </div>
                    <p>You're On Your Way Growing Your Business.</p>
                </div>
                <div className="quote-result-wrap fl-wrap">
                    <ul className="no-list-style">
                        <li>
                            <div className="compare-quote fl-wrap">
                                <div className="container waring-alert">
                                    <p><i className="fa fa-exclamation-triangle"></i> Your dedicated rep will be contacting you soon to verify your new account.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <ContactCard />
                        </li>
                    </ul>
                    <div className="quote-result-end">
                        <a href="dashboard-add-listing.html" className="compare-quote-btn color-bg">Go To Your Admin Portal</a>
                    </div>
                </div>
            </div>
        </section>
    )
}