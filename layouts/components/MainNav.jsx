import React from 'react';
import { Link, NavLink } from 'react-router-dom';


function MainNav(props) {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <header>
      <Link className='site-logo' to="/">#YO!BMX</Link>
      <nav>
        <NavLink
          to="/forum"
          style={({ isActive }) => isActive ? activeStyle : null} 
        >
          Forum
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => isActive ? activeStyle : null} 
        >
          About
        </NavLink>
        <NavLink
          to="/account"
          style={({ isActive }) => isActive ? activeStyle : null} 
        >
          Account
        </NavLink>
        <NavLink
          to="/news"
          style={({ isActive }) => isActive ? activeStyle : null} 
        >
          News
        </NavLink>
      </nav>
    </header>
  )
}


export default MainNav
