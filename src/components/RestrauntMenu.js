import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import {IMG_CDN_URL } from "../Config"
import  useRestrauntMenu  from "../utils/useRestrauntMenu"
import { addItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux"


const RestrantMenu =()=>{
    const params = useParams()
    const {id} = params
    const restraunt = useRestrauntMenu(id)
    const mappedData=restraunt?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    const { name, cuisines, costForTwoMessage,cloudinaryImageId } =
    restraunt?.cards[0]?.card?.card?.info || {};  //if restraunt object are not available or are undefined we can use {} object

    const dispatch = useDispatch()
    const handleAdditem=(item)=>{
        dispatch(addItem(item))
    }

    if(restraunt === null) return <Shimmer/>
    return(
        <div className="flex"> 
            <div className="flex-col">
            <h1 className="font-bold p-2 m-2">Restraunt id :{id}</h1>
            <h2 className="p-2 m-2">Name: {name}</h2>
            <p className="p-2 m-2">Cusins: {cuisines.join(", ")}-{costForTwoMessage}</p>
            <img
                src={IMG_CDN_URL + cloudinaryImageId }
                alt={name}
                className=" w-56 p-2 m-2"
                />
            </div>
           
            <div className="ml-10">
            <h2 className="font-bold p-2 m-2">Menu</h2>
            
            <ul >
             {mappedData.map((item)=>{
                    return <li className="p-0" key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price/100 || item.card.info.defaultPrice/100} - <button className="bg-green-200 p-2 m-2" onClick={()=>handleAdditem(item)}>Add</button> </li>
                })}
            </ul>
            </div>
           
        </div>
    )
}

export default RestrantMenu