import { useState, React } from "react";
import { MyContext } from "./MyContext";

function ContextProvider({children}) {
  // const [text, setText] = useState("Raqim");
  // const [color,setColor]=useState("")

  // Credit Card States
  const[name, setName]=useState()
  const [cardNum, setCardNum]=useState("0000-0000-0000-0000")
  const[cardExp, setCardExp]= useState()
  const[cvv, setCvv]=useState()
  const[phone, setPhone]=useState()
  return (
    <div>
      <MyContext.Provider value={{ name, setName,cardNum,setCardNum,cvv,setCvv,phone,setPhone,cardExp,setCardExp }}>
        {children}
      </MyContext.Provider>
    </div>
  );
}

export default ContextProvider;