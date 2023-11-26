import Card from "../components/Card";
import {useEffect, useState} from "react";
import {SWIGGY_API_URL} from "../utils/common";
import Shimmer from "./Shimmer";


const Body=()=>{
  //state variables
  const [resList,setresList]=useState([]);
  const [resFiltList,setresFiltList]=useState([]);
  const [searchText,setsearchText]=useState("");

  useEffect(()=>{
    fetchData()
  },[]);

  const fetchData = async () => {
    const data= await fetch(SWIGGY_API_URL);
    const json=  await data.json();
    setresList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    {console.log(resList)}
    setresFiltList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    {console.log(resFiltList)}
  };

    return resList?.length==0?(<Shimmer />):(

      <div className="body">
        {/* Top-Rated Restraunts */}
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>
              {setsearchText(e.target.value);
             }} />

            <button className="search-btn" onClick={()=>{
              console.log(searchText);
              const searchData=resList.filter((res)=>(
                res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                );
              console.log(searchData)
              return searchData.length==0 ?(setresFiltList(resList)):(setresFiltList(searchData));
            }}>Search</button>
          </div> 
          <button className="filter-btn" 
          onClick={()=>{
            const topList = resList.filter(
              (res)=> (res.info.avgRating>4)
              );
            return topList.length==0 ?(<h1>No Data Found!</h1>):(setresFiltList(topList));
          }}
          >Top Rated Restraunts</button>
          
        </div>
        <div className="res-container">
         { resFiltList?.map((rest)=>(<Card key={rest?.info?.id} resData={rest} />))} 
        </div>
      </div>
    );
  };

export default Body;