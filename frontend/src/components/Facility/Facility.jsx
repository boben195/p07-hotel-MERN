import React from "react";
import {
  FaBath,
  FaCar,
  FaCocktail,
  FaConciergeBell,
  FaShuttleVan,
  FaSwimmingPool,
} from "react-icons/fa";

const services = [
  {
    icon: <FaShuttleVan size={32} />,
    title: "Pick and Drop",
    desc: "We’ll pick up from airort while you comfy on your ride",
  },
  {
    icon: <FaConciergeBell size={32} />,
    title: "Pick and Drop",
    desc: "We’ll pick up from airort while you comfy on your ride",
  },
  {
    icon: <FaSwimmingPool size={32} />,
    title: "Pick and Drop",
    desc: "We’ll pick up from airort while you comfy on your ride",
  },
  {
    icon: <FaBath size={32} />,
    title: "Pick and Drop",
    desc: "We’ll pick up from airort while you comfy on your ride",
  },
  {
    icon: <FaCar size={32} />,
    title: "Pick and Drop",
    desc: "We’ll pick up from airort while you comfy on your ride",
  },
  {
    icon: <FaCocktail size={32} />,
    title: "Pick and Drop",
    desc: "We’ll pick up from airort while you comfy on your ride",
  },
];

const Facility = () => {
  return (
    <div>
      <div>
        <div>
          <p>Servises</p>
          <h2>Facilities & Services</h2>
        </div>
        <div>
          {services.map((service, index) => (
            <div key={index}>
              <div>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facility;
