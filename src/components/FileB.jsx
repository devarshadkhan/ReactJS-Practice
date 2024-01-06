import { useContext } from "react"
import MyContext from "../context/MyContext"

const FileB = () => {
  const {text}=useContext(MyContext)
  return (
    <div> {text}</div>

  )
}

export default FileB
