import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import HeroBgImage from '../../../../assets/images/bg/hero/home-hero-image.png'

export default function HeroSection(props) {
    const history = useHistory()
    
    return (
        <section id="sec1" data-scrollax-parent="true">
            <div className="container">
                {/* about-wrap --> */}
                <div className="about-wrap">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="ab_text-title fl-wrap">
                                <h3>Get in Touch</h3>
                                <span className="section-separator fl-sec-sep"></span>
                            </div>
                            {/* box-widget-item -->                                        */}
                            <div className="box-widget-item fl-wrap block_box">
                                <div className="box-widget">
                                    <div className="box-widget-content bwc-nopad">
                                        <div className="list-author-widget-contacts list-item-widget-contacts bwc-padside">
                                            <ul className="no-list-style">
                                                <li><span><i className="fal fa-map-marker"></i> Adress :</span> <a href="#singleMap" className="custom-scroll-link">USA 27TH Brooklyn NY</a></li>
                                                <li><span><i className="fal fa-phone"></i> Phone :</span> <a href="#">+7(123)987654</a></li>
                                                <li><span><i className="fal fa-envelope"></i> Mail :</span> <a href="#">AlisaNoory@domain.com</a></li>
                                            </ul>
                                        </div>
                                        <div className="list-widget-social bottom-bcw-box  fl-wrap">
                                            <ul className="no-list-style">
                                                <li><a href="#" target="_blank" ><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#" target="_blank" ><i className="fab fa-vk"></i></a></li>
                                                <li><a href="#" target="_blank" ><i className="fab fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* box-widget-item end -->   */}
                            {/* box-widget-item --> */}
                            <div className="box-widget-item fl-wrap" style={{ marginTop: 20 }}>
                                <div className="banner-wdget fl-wrap">
                                    <div className="overlay op4"></div>
                                    <div className="bg"  data-bg="images/bg/1.jpg"></div>
                                    <div className="banner-wdget-content fl-wrap">
                                        <h4>Participate in our loyalty program. Refer a friend and get a discount.</h4>
                                        <a href="#" className="color-bg">Read more</a>
                                    </div>
                                </div>
                            </div>
                            {/* box-widget-item end -->                                             */}
                        </div>
                        <div className="col-md-8">
                            <div className="ab_text">
                                <div className="ab_text-title fl-wrap">
                                    <h3>Drop us a line</h3>
                                    <span className="section-separator fl-sec-sep"></span>
                                </div>
                                <p>Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus. In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida.</p>
                                <div id="contact-form">
                                    <div id="message"></div>
                                    <form  className="custom-form" action="php/contact.php" name="contactform" id="contactform">
                                        <fieldset>
                                            <label><i className="fal fa-user"></i></label>
                                            <input type="text" name="name" id="name" placeholder="Your Name *"/>
                                            <div className="clearfix"></div>
                                            <label><i className="fal fa-envelope"></i>  </label>
                                            <input type="text"  name="email" id="email" placeholder="Email Address*"/>
                                            <textarea name="comments"  id="comments" cols="40" rows="3" placeholder="Your Message:"></textarea>
                                        </fieldset>
                                        <button className="btn float-btn color2-bg" id="submit">Send Message<i className="fal fa-paper-plane"></i></button>
                                    </form>
                                </div>
                                 {/* contact form  end-->  */}
                            </div>
                        </div>
                    </div>
                </div>
                 {/* about-wrap end  -->  */}
            </div>
        </section>
    );
}