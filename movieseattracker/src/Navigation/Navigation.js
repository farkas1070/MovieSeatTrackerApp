import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../Views/Login/Login";
import Register from "../Views/Register/Register";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />}></Route>
      <Route path="/Login" element={<Login />}></Route>
    </Routes>
  );
};

export default Navigation;
