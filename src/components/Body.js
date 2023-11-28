import Card from "../components/Card";
import {useEffect, useState} from "react";
import {SWIGGY_API_URL} from "../utils/common";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


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
    setresList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setresFiltList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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

        {/* {Rest Cards} */}
        
        <div className="res-container">
          {console.log(resList)}
          { resFiltList?.map((rest)=>(
            <Link 
              key={rest?.info?.id}
              to={"/restaurants/"+rest?.info?.id}  >
              <Card resData={rest} />
            </Link> 
          ))} 

        </div>
      </div>
    );
  };

export default Body;