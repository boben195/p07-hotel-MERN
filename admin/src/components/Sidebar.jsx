import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosLogOut, IoMdAddCircleOutline } from "react-icons/io";
import { MdChecklistRtl, MdFormatListBulletedAdd } from "react-icons/md";

const Sidebar = ({ setToken }) => {
  return (
    <div>
      <div>
        <h2>Delux Hotel</h2>
      </div>
      <div>
        <NavLink to="/add">
          <IoMdAddCircleOutline />
          <p>Add rooms</p>
        </NavLink>
        <NavLink to="/list">
          <MdFormatListBulletedAdd />
          <p>Rooms List</p>
        </NavLink>
        <NavLink to="/reservation">
          <MdChecklistRtl />
          <p>Reservations</p>
        </NavLink>

        <button>
          <IoIosLogOut />
          <p>LogOut</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
