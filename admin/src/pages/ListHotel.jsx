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
      <p>Hotel Room List</p>
      <div>
        <div>
          <b>Image</b>
          <b>Room Name</b>
          <b>Price</b>
          <b>Delete</b>
        </div>
        {list.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt="room image" />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <MdDeleteForever />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListHotel;
