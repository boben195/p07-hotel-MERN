import React, { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import { FaBath, FaBed, FaUserFriends, FaWifi } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    <div className="b-[#f7f0eb] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800">
          Book your stay <br /> relax in luxury
        </h2>
        <div className="grid grid-cols-2 gap-10">
          {rooms && rooms.length > 0 ? (
            rooms.map((room, index) => {
              const { id, image, name, price } = room;
              return (
                <div
                  key={index}
                  className="bg-white shadow rounded-lg overflow-hidden"
                >
                  <Link to={`/room/${id}`}>
                    <img
                      src={image}
                      alt="your room"
                      className="w-full h-80 object-cover"
                    />
                  </Link>
                  <div className="p-5">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                      {name}
                    </h3>
                    <p className="text-gray-600 text-lg mb-4">${price}</p>
                    <div className="grid grid-cols-2 gap-4 text-base text-gray-700">
                      {amenitiesList.map((el, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          {el.icon} <span>{el.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              NO rooms available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelList;
