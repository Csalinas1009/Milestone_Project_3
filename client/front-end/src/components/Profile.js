import React from 'react'
import '../styles/styles.css'
// import { useState } from 'react'
// import defaultProfileIcon from '../images/default_profile.jpg'


function Profile({name, email, img}) {
    
    



    
    // const updateUserDetails = (event) => {
    //     event.preventDefault()
    //     setUserDetails({
    //         name: event.target.nameOfUser.value,
    //         about: event.target.aboutUser.value,
    //     })
    // }

    const editForm = (
        <form className='edit-profile-form'>
            <input type="text" id="" name="nameOfUser" placeholder="Your Name" />
            <input type="text" id="" name="aboutUser" placeholder="About You" />
            <br />
            <button type='button' className='cancel-button' onClick={() => setEditFormIsOpen(false)}>Cancel</button>
            <button type='submit' className='save-button'>Save</button>
        </form>
    )

    const editButton = <button className='edit-button'onClick={() => setEditFormIsOpen(true)}>Edit Bio</button>

    return (
        <><><section className="profile">
            <input type="file" accept='images/*' style={{ visibility: "hidden" }} name='photo' id="profilePhotoInput" />
            <label htmlFor='profilePhotoInput' onClick={updateProfilePhoto}>
                <div className='profile-photo' role="button" title="Change Photo">

                    <img src={img} alt="profile" />
                </div>
            </label>
            <div className='info'>
                <p className='name'>{name}</p>
                <p className="about">{email}</p>

                <img src={profilePhoto} alt="profile" />
            </div>
        </section>

        </><div className='info'>
                <p className='name'>{userDetails.name}</p>
                <p className="about">{userDetails.about}</p>
                main
                {editFormIsOpen ? editForm : editButton}
            </div></>
        
    )
}



export default Profile