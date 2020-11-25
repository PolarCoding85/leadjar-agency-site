import React, {useEffect} from "react";
import Router from "./Router";
import Loader from "./views/ui-elements/utility/Loader";
import ToTop from "./views/ui-elements/utility/ToTop";
import RegistrationModal from "./views/ui-elements/modal/RegistrationModal";
import QuoteFormModal from "./views/ui-elements/modal/QuoteFormModal/QuoteFormModal";
import axios from "axios";
import {connect} from "react-redux";

function App({Login}) {
  useEffect(() => {
    getCompany();
  }, [])
  const getCompany = async() => {
    const ddd = await axios.get("https://leadjar-backend.uc.r.appspot.com/v1.0/agency");
    Login(ddd.data.data);
  };
  return (
    <div>
      <Loader />
      <Router></Router>
      <RegistrationModal />
      <QuoteFormModal />
      <ToTop />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    Login: (res) => dispatch({type: "GET_COMAPNY_DATA", payload: res}),
  };
};

export default connect(null, mapDispatchToProps)(App);
