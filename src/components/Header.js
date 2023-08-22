import React, { useState,useContext } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/images/FoodVilla.png"
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

export const Title = () => (
  <a href="/">
    <h1>
      <img
        data-testid="logo"
        className="h-28 p-2 "
        alt="logo"
        src={Logo}
      />
    </h1>
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {user} = useContext(UserContext)

  const cartItems = useSelector(store=>store.cart.items)

  console.log(cartItems)
  return (
    <div className="flex flex-col  sm:flex-row justify-center sm:justify-between items-center  bg-pink-50 shadow-lg " >
       
      <Title />
      <div>
        <ul className="flex py-10">
          <li className="px-2"><Link to={"/"}>Home</Link></li>
          <li className="px-2"><Link to={"/About"}>About</Link></li>
          <li className="px-2"><Link to={"/Contact"}>contact</Link></li>
          <li className="px-2"><Link to={"/instamart"}>instamart</Link></li>

          {/* <li className="px-2">
            <FontAwesomeIcon icon={faCartShopping} />
          </li> */}

          <Link to="/cart"><li data-testid="cart" >Cart - {cartItems.length} items</li></Link>
        </ul>
      </div>
      {user.name}
      {isLoggedIn ? (
        <button className="pr-4" onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button className="pr-4" onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
