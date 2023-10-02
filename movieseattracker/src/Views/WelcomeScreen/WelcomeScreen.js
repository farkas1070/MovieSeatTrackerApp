import React from "react";
import "tailwindcss/tailwind.css";
import RegisterVideo from "../../Assets/Videos/Register.mp4";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import Illustration from "../../Assets/Register/Illustration.webp"
const WelcomeScreen = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <video
        className="absolute inset-0 object-cover w-full h-full z-0"
        autoPlay
        muted
        loop
      >
        <source src={RegisterVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      <div className="w-4/5 fixed top-0 z-50">
        <Navbar />
      </div>
      <div className="container relative z-20 p-4  mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="text-white flex flex-col justify-center items-center"> 
            <h1 className="text-4xl font-bold mb-4">Booking Seats Made Easy</h1>
            <p className="text-lg mb-4">
              Reserve your seats for the latest movies with ease.
            </p>
            <button className="bg-[#C5E5DE] hover:bg-white text-black font-semibold py-2 px-4 rounded-full w-1/2 mt-10">
              Get Started
            </button>
          </div>
          <div className="text-center  flex justify-center items-center"> 
            <img
              src={Illustration}
              alt="Image"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
