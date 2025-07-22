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
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
  });
  const { id } = useParams();
  const room = roomData.find((room) => {
    return room.id === parseInt(id);
  });

  if (!room) {
    return (
      <div className="mx-auto max-w-2xl p-6">
        <h1 className="text-2xl font-bold text-red-600">Room Not Found</h1>
        <p className="mt-2 text-gray-600">The requested room does not exist.</p>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Add booking logic here
    alert("Booking submitted!\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="mx-auto max-w-7xl p-6 grid grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{room.name}</h1>
          <p className="text-xl text-lime-500 mt-1">${room.price}</p>
        </div>
        <img
          className="w-full rounded-lg shadow-md"
          src={room.image}
          alt="Your Room"
        />
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Amenities</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <FaWifi /> Wi-fi
            </div>
            <div className="flex items-center gap-2">
              <FaTv /> Cable TV
            </div>
            <div className="flex items-center gap-2">
              <FaUtensils /> Resturant
            </div>
            <div className="flex items-center gap-2">
              <FaSwimmingPool /> Pool
            </div>
            <div className="flex items-center gap-2">
              <FaConciergeBell /> Room Service
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Room Description</h2>
            <p className="text-gray-600">{room.description}</p>
          </div>
        </div>
      </div>
      {/* Booking Form */}
      <div className="bg-white p-6 mt-18 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
            required
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
            required
          />
          <div>
            <label htmlFor="checkIn" className="font-bold">
              Check-In
            </label>
            <input
              type="date"
              name="checkIn"
              id="checkIn"
              value={form.checkIn}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="checkOut" className="font-bold">
              Check-Out
            </label>
            <input
              type="date"
              name="checkOut"
              id="checkOut"
              value={form.checkOut}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="guests" className="font-bold">
              Number of guests
            </label>
            <select
              name="guests"
              id="guests"
              value={form.guests}
              onChange={handleChange}
              className="w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300"
              required
            >
              {[1, 2, 3].map((num) => (
                <option key={num} value={num}>
                  {num} Guest{num > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-lime-400 text-white p-3 rounded-lg hover:bg-lime-300 transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default HotelDetails;
