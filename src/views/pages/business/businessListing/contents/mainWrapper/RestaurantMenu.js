import React from 'react'

import BlankImage from '../../../../../../assets/images/all/1.jpg'

const restaurantMenuList = [
    { filter: 'main', image: BlankImage, title: 'Calabrian Black Sausage', price: 28.00, description: 'Netus et malesuada fames ac turpis egestas.'},
    { filter: 'dessert', image: BlankImage, title: 'Calabrian Black Sausage', price: 28.00, description: 'Netus et malesuada fames ac turpis egestas.'},
    { filter: 'main', image: BlankImage, title: 'Calabrian Black Sausage', price: 28.00, description: 'Netus et malesuada fames ac turpis egestas.'},
    { filter: 'lunch', image: BlankImage, title: 'Calabrian Black Sausage', price: 28.00, description: 'Netus et malesuada fames ac turpis egestas.'},
    { filter: 'dessert', image: BlankImage, title: 'Calabrian Black Sausage', price: 28.00, description: 'Netus et malesuada fames ac turpis egestas.'},
    { filter: 'lunch', image: BlankImage, title: 'Calabrian Black Sausage', price: 28.00, description: 'Netus et malesuada fames ac turpis egestas.'},
    { filter: 'main', image: BlankImage, title: 'Calabrian Black Sausage', price: 28.00, description: 'Netus et malesuada fames ac turpis egestas.'},
    { filter: 'main', image: BlankImage, title: 'Calabrian Black Sausage', price: 28.00, description: 'Netus et malesuada fames ac turpis egestas.'},
]

const RestaurantMenuItem = (props) => {
    const { restItem } = props

    return (
        <div className={"restmenu-item " + restItem.filter}>
            <a href={restItem.image} className="restmenu-item-img image-popup"> 
            <img src={restItem.image} alt="" />
            </a>
            <div className="restmenu-item-det">
                <div className="restmenu-item-det-header fl-wrap">
                    <h4>{restItem.title}</h4>
                    <div className="restmenu-item-det-price">${restItem.price}</div>
                </div>
                <p>{restItem.description}</p>
            </div>
        </div>
    )
}

export default function RestaurantMenu() {
    
    return (
        <div className="list-single-main-item fl-wrap block_box" id="sec4">
            <div className="list-single-main-item-title">
                <h3>Restaurant Menu</h3>
            </div>
            <div className="list-single-main-item_content fl-wrap">
                <div className="menu-filters">
                    <a href="#" className="gallery-filter  menu-filters-active" data-filter="*">All</a>
                    <a href="#" className="gallery-filter" data-filter=".main">Main</a>
                    <a href="#" className="gallery-filter" data-filter=".dessert">Dessert</a>
                    <a href="#" className="gallery-filter" data-filter=".lunch">Lunch</a>
                </div>
                <div className="restor-menu-widget fl-wrap">
                    {restaurantMenuList.map((item, index) => (
                        <RestaurantMenuItem restItem={item} key={index}/>
                    ))}
                </div>
                <a href="#" className="btn color2-bg   float-btn">Download PDF<i className="fal fa-file-pdf"></i></a>
            </div>
        </div>
    );
}