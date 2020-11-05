import React, { useState, useEffect } from 'react'

export default function MapContainer(props) {
    
    return (
        <section className="no-padding-section">
            <div className="map-container">
                <div id="singleMap" data-latitude="40.7427837" data-longitude="-73.11445617675781" data-maptitle="Our Location"></div>
            </div>
        </section>
    );
}