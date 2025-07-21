import React, { createContext, useState } from "react";
import { roomData } from "../assets/assets";

export const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  return (
    <RoomContext.Provider value={{ rooms }}>{children}</RoomContext.Provider>
  );
};

export default RoomContextProvider;
