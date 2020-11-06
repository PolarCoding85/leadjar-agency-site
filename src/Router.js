import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";
// import { Redirect } from "react-router-dom";

import Home from './views/pages/home/Home';
import Contact from './views/pages/contact/Contact';
import TopBusiness from './views/pages/business/topBusiness/TopBusiness'
import BusinessSignUp from './views/pages/business/signUp/businessSignUp';
import BusinessListing from './views/pages/business/businessListing/BusinessListing'
import ThankYouPage from './views/pages/thankYou/ThankYou'

export default function AppRouter() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/thankYou" component={ThankYouPage} />
                <Route path="/business" component={TopBusiness} />
                <Route path="/business_signUp" component={BusinessSignUp} />
                <Route path="/business_listing" component={BusinessListing} />
            </Switch>
        </Router>
    )
}