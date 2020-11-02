import React, { useState, useEffect } from "react"

import Avatar from '../../assets/images/avatar/1.jpg'

export default function NavbarUserMenu(props) {

    return (
        <div className="header-user-menu">
          <div className="header-user-name">
              <span><img src={Avatar} alt="" /></span>
              Hello , Alisa
          </div>
          <ul>
              <li><a href="dashboard-myprofile.html"> Edit profile</a></li>
              <li><a href="dashboard-add-listing.html"> Add Listing</a></li>
              <li><a href="dashboard-bookings.html">  Bookings  </a></li>
              <li><a href="dashboard-review.html"> Reviews </a></li>
              <li><a href="#">Log Out</a></li>
          </ul>
      </div>
    )
}
