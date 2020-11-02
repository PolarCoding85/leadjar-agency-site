import React from "react"

import BgImage from '../../../../../assets/images/all/1.jpg'

export default function Content(props) {
  
    return (
        <section id="sec1" data-scrollax-parent="true">
            <div className="container">
                <div className="section-title">
                    <h2> How We Work</h2>
                    <div className="section-subtitle">who we are</div>
                    <span className="section-separator"></span>
                    <p>Explore some of the best tips from around the city from our partners and friends.</p>
                </div>
                <div className="about-wrap">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="list-single-main-media fl-wrap" style={{ boxShadow: '0 9px 26px rgba(58, 87, 135, 0.2)'}}>
                                <img src={BgImage} className="respimg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ab_text">
                                <div className="ab_text-title fl-wrap">
                                    <h3>Our Awesome  Team <span>Story</span></h3>
                                    <h4>Check video presentation to find out more about us .</h4>
                                    <span className="section-separator fl-sec-sep"></span>
                                </div>
                                <p>Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus. Sed tempor iaculis massa faucibus feugiat. </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.
                                </p>
                                <a href="#sec3" className="btn color2-bg float-btn custom-scroll-link">Our Team <i className="fal fa-users"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="fw-separator"></span>
                <div className=" single-facts bold-facts fl-wrap">
                    {/* inline-facts --> */}
                    <div className="inline-facts-wrap">
                        <div className="inline-facts">
                            <div className="milestone-counter">
                                <div className="stats animaper">
                                    <div className="num" data-content="0" data-num="1254">1254</div>
                                </div>
                            </div>
                            <h6>New Visiters Every Week</h6>
                        </div>
                    </div>
                    {/* inline-facts end --> */}
                    {/* inline-facts  --> */}
                    <div className="inline-facts-wrap">
                        <div className="inline-facts">
                            <div className="milestone-counter">
                                <div className="stats animaper">
                                    <div className="num" data-content="0" data-num="12168">12168</div>
                                </div>
                            </div>
                            <h6>Happy customers every year</h6>
                        </div>
                    </div>
                    {/* inline-facts end --> */}
                    {/* inline-facts  --> */}
                    <div className="inline-facts-wrap">
                        <div className="inline-facts">
                            <div className="milestone-counter">
                                <div className="stats animaper">
                                    <div className="num" data-content="0" data-num="2172">2172</div>
                                </div>
                            </div>
                            <h6>Won Awards</h6>
                        </div>
                    </div>
                    {/* inline-facts end --> */}
                    {/* inline-facts  --> */}
                    <div className="inline-facts-wrap">
                        <div className="inline-facts">
                            <div className="milestone-counter">
                                <div className="stats animaper">
                                    <div className="num" data-content="0" data-num="732">732</div>
                                </div>
                            </div>
                            <h6>New Listing Every Week</h6>
                        </div>
                    </div>
                    {/* inline-facts end --> */}
                </div>
            </div>
        </section>
    )
}
