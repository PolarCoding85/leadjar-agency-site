import React from 'react'

import FactCard from '../../../../ui-elements/cards/FactCard'

const factCardList = [
    {icon: 'fa-chart-bar', number: 0, title: 'Listing Views'},
    {icon: 'fa-comments-alt', number: 0, title: 'Total Reviews'},
    {icon: 'fa-envelope-open-dollar', number: 0, title: 'Bookings'},
]

export default function YourStatistics(props) {
    
    return (
        <>
            <div className="dashboard-title fl-wrap">
                <h3>Your Statistics</h3>
            </div>
             {/* list-single-facts -->                                */}
            <div className="list-single-facts fl-wrap">
                <div className="row">
                    {factCardList.map((item, index) => (
                        <div className="col-md-4">
                            <FactCard cardDetail={item} key={index} />
                        </div>
                    ))}
                </div>
            </div>
             {/* list-single-facts end -->                                           */}
            <div className="list-single-main-item fl-wrap block_box">
                 {/* chart-wra-->            */}
                <div className="chart-wrap   fl-wrap">
                    <div className="chart-header fl-wrap">
                        <div className="listsearch-input-item">
                            <select data-placeholder="Week" className="chosen-select no-search-select" >
                                <option>Week</option>
                                <option>Month</option>
                                <option>Year</option>
                            </select>
                        </div>
                        <div id="myChartLegend"></div>
                    </div>
                    <canvas id="canvas-chart"></canvas>
                </div>
                {/* chart-wrap end-->                                          */}
            </div>
        </>
    )
}