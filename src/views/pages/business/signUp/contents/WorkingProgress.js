import React from "react"

export default function WorkingProcess(props) {
  
  return (
    <section className="gray-bg particles-wrapper">
        <div className="container">
            <div className="section-title">
                <h2> Working Process</h2>
                <div className="section-subtitle">How we work</div>
                <span className="section-separator"></span>
                <p>Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus. Sed tempor iaculis massa faucibus feugiat.</p>
            </div>
            <div className="process-wrap_time-line fl-wrap">
                {/* process-item--> */}
                <div className="process-item_time-line">
                    <div className="pi_head color-bg">1</div>
                    <div className="pi-text fl-wrap">
                        <h4>Developing an effective strategy</h4>
                        <p>Maecenas faucibus non tellus eu ultricies. Vivamus lacinia ultrices nulla sit amet venenatis.</p>
                    </div>
                </div>
                {/* process-item end--> */}
                {/* process-item--> */}
                <div className="process-item_time-line">
                    <div className="pi_head color-bg">2</div>
                    <div className="pi-text fl-wrap">
                        <h4>Website development and integration</h4>
                        <p>Maecenas faucibus non tellus eu ultricies. Vivamus lacinia ultrices nulla sit amet venenatis.</p>
                    </div>
                </div>
                {/* process-item end--> */}
                {/* process-item--> */}
                <div className="process-item_time-line">
                    <div className="pi_head color-bg">3</div>
                    <div className="pi-text fl-wrap">
                        <h4>Testing and professional support</h4>
                        <p>Maecenas faucibus non tellus eu ultricies. Vivamus lacinia ultrices nulla sit amet venenatis.</p>
                    </div>
                </div>
                {/* process-item end-->                                                             */}
            </div>
            <a href="#" className="btn color2-bg">View More Details<i className="fal fa-angle-right"></i></a>
        </div>
        <div id="particles-js" className="particles-js"></div>
    </section>
  )
}
