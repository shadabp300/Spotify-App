import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  let logout=()=> {
    localStorage.clear()
    window.history.forward()
  }
  return (
    <div className='navbar_container'>
        <div className='navbar_container_2'>
        <div className='nav_logo'><img className='nav_logo' src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" alt="logo"/></div>
        <div>
            <ul className='nav_ul'>
            <NavLink to='/songs'><li className='nav_list'>Songs</li></NavLink>
            <NavLink to='/artist'><li className='nav_list'>Artists</li></NavLink>
            <NavLink to='/'><li className='nav_list' onClick={logout}>Logout</li></NavLink>
            </ul>
        </div>
        </div>
        
    </div>
    
  )
}

export default Navbar