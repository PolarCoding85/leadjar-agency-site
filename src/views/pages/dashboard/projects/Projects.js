import React from "react"

import Navbar from "../../../../layouts/navbar/Navbar"
import Footer from "../../../../layouts/footer/Footer"
import Content from "./contents/Content"
import MapModal from "../../../ui-elements/modal/MapModal"

export default function Dashboard(props) {
    return (
        <div id="main">
            <Navbar />
            <Content />
            <Footer />
            <MapModal />
        </div>
    )
}
