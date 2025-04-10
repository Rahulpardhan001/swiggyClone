import React, { useEffect, useState } from "react";
import { CAROUSEL_DATA, RESTURANT_DATA } from "../../Apis/StaticApis";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import SearchProudctShown from "./SearchProudctShown";
function Search() {
  const [searchInput, setSearchInput] = useState("");

  // **************** Handle change ***************//
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  // ******************filter data *********************//
  let filter = RESTURANT_DATA.filter((item) =>
    item.title.toLowerCase().includes(searchInput.trim().toLowerCase())
  );

  return (
    <div className="">
      <form
        className="flex justify-center pb-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="my-7 w-[50%]  relative ">
          <input
            className="border border-gray-300 w-full h-10 px-6 font-bold rounded-sm focus:outline-0"
            type="search"
            placeholder="Search for restaurants and food"
            value={searchInput}
            onChange={handleChange}
          />
          {searchInput.length === 0 && (
            <button
              className="absolute right-2 top-2 text-xl cursor-pointer"
              type="submit"
            >
              <IoSearch />
            </button>
          )}
        </div>
      </form>
      <div className="flex justify-center">
        {/***********Search Product shown *********** */}
        <div className="w-[50%] flex flex-col gap-4 ">
          {searchInput.trim().length === 0 ? (
            <PopularCousine />
          ) : (
            filter.map((data, i) => (
              <SearchProudctShown key={i} product={data} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;

// *****************Popular cousine show in Search ******************//
function PopularCousine() {
  return (
    <div className="md:px-2.5">
      <h2 className="text-[10px] sm:text-xl font-bold py-2">Popular Cuisines</h2>
      <div className="flex items-center gap-1  w-full overflow-y-auto no-scrollbar">
        {CAROUSEL_DATA.slice(1, 9).map((item, i) => {
          return (
            <div className="flex" key={i}>
              <div className="w-11 h-11 md:w-16 md:h-16">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
