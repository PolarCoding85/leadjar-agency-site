import React from 'react'

import Breadcrumbs from '../../header/Breadcrumbs'
import DashboardHeader from '../../header/DashboardHeader'
import DashboardMenu from '../../DashboardMenu'

export default function DashboardEmailPreferenceContent() {

    return (
        <div id="wrapper">
            <div id="content">
                <section className="parallax-section dashboard-header-sec gradient-bg" data-scrollax-parent="true">
                    <Breadcrumbs />
                    <div className="clearfix"></div>
                    <DashboardHeader />
                </section>
                <section className="gray-bg main-dashboard-sec" id="sec1">
                    <div className="container">
                        <div className="col-md-3">
                            <DashboardMenu />
                        </div>
                        <div className="col-md-9">
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}