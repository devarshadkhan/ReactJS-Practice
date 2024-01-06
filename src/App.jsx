import { useContext, useState } from 'react'
import FileA from './components/FileA'
import './App.css'
import FileB from './components/FileB'
import MyContext from './context/MyContext'

function App() {
const {setText, setColor, color}=useContext(MyContext)

  return (
    <>
      <button onClick={() => setText("Arshad")}>Click Me</button>
      
      <input type='text' value={color} onChange={((e)=>setColor(e.target.value))}></input>
      <FileA  />
      <FileB />
    </>
  )
}

export default App
