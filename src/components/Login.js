// src/components/Login.js
import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded credentials
    const hardcodedCred = {
      username: "admin",
      password: "password123",
    };

    if (
      user.username === hardcodedCred.username &&
      user.password === hardcodedCred.password
    ) {
      setIsLoggedIn(true);
    } else {
      alert("Wrong Username or Password");
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <h2>Logged in</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Login;
