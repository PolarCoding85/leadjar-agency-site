import React, {useState, useEffect} from "react";
import {connect, useSelector} from "react-redux";

import NavbarUser from "./NavbarUser";
import JoinLink from "./JoinLink";

import Logo from "../../assets/images/logo.png";
import { getCompanyLogo } from '../../redux/actions/brandingLogo/brandingLogoAction';

function  Navbar(props){
  const CompanyData = useSelector(
    (state) => state.CompanyRedux && state.CompanyRedux.companyData
  );
  const [CompanyLogo, setLogo] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
    const [ companyLogourl, setcompanyLogourl] = useState()

  useEffect(() => {
    props.companyLogo();
    console.log("...............",props);
    console.log("propspropspropsoprops",props.allCompanyLogo)
    let filename =
      CompanyData && CompanyData.branding && CompanyData.branding.company_logo;
    if (filename) {
      let url = `${process.env.REACT_APP_API_URL}company/${filename}`;
      setLogo(url);
    }
  }, [CompanyData]);

  return (
    <header className={!isLogin ? "main-header" : "main-header dsh-header"}>
      <a
        href={
          (CompanyData &&
            CompanyData.branding &&
            CompanyData.branding.logo_link) ||
          "/"
        }
        className="logo-holder"
      >
        {
          props.allCompanyLogo.brandingLogo.companyLogo ?
            <img src={`${process.env.REACT_APP_API_URL}branding/company_logo/${props.allCompanyLogo.brandingLogo.companyLogo}` || Logo} alt="" style={{borderRadius:'100%',width:'40px',height:'40px'}}/>
          :
            <img src={Logo} alt=""/>
        }
      </a>
      <a
        href="#"
        className="add-list color-bg show-quote-from-modal quote-from-modal-open"
      >
        {(CompanyData && CompanyData.callToAction) || "Get a Quote"}
      </a>
      <div
        className="show-reg-form modal-open avatar-img"
        data-srcav="images/avatar/3.jpg"
      >
        <i className="fal fa-user"></i>Sign In
      </div>

      {isLogin ? <NavbarUser /> : null}
      {CompanyData &&
      CompanyData.navigationMenu &&
      CompanyData.navigationMenu.enable ? (
        <JoinLink
          title={
            CompanyData.navigationMenu.join_our_network_title ||
            "Join Our Pro Network"
          }
          status={CompanyData.navigationMenu.join_our_network_status || false}
        />
      ) : null}

      {/*  nav-button-wrap  */}
      <div className="nav-button-wrap color-bg">
        <div className="nav-button">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {/*  nav-button-wrap end */}

      {/* <MainMenu /> */}
    </header>
  );
}
const mapStateToProps = (state) => {
  return {
    allCompanyLogo:state.BrandingLogo,
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    companyLogo: () => dispatch(getCompanyLogo()),
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
