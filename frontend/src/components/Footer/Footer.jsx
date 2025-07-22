import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col gap-12 px-16 py-16 bg-black text-white">
      <div className="grid place-content-center gap-6 text-center">
        <h2 className="text-4xl font-bold">Sign Up For Exclusive Offers</h2>

        <div className="flex items-center justify-center max-w-xl mx-auto w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-10 py-4 border-2 border-r-0 border-lime-500 rounded-l-full outline-none text-sm"
          />
          <button className="bg-lime-400 text-white px-8 py-4 rounded-r-full font-bold">
            Join Now
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center text-center gap-6">
        <div>
          <h2 className="text-2xl font-bold">DELUXE HOTELS</h2>
          <div className="flex justify-center gap-4 mt-3 text-lime-500">
            <FaFacebook className="text-3xl cursor-pointer" />
            <FaInstagram className="text-3xl cursor-pointer" />
            <FaYoutube className="text-3xl cursor-pointer" />
          </div>
        </div>
        <div>
          <ul className="flex gap-6 justify-center text-base font-medium">
            <li className="cursor-pointer">HOME</li>
            <li className="cursor-pointer">BOOKING</li>
            <li className="cursor-pointer">ROOMS</li>
            <li className="cursor-pointer">CONTACT</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm mt-4">Copyright and bla bla bla</p>
    </div>
  );
};

export default Footer;
