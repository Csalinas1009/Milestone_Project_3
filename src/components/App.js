import React from 'react';
import { useEffect, useState } from 'react';
import Navigation from './Navigation'
import Gallery from './Gallery';
import Profile from './Profile';
import UploadWidget from './UploadWidget';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from 'jwt-decode';
import Axios from 'axios';


function App() {
  
  const [user, setUser] = useState({});

  const [picture, setPicture] = useState("")

  useEffect(() => {
    Axios.get("https://instafraud.herokuapp.com/").then(
      (response) => {
        setPicture(response.data)
      }
    )
  }, [])


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


<<<<<<< HEAD:src/components/App.js
    <div className='wrapper'>
=======
<div className='wrapper'>
>>>>>>> a8ee9ff790d0bee9c1c986f381864db8d107c70d:client/front-end/src/components/App.js
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
          {picture && picture.map((pic) => {
            return (
              <Gallery
              pic={pic}
              />
            )
          })}
          

        </div>
      </div>

<<<<<<< HEAD:src/components/App.js
    <UploadWidget

    />
  </div>
   
=======
    <UploadWidget />
  </div>
>>>>>>> a8ee9ff790d0bee9c1c986f381864db8d107c70d:client/front-end/src/components/App.js
    

  )
}

export default App
<<<<<<< HEAD:src/components/App.js

=======
>>>>>>> a8ee9ff790d0bee9c1c986f381864db8d107c70d:client/front-end/src/components/App.js
