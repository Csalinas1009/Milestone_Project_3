import React from 'react'
import Navigation from './Navigation'
import Gallery from './Gallery';
import Profile from './Profile';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //might have to use Axio again for image uploading, or we could use another tool for this.
  
  return (
    <div className='wrapper'>
    <><Navigation />
      <div>
      <div className='container'>
      <Profile />
      </div>
      <Gallery />
    </div></>
    </div>
  )
}

export default App