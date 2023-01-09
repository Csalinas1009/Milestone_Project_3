import React from 'react';
import home from '../images/home.png';
import compass from '../images/compass.png';
import notification from '../images/notification.png';
import '../styles/styles.css'
function Menu() {
  return (
    <div className='menu'>
        <img className='icon' src={home} alt='home'/>
        <img className='icon' src={compass} alt='compass'/>
        <img className='icon' src={notification} alt='notification'/>
    </div>
  )
}

export default Menu