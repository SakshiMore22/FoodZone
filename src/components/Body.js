import Card from "../components/Card";
import {useEffect, useState} from "react";
import {SWIGGY_API_URL} from "../utils/common";
import Shimmer from "./Shimmer";


const Body=()=>{
  //state variables
  const [resList,setresList]=useState([]);

  useEffect(()=>{
    fetchData()
  },[]);

  const fetchData = async () => {
    const data= await fetch(SWIGGY_API_URL);
    const json=  await data.json();
    console.log(json);
    setresList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

    return resList.length==0?(<Shimmer />):(

      <div className="body">
        {/* Top-Rated Restraunts */}
        <div className="filter">
          <button className="filter-btn" 
          onClick={()=>{
            const topList = resList.filter(
              (res)=> (res.info.avgRating>4)
              );

            setresList(topList);
          }}
          >Top Rated Restraunts</button>
          
        </div>
        <div className="res-container">
         { resList.map((rest)=>(<Card resData={rest} />))} 
        </div>
      </div>
    );
  };

export default Body;