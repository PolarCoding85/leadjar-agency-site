import React from 'react'

import Avatar from '../../../../../assets/images/avatar/1.jpg'


export default function ChatBox(props) {

    return (
        <div className="col-sm-8">
            <div className="chat-box fl-wrap">
                 {/* message-->  */}
                <div className="chat-message chat-message_guest fl-wrap">
                    <div className="dashboard-message-avatar">
                        <img src={Avatar} alt="" />
                        <span className="chat-message-user-name cmun_sm">Andy</span>
                    </div>
                    <span className="massage-date">25 may 2018  <span>7.51 PM</span></span>
                    <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                </div>
                 {/* message end--> */}
                 {/* message-->  */}
                <div className="chat-message chat-message_user fl-wrap">
                    <div className="dashboard-message-avatar">
                        <img src={Avatar} alt="" />
                        <span className="chat-message-user-name cmun_sm">Jessie</span>
                    </div>
                    <span className="massage-date">25 may 2018  <span>7.51 PM</span></span>
                    <p>Nulla eget erat consequat quam feugiat dapibus eget sed mauris.</p>
                </div>
                 {/* message end-->                                              */}
                 {/* message-->  */}
                <div className="chat-message chat-message_guest fl-wrap">
                    <div className="dashboard-message-avatar">
                        <img src={Avatar} alt="" />
                        <span className="chat-message-user-name cmun_sm">Andy</span>
                    </div>
                    <span className="massage-date">25 may 2018  <span>7.51 PM</span></span>
                    <p>Sed non neque faucibus, condimentum lectus at, accumsan enim. Fusce pretium egestas cursus..</p>
                </div>
                 {/* message end-->  */}
                 {/* message-->  */}
                <div className="chat-message chat-message_user fl-wrap">
                    <div className="dashboard-message-avatar">
                        <img src={Avatar} alt="" />
                        <span className="chat-message-user-name cmun_sm">Jessie</span>
                    </div>
                    <span className="massage-date">25 may 2018  <span>7.51 PM</span></span>
                    <p>Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat .</p>
                </div>
                 {/* message end-->                                            */}
            </div>
            <div className="chat-widget_input fl-wrap">
                <textarea placeholder="Type Message"></textarea>                                                 
                <button type="submit"><i className="fal fa-paper-plane"></i></button>
            </div>
        </div>
    )
}