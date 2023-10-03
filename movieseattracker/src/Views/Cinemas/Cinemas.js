import React from "react";
import "tailwindcss/tailwind.css";
import RegisterVideo from "../../Assets/Videos/Register.mp4";

import Navbar from "../WelcomeScreen/Components/Navbar";
import Illustration from "../../Assets/Register/Illustration.webp";
import { Link } from "react-router-dom";
const Cinemas = () => {
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
      <div className=" relative z-20 p-0 mt-10 ">
        <div className="relative flex items-center justify-center">
          <p className="text-lg text-white font-semibold mb-10">Our Cinema Partners</p>
        </div>
        <div class="container grid grid-cols-3 gap-4 p-4">
          <div class="bg-white rounded-lg p-4 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144"
              alt="Image 1"
              class="w-full h-auto"
            />
            <h3 class="text-lg font-semibold mt-2">Big Text 1</h3>
            <p class="text-sm text-gray-500 ">Small Text 1</p>
          </div>

          <div class="bg-white rounded-lg p-4 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144"
              alt="Image 2"
              class="w-full h-auto"
            />
            <h3 class="text-lg font-semibold mt-2">Big Text 2</h3>
            <p class="text-sm text-gray-500">Small Text 2</p>
          </div>

          <div class="bg-white rounded-lg p-4 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144"
              alt="Image 3"
              class="w-full h-auto"
            />
            <h3 class="text-lg font-semibold mt-2">Big Text 3</h3>
            <p class="text-sm text-gray-500">Small Text 3</p>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144"
              alt="Image 3"
              class="w-full h-auto"
            />
            <h3 class="text-lg font-semibold mt-2">Big Text 3</h3>
            <p class="text-sm text-gray-500">Small Text 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cinemas;
