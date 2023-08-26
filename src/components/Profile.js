import { useEffect, useState } from "react"

const Profile =(props)=>{
 const [count,setCount]= useState(0)
 // useEffect(()=>{
 //  console.log("useEffect")
 //  const timer = setInterval(()=>{
 //   console.log("shiva")
 //  },1000)
 //  return ()=>{
 //   clearInterval(timer)
 //   console.log("useeffect return")
 //  }
 // })
 console.log("render")
 return(
  
  <div>
 <h2>Profile component</h2>
 <h3>Name:{props.name}</h3>
 <h3>Count:{count}</h3>
 <button onClick={()=>setCount(count+1)}>Click me</button>
 </div>
 )
}

export default Profile