import React from 'react'

export default function BookTable() {
    
    return (
        <div className="box-widget-item fl-wrap block_box">
            <div className="box-widget-item-header">
                <h3>Book a Table</h3>
            </div>
            <div className="box-widget">
                <div className="box-widget-content">
                    <form   className="add-comment custom-form">
                        <fieldset>
                            <label><i className="fal fa-user"></i></label>
                            <input type="text" placeholder="Your Name *" />
                            <div className="clearfix"></div>
                            <label><i className="fal fa-envelope"></i>  </label>
                            <input type="text" placeholder="Email Address*" />
                            <div className="quantity fl-wrap">
                                <span><i className="fal fa-user-plus"></i>Persons : </span>
                                <div className="quantity-item">
                                    <input type="button" value="-" className="minus" />
                                    <input type="text"    name="quantity"   title="Qty" className="qty color-bg" data-min="1" data-max="3" data-step="1" value="1" />
                                    <input type="button" value="+" className="plus" />
                                </div>
                            </div>
                            <div className="listsearch-input-item clact date-container2">
                                <label><i className="fal fa-calendar"></i></label>
                                <input type="text" placeholder="Date / Time"     name="datepicker-here-time"   />
                                <span className="clear-singleinput"><i className="fal fa-times"></i></span>
                            </div>
                            <textarea cols="40" rows="3" placeholder="Additional Information:"></textarea>
                        </fieldset>
                        <button className="btn color2-bg url_btn float-btn" onClick="window.location.href='booking.html'">Book Table Now <i className="fal fa-bookmark"></i></button>
                    </form>
                </div>
            </div>
        </div>
    );
}