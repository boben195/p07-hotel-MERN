import React, { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";

const HotelList = () => {
  const { rooms } = useContext(RoomContext);
  console.log("rooms", rooms);

  return <div>HotelList</div>;
};

export default HotelList;
