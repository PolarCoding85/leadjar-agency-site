import React from "react"

import CityCard from '../../../../ui-elements/cards/CityCard'

import cityImage from '../../../../../assets/images/all/1.jpg'

const bestCities = [
  {
    city: "New York",
    locations: 16,
    description: "Constant care and attention to the patients makes good record",
    image: cityImage
  },
  {
    city: "Paris",
    locations: 22,
    description: "Constant care and attention to the patients makes good record",
    image: cityImage
  },
  {
    city: "Moscow",
    locations: 9,
    description: "Constant care and attention to the patients makes good record",
    image: cityImage
  },
  {
    city: "Rome",
    locations: 12,
    description: "Constant care and attention to the patients makes good record",
    image: cityImage
  },
  {
    city: "London",
    locations: 16,
    description: "Constant care and attention to the patients makes good record",
    image: cityImage
  },
]

export default function BestCity(props) {
  return (
    <section className="gray-bg hidden-section particles-wrapper">
      <div className="container">
          <div className="section-title">
              <h2>Explore Best Cities</h2>
              <div className="section-subtitle">Catalog of Categories</div>
              <span className="section-separator"></span>
              <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus.</p>
          </div>
          <div className="listing-item-grid_container fl-wrap">
              <div className="row">
                  {/* listing-item-grid  --> */}
                  {bestCities.map((bestCity, index) => (
                    <div className="col-sm-4" key={index}>
                      <CityCard city={bestCity} />
                    </div>
                  ))}
              </div>
          </div>
          <a href="listing.html" className="btn dec_btn   color2-bg">View All Cities<i className="fal fa-arrow-alt-right"></i></a>
      </div>
    </section>
  )
}
