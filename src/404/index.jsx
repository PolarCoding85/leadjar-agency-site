import React from "react";

// css
import "./style.css"

// Image
import Error from "../assets/images/404.png"

const ModuleNotFound = () => {
  return <>
    <div className="mainBox">
      <div className="ErrorImg">
        <img src={Error} alt="" className="img-fluid"/>
      </div>
      <div className="ErrorMsg">
        <h1>your company is not Registered</h1>
      </div>
      <a href="http://www.leadjar.io" target="_blank" className="errorBtn">Login and register your company</a>
    </div>
  </>;
};

export default ModuleNotFound;
