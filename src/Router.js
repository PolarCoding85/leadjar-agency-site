import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";
// import { Redirect } from "react-router-dom";

import Home from './views/pages/home/Home';
import Contact from './views/pages/contact/Contact';
import LeadThankYouPage from './views/pages/leadThankYou/ThankYou'
import TopBusiness from './views/pages/business/topBusiness/TopBusiness'
import BusinessSignUp from './views/pages/business/signUp/businessSignUp';
import BusinessListing from './views/pages/business/businessListing/BusinessListing'
import BusinessThankYouPage from './views/pages/business/thankYou/BusinessThankYou'
import Dashboard from './views/pages/dashboard/projects/Projects'
import DashboardReview from './views/pages/dashboard/reviews/Reviews'
import DashboardEmailPreference from './views/pages/dashboard/emailPreferences/EmailPreference'
import DashboardMessages from './views/pages/dashboard/messages/Messages'
import DashboardEditProfile from './views/pages/dashboard/editProfile/EidtProfile'
import DashboardChangePassword from './views/pages/dashboard/changePassword/ChangePassword'

export default function AppRouter() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/leadThankYou" component={LeadThankYouPage} />
                <Route path="/business" component={TopBusiness} />
                <Route path="/business_signUp" component={BusinessSignUp} />
                <Route path="/business_listing" component={BusinessListing} />
                <Route path="/business_thankYou" component={BusinessThankYouPage} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/dashboard_review" component={DashboardReview} />
                <Route path="/dashboard_emailPreference" component={DashboardEmailPreference} />
                <Route path="/dashboard_messages" component={DashboardMessages} />
                <Route path="/dashboard_profile" component={DashboardEditProfile} />
                <Route path="/dashboard_change_password" component={DashboardChangePassword} />
            </Switch>
        </Router>
    )
}