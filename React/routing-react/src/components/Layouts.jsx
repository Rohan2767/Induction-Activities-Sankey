import React from 'react'
//import Navbar from './Navbar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';




const Layouts = () => {
  return (
    <div>
        <Navbar />
        <div className='content'>
            <Outlet />
        </div> 
        </div>
  )
}

export default Layouts