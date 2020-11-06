import React from "react"

import Description from './mainWrapper/Description'
import ListingFeatures from './mainWrapper/ListingFeatures'
import GalleryPhotos from './mainWrapper/GalleryPhotos'
import FactCards from './mainWrapper/FactCards'
import RestaurantMenu from './mainWrapper/RestaurantMenu'
import ItemReviews from './mainWrapper/ItemReviews'
import AddReview from './mainWrapper/AddReview'

export default function Content(props) {
  
    return (
        <div className="list-single-main-wrapper fl-wrap" id="sec2">
            <Description />
            <ListingFeatures />
            <GalleryPhotos />
            <FactCards />
            <RestaurantMenu />
            <ItemReviews />
            <AddReview />
        </div>
    )
}
