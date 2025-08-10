import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { MdDeleteForever } from "react-icons/md";

const ListHotel = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchRoomList = async () => {
    try {
      const responce = await axios.get(backendUrl + "/api/hotel/list", {
        headers: { token },
      });

      if (responce.data.success) {
        setList(responce.data.hotels);
      } else {
        console.log(responce.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRoomList();
  }, []);
  return (
    <div>
      <p className="mb-2 font-bold text-2xl">Hotel Room List</p>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[1fr_3fr_1fr_1fr] items-center p-2 border-b-2 border-gray-300 text-lg font-semibold">
          <b>Image</b>
          <b>Room Name</b>
          <b>Price</b>
          <b className="text-center">Delete</b>
        </div>
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr_1fr] items-center p-2 border-b-2 border-gray-300 text-lg"
          >
            <img
              src={item.image}
              alt="room image"
              className="w-[50px] h-auto"
            />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <MdDeleteForever className="ml-10 text-[28px] cursor-pointer text-red-600" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListHotel;
