import React, { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import { FaBath, FaBed, FaUserFriends, FaWifi } from "react-icons/fa";

const amenitiesList = [
  { label: "1-2 persons", icon: <FaUserFriends className="text-gray-600" /> },
  { label: "Bathtub", icon: <FaBath className="text-gray-600" /> },
  { label: "King Size Bed", icon: <FaBed className="text-gray-600" /> },
  { label: "Free Wifi", icon: <FaWifi className="text-gray-600" /> },
];

const HotelList = () => {
  const { rooms } = useContext(RoomContext);
  console.log("rooms", rooms);

  return (
    <div>
      <div>
        <h2>
          Book your stay <br /> relax in luxury
        </h2>
        <div>
          {rooms && rooms.length > 0 ? (
            rooms.map((room, index) => {
              const { _id: id, image, name, price } = room;
              return (
                <div key={index}>
                  <img src={image} alt="your room" />
                  <div>
                    <h3>{name}</h3>
                    <p>${price}</p>
                    <div></div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>NO rooms available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelList;
