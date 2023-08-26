

import { IMG_CDN_URL } from "../Config";


const FoodItem = ({cloudinaryImageId,
  name,
  description,
  price,
  imageId
  
}) =>{ 
 

  return(
    <div className="w-72 p-2 m-2 shadow-lg bg-pink-50">
    <img className="rounded-md shadow-lg" alt="img" src={IMG_CDN_URL + imageId} />
    <h3 className="font-bold text-2xl mt-4"><span>Name</span> : {name}</h3>
    <h5 className=" mt-4"><span>Description</span> : {description}</h5>
    <h5 className="text-sm">Price: {price/100}</h5>

  </div>

  )
}

export default FoodItem