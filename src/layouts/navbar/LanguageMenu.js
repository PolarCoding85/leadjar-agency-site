import React, { useState, useEffect } from "react"


export default function LanguageMenu(props) {

    return (
        <div className="lang-wrap">
            <div className="show-lang">
                <span><i className="fal fa-globe-europe"></i><strong>En</strong></span><i className="fa fa-caret-down arrlan"></i>
            </div>
            <ul className="lang-tooltip lang-action no-list-style">
                <li><a href="#" className="current-lan" data-lantext="En">English</a></li>
                <li><a href="#" data-lantext="Fr">Français</a></li>
                <li><a href="#" data-lantext="Es">Español</a></li>
                <li><a href="#" data-lantext="De">Deutsch</a></li>
            </ul>
        </div>
    )
}
