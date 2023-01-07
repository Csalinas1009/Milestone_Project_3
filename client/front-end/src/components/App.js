import React from 'react'
import Navigation from './Navigation'
import Gallery from './Gallery';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <><Navigation /><div>
      <Gallery />
    </div></>
  )
}

export default App