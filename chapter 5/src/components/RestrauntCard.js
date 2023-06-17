import { IMG_CDN_URL } from "../Config";

const RestrauntCard = ({cloudinaryImageId,name,cuisins,lastMileTravelString}) =>{ 
  
  return(
    <div className="card">
      <img alt="img" src={
          IMG_CDN_URL +
         cloudinaryImageId
        }/>
      <h2>{name }</h2>
      <h3>{cuisins}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  )
}

export default RestrauntCard