import React from "react";
import { roomData } from "../../assets/assets";
import { useParams } from "react-router-dom";
import {
  FaConciergeBell,
  FaSwimmingPool,
  FaTv,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";

const HotelDetails = () => {
  const { id } = useParams();
  const room = roomData.find((room) => {
    return room.id === parseInt(id);
  });
  return (
    <div>
      <div>
        <div>
          <h1>{room.name}</h1>
          <p>${room.price}</p>
        </div>
        <img src={room.image} alt="Your Room" />
        <div>
          <h2>Amenities</h2>
          <div>
            <div>
              <FaWifi /> Wi-fi
            </div>
            <div>
              <FaTv /> Cable TV
            </div>
            <div>
              <FaUtensils /> Resturant
            </div>
            <div>
              <FaSwimmingPool /> Pool
            </div>
            <div>
              <FaConciergeBell /> Room Service
            </div>
          </div>
          <div>
            <h2>Room Description</h2>
            <p>{room.description}</p>
            <p>{room.description}</p>
            <p>{room.description}</p>
            <p>{room.description}</p>
          </div>
        </div>
      </div>
      {/* WALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL */}
      <div>
        <h2>Book Your Stay</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone number" />
          <div>
            <label htmlFor="date">Check-In</label>
            <input type="date" />
          </div>
          <div>
            <label htmlFor="">Check-Out</label>
            <input type="date" />
          </div>
          <div>
            <label htmlFor="">Number-guests</label>
            <select name="" id="">
              {[
                ...Array(3)
                  .keys()
                  .map((i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} Guests
                    </option>
                  )),
              ]}
            </select>
          </div>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default HotelDetails;
