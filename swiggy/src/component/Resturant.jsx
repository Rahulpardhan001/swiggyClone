import React from "react";
import CardRestaurant from "./CardRestaurant";
import { RESTURANT_DATA } from "../Apis/StaticApis";

function Resturant() {
  const button = [
    { Bname: "Fast Delivery" },
    { Bname: "New on Swiggy" },
    { Bname: "Rating 4.0" },
    { Bname: "Pure Veg" },
    { Bname: "Offers" },
    { Bname: "Rs. 300-Rs. 600" },
    { Bname: "Less than Rs. 300" },
  ];
  return (
    <section>
      <div className="main sm:px-7 py-12">
        <div>
          <h2 className="font-bold text-2xl">
            Restaurants with online food delivery in Rohtak
          </h2>
          <div className="flex flex-col md:flex-row gap-2">
            {button.map((btn, i) => (
              <ResturantFilterButton key={i} data={btn} />
            ))}
          </div>
        </div>
        <div className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
          {RESTURANT_DATA.map((items, index) => (
            <CardRestaurant key={index} {...items} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resturant;

function ResturantFilterButton({ data }) {
  return (
    <div className="mt-5 my-7 ">
      <span className="border border-gray-200 rounded-xl p-2 px-3    font-medium shadow cursor-pointer ">
        {data?.Bname}
      </span>
    </div>
  );
}
