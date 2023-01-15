import React from 'react';
import { useEffect, useState } from 'react';
import Navigation from './Navigation'
import Gallery from './Gallery';
import Profile from './Profile';
import UploadWidget from './UploadWidget';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from 'jwt-decode';


function App() {
  
  const [user, setUser] = useState({});




  function handleCallbackResponse(response) {
          console.log('encoded jwt token' + response.credential)
          var userObject = jwt_decode(response.credential)
          console.log(userObject)
          setUser(userObject);
          document.getElementById('signInDiv').hidden = true;
      }


    useEffect(() => {
    /* global google */
      google.accounts.id.initialize({
        client_id: '291586652740-c8hjvv11mhpfnogn1qle2a1k2fne9897.apps.googleusercontent.com',
        callback: handleCallbackResponse,
    });

    

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {theme: 'outline', size: 'large'},
    )

    google.accounts.id.prompt();
    
  }, [])
  

  return (


<div className='wrapper'>
      <Navigation />
      <div>

        <div id='signInDiv' className='signInDiv'></div>
        <Navigation /><div>

          <div className='container'>
            <Profile
              name={user.name}
              email={user.email}
              img={user.picture} />
          </div>
          <Gallery />

        </div>
      </div>

    <UploadWidget />
  </div>
    

  )
}

export default App
