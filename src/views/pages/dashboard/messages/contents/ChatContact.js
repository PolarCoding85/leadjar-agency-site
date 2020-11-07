import React from 'react'

import Avatar from '../../../../../assets/images/avatar/1.jpg'
import AvatarBg from '../../../../../assets/images/avatar/avatar-bg.png'

export default function ChatContact(props) {

    return (
        <div className="chat-contacts fl-wrap">
             {/* chat-contacts-item--> */}
            <a className="chat-contacts-item" href="#">
                <div className="dashboard-message-avatar">
                    <img src={Avatar} alt="" />
                    <div className="message-counter">2</div>
                </div>
                <div className="chat-contacts-item-text">
                    <h4>Mark Rose</h4>
                    <span>27 Dec 2018 </span>
                    <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                </div>
            </a>
             {/* chat-contacts-item --> */}
             {/* chat-contacts-item--> */}
            <a className="chat-contacts-item" href="#">
                <div className="dashboard-message-avatar">
                    <img src={AvatarBg} alt="" />
                    <div className="message-counter">1</div>
                </div>
                <div className="chat-contacts-item-text">
                    <h4>Adam Koncy</h4>
                    <span>27 Dec 2018 </span>
                    <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                </div>
            </a>
             {/* chat-contacts-item --> */}
             {/* chat-contacts-item--> */}
            <a className="chat-contacts-item chat-contacts-item_active" href="#">
                <div className="dashboard-message-avatar">
                    <img src={Avatar} alt="" />
                    <div className="message-counter">3</div>
                </div>
                <div className="chat-contacts-item-text">
                    <h4>Andy Smith</h4>
                    <span>27 Dec 2018 </span>
                    <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                </div>
            </a>
             {/* chat-contacts-item -->  */}
             {/* chat-contacts-item--> */}
            <a className="chat-contacts-item" href="#">
                <div className="dashboard-message-avatar">
                    <img src={Avatar} alt="" />
                    <div className="message-counter">4</div>
                </div>
                <div className="chat-contacts-item-text">
                    <h4>Joe Frick</h4>
                    <span>27 Dec 2018 </span>
                    <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                </div>
            </a>
             {/* chat-contacts-item --> */}
             {/* chat-contacts-item--> */}
            <a className="chat-contacts-item" href="#">
                <div className="dashboard-message-avatar">
                    <img src={AvatarBg} alt="" />
                </div>
                <div className="chat-contacts-item-text">
                    <h4>Alise Goovy</h4>
                    <span>27 Dec 2018 </span>
                    <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                </div>
            </a>
             {/* chat-contacts-item --> */}
             {/* chat-contacts-item--> */}
            <a className="chat-contacts-item" href="#">
                <div className="dashboard-message-avatar">
                    <img src={Avatar} alt="" />
                </div>
                <div className="chat-contacts-item-text">
                    <h4>Freddy Kovalsky</h4>
                    <span>27 Dec 2018 </span>
                    <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                </div>
            </a>
             {/* chat-contacts-item -->                                                 */}
             {/* chat-contacts-item--> */}
            <a className="chat-contacts-item" href="#">
                <div className="dashboard-message-avatar">
                    <img src={AvatarBg} alt="" />
                </div>
                <div className="chat-contacts-item-text">
                    <h4>Cristiano Olando</h4>
                    <span>27 Dec 2018 </span>
                    <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                </div>
            </a>
             {/* chat-contacts-item -->                                                 */}
        </div>
    )
}