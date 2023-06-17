import React from "react";

import "../../index.css"

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Title = ()=>(
<a href="/">
<h1 >
  <img className="logo" alt="logo" src="https://img.freepik.com/premium-vector/hot-chili-fire-hot-food-logo-design_285145-31.jpg?w=740" />
  </h1>
</a>
)
const Header=()=>{
  return(
    <div className="header">
      <Title/>
      <div className="nav-items">
        <ul>
         <li>Home</li>
          <li>About</li>
          <li>contact</li>
          <li>
          <FontAwesomeIcon icon={faCartShopping} />
        </li>
        </ul>

      </div>
      
    
    </div>
  )
}

export default Header