import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/HomePage";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;