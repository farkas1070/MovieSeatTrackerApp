import React, { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Loginpic from "../../Assets/Login/Login.jpg";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const navigate = useNavigate();
  const handleNavigateClick = () => navigate("/Home");

  const showToast = () => {
    toast.error("Wrong Password, or User doesn't exist"); // Show a success toast
  };
  
  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      handleNavigateClick();
    } catch (error) {
      if (error) {
        showToast()
      }
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${Loginpic})`,
        backgroundSize: "cover", // You can adjust these properties as needed
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative", // Make sure the parent div is relative
      }}
      class="min-h-screen  py-6 flex flex-col justify-center sm:py-12 items-center"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",

          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity (0.5 for 50% darkness)
        }}
        className="flex items-center justify-center"
      >
        <div class="relative py-3 sm:max-w-xl sm:mx-auto ">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div>
                <h1 class="text-2xl font-semibold">
                  Login Form with Floating Labels
                </h1>
              </div>
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div class="relative">
                    <input
                      autocomplete="off"
                      id="email"
                      name="email"
                      type="text"
                      value={email}
                      onChange={handleEmailChange}
                      class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      for="email"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div class="relative">
                    <input
                      autocomplete="off"
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      for="password"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div class="relative">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        loginUser();
                      }}
                      class="bg-blue-500 text-white rounded-md px-2 py-1"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
