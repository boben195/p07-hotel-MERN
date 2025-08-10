import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import AddHotel from "./pages/AddHotel";
import ListHotel from "./pages/ListHotel";
import Reservation from "./pages/Reservation";

export const backendUrl = "http://localhost:4000";

const App = () => {
  const [token, setToken] = useState("");
  return (
    <div>
      {!token ? (
        <Login />
      ) : (
        <>
          <div>
            <Sidebar />
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
