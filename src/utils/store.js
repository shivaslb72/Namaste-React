import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
reducer:{
 //name of the slice: slice
 cart:cartSlice
}
})

export default store 

/* 
   create store
      configure store -- RTK

   provide my store to APP
      <Provider store={store}> --react-redux
   
   create slice
       RTK-- createSlice({
        name:"",
        initialState:
        reducers:{
         addItem:(state,action)=>{
          state.action.payload
         }
        }
       })

       export {addItem} = cartSlice.actions
       export defaulr cartSlice.reducer


       put the slice into store

       {
        reducer:{
         cart:cartSlice,
         usser:userSlice
        }
       }
 */

