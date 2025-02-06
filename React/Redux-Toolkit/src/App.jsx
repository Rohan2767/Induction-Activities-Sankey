import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset} from './features/counter/counterSlice'

function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch=useDispatch();


  function handleIncrement(){
    dispatch (increment());
  }

  function handleDecrement(){
    dispatch (decrement());
  }

  function handleReset(){
    dispatch (reset());
  }
 
  return (
    <>
      <div className='container'>
        <button onClick={handleIncrement}>Incremnt</button>
        <p>Count:{count}</p>
        <button onClick={handleDecrement}>Decremnt</button>
        
        <button onClick={handleReset}>Reset</button>
        

       </div>
    </>
  )
}

export default App
