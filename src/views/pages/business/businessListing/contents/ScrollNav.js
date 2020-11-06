import React from 'react'

export default function ScrollNav() {
    
    return (
        <div className="scroll-nav-wrapper fl-wrap">
            <div className="container">
                <nav className="scroll-nav scroll-init">
                    <ul className="no-list-style">
                        <li><a className="act-scrlink" href="#sec1"><i className="fal fa-images"></i> Top</a></li>
                        <li><a href="#sec2"><i className="fal fa-info"></i>Details</a></li>
                        <li><a href="#sec3"><i className="fal fa-image"></i>Gallery</a></li>
                        <li><a href="#sec4"><i className="fal fa-utensils"></i>Menu</a></li>
                        <li><a href="#sec5"><i className="fal fa-comments-alt"></i>Reviews</a></li>
                    </ul>
                </nav>
                <div className="scroll-nav-wrapper-opt">
                    <a href="#" className="scroll-nav-wrapper-opt-btn"> <i className="fas fa-heart"></i> Save </a>
                    <a href="#" className="scroll-nav-wrapper-opt-btn showshare"> <i className="fas fa-share"></i> Share </a>
                    <div className="share-holder hid-share">
                        <div className="share-container  isShare"></div>
                    </div>
                    <div className="show-more-snopt"><i className="fal fa-ellipsis-h"></i></div>
                    <div className="show-more-snopt-tooltip">
                        <a href="#"> <i className="fas fa-comment-alt"></i> Write a review</a>
                        <a href="#"> <i className="fas fa-flag-alt"></i> Report </a>
                    </div>
                </div>
            </div>
        </div>
    );
}