import React from "react";

function CarouselCard(props) {
    let items =props;
  return (
    <div>
      <div  className="flex  justify-center   items-center   ">
        <div className="w-36 h-36 md:mx-auto ">
          <img
            className="sm:w-full h-full object-cover "
            src={items.image}
            alt="card"
          />
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
