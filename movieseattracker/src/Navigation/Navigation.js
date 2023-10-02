import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../Views/Login/Login";
import Register from "../Views/Register/Register";
import WelcomeScreen from "../Views/WelcomeScreen/WelcomeScreen";
const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Register" element={<Register />}></Route>
    </Routes>
  );
};

export default Navigation;
