import React from "react";
import Hero from "../../components/Hero/Hero";
import HotelList from "../../components/HotelList/HotelList";
import Facility from "../../components/Facility/Facility";
const Home = () => {
  return (
    <div>
      <Hero />
      <HotelList />
      <Facility />
    </div>
  );
};

export default Home;
