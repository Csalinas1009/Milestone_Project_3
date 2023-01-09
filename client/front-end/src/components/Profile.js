import React from 'react'
import '../styles/styles.css'
import { useState } from 'react'
import defaultProfileIcon from '../images/default_profile.jpg'


function Profile() {
    const [userDetails, setUserDetails] = useState({
        name: 'Name Here',
        about: 'Write Something About Yourself!',
    })

    const updateUserDetails = (event) => {
        event.preventDefault()
        setUserDetails({
            name: event.target.nameOfUser.value,
            about: event.target.aboutUser.value,
        })
    }

    const editForm = (
        <form className='edit-profile-form' onSubmit={(e) => updateUserDetails(e)}>
            <input type="text" id="" name="nameOfUser" placeholder="Your Name" />
            <input type="text" id="" name="aboutUser" placeholder="About You" />
            <br />
            <button type='button' className='cancel-button'>Cancel</button>
            <button type='submit' className='save-button'>Save</button>
        </form>
    )
    return (
        <section className="profile">
            <><div className='profile-photo' role="button" title="Change Photo">
                <img style={{ height: '150px', width: '150px', borderRadius: '100px' }} src={defaultProfileIcon} alt="profile" />
            </div><div className='info'>
                    <p className='name'>{userDetails.name}</p>
                    <p className="about">{userDetails.about}</p>
                    <button>Edit</button>
                    {editForm}
                </div></>
        </section>
    )
}

export default Profile