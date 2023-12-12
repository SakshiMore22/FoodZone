
import { useParams } from "react-router-dom";
import { RESTAURANT_TYPE_KEY , MENU_ITEM_TYPE_KEY, MENU_ITEM_TYPE_KEY_NEW } from "../utils/common";
import useRestMenu from "../utils/useRestMenu";
import Shimmer from "./Shimmer";

const RestMenu=()=>{
    
    const {resId}=useParams();

    const resMenu=useRestMenu(resId);


    if (resMenu==null) return <Shimmer/>;

    const {name , cuisines , costForTwo} = resMenu?.data?.cards?.map(x => x.card)?.
    find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;

    const itemCards =
        resMenu?.data?.cards.find(x=> x.groupedCard)?.
        groupedCard?.cardGroupMap?.REGULAR?.
        cards?.map(x => x.card?.card)?.
        filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
        map(x=> x.itemCards).flat().map(x=> x.card?.info) ||

        resMenu?.data?.cards.find(x=> x.groupedCard)?.
        groupedCard?.cardGroupMap?.REGULAR?.
        cards?.map(x => x.card?.card)?.
        filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY_NEW)?.categories
        ?.map(x=> x.itemCards).flat().map(x=> x.card?.info)|| [];

        console.log(itemCards);
    
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(' , ')} - {"  Rs."+costForTwo/100}</h3>
            <ul key="resId">
                {itemCards.map((item)=>(
                    <li >
                        {item?.name} - {"Rs."}
                        {item?.price/100}
                    </li>
                ))}
            </ul>
            </div>
    )
}

export default RestMenu;