import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { REST_MENU_URL } from "../utils/common";
import Shimmer from "./Shimmer";

const RestMenu=()=>{
    const [resMenu , setresMenu]=useState(null);

    const {resId}=useParams();

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu= async()=>{
        const data= await fetch(REST_MENU_URL+resId);
        const json= await data.json();
        setresMenu(json);
    }

    if (resMenu==null) return <Shimmer/>;

    const {name , cuisines , costForTwo}=resMenu?.data?.cards[0]?.card?.card?.info;

    let {itemCards}=resMenu?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    if (itemCards==undefined){
        console.log("hii");
        itemCards =resMenu?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
        console.log(itemCards);
    }
    console.log(itemCards);
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(' , ')} - {"  Rs."+costForTwo/100}</h3>
            <ul>
                {itemCards.map((item)=>(
                    <li>
                        {item?.card?.info?.name} - {"Rs."}
                        {item?.card?.info?.price/100}
                    </li>
                ))}
            </ul>
            </div>
    )
}

export default RestMenu;