import React, { useState } from "react";
import { backendUrl } from "../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Admin Login
          </h1>
          <form>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Email Address
              </p>
              <input
                type="email"
                placeholder="Enter admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-[95%] px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-b-gray-300"
              />
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Password
              </p>
              <input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-[95%] px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-b-gray-300"
              />
            </div>
            <button
              type="submit"
              className="w-full px-3 py-2 text-lg font-bold bg-fuchsia-900 rounded-md text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
