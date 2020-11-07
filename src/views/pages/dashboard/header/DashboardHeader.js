import React from 'react'

import Avatar from '../../../../assets/images/avatar/1.jpg'

export default function DashboardHeader() {

    return (
        <div className="dashboard-header fl-wrap">
            <div className="container">
                <div className="dashboard-header_conatiner fl-wrap">
                    <div className="dashboard-header-avatar">
                        <img src={Avatar} alt="" />
                        <a href="dashboard-myprofile.html" className="color-bg edit-prof_btn"><i className="fal fa-edit"></i></a>
                    </div>
                    <div className="dashboard-header-stats-wrap">
                        <div className="dashboard-header-stats">
                            <div className="swiper-container" dir="rtl">
                                <div className="swiper-wrapper">
                                      {/* dashboard-header-stats-item --> */}
                                    <div className="swiper-slide">
                                        <div className="dashboard-header-stats-item">
                                            <i className="fal fa-map-marked"></i>
                                            Active Listings	
                                            <span>21</span>
                                        </div>
                                    </div>
                                      {/* dashboard-header-stats-item end --> */}
                                      {/* dashboard-header-stats-item --> */}
                                    <div className="swiper-slide">
                                        <div className="dashboard-header-stats-item">
                                            <i className="fal fa-chart-bar"></i>
                                            Listing Views
                                            <span>1054</span>	
                                        </div>
                                    </div>
                                      {/* dashboard-header-stats-item end --> */}
                                      {/* dashboard-header-stats-item --> */}
                                    <div className="swiper-slide">
                                        <div className="dashboard-header-stats-item">
                                            <i className="fal fa-comments-alt"></i>
                                            Total Reviews
                                            <span>79</span>	
                                        </div>
                                    </div>
                                      {/* dashboard-header-stats-item end --> */}
                                      {/* dashboard-header-stats-item --> */}
                                    <div className="swiper-slide">
                                        <div className="dashboard-header-stats-item">
                                            <i className="fal fa-heart"></i>
                                            Times Bookmarked
                                            <span>654</span>	
                                        </div>
                                    </div>
                                      {/* dashboard-header-stats-item end --> */}
                                </div>
                            </div>
                        </div>
                          {/* dashboard-header-stats  end --> */}
                        <div className="dhs-controls">
                            <div className="dhs dhs-prev"><i className="fal fa-angle-left"></i></div>
                            <div className="dhs dhs-next"><i className="fal fa-angle-right"></i></div>
                        </div>
                    </div>
                      {/* dashboard-header-stats-wrap end --> */}
                    <a className="add_new-dashboard">Add Listing <i className="fal fa-layer-plus"></i></a>
                </div>
            </div>
        </div>
    )
}