import Card from "../components/Card";
import resList1 from "../utils/mockData";
import {useState} from "react";

const Body=()=>{
  //state variables
  const [resList,setresList]=useState(resList1);

    return(
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