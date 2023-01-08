import React from 'react'
import Navigation from './Navigation'
import '../styles/styles.css'
import { useState } from 'react'
import defaultProfileIcon from '../images/default_profile.jpg'


function Profile() {
    const editForm = (
        <form className='edit-profile-form'>
            <input type="text" id="" placeholder="Your Name"/>
            <input type="text" id="" placeholder="About You"/>
        </form>
    )
        return (
    <section className="profile">
        <><div className='profile-photo' role="button" title="Change Photo">
            <img src={defaultProfileIcon} alt="profile" />
        </div><div className='info'>
                <p className='name'>Edit Name</p>
                <p className="about">Write Something About Yourself</p>
                <button>Edit</button>
                {editForm}
            </div></>
    </section>
    )
}

export default Profile