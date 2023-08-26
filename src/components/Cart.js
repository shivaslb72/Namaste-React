import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch()
  const handleClearCart =()=>{
    dispatch(clearCart())
  }
 
  return (
   <>
      <h1 className="font-bold text-3xl p-2 m-2">Cart Items - {cartItems.length}</h1>
      <button className="p-2 m-5 bg-green-200 rounded-lg" onClick={()=>handleClearCart()}>clearCart</button>
    <div className="flex flex-wrap p-2 m-2">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <FoodItem
            key={item.card.info.id}
            {...item.card.info} // Spread all properties from item.card.info
          />
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
     
    </div>
    </>
  );
};

export default Cart;
