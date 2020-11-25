import React from "react";
import {useHistory} from "react-router-dom";

export default function TopServices({CategoryData}) {
  return (
    <div className="hero-categories top-services fl-wrap">
      <div className="container">
        <h4 className="hero-categories_title top-services-title">
          {CategoryData && CategoryData.Title}:
        </h4>
        <ul className="no-list-style">
          {CategoryData &&
            CategoryData.category.map((res) => (
              <li>
                <a href="listing.html">
                  <i className={res.Icon}></i>
                  <span>{res.Name}</span>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
