import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import Dashboard from './Dashboard'
import About from './About'
import Home from './Home'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink></li>
            {/* // Return active class or empty string */}
          
         

        <li><NavLink to="/dashboard"
        className={({isActive})=>(isActive ?'active-link':'')}>Dashboard</NavLink></li>  


        <li><NavLink to="/about"
        className={({isActive})=>(isActive ?'active-link':'')}>About</NavLink></li> 

      </ul>
    </div>
  )
}

export default Navbar