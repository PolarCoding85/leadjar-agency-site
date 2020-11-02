import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation } from "react-router-dom";

import Logo from '../../assets/images/logo.png'

import SearchBar from './SearchBar'
import WishList from "./WishList"
import NavbarUser from './NavbarUser'
import LanguageMenu from './LanguageMenu'
import MainMenu from './MainMenu'

export default function Navbar(props) {
    const location = useLocation();
  
    const [isLogin, setIsLogin] = useState(false);

    return (
        <header className={!isLogin ? "main-header" : "main-header dsh-header"}>
            {/*  logo */}
            <a href="/" className="logo-holder"><img src={Logo} alt="" /></a>
            {/*  logo end */}
            <SearchBar />
            
            <a href="dashboard-add-listing.html" className="add-list color-bg">Add Listing <span><i className="fal fa-layer-plus"></i></span></a>
            
            <WishList />

            <div class="show-reg-form modal-open avatar-img" data-srcav="images/avatar/3.jpg"><i class="fal fa-user"></i>Sign In</div>

            {isLogin ? <NavbarUser /> : null}

            <LanguageMenu />

            {/*  nav-button-wrap  */}
            <div className="nav-button-wrap color-bg">
                <div className="nav-button">
                    <span></span><span></span><span></span>
                </div>
            </div>
            {/*  nav-button-wrap end */}

            <MainMenu />
        </header>
    )
}
