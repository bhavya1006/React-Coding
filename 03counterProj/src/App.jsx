import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, chaicounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    if(counter<20) chaicounter(counter+1);
    // console.log('Clicked',counter);
  }
  const removeValue = () => {
    if(counter>0) chaicounter(counter-1)
  }
  return (
    <>
      <h1>Bhavy and React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue} >Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
