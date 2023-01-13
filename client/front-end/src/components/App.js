import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import Gallery from './Gallery';
import Profile from './Profile';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from 'jwt-decode'



function App() {
  
  return (
    <><Navigation /><div>
      <div className='container'>
        <Profile/>
      </div>
      <Gallery />
    </div></>
  )
}

export default App