import React from 'react'
import '../styles/styles.css'
import { useState } from 'react'
import getPhotoUrl from 'get-photo-url'
import defaultProfileIcon from '../images/profile_pic.png'


function Profile({name, email, img}) {



    const [userDetails, setUserDetails] = useState({
        name: 'Name Here',
        about: 'Write Something About Yourself!',
    })



    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    const [profilePhoto, setProfilePhoto] = useState(defaultProfileIcon)


    const updateUserDetails = (event) => {
        event.preventDefault()
        setUserDetails({
            name: event.target.nameOfUser.value,
            about: event.target.aboutUser.value,
        })
        setEditFormIsOpen(false)
    }

    const updateProfilePhoto = async() => {
        const newProfilePhoto = await getPhotoUrl('#profilePhotoInput')
        setProfilePhoto(newProfilePhoto)
    }

    const editForm = (
        <form className='edit-profile-form' onSubmit={(e) => updateUserDetails(e)}>
            <input type="text" id="" name="nameOfUser" placeholder="Your Name" />
            <input type="text" id="" name="aboutUser" placeholder="About You" />
            <br />
            <button type='button' className='cancel-button' onClick={() => setEditFormIsOpen(false)}>Cancel</button>
            <button type='submit' className='save-button'>Save</button>
        </form>
    )

    const editButton = <button onClick={() => setEditFormIsOpen(true)}>Edit</button>

    return (
        <section className="profile-profile">
            <input type="file" accept='images/*' style={{visibility:"hidden"}} name='photo' id="profilePhotoInput" />
            <label htmlFor='profilePhotoInput' onClick={updateProfilePhoto}>
            <div className='profile-photo' role="button" title="Change Photo">
                <img src={profilePhoto} alt="profile" />
            </div>
            </label>
            <div className='info'>
                    <p className='name'>{userDetails.name}</p>
                    <p className="about">{userDetails.about}</p>
                    {editFormIsOpen ? editForm : editButton}
            </div>
        </section>
    )
}

export default Profile