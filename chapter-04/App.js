import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Title = ()=>(
<a href="/">
<h1 >
  <img className="logo" alt="logo" src="https://img.freepik.com/premium-vector/hot-chili-fire-hot-food-logo-design_285145-31.jpg?w=740" />
  </h1>
</a>
)
const Header=()=>{
  return(
    <div className="header">
      <Title/>
      <div className="nav-items">
        <ul>
         <li>Home</li>
          <li>About</li>
          <li>contact</li>
          <li>
          <FontAwesomeIcon icon={faCartShopping} />
        </li>
        </ul>

      </div>
      
    
    </div>
  )
}

const restruantList =[
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "682268",
      "name": "The Filter Coffee",
      "uuid": "a4df81c6-a569-4153-bd7b-48e0e305a85b",
      "city": "1",
      "area": "Indiranagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "e707e3eb3c241c42d7bce2b6314a8ddf",
      "cuisines": [
        "South Indian",
        "Beverages",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 45,
      "minDeliveryTime": 45,
      "maxDeliveryTime": 45,
      "slaString": "45 MINS",
      "lastMileTravel": 9.600000381469727,
      "slugs": {
        "restaurant": "the-filter-coffee-indiranagar-indiranagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Municipal No 3050, New Ward No 80 & Old BBMP Ward PID No 74-1-3050, HAL II Stage, 80 Feet Road, Indiranagar, Bangalore-560038",
      "locality": "80 Feet Road",
      "parentId": 21001,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 7700,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 7700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "7700",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7061048~p=1~eid=00000188-bd03-8a34-0613-9e76007e0167",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "9.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "682268",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "lastMileTravel": 9.600000381469727,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.5",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "424658",
      "name": "Asha Tiffins",
      "uuid": "d79cd5d9-7158-45f1-a198-e563f0e46406",
      "city": "1",
      "area": "Aecs Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "hpncnz3sfv3gigsukkts",
      "cuisines": [
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 2.700000047683716,
      "slugs": {
        "restaurant": "asha-tiffins-marathahalli-marathahalli",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#551,AECS Layout main road, 'B' Block AECS Layout,Opp.BBMP ward office,Marathahalli,Bangalore - 560037",
      "locality": "B Block",
      "parentId": 236243,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2700,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2700",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.7 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹70",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "424658",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 2.700000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "636313",
      "name": "The Rameshwaram Cafe",
      "uuid": "ee7e2a22-42c6-4f59-b0a1-d1df6faf403d",
      "city": "1",
      "area": "Brookefield",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "0adee855c65fa947a256764a87a55658",
      "cuisines": [
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "the-rameshwaram-café-whitefield-whitefield",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "AIKYAM - THE RAMESHWARAM CAFE PLOT NO. 01, ITPL MAIN ROAD, GREEN AVENUE - BENGALURU, INDIA, B.B.M.P East, Karnataka-560037",
      "locality": "ITPL Main road",
      "parentId": 384316,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "636313",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.6",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "548654",
      "name": "Sandwich 2 Poha",
      "uuid": "dd3c7800-3cf3-46fa-86d2-c11327bedbf5",
      "city": "1",
      "area": "Marathahalli",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "uy9hnrrhljvqzjtnrar4",
      "cuisines": [
        "Healthy Food",
        "Indian",
        "Continental"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 18,
      "minDeliveryTime": 18,
      "maxDeliveryTime": 18,
      "slaString": "18 MINS",
      "lastMileTravel": 2.5999999046325684,
      "slugs": {
        "restaurant": "sandwich-2-poha-marathahalli-marathahalli",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "1566, 3rd Main Rd, E Block, AECS Layout, Brookefield, Bengaluru, Karnataka 560037, India",
      "locality": "AECS Layout",
      "parentId": 329823,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2700,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2700",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7106626~p=4~eid=00000188-bd03-8a34-0613-9e77007e0477",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "548654",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "lastMileTravel": 2.5999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.2",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "402132",
      "name": "Udupi Gokula Veg",
      "uuid": "8099761d-ef32-4dcf-972f-b651ff065e83",
      "city": "1",
      "area": "KR Puram",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "wplrmo25ipisxvrta6hg",
      "cuisines": [
        "South Indian",
        "Chinese",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 35,
      "minDeliveryTime": 35,
      "maxDeliveryTime": 35,
      "slaString": "35 MINS",
      "lastMileTravel": 9.699999809265137,
      "slugs": {
        "restaurant": "udupi-gokula-veg-battarahalli-battarahalli",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "1, 3rd Main Rd, Bethel Nagar, Krishnarajapura, Bengaluru, Karnataka 560049, India",
      "locality": "Bethel Nagar",
      "parentId": 258497,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 7700,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 7700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "7700",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "9.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "402132",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "lastMileTravel": 9.699999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "57366",
      "name": "Sri lakshmi Vaibhav",
      "uuid": "62c71c2d-b7a0-4ba1-a4a4-4ad9eb11612d",
      "city": "1",
      "area": "Marathahalli",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "u9xukrvrqisiaxy5plop",
      "cuisines": [
        "Chinese",
        "Jain",
        "North Indian",
        "South Indian",
        "Sweets"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 15,
      "minDeliveryTime": 15,
      "maxDeliveryTime": 15,
      "slaString": "15 MINS",
      "lastMileTravel": 0.5,
      "slugs": {
        "restaurant": "sri-lakshmi-vaibhav-marathahalli-marathahalli",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "96, SHIRDI SAI LAYOUT, MUNNEKOLALA VILLAGE, Karnataka, 560037",
      "locality": "Munnekollal",
      "parentId": 7662,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2700,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2700",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "57366",
        "deliveryTime": 15,
        "minDeliveryTime": 15,
        "maxDeliveryTime": 15,
        "lastMileTravel": 0.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
]
  

const RestrauntCard = ({cloudinaryImageId,name,cuisins,lastMileTravelString}) =>{ 
  
  return(
    <div className="card">
      <img alt="img" src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
         cloudinaryImageId
        }/>
      <h2>{name }</h2>
      <h3>{cuisins}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  )
}

const Body =()=>{ //parent
  return(
   <div className="restaurant-list">
    {
      restruantList.map((restraunt)=>{
        return <RestrauntCard key={restraunt.data.id} {...restraunt.data}/>
      })
    }
    
   </div>

  )
}

const Footer =()=>{
  return(
    <h4>Footer</h4>
  )
}

const AppLayout =()=>{
  return(
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);




