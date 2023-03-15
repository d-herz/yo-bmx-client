import React from 'react'
import { NavLink,Outlet } from 'react-router-dom';


function ForumMain(props) {

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }




  return (
    <div className='forum-main'>
      
      Welcome to the Yo! BMX Forums
      <nav className='forum-nav'>
        <NavLink
          to='.'
          end
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Dashboard
        </NavLink>

        <NavLink
          to='income'
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Income
        </NavLink>

        <NavLink
          to='vans'
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Vans
        </NavLink>

        <NavLink
          to='reviews'
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Reviews
        </NavLink>

      </nav>
      <Outlet />

    </div>
  )
}


export default ForumMain
