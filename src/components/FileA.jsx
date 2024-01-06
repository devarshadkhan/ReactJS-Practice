import { useContext } from "react"
import MyContext from "../context/MyContext"

const FileA = () => {
  const {text,color}=useContext(MyContext)
  return (
    <div style={{color:color?color:"red"}}> {text}</div>

  )
}

export default FileA