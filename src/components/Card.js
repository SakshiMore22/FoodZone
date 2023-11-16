import { CDN_URL } from "../utils/common";
const Card=(props)=>{
    const {resData}=props;
    const {name,cuisines,avgRating}=resData?.info;
    return (
    <div className="res-card">
      <img className="img" src={CDN_URL+resData.info.cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating}</h5>
      <h5>{resData.info.sla.deliveryTime} minutes</h5>
    </div>
    );
  }

export default Card;