import React from "react"

import HeroSection from './Hero'
import PlaceSlider from './PlaceSlider'
import BestCity from './BestCity'
import ParallaxOne from './ParallaxOne'
import MostPopularPlaces from './MostPopularPlaces'
import ParallaxTwo from './ParallaxTwo'
import Process from "./Process"
import AppAvailable from './AppAvailable'
import Testimonilas from "./Testimonilas"

export default function Content(props) {
  
    return (
        <div id="wrapper">
            <div id="content">
                <HeroSection />
                <PlaceSlider />
                <BestCity />
                <ParallaxOne />
                <MostPopularPlaces />
                <ParallaxTwo />
                <Process />
                <AppAvailable />
                <Testimonilas />
            </div>
        </div>
    )
}
