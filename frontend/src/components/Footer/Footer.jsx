import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div>
        <h2>Sign Up For Exclusive Offers</h2>

        <div>
          <input type="email" placeholder="Enter your email" />
          <button>Join Now</button>
        </div>
      </div>
      <div>
        <div>
          <h2>DELUXE HOTELS</h2>
          <div>
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
        <div>
          <ul>
            <li>HOME</li>
            <li>BOOKING</li>
            <li>ROOMS</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
      <p>Copyright and bla bla bla</p>
    </div>
  );
};

export default Footer;
