import React from 'react'

import Breadcrumbs from '../../header/Breadcrumbs'
import DashboardHeader from '../../header/DashboardHeader'
import DashboardMenu from '../../DashboardMenu'
import ChatBox from './ChatBox'
import ChatContact from './ChatContact'

export default function DashboardMessagesContent() {

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
                            <div className="dashboard-list-box fl-wrap">
                                <div className="dashboard-header color-bg fl-wrap">
                                    <h3>Indox</h3>
                                </div>
                                <div className="chat-wrapper fl-wrap">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <ChatBox />
                                        </div>
                                        <div className="col-sm-4">
                                            <ChatContact />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}