import React from 'react';
import Menu from './Menu';
import logo from '../images/instagram-logo-illustration-958x575.png';
import searchIcon from '../images/search_icon.png';

function Navigation() {
  return (
    <div className='Navigation'>
        <div className='container'>
            <img className="logo" src={logo} alt="ig logo"/>
            <div className='search'>
                <img className='searchIcon' src={searchIcon} alt='search icon' />
                <span className='searchText'>Search</span>
            </div>
            <Menu/>
        </div>
    </div>
  )
}

export default Navigation