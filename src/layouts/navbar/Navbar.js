import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation } from "react-router-dom";

import Logo from '../../assets/images/logo.png'

import SearchBar from './SearchBar'
import WishList from "./WishList"
import NavbarUser from './NavbarUser'
import LanguageMenu from './LanguageMenu'
import JoinLink from './JoinLink'
import MainMenu from './MainMenu'

export default function Navbar(props) {
    const location = useLocation();
  
    const [isLogin, setIsLogin] = useState(false);

    return (
        <header className={!isLogin ? "main-header" : "main-header dsh-header"}>
            <a href="/" className="logo-holder"><img src={Logo} alt="" /></a>
            <a href="dashboard-add-listing.html" className="add-list color-bg">Get a Quote</a>
            <div className="show-reg-form modal-open avatar-img" data-srcav="images/avatar/3.jpg"><i className="fal fa-user"></i>Sign In</div>

            {isLogin ? <NavbarUser /> : null}
            <JoinLink />

            {/*  nav-button-wrap  */}
            <div className="nav-button-wrap color-bg">
                <div className="nav-button">
                    <span></span><span></span><span></span>
                </div>
            </div>
            {/*  nav-button-wrap end */}

            {/* <MainMenu /> */}
        </header>
    )
}
