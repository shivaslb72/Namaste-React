import { useContext, useEffect, useState } from "react"
import { swiggy_api_URL } from "../Config"
import RestrauntCard from "./RestrauntCard"
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";

const filterData = (searchText, restruants) => {
return restruants.filter((restraunt) => restraunt?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
  };
  
const Body =()=>{ //parent
    const [searchText,setSearchText] = useState()
    const [filteredRestruants,setFilteredRestruants] = useState([])
    const [allredRestruants,setAllredRestruants] = useState([])
    const {user,setUser} = useContext(UserContext)
    
    useEffect(()=>{
      getRestruants()
    },[])

    async function getRestruants(){
       // handle the error using try... catch  
      try {
      const data = await fetch(swiggy_api_URL)
      const json = await data.json()
      
      setAllredRestruants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestruants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      } catch (error) {
        console.log(error)
      }   
    }
   
    const isOnline = useOnline() //custum Hook

    if (!isOnline) {
      return (
        <h1 className="text-red-600 text-center p-4">
          Looks like you're offline!! Please check your internet connection.
        </h1>
      );
    }
    
    //not render a component early return
    if(!allredRestruants)return null
    return(filteredRestruants.length === 0)?<Shimmer/>:(
    <>
    
    <div className="p-5 my-5 bg-pink-50">
        <input 
        type="text" 
        className="focus:bg-green-50 p-2 m-2" 
        placeholder="Search" 
        value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}
        />
        
        <button data-testid="search-btn"className="p-2 m-2 bg-purple-900 text-white rounded-md hover:bg-gray-500" onClick={()=>{
            const data = filterData(searchText,allredRestruants)
            setFilteredRestruants(data)
            
        }}>Search</button>
     
        <input value={user.name} onChange={e=>setUser({...user,name:e.target.value})}/>
        <input value={user.email} onChange={e=>setUser({...user,email:e.target.value})}/>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" data-testid="res-list">
    {filteredRestruants.length === 0 ? (
    <h1 className="col-span-full">No Restaurants Match Your Filter</h1>
   ) : (
    filteredRestruants.map((restraunt) => (
      <Link
        key={restraunt.info.id}
        to={"/restraunt/" + restraunt.info.id}
        className="col-span-1"
      >
        <RestrauntCard {...restraunt.info} />
      </Link>
    ))
  )}
</div>

    </>
  
    )
  }

  export default Body