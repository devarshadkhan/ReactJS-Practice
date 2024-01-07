import { useContext, useState } from 'react'
import FileA from './components/FileA'
import './App.css'
import FileB from './components/FileB'
import MyContext from './context/MyContext'
import CreditCard from './components/CreditCard'
import Api from './components/Api'
function App() {
const {setText, setColor, color}=useContext(MyContext)

  return (
    <>
      {/* <button onClick={() => setText("Arshad")}>Click Me</button>
      
      <input type='text' value={color} onChange={((e)=>setColor(e.target.value))}></input>
      <FileA  />
      <FileB /> */}
      {/* <CreditCard /> */}
      <Api/>

<h1>Api Call</h1>

    </>
  )
}

export default App
