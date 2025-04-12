import React, { useEffect } from "react";
import { IMAGES } from "../assets/ImageGallary/Image";
import { FaLinkedin, FaTwitter, FaPinterest } from "react-icons/fa6";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
      <footer className="max-w-7xl mx-auto  px-4 py-3">
       
      {/* Download App Section */}
      <div className="flex flex-col md:flex-row px-3 items-center gap-6 py-6 text-center md:text-left ">
        <h1 className="text-sm md:text-xl w-full md:w-[50%] font-extrabold line-clamp-2 mx-auto">
          For better experience, download the Swiggy app now
        </h1>
        <div className="flex flex-col  justify-end gap-7 mx-auto   md:flex-row">
          <div className="w-36 md:w-40 ">
            <img className="w-full " src={IMAGES.PLAY_STORE} alt="PLAYSTORE" />
          </div>
          <div className="w-36 md:w-40">
            <img className="w-full" src={IMAGES.APP_STORE} alt="APPSTORE" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10  py-10 ">

        {/* Logo & Copyright */}
        {/* <div className="flex flex-col  items-start col-span-3 lg:col-span-1 gap-2 md:gap-4"> */}
        <div className="flex flex-col items-start sm:col-span-2 lg:col-span-1 gap-1 md:gap-2 mx-auto">

            <div className="flex flex-col md:flex-row items-center  w-full">
            <div className="w-16 h-16 mx-auto ">
            <img className="w-full  " src={IMAGES.SWIGGY_LOGOS} alt="Swiggy Logo" />
          </div>
            <h2 className="text-2xl font-bold text-[#ff5200] ">Swiggy</h2>
            </div>
          <h2 className="text-sm text-gray-600 px-2.5 text-center"> @2025 Swiggy Limited</h2>
        </div>

        {/* Company */}
        <div className="mx-auto">

          <h2 className="text-lg font-bold mb-4">Company</h2>
          <ul className="text-gray-600 flex flex-col gap-4 text-sm">
            <li>About Us</li>
            <li>Swiggy Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Dineout</li>
            <li>Swiggy Genie</li>
            <li>Minis</li>
            <li>Pyng</li>
          </ul>
        </div>

        {/* Contact & Legal */}
        <div className="mx-auto">
          <h2 className="text-lg font-bold mb-4">Contact</h2>
          <ul className="text-gray-600 flex flex-col gap-4 text-sm mb-8">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>

          <h2 className="text-lg font-bold mb-4">Legal</h2>
          <ul className="text-gray-600 flex flex-col gap-4 text-sm">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        {/* Available in */}
        <div className="mx-auto">
          <h2 className="text-lg font-bold mb-4">Available in:</h2>
          <ul className="text-gray-600 flex flex-col gap-4 text-sm">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
        </div>

        {/* Life at Swiggy + Social Links */}
        <div className="mx-auto">
          <h2 className="text-lg font-bold mb-4">Life at Swiggy</h2>
          <ul className="text-gray-600 flex flex-col gap-4 text-sm mb-8">
            <li>Explore with Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>

          <h2 className="text-lg font-bold mb-4">Social Links</h2>
          <div className="flex flex-col md:flex-row gap-4 text-gray-700 text-xl">
            <a href="/"><FaLinkedin /></a>
            <a href="/"><FaInstagram /></a>
            <a href="/"><FaFacebookF /></a>
            <a href="/"><FaPinterest /></a>
            <a href="/"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

