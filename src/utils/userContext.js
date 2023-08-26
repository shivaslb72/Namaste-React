import { createContext } from "react";

const UserContext = createContext({user:{name:"dummy name",email:"dummyEmail@gmail.com"}})

export default UserContext