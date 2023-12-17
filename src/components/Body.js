import Card from "../components/Card";
import {useEffect, useState} from "react";
import {SWIGGY_API_URL} from "../utils/common";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";


const Body=()=>{
  //state variables
  const [resList,setresList]=useState([]);
  const [resFiltList,setresFiltList]=useState([]);
  const [searchText,setsearchText]=useState("");

  const onlineStatus=useOnlineStatus();

  if(onlineStatus==false)
    return(
      <h1>
        Oops ! Please check your internet connection   .
      </h1>
    )

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
        <div className="filter flex justify-center">

          <div className="search m-4 p-4 ">
            <input type="text" className="border border-solid border-black w-[400]" value={searchText} onChange={(e)=>
              {setsearchText(e.target.value);
             }} />

            <button className="px-4 py-1 bg-orange-600 m-4 rounded-md" onClick={()=>{
              const searchData=resList.filter((res)=>(
                res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                );
              // console.log(searchData)
              return searchData.length==0 ?(setresFiltList(resList)):(setresFiltList(searchData));
            }}>Search</button>
          </div> 
          <div className="search m-4 p-4 ">
            <button className="filter-btn px-4 py-1 bg-orange-600 m-4 rounded-md" 
            onClick={()=>{
              const topList = resList.filter(
                (res)=> (res.info.avgRating>4)
                );
              return topList.length==0 ?(<h1>No Data Found!</h1>):(setresFiltList(topList));
            }}
            >Top Rated Restraunts</button>
          </div>
        </div>

        {/* {Rest Cards} */}
        
        <div className="flex flex-wrap justify-around ">
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