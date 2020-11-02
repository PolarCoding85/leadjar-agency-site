import React, { useState, useEffect } from "react"

import WishlistModal from '../../views/ui-elements/modal/WishlistModal'


export default function WishList(props) {

    return (
        <>
            <div className="cart-btn show-header-modal" data-microtip-position="bottom" role="tooltip" aria-label="Your Wishlist">
                <i className="fal fa-heart"></i><span className="cart-counter green-bg"></span> 
            </div>
            <WishlistModal />
        </>
    )
}
