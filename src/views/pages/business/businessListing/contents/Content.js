import React from "react"

import HeroSection from './Hero'
import ScrollNav from './ScrollNav'
import MainWrapper from './MainWrapper'
import ListingSidebar from './ListingSidebar'

export default function Content(props) {
  
    return (
        <div id="wrapper">
            <div id="content">
                <HeroSection />
                <ScrollNav />
                <section className="gray-bg no-top-padding">
                    <div className="container">
                        <div className="breadcrumbs inline-breadcrumbs fl-wrap">
                            <a href="#">Home</a><a href="#">Listings</a><a href="#">New York</a><span>Listing Single</span> 
                        </div>
                        <div className="clearfix"></div>
                        <div className="row">
                            <div className="col-md-8">
                                <MainWrapper />
                            </div>
                            <div className="col-md-4">
                                <ListingSidebar />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
