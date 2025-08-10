import React, { useState } from "react";
import { backendUrl } from "../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>
        <div>
          <h1>Admin Login</h1>
          <form>
            <div>
              <p>Email Address</p>
              <input
                type="email"
                placeholder="Enter admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <p>Password</p>
              <input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
