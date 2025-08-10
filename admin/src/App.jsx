import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import AddHotel from "./pages/AddHotel";
import ListHotel from "./pages/ListHotel";
import Reservation from "./pages/Reservation";

export const backendUrl = "http://localhost:4000";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <div>
            <Sidebar setToken={setToken} />
            <div>
              <Routes>
                <Route path="/add" element={<AddHotel />} />
                <Route path="/list" element={<ListHotel />} />
                <Route path="/reservation" element={<Reservation />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
