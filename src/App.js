// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
// Import other components

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/login" element={<Login />} />
        // Define other routes
      </Routes>
    </Router>
  );
}

export default App;
