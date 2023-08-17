import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const Footer =()=>{
  const year = new Date().getFullYear()
  const {user} = useContext(UserContext)
  return(
    <div className="bg-gray-800 px-2 text-white text-center py-8">
    Created By
    <FontAwesomeIcon icon={faHeart} className="text-red-500 px-2" />
    <a
      href="https://www.linkedin.com/in/shivakumar-bannimatti-38754012b/"
      target="_blank"
      title="shiva's Linkedin Profile"
      className="underline px-2"
    >
      Shivakumar Bannimatti
    </a>
    <FontAwesomeIcon icon={faCopyright} />
    <span className="ml-1 px-2">{year}</span>
    <strong className="block mt-2 text-xl px-2">
      Food<span className="text-red-500">Villa</span>
    </strong>
    <h5>{user.name}</h5>
    <h6>{user.email}</h6>
  </div>

  )
}

export default Footer
