import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <div>
            <h2>
              DEKUXE <span>HOTELS</span>
            </h2>
          </div>
        </Link>

        <div>
          <ul>
            <li>BOOKING</li>
            <li>ROOMS</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
