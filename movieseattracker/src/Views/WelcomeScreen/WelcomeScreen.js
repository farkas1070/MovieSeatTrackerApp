import React from "react";
import "tailwindcss/tailwind.css";
import RegisterVideo from "../../Assets/Videos/Register.mp4";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import Illustration from "../../Assets/Register/Illustration.webp";
import { Link } from "react-router-dom";
import Cards from "./Components/Cards";
const WelcomeScreen = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center ">
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
      <div className="w-4/5 z-50">
        <Navbar />
      </div>
      <div className=" relative z-20 p-0  ">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
        
          <div className="md:col-span-1 text-white flex flex-col justify-center items-center  md:ml-20">
            <h1 className="text-4xl font-bold mb-4">Booking Seats Made Easy</h1>
            <p className="text-lg mb-4">
              Reserve your seats for the latest movies with ease.
            </p>
            <Link to="/register">
              <button
                onPress={() => {
                  console.log("s");
                }}
                className="bg-[#C5E5DE] hover:bg-white text-black font-semibold py-2 px-4 rounded-full mt-10"
              >
                Get Started
              </button>
            </Link>
          </div>
          <div className="md:col-span-2  flex justify-end items-end ">
            <div className="relative w-3/4   md:w-5/5 ">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 480"
              >
                <path
                  fill="#C5E5DE"
                  d="M420.5,277Q419,314,406.5,354Q394,394,355,409.5Q316,425,278,421Q240,417,197,432Q154,447,139.5,401Q125,355,109,328Q93,301,64.5,270.5Q36,240,43.5,201Q51,162,65,120.5Q79,79,119.5,63.5Q160,48,200,61.5Q240,75,275,73.5Q310,72,346.5,84.5Q383,97,384,138.5Q385,180,403.5,210Q422,240,420.5,277Z"
                />
                <image
                  href={Illustration} // Replace with your image URL
                  x="134" // Adjust the x and y coordinates to position the image
                  y="134"
                  width="200" // Adjust the width and height of the image
                  height="200"
                  preserveAspectRatio="xMidYMid meet" // Maintain aspect ratio
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default WelcomeScreen;
