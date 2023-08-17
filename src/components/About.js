import React from "react"
import food from "../assets/images/food.png";
import UserContext from "../utils/userContext"; // we will use it as a component

class About extends React.Component{
    constructor(props){
      super(props)
      // console.log("parent-constructor")
    }
    componentDidMount(){
      // console.log("parent - componentDidMount")
    }
    render(){
      // console.log("parent-render")
      return(
        <div class="flex flex-col md:flex-row about-container">
        <div class="md:w-1/2 about-left  text-gray-500 p-8">
        <UserContext.Consumer>
          {({user})=><h4 className="font-bold text-red-400">{user.name} -- {user.email}</h4>}
        </UserContext.Consumer>
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Welcome to <br /> The world of <br />
            <span class="text-red-500">Tasty & Fresh Food</span>
          </h1>
          <h4 class="text-lg md:text-xl">
            "Better you will feel if you eat a Food<span class="text-red-500">Fire</span> healthy meal"
          </h4>
        </div>
        <div class="md:w-1/2 about-right">
          <img src={food} alt="Food Image" class="w-auto h-auto py-8" />
        </div>
       
      </div>

      )
    }
  }
  
  export default About;


  /* 
  parent constructor
  parent render
  child1 constructor
  child1 render
  child2 constructor
  child2 render
  child1 componentDidMount
  child2 componentDidMount
  parent ComponentDidMount
   */