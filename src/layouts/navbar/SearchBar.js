import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'


export default function MainMenu(props) {
    const history = useHistory()

    return (
        <>
            <div className="header-search_btn show-search-button"><i className="fal fa-search"></i><span>Search</span></div>
            <div className="header-search_container header-search vis-search">
                <div className="container small-container">
                    <div className="header-search-input-wrap fl-wrap">
                        {/*  header-search-input   */}
                        <div className="header-search-input">
                            <label><i className="fal fa-keyboard"></i></label>
                            <input type="text" placeholder="What are you looking for ?"  />  
                        </div>
                        {/*  header-search-input end    */}
                        {/*  header-search-input   */}
                        <div className="header-search-input location autocomplete-container">
                            <label><i className="fal fa-map-marker"></i></label>
                            <input type="text" placeholder="Location..." className="autocomplete-input" id="autocompleteid2"/>
                            <a href="#"><i className="fal fa-dot-circle"></i></a>
                        </div>
                        {/*  header-search-input end                                          */}
                        {/*  header-search-input   */}
                        <div className="header-search-input header-search_selectinpt ">
                            <select data-placeholder="Category" className="chosen-select no-radius" >
                                <option>All Categories</option>
                                <option>All Categories</option>
                                <option>Shops</option>
                                <option>Hotels</option>
                                <option>Restaurants</option>
                                <option>Fitness</option>
                                <option>Events</option>
                            </select>
                        </div>
                        {/*  header-search-input end   */}
                        <button className="header-search-button green-bg" onClick={() => { history.push('/listing') }}><i className="far fa-search"></i> Search </button>
                    </div>
                    <div className="header-search_close color-bg"><i className="fal fa-long-arrow-up"></i></div>
                </div>
            </div>
        </>
    )
}
