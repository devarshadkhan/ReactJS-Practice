import { useState, React } from "react";
import { MyContext } from "./MyContext";

function ContextProvider({children}) {
  const [text, setText] = useState("Raqim");
  const [color,setColor]=useState("")
  return (
    <div>
      <MyContext.Provider value={{ text,setText, color,setColor }}>
        {children}
      </MyContext.Provider>
    </div>
  );
}

export default ContextProvider;