import React from 'react'

import AlertCard from '../../../../ui-elements/cards/AlertCard'

const alertDetailList = [
    {state: 'approved', title: 'Park Central', date: '28 may 2020'},
    {state: 'bookmarked', title: 'Holiday Home', date: '28 may 2020'},
    {state: 'review', title: 'Park Central', date: '28 may 2020'},
    {state: 'approved', title: 'Holiday Hom', date: '28 may 2020'},
    {state: 'bookmarked', title: 'Moonlight Hotel', date: '28 may 2020'},
]

export default function RecentActivities(props) {

    return (
        <>
            <div className="dashboard-title dt-inbox fl-wrap">
                <h3>Recent Activities</h3>
            </div>
            <div className="dashboard-list-box  fl-wrap">
                {alertDetailList.map((item, index) => (
                    <AlertCard cardDetail={item} key={index} />
                ))}
            </div>
        </>
    )
}