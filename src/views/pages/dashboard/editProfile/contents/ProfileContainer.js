import React from 'react'


export default function ProfileContainer(props) {

    return  (
        <>
            <div className="dashboard-title fl-wrap">
                <h3>Your Profile</h3>
            </div>
             {/* profile-edit-container-->  */}
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form">
                    <div className="row">
                        <div className="col-sm-6">
                            <label>First Name <i className="fal fa-user"></i></label>
                            <input type="text" placeholder="Jessie" />                                                
                        </div>
                        <div className="col-sm-6">
                            <label>Second Name <i className="fal fa-user"></i></label>
                            <input type="text" placeholder="Manrty" />                                                
                        </div>
                        <div className="col-sm-6">
                            <label>Email Address<i className="far fa-envelope"></i>  </label>
                            <input type="text" placeholder="JessieManrty@domain.com" />                                                
                        </div>
                        <div className="col-sm-6">
                            <label>Phone<i className="far fa-phone"></i>  </label>
                            <input type="text" placeholder="+7(123)987654" />                                                
                        </div>
                        <div className="col-sm-6">
                            <label> Adress <i className="fas fa-map-marker"></i>  </label>
                            <input type="text" placeholder="USA 27TH Brooklyn NY" />                                                
                        </div>
                        <div className="col-sm-6">
                            <label> Website <i className="far fa-globe"></i>  </label>
                            <input type="text" placeholder="themeforest.net" />                                                
                        </div>
                    </div>
                    <label> Notes</label>                                              
                    <textarea cols="40" rows="3" placeholder="About Me" style={{marginBottom:20}}></textarea>
                    <label>Change Avatar</label> 
                    <div className="photoUpload">
                        <span><i className="fal fa-image"></i> <strong>Add Photos</strong></span>
                        <input type="file" className="upload" />
                    </div>
                </div>
            </div>
             {/* profile-edit-container end-->  */}
            <div className="dashboard-title dt-inbox fl-wrap">
                <h3>Your  Socials</h3>
            </div>
             {/* profile-edit-container-->  */}
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form">
                    <label>Facebook <i className="fab fa-facebook"></i></label>
                    <input type="text" placeholder="https://www.facebook.com/" />
                    <label>Twitter<i className="fab fa-twitter"></i>  </label>
                    <input type="text" placeholder="https://twitter.com/" />
                    <label>Vkontakte<i className="fab fa-vk"></i>  </label>
                    <input type="text" placeholder="https://vk.com" />
                    <label> Instagram <i className="fab fa-instagram"></i>  </label>
                    <input type="text" placeholder="https://www.instagram.com/" />
                    <button className="btn    color2-bg  float-btn">Save Changes<i className="fal fa-save"></i></button>
                </div>
            </div>
        </>
    )
}