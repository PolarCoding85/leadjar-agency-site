import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";
// import { Redirect } from "react-router-dom";

import Home from './views/pages/home/Home';

export default function AppRouter() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact={true} component={Home} />
            </Switch>
        </Router>
    )
}