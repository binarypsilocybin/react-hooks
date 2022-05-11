import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <input 
        type="checkbox"
        value={checked}
        onChange={() => 
          setChecked((checked) => !checked)}  
      />
      <p>{checked ? "checked" : "not checked"}</p> 
    </div>
  );
}
