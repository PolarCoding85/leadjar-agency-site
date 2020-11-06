import React from "react"

import BgImage from '../../../../../assets/images/bg/1.jpg'

export default function WhoChooseUs(props) {
  
    return (
        <>
            <section className="parallax-section" data-scrollax-parent="true" id="sec4">
                <div className="bg par-elem"  data-bg={BgImage} data-scrollax="properties: { translateY: '30%' }"></div>
                <div className="overlay op7"></div>
                <div className="container">
                    <div className="section-title center-align big-title">
                        <h2><span>Why Choose Us</span></h2>
                        <span className="section-separator"></span>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet fermentum sem.</h4>
                    </div>
                </div>
            </section>
            <section className="gray-bg absolute-wrap_section">
                <div className="container">
                    <div className="absolute-wrap fl-wrap">
                         {/* features-box-container -->  */}
                        <div className="features-box-container fl-wrap">
                            <div className="row">
                                {/* features-box -->  */}
                                <div className="col-md-4">
                                    <div className="features-box">
                                        <div className="time-line-icon">
                                            <i className="fal fa-headset"></i>
                                        </div>
                                        <h3>24 Hours Support</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.    </p>
                                    </div>
                                </div>
                                 {/* features-box end  -->  */}
                                {/* features-box -->  */}
                                <div className="col-md-4">
                                    <div className="features-box gray-bg">
                                        <div className="time-line-icon">
                                            <i className="fal fa-users-cog"></i>
                                        </div>
                                        <h3>Admin Panel</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.   </p>
                                    </div>
                                </div>
                                 {/* features-box end  -->  */}
                                {/* features-box -->  */}
                                <div className="col-md-4">
                                    <div className="features-box ">
                                        <div className="time-line-icon">
                                            <i className="fal fa-mobile"></i>
                                        </div>
                                        <h3>Mobile Friendly</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.  </p>
                                    </div>
                                </div>
                                 {/* features-box end  -->   */}
                            </div>
                        </div>
                         {/* features-box-container end  -->                              */}
                    </div>
                    <div className="section-separator"></div>
                </div>
            </section>
        </>
    )
}
