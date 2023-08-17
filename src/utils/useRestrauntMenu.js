import{useState,useEffect} from "react"
import { swiggy_menu_api } from "../Config"

const useRestrauntMenu =(id)=>{
const[restraunt,setRestraunt]=useState(null)
useEffect(()=>{
 getRestrauntInfo()
},[])

async function getRestrauntInfo(){
 const data = await fetch(swiggy_menu_api+ id)
 const json = await data.json()
 setRestraunt(json.data)
 console.log("shiva",json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.id)
 }
return restraunt
}
export default useRestrauntMenu