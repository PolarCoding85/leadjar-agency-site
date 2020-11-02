import React, { useState, useEffect } from "react"


export default function LoginForm(props) {

    return (
        <div className="custom-form login-form">
            <form method="post"  name="registerform">
                <label>Username or Email Address <span>*</span> </label>
                <input name="email" type="text" required/>
                <label >Password <span>*</span> </label>
                <input name="password" type="password" required/>
                <button type="submit"  className="btn float-btn color2-bg"> Log In <i className="fas fa-caret-right"></i></button>
                <div className="clearfix"></div>
                <div className="filter-tags">
                    <input id="check-a3" type="checkbox" name="check" />
                    <label htmlFor="check-a3">Remember me</label>
                </div>
            </form>
            <div className="lost_password">
                <a href="#">Lost Your Password?</a>
            </div>
        </div>
    )
}
