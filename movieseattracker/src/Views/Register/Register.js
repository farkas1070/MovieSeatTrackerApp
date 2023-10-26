import React, { useState } from "react";
import VideoFootage from "../../Assets/Videos/RegisterVideo.mp4";
import { auth,db } from "../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
const Register = () => {
  const [email, setEmail] = useState("sma");
  const [fullName, setFullName] = useState("Márton Simon");
  const [Username, setUsername] = useState("fark");
  const [password, setPassword] = useState("far");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleFullnameChange = (event) => setFullName(event.target.value);
  const handleUsernameChange = (event) => setUsername(event.target.value);

  const handleNavigateClick = () => navigate("/Home");
  const navigate = useNavigate();
  const showToast = () => {
    toast.error("Email already in use"); // Show a success toast
  };
  const UploadData = async () => {
    const userRef = doc(db, "Users", auth.currentUser.uid);
    setDoc(userRef, {
      email:email,
      username: Username,
      fullname: fullName,
      password:password,
      uid: auth.currentUser.uid

    })
      .then(() => {
        console.log("Document updated successfully");
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  };

  const registerUser = async () => {
    try {
      setLoading(true);

      // Simulate a delay (remove this in your actual implementation)
      setTimeout(() => {
        setLoading(false);
      }, 3000); // Example: Loading state lasts for 3 seconds
      await createUserWithEmailAndPassword(auth, email, password);
      // You can also update user profile data like displayName
      UploadData();
      handleNavigateClick();
    } catch (error) {
      console.error();
      setLoading(false);
      showToast();
    }
  };

  return (
    <div className="h-screen md:flex">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-400"></div>
        </div>
      )}
      <div className="relative overflow-hidden md:flex w-1/2  i justify-around items-center hidden">
        <video
          className="absolute inset-0 object-cover w-full h-full z-0"
          autoPlay
          muted
          loop
        >
          <source src={VideoFootage} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative">
          <h1 className="text-white font-bold text-4xl font-sans">
            Join SeatWave
          </h1>
          <p className="text-white mt-1">And make seat Booking much easier</p>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Register Here
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">
            To become a member
          </p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              value={fullName}
              onChange={handleFullnameChange}
              name=""
              id=""
              placeholder="Full name"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              value={Username}
              onChange={handleUsernameChange}
              name=""
              id=""
              placeholder="Username"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              value={email}
              onChange={handleEmailChange}
              id=""
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              value={password}
              onChange={handlePasswordChange}
              id=""
              placeholder="Password"
            />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              registerUser();
            }}
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
