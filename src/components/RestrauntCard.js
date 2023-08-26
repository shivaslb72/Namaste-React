
import { useContext } from "react";
import { IMG_CDN_URL } from "../Config";
import UserContext from "../utils/userContext";

const RestrauntCard = ({cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) =>{ 
  console.log("sdsad" ,sla)

  const {user} = useContext(UserContext)
  return(
    <div className="w-72 p-6 m-6 shadow-lg bg-pink-50">
    <img alt="img" src={IMG_CDN_URL + cloudinaryImageId} />
    <h3 className="font-bold text-2xl mt-4">{name}</h3>
    <h5 className="text-sm mt-2">{cuisines.join(", ")}</h5>
    <h5 className="text-sm">{areaName}</h5>
  
    <div className="ml-auto flex items-center mt-4 space-x-2">
      <button
        className={
          avgRatingString < 4
            ? "px-3 py-2 rounded bg-red-500 text-white font-semibold text-xs"
            : avgRatingString === "--"
            ? "px-3 py-2 rounded bg-white text-black font-semibold text-xs"
            : "px-3 py-2 rounded bg-green-500 text-white font-semibold text-xs"
        }
      >
        <i className="fa-solid fa-star"></i> {avgRatingString}
      </button>
      <h6 className="mx-2 text-sm">•</h6>
      <h6 className="font-bold text-sm">{sla?.lastMileTravelString}</h6>
      <h6 className="mx-2 text-sm">•</h6>
      <h6 className="font-bold text-sm">{costForTwo}</h6>
    </div>
    {/* <h5 className="font-bold text-red-400">{user.name}</h5>
    <h5 className="font-bold text-red-400" >{user.email}</h5> */}

  </div>

  )
}

export default RestrauntCard