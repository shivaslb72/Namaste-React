import { useState } from "react"
import { restruantList } from "../Config"
import RestrauntCard from "./RestrauntCard"



const filterData = (searchText, restruants) => {
    return restruants.filter((restraunt) => restraunt.data.name.includes(searchText));
  };
  


const Body =()=>{ //parent
    const [searchText,setSearchText] = useState()
    const [restruants,setRestruants] = useState(restruantList)
    return(
    <>
    <div className="search-container">
        <input 
        type="text" 
        className="search-input" 
        placeholder="Search" 
        value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}
        />
        
        <button className="search-btn" onClick={()=>{
            const data = filterData(searchText,restruants)
            setRestruants(data)
            
        }}>Search</button>
     



    </div>
     <div className="restaurant-list">
      {
        restruants.map((restraunt)=>{
          return <RestrauntCard key={restraunt.data.id} {...restraunt.data}/>
        })
      }
      
     </div>
    </>
  
    )
  }

  export default Body