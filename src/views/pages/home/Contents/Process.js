import React, { useState, useEffect } from "react"


export default function Process(props) {
  return (
    <section data-scrollax-parent="true">
        <div className="container">
            <div className="section-title">
                <h2>How it works</h2>
                <div className="section-subtitle">Discover &amp; Connect </div>
                <span className="section-separator"></span>
                <p>Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus.</p>
            </div>
            <div className="process-wrap fl-wrap">
                <ul className="no-list-style">
                    <li>
                        <div className="process-item">
                            <span className="process-count">01 </span>
                            <div className="time-line-icon"><i className="fal fa-map-marker-alt"></i></div>
                            <h4> Find Interesting Place</h4>
                            <p>Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut, convallis eros sollicitudin turpis.</p>
                        </div>
                        <span className="pr-dec"></span>
                    </li>
                    <li>
                        <div className="process-item">
                            <span className="process-count">02</span>
                            <div className="time-line-icon"><i className="fal fa-mail-bulk"></i></div>
                            <h4> Contact a Few Owners</h4>
                            <p>Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus sollicitudin feugiat pharetra consectetur.</p>
                        </div>
                        <span className="pr-dec"></span>
                    </li>
                    <li>
                        <div className="process-item">
                            <span className="process-count">03</span>
                            <div className="time-line-icon"><i className="fal fa-layer-plus"></i></div>
                            <h4> Make a Listing</h4>
                            <p>Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit nulla, id vestibulum metus nullam viverra porta.</p>
                        </div>
                    </li>
                </ul>
                <div className="process-end"><i className="fal fa-check"></i></div>
            </div>
        </div>
    </section>
  )
}
