import { CDN_URL } from "../utils/common";
const Card=(props)=>{
    const {resData}=props;
    const {name,cuisines,avgRating}=resData?.info;
    return (
    <div className=" m-4 p-4 w-[300px] rounded-sm transition duration-150 ease-in-out hover:scale-110 shadow-lg hover:bg-gray-200 bg-gray-100" >
      <img className="img rounded-lg h-[60%]" src={CDN_URL+resData.info.cloudinaryImageId}/>
      <h3 className="font-sans font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating}</h5>
      <h5>{resData.info.sla.deliveryTime} minutes</h5>
    </div>
    );
  }

export default Card;