import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosLogOut, IoMdAddCircleOutline } from "react-icons/io";
import { MdChecklistRtl, MdFormatListBulletedAdd } from "react-icons/md";

const Sidebar = ({ setToken }) => {
  return (
    <div className="w-[22%] min-h-screen border-r-2 border-gray-100 bg-white">
      <div className="mt-4 px-6">
        <h2 className="text-[32px] font-bold">Delux Hotel</h2>
      </div>
      <div className="flex flex-col gap-4 pt-6">
        <NavLink
          to="/add"
          className="flex items-center gap-3 px-4 py-3 border-b-2 border-gray-200 text-gray-600 hover:bg-fuchsia-500 hover:text-white"
        >
          <IoMdAddCircleOutline className="text-[35px] text-black" />
          <p className="hidden md:block text-base">Add rooms</p>
        </NavLink>
        <NavLink
          to="/list"
          className="flex items-center gap-3 px-4 py-3 border-b-2 border-gray-200 text-gray-600 hover:bg-fuchsia-500 hover:text-white"
        >
          <MdFormatListBulletedAdd className="text-[35px] text-black" />
          <p className="hidden md:block text-base">Rooms List</p>
        </NavLink>
        <NavLink
          to="/reservation"
          className="flex items-center gap-3 px-4 py-3 border-b-2 border-gray-200 text-gray-600 hover:bg-fuchsia-500 hover:text-white"
        >
          <MdChecklistRtl className="text-[35px] text-black" />
          <p className="hidden md:block text-base">Reservations</p>
        </NavLink>

        <button
          onClick={() => setToken("")}
          className="flex items-center gap-3 px-6 py-3 border-b-2 border-gray-200 text-gray-600 hover:bg-fuchsia-500 w-full text-left"
        >
          <IoIosLogOut className="text-[35px] text-black" />
          <p className="hidden md:block text-base">LogOut</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
