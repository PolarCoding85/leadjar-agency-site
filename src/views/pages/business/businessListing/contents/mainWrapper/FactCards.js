import React from 'react'

import FactCard from '../../../../../ui-elements/cards/FactCard'

const factCardList = [
    {icon: 'fa-smile-plu', number: 0, title: 'New Visiters Every Week'},
    {icon: 'fa-users', number: 0, title: 'Happy customers every year'},
    {icon: 'fa-award', number: 0, title: 'Won Awards'},
]


export default function FactCards() {
    
    return (
        <div className="list-single-facts fl-wrap">
            <div className="row">
                {factCardList.map((item, index) => (
                    <div className="col-md-4">
                        <FactCard cardDetail={item} key={index} />
                    </div>
                ))}
            </div>
        </div>
    );
}