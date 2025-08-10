import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";

const Reservation = () => {
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const responce = await axios.get(backendUrl + "/api/reservation/get");
        setReservation(responce.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReservation();
  }, []);
  return (
    <div className="min-h-screen">
      <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">
        Room Reservation
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full shadow-lg rounded-xl">
          <thead>
            <tr className="bg-fuchsia-600 text-left text-white">
              <th className="p-3">Room Name</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Guests</th>
              <th className="p-3">Check-In</th>
              <th className="p-3">Check-Out</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {reservation.length === 0 ? (
              <tr>
                <td colSpan="8" className="p-4 text-center">
                  No reservations
                </td>
              </tr>
            ) : (
              reservation.map((res, index) => (
                <tr key={index} className="border-b hover:bg-gray-300">
                  <td className="p-3">{res.roomName}</td>
                  <td className="p-3">{res.name}</td>
                  <td className="p-3">{res.email}</td>
                  <td className="p-3">{res.phone}</td>
                  <td className="p-3">{res.guests}</td>
                  <td className="p-3">{res.checkin}</td>
                  <td className="p-3">{res.checkout}</td>
                  <td className="p-3">
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservation;
