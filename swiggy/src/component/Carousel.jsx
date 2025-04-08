import React from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import CarouselSlider from "./CarouselSlider";

function Carousel() {
  return (
    <>
      <section className="container mx-auto p-0 sm:px-4  ">
        <div className="py-4 ">
          <h2 className="font-bold text-xl px-7">What's on your mind?</h2>
        </div>
        <div className="px-0 sm:px-3 relative">
          <CarouselSlider />

        <div className="hidden sm:block">
              {/* Left button */}
          <span className="absolute top-[-45px] right-28  rounded-full p-2 bg-gray-200  ">
            <FaArrowLeft />
          </span>
          {/* right  button */}
          <span className="absolute top-[-45px] right-12 rounded-full p-2 bg-gray-200 ">
            <FaArrowRight />
          </span>
        </div>
        </div>
      </section>
    </>
  );
}

export default Carousel;
