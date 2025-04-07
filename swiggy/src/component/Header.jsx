import React, { useState } from "react";
import { IMAGES } from "../assets/ImageGallary/Image";
import {
  IoBagOutline,
  IoSearch,
  IoHelpBuoyOutline,
} from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

const menuItems = [
  { label: "Swiggy Corporate", icon: <IoBagOutline /> },
  { label: "Search", icon: <IoSearch /> },
  { label: "Offers", icon: <BiSolidOffer />, sup: "NEW" },
  { label: "Help", icon: <IoHelpBuoyOutline /> },
  { label: "Sign In", icon: <FaRegUser /> },
  { label: "Cart", icon: <HiOutlineShoppingCart /> },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Location */}
          <div className="flex items-center space-x-3">
            <img
              src={IMAGES.SWIGGY_LOGOS}
              alt="Swiggy Logo"
              className="w-12 h-12 object-contain cursor-pointer"
            />
            <div className="hidden md:flex items-center gap-2  text-gray-800 ">
            <span className="hover:text-[#ff5200] underline font-bold  "> Other</span>  <IoIosArrowDown className="ml-1 text-[#ff5200] cursor-pointer" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden   md:flex items-center space-x-8 text-[10px] md:text-[14px] lg:text-[16px] md:space-x-8  font-medium">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center   gap-0  md:gap-0 lg:gap-2 text-gray-700 font-[600] hover:text-[#ff5200]"
              >
                {item.icon}
                {item.label}
                {item.sup && <sup className="text-[#ff5200]">{item.sup}</sup>}
              </a>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#ff5200] focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-3 pb-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center gap-2 text-gray-700 hover:text-[#ff5200] font-medium cursor-pointer "
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
