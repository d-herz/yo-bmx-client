import React from 'react'
import { Outlet } from 'react-router-dom';
import MainFooter from './components/MainFooter';
import MainNav from './components/MainNav';

function MainLayout(props) {
  return (
    <div className='site-wrapper'>
      <MainNav />

      <main className='main-container'>
        <Outlet />
      </main>
      <MainFooter />
    </div>
  )
}


export default MainLayout
