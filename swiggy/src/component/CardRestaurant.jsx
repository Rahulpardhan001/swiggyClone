import React from "react";
import { IoStar } from "react-icons/io5";

function CardRestaurant(props) {
  let data = props;
  // console.log(props,"images")
  return (
    <div className="main-card sm:p-1 cursor-pointer transition-all duration-1000 ease-out hover:scale-90 ">
      <div className="imagecard w-24 h-14 sm:w-40 sm:h-28 md:w-40 md:h-28  lg:w-56 lg:h-40 rounded  ">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={data?.image}
          alt="cardImage"
        />
      </div>
      <div className="datacard py-3">
        <h2 className="font-bold text-[17px] md:text-xl w-[70%] line-clamp-2">
          {data?.title}
        </h2>
        <div className="text-[16px] font-bold flex items-center gap-3 leading-7">
          <span className="bg-green-800 rounded-full p-1">
            <IoStar className="text-white" />
          </span>
          {data?.rating}
        </div>
        <div className="text-gray-600 min-w-32 w-[80%]  truncate">
          {data?.description}
        </div>
      </div>
    </div>
  );
}

export default CardRestaurant;
