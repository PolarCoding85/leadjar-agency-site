import React from "react"

import PageScrollNav from './PageScrollNav'
import ImageSection from './ImageSection'
import WorkingProgress from './WorkingProgress'
import WhoChooseUs from './WhoChooseUs'
import Testimonilas from './Testimonilas'
// import ParallaxOne from './ParallaxOne'
// import MostPopularPlaces from "./MostPopularPlaces"
// import ParallaxTwo from './ParallaxTwo'
// import Process from "./Process"
// import AppAvailable from './AppAvailable'
// import ClientsCarousel from './ClientsCarousel'
// import Testimonilas from "./Testimonilas"

export default function Content(props) {
  
    return (
        <div id="wrapper">
            <div id="content">
                <PageScrollNav />
                <ImageSection />
                <WorkingProgress />
                <WhoChooseUs />
                <Testimonilas />
                {/* 
                <SliderSection />
                
                
                <BestCitySection />
                
                
                <ParallaxOne />
                
                
                <MostPopularPlaces />
                
                
                <ParallaxTwo />
                
                
                <Process />
                
                
                <AppAvailable />
                
                
                <Testimonilas />
                
                
                <ClientsCarousel />
                */}
            </div>
        </div>
    )
}
