import React from 'react'
import { useLocation } from 'react-router-dom'

export default function DashboardMenu() {
    const location = useLocation()

    return (
        <>
            <div className="mob-nav-content-btn color2-bg init-dsmen fl-wrap"><i className="fal fa-bars"></i> Dashboard menu</div>
                <div className="clearfix"></div>
                <div className="fixed-bar fl-wrap" id="dash_menu">
                    <div className="user-profile-menu-wrap fl-wrap block_box">
                         {/* user-profile-menu--> */}
                        <div className="user-profile-menu">
                            <h3>Main</h3>
                            <ul className="no-list-style">
                                <li>
                                    <a href="/dashboard" className= {location.pathname === '/dashboard' ? "user-profile-act" : null }>
                                        <i className="fal fa-chart-line"></i>Dashboard</a>
                                </li>
                                <li>
                                    <a href="/dashboard_review" className= {location.pathname === '/dashboard_review' ? "user-profile-act" : null }>
                                        <i className="fal fa-comments-alt"></i> Reviews </a></li>
                                <li>
                                    <a href="/dashboard_emailPreference" className= {location.pathname === '/dashboard_emailPreference' ? "user-profile-act" : null }>
                                        <i className="fal fa-rss"></i>Email Preferences <span>7</span></a>
                                </li>
                                <li>
                                    <a href="/dashboard_messages" className= {location.pathname === '/dashboard_messages' ? "user-profile-act" : null }>
                                        <i className="fal fa-envelope"></i> Messages <span>3</span></a>
                                </li>
                                <li>
                                    <a href="/dashboard_profile" className= {location.pathname === '/dashboard_profile' ? "user-profile-act" : null }>
                                        <i className="fal fa-user-edit"></i> Edit profile</a>
                                </li>
                                <li>
                                    <a href="/dashboard_change_password" className= {location.pathname === '/dashboard_change_password' ? "user-profile-act" : null }>
                                        <i className="fal fa-key"></i>Change Password</a>
                                </li>
                            </ul>
                        </div>
                         {/* user-profile-menu end--> */}
                        <button className="logout_btn color2-bg">Log Out <i className="fas fa-sign-out"></i></button>
                    </div>
                </div>
                <a className="back-tofilters color2-bg custom-scroll-link fl-wrap" href="#dash_menu">Back to Menu<i className="fas fa-caret-up"></i></a>
        </>
    )
}