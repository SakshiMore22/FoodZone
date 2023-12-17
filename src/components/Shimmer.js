import { shimmer_card_unit } from "../utils/common";

const ShimmerCard=()=>{
    return (
         
        <div className="shimmer-card m-4 p-4 w-[300px] h-[300px] rounded-sm bg-gray-200">
            <div className="shimmer-img rounded-lg h-[60%] bg-gray-300 w-[100%]"></div>
            <div className="shimmer-title my-4 h-[10%] w-[60%] bg-gray-300 justify-start"></div>
            <div className="shimmer-tags my-2 h-[5%] w-[80%] bg-gray-300 "></div>
            <div className="shimmer-details h-[10%] bg-gray-300 "></div>
        </div>
    );
} ;

const Shimmer=()=>{
    return(
    <div className="shimmer-container flex flex-wrap my-[150px]">
        { Array(shimmer_card_unit).fill(0).map((element, index) => {
        return <ShimmerCard key={index} />;
      })}
    </div>
    );
};

export default Shimmer;