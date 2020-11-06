import React from 'react'

export default function LocationContact() {
    
    return (
        <div className="box-widget-item fl-wrap block_box">
            <div className="box-widget-item-header">
                <h3>Location / Contacts  </h3>
            </div>
            <div className="box-widget">
                <div className="map-container">
                    <div id="singleMap" data-latitude="40.7427837" data-longitude="-73.11445617675781" data-maptitle="Our Location"></div>
                </div>
                <div className="box-widget-content bwc-nopad">
                    <div className="list-author-widget-contacts list-item-widget-contacts bwc-padside">
                        <ul className="no-list-style">
                            <li><span><i className="fal fa-map-marker"></i> Adress :</span> <a href="#">USA 27TH Brooklyn NY</a></li>
                            <li><span><i className="fal fa-phone"></i> Phone :</span> <a href="#">+7(123)987654</a></li>
                            <li><span><i className="fal fa-envelope"></i> Mail :</span> <a href="#">AlisaNoory@domain.com</a></li>
                            <li><span><i className="fal fa-browser"></i> Website :</span> <a href="#">themeforest.net</a></li>
                        </ul>
                    </div>
                    <div className="list-widget-social bottom-bcw-box  fl-wrap">
                        <ul className="no-list-style">
                            <li><a href="#" target="_blank" ><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#" target="_blank" ><i className="fab fa-vk"></i></a></li>
                            <li><a href="#" target="_blank" ><i className="fab fa-instagram"></i></a></li>
                        </ul>
                        <div className="bottom-bcw-box_link"><a href="#" className="show-single-contactform tolt" data-microtip-position="top" data-tooltip="Write Message"><i className="fal fa-envelope"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}