import React,{lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import "../index.css"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/contact";
import RestrantMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Instamart = lazy(()=>import("./components/Instamart"))

// AppLayout component to render: Header, Outlet(it contain children component like body, About, Restaurant Menu etc) and Footer Component
const AppLayout =()=>{
  const[user,setUser] = useState({
    name:"shiva",
    email:"shivaslb72@gmail.com"
  })
  return(
    <>
    <Provider store={store}>
    <UserContext.Provider value={{user:user,setUser:setUser}}>
    <Header/>
    <Outlet/>
    <Footer/>
    </UserContext.Provider>
    </Provider>
    </>
  )
}

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path:"/", // show path for routing
    element:<AppLayout/>, //show component for particular path
    errorElement: <Error />,//// show error component for path is different   
    children:[
      // show children component for routing
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/About",
        element:<About/>,
        children:[
          {
            path:"profile", // parentPath/{childpath} ==> localhost:1234/about/profile
            element:<Profile/>
          }
        ]
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/restraunt/:id",
        element:<RestrantMenu/>
      },
      {
        path:"/instamart",
        element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); //// render RouterProvider and use router as props and pass value appRouter




