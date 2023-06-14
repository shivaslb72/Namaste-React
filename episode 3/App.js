import React from "react";
import ReactDOM from "react-dom/client";
import "./Assignment.css"

const Title = ()=>(
<h1 id="title" key="h2">
  Namaste React

</h1>
)
// this is a react element 
const title2 = (
  <h1 id="title" key="h2">
    This is a react element
  
  </h1>
  )
//composing component

const HeaderComponent=()=>{
  return(
    <div>
      <Title/>
      {title2}
      <h2> Namaste React from the functional component</h2>
      <h2>This is s h2 tag</h2>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);




