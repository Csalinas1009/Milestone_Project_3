import React from 'react'
import '../styles/styles.css'
import { useState } from 'react'
import getPhotoUrl from 'get-photo-url'
import defaultProfileIcon from '../images/profile_pic.png'


function Profile({name, email, img, bio}) {



    const [userDetails, setUserDetails] = useState({
        name: 'Username',
        about: 'Write Something About Yourself!',
    })



    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    const [profilePhoto, setProfilePhoto] = useState(defaultProfileIcon)


    const updateUserDetails = (event) => {
        event.preventDefault()
        setUserDetails({
            about: event.target.aboutUser.value,
        })
        setEditFormIsOpen(false)
    }

    const updateProfilePhoto = async() => {
        const newProfilePhoto = await getPhotoUrl('#profilePhotoInput')
        setProfilePhoto(newProfilePhoto)
    }

    return (

        <><section className="profile-profile">

            <input type="file" accept='images/' style={{ visibility: "hidden" }} name='photo' id="profilePhotoInput" />
        </section><section className="profile">
                <input type="file" accept='images/' style={{ visibility: "hidden" }} name='photo' id="profilePhotoInput" />

            <input type="file" accept='images/*' style={{ visibility: "hidden" }} name='photo' id="profilePhotoInput" />
        </section><section className="profile">
                <input type="file" accept='images/*' style={{ visibility: "hidden" }} name='photo' id="profilePhotoInput" />


                <label htmlFor='profilePhotoInput' onClick={updateProfilePhoto}>
                    <div className='profile-photo' role="button" title="Change Photo">
                        <img src={img} alt="profile" />
                    </div>
                </label>
            </section><div className='info'>

                <p className='name'>{name}</p>
                <p className="about">{email}</p>

            </div></>

    )
}

export default Profile