import React, {useState, useEffect} from "react";
import axios from "axios";

import LoginTab from "../../pages/auth/LoginForm";
import RegistrationTab from "../../pages/auth/RegisterForm";
import {toast} from "react-toastify";

import firebase from "../../../authServices/firebase/firebaseConfig";

export default function RegistrationModal(props) {
  const hanldeFacebook = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        var userData = {
          name: user.displayName,
          email: user.email,
          password: "123",
          type: "facebook",
        };
        axios
          .post("http://localhost:5000/v1.0/Login/", userData)
          .then((res) => toast.success(res.data.message));
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  const hanldeGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        var userData = {
          name: user.displayName,
          email: user.email,
          password: "",
          type: "google",
        };
        axios
          .post("http://localhost:5000/v1.0/Login/", userData)
          .then((res) => {
            toast.success(res.data.message);
          });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <div className="main-register-wrap modal">
      <div className="reg-overlay"></div>
      <div className="main-register-holder tabs-act">
        <div className="main-register fl-wrap modal_main">
          <div className="main-register_title">
            Welcome to{" "}
            <span>
              <strong>Town</strong>Hub<strong>.</strong>
            </span>
          </div>
          <div className="close-reg">
            <i className="fal fa-times"></i>
          </div>
          <ul className="tabs-menu fl-wrap no-list-style">
            <li className="current">
              <a href="#tab-1">
                <i className="fal fa-sign-in-alt"></i> Login
              </a>
            </li>
            <li>
              <a href="#tab-2">
                <i className="fal fa-user-plus"></i> Register
              </a>
            </li>
          </ul>
          <div className="tabs-container">
            <div className="tab">
              <div id="tab-1" className="tab-content">
                <LoginTab />
              </div>
              <div className="tab">
                <div id="tab-2" className="tab-content">
                  <RegistrationTab />
                </div>
              </div>
            </div>
            <div className="log-separator fl-wrap">
              <span>or</span>
            </div>
            <div className="soc-log fl-wrap">
              <p>For faster login or register use your social account.</p>
              <a href="#" className="facebook-log close-reg" onClick={hanldeFacebook}>
                {" "}
                Facebook
              </a>
              <a href="#" className="google-log close-reg" onClick={hanldeGoogle}>
                {" "}
                Google
              </a>
            </div>
            <div className="wave-bg">
              <div className="wave-one"></div>
              <div className="wave-two"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
