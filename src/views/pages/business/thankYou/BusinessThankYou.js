import React from "react"

import Navbar from "../../../../layouts/navbar/Navbar"
import Footer from "../../../../layouts/footer/Footer"
import ContactInfo from "./ContactInfo"
import MapModal from "../../../ui-elements/modal/MapModal"

export default function ThankYou(props) {
    return (
        <div id="main">
            <Navbar />
            <ContactInfo />
            <Footer />
            <MapModal />
        </div>
    )
}
