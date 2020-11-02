import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";
// import { Redirect } from "react-router-dom";

import Home from './views/pages/home/Home';
import BusinessSignUp from './views/pages/business/signUp/businessSignUp';

export default function AppRouter() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/business/signUp" component={BusinessSignUp} />
            </Switch>
        </Router>
    )
}