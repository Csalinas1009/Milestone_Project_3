import React from 'react'
import Navigation from './Navigation'
import Gallery from './Gallery';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //might have to use Axio again for image uploading, or we could use another tool for this.
  
  return (
    <><Navigation /><div>
      <Gallery />
    </div></>
  )
}

export default App