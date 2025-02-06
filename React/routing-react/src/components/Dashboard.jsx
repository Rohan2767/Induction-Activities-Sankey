import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import './Dashboard.css'
const Dashboard = () => {
  return (
    <>
    <div className='dashboardcontainer'> Your Dashboard
      <div className='dashboard-buttons'>
      <Link to='dashboard1'>
        <button>Dashboard1</button>
      </Link>
      <Link to ='dashboard2'>
        <button>Dashboard2</button>
      </Link>
      <Link to ='dashboard3'>
        <button>Dashboard3</button>
      </Link>
      <Outlet/>
      </div>
    </div>
    </>
  )
}

export default Dashboard