import React, {useEffect} from "react";
import {Row, Col} from "reactstrap";
import {connect, useSelector} from "react-redux";

import HeroSection from "./Hero";
import TopServices from "./TopServices";
import Process from "./Process";
import CompareQuoteForm from "../../../ui-elements/form/CompareQuoteForm";
import Testimonilas from "./Testimonilas";
import JoinNetworkForm from "../../../ui-elements/form/JoinNetworkForm";
import PopularCity from "../../../ui-elements/list/PopularCity";

const Content = ({app}) => {
  return (
    <div id="wrapper">
      <div id="content">
        <Row className="match-height">
          <Col lg="12" md="12" sm="12">
            <HeroSection hero={app && app.hero} />
          </Col>
          {app && app.categories && app.categories.enable && (
            <Col lg="12" md="12" sm="12">
              <TopServices CategoryData={app && app.categories} />
            </Col>
          )}
          <Col lg="12" md="12" sm="12">
            <Process />
          </Col>
          <Col lg="12" md="12" sm="12">
            <CompareQuoteForm />
          </Col>
          <Col lg="12" md="12" sm="12">
            <Testimonilas />
          </Col>
          <Col lg="12" md="12" sm="12">
            <JoinNetworkForm />
          </Col>
          <Col lg="12" md="12" sm="12">
            <PopularCity />
          </Col>
        </Row>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    app: state.CompanyRedux.companyData,
  };
};

export default connect(mapStateToProps)(Content);
