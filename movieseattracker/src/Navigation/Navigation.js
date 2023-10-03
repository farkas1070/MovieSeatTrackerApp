import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../Views/Login/Login";
import Register from "../Views/Register/Register";
import WelcomeScreen from "../Views/WelcomeScreen/WelcomeScreen";
import Movies from "../Views/Movies/Movies";
import Cinemas from "../Views/Cinemas/Cinemas";
import Home from "../Views/Home/Home";
const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/Movies" element={<Movies />}></Route>
      <Route path="/Cinemas" element={<Cinemas />}></Route>
      <Route path="/Home" element={<Home />}></Route>
    </Routes>
  );
};

export default Navigation;
