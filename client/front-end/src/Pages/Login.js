import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/styles.css';
import jwt_decode from 'jwt-decode';


function Login() {
    
    const [user, setUser] = useState({})


    function handleCallbackResponse(response) {
            console.log('encoded jwt token' + response.credential)
            var userObject = jwt_decode(response.credential)
            console.log(userObject)
            setUser(userObject)
    }
  
    useEffect(() => {
      /* global google */
      google.accounts.id.initialize({
          client_id: '291586652740-c8hjvv11mhpfnogn1qle2a1k2fne9897.apps.googleusercontent.com',
          callback: handleCallbackResponse
      });
  
      google.accounts.id.renderButton(
        document.getElementById('signInDiv'),
        {theme: 'outline', size: 'large'}
      )
    }, [])
    
    return (
        <><div id='signInDiv'></div><div>{user &&
            <div>
                <img src={user.picture} />
                <p>{user.email}</p>
                <p>{user.given_name}</p>
            </div>}
        </div></>

    )
}

export default Login;


