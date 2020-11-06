import React from 'react'

import BlankImage from '../../../../../../assets/images/all/1.jpg'

export default function Description() {
    
    return (
        <>
            <div className="list-single-main-media fl-wrap">
                <img src={BlankImage} className="respimg" alt="" />
                <a href="https://vimeo.com/70851162" className="promo-link image-popup"><i className="fal fa-video"></i><span>Promo Video</span></a>
            </div>
            <div className="list-single-main-item fl-wrap block_box">
                <div className="list-single-main-item-title">
                    <h3>Description</h3>
                </div>
                <div className="list-single-main-item_content fl-wrap">
                    <p>Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Vivamus adipiscing eros quis orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec velit non odio aliquam suscipit. Sed non neque faucibus, condimentum lectus at, accumsan enim.   </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</p>
                    <a href="#" className="btn color2-bg    float-btn">Visit Website<i className="fal fa-chevron-left"></i></a>
                </div>
            </div>
        </>
    );
}