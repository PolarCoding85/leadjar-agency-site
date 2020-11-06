import React from 'react'

export default function AddReviews() {
    
    return (
        <div className="list-single-main-item fl-wrap block_box" id="sec6">
            <div className="list-single-main-item-title fl-wrap">
                <h3>Add Review</h3>
            </div>
                {/* Add Review Box --> */}
            <div id="add-review" className="add-review-box">
                    {/* Review Comment --> */}
                <form id="add-comment" className="add-comment  custom-form" name="rangeCalc" >
                    <fieldset>
                        <div className="review-score-form fl-wrap">
                            <div className="review-range-container">
                                    {/* review-range-item--> */}
                                <div className="review-range-item">
                                    <div className="range-slider-title">Cleanliness</div>
                                    <div className="range-slider-wrap ">
                                        <input type="text" className="rate-range" data-min="0" data-max="5"  name="rgcl"  data-step="1" value="4" />
                                    </div>
                                </div>
                                    {/* review-range-item end -->  */}
                                    {/* review-range-item--> */}
                                <div className="review-range-item">
                                    <div className="range-slider-title">Comfort</div>
                                    <div className="range-slider-wrap ">
                                        <input type="text" className="rate-range" data-min="0" data-max="5"  name="rgcl"  data-step="1"  value="1" />
                                    </div>
                                </div>
                                    {/* review-range-item end -->  */}
                                    {/* review-range-item--> */}
                                <div className="review-range-item">
                                    <div className="range-slider-title">Staf</div>
                                    <div className="range-slider-wrap ">
                                        <input type="text" className="rate-range" data-min="0" data-max="5"  name="rgcl"  data-step="1" value="5" />
                                    </div>
                                </div>
                                    {/* review-range-item end -->  */}
                                    {/* review-range-item--> */}
                                <div className="review-range-item">
                                    <div className="range-slider-title">Facilities</div>
                                    <div className="range-slider-wrap">
                                        <input type="text" className="rate-range" data-min="0" data-max="5"  name="rgcl"  data-step="1" value="3" />
                                    </div>
                                </div>
                                    {/* review-range-item end -->                                      */}
                            </div>
                            <div className="review-total">
                                <span><input type="text" name="rg_total"   data-form="AVG({rgcl})" value="0" /></span>    
                                <strong>Your Score</strong>
                            </div>
                        </div>
                        <div className="list-single-main-item_content fl-wrap">
                            <div className="row">
                                <div className="col-md-6">
                                    <label><i className="fal fa-user"></i></label>
                                    <input type="text" placeholder="Your Name *" />
                                </div>
                                <div className="col-md-6">
                                    <label><i className="fal fa-envelope"></i>  </label>
                                    <input type="text" placeholder="Email Address*" />
                                </div>
                            </div>
                            <textarea cols="40" rows="3" placeholder="Your Review:"></textarea>
                            <div className="clearfix"></div>
                            <div className="photoUpload">
                                <span><i className="fal fa-image"></i> <strong>Add Photos</strong></span>
                                <input type="file" className="upload" multiple />
                            </div>
                            <div className="clearfix"></div>
                            <button className="btn  color2-bg  float-btn">Submit Review <i className="fal fa-paper-plane"></i></button>
                        </div>
                    </fieldset>
                </form>
            </div>
                {/* Add Review Box / End --> */}
        </div>
    );
}