import React from "react"

class ProfileClass extends React.Component{

 constructor(props){
  super(props)
  this.state={
   userInfo:{
    name:"Dummy name",
    location:"Dummy location"
   }
  }
  console.log("child-constuctor" + this.props.name)
 }

async componentDidMount(){
  // const data = await fetch("https://api.github.com/users/shivaslb72")
  // const json = await data.json()
  // console.log(json)
  // this.setState({userInfo:json})
 this.timer= setInterval(()=>{
   console.log("namste React op")
  },1000)
  console.log("child-componentDidMount" + this.props.name)
 }

 componentDidUpdate(){
  console.log("componentDidUpdate")
}

componentWillUnmount(){
 clearInterval(this.timer)
 console.log("componentWillUnmount")
}
 render(){
  console.log("child-render"+this.props.name)
  return(
   <div>
   <h2>Profile Class Based Component</h2>
   <img src={this.state.userInfo.avatar_url}/>
   <h3>Name:{this.state.userInfo.name}</h3>
   <h3>Location:{this.state.userInfo.location}</h3>
   
 
  </div>
  )
 }
}

export default ProfileClass