import React from "react"

export default function Content(props) {
  
  return (
    <div className="page-scroll-nav">
        <nav className="scroll-init color2-bg">
            <ul className="no-list-style">
                <li><a className="act-scrlink tolt" href="#sec1" data-microtip-position="left" data-tooltip="Our story"><i className="fal fa-building"></i></a></li>
                <li><a href="#sec2" className="tolt" data-microtip-position="left" data-tooltip="Promo Video"><i className="fal fa-video"></i></a></li>
                <li><a href="#sec3" className="tolt" data-microtip-position="left" data-tooltip="Our team"><i className="far fa-users-crown"></i></a></li>
                <li><a href="#sec4" className="tolt" data-microtip-position="left" data-tooltip="Why us"><i className="fal fa-user-astronaut"></i></a></li>
                <li><a href="#sec5" className="tolt" data-microtip-position="left" data-tooltip="Testimonials"><i className="fal fa-comment-alt-smile"></i></a></li>
            </ul>
        </nav>
    </div>
  )
}
