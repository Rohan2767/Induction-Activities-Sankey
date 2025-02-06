import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'


export const Home = () => {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/about')
  }
  return (
    <>
    <div>Home Page</div>
    <button onClick={handleClick} id='homebutton'>Go About</button>
    </>
    
  )
}
export default Home