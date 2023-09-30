import React from "react";
import "tailwindcss/tailwind.css";
import RegisterVideo from "../../Assets/Videos/Register.mp4";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
const Register = () => {
  return (
    <div className="relative min-h-screen flex items-flex-start justify-center">
      <video
        className="absolute inset-0 object-cover w-full h-full z-0"
        autoPlay
        muted
        loop
      >
        <source src={RegisterVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-4/5">
        <Navbar />
      </div>
    </div>
  );
};

export default Register;
