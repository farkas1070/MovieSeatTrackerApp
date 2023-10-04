import React from "react";
import Logo from "../../../Assets/Register/Logo.png";
const Sidebar = ({ onSelect }) => {
  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-white rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-[#141415] dark:bg-gray-800">
          <a href="https://flowbite.com/" class="flex items-center pl-2.5 mb-5">
            <img src={Logo} class="h-6 mr-3 sm:h-7" alt="Flowbite Logo" />
            <span class="self-center text-xl text-white font-semibold whitespace-nowrap dark:text-white">
              SeatWave
            </span>
          </a>
          <ul class="space-y-2 font-medium">
            <li>
              <button
                onClick={() => {
                  onSelect("Home");
                }}
                class="w-full flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group justify-start hover:text-black"
              >
                <svg
                  class="w-5 h-5 mr-3 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M 362.667 383.841 v 128 H 448 c 35.346 0 64 -28.654 64 -64 V 253.26 c 0.005 -11.083 -4.302 -21.733 -12.011 -29.696 l -181.29 -195.99 c -31.988 -34.61 -85.976 -36.735 -120.586 -4.747 c -1.644 1.52 -3.228 3.103 -4.747 4.747 L 12.395 223.5 C 4.453 231.496 -0.003 242.31 0 253.58 v 194.261 c 0 35.346 28.654 64 64 64 h 85.333 v -128 c 0.399 -58.172 47.366 -105.676 104.073 -107.044 C 312.01 275.383 362.22 323.696 362.667 383.841 Z" />
                  <path d="M256,319.841c-35.346,0-64,28.654-64,64v128h128v-128C320,348.495,291.346,319.841,256,319.841z" />
                </svg>
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onSelect("HomeMovies");
                }}
                class="w-full flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group justify-start hover:text-black"
              >
                <svg
                  class="mr-3  flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="m16.914,1h2.086c.621,0,1.215.114,1.764.322l-5.678,5.678h-4.172l6-6Zm7.086,6v-1c0-1.4-.579-2.668-1.51-3.576l-4.576,4.576h6.086ZM10.522,1l-6.084,6h3.648L14.086,1h-3.564ZM1.59,7L7.674,1h-2.674C2.243,1,0,3.243,0,6v1h1.59Zm22.41,2v9c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5v-9h24Zm-8.953,6.2l-4.634-2.48c-.622-.373-1.413.075-1.413.8v4.961c0,.725.791,1.173,1.413.8l4.634-2.48c.604-.362.604-1.238,0-1.6Z" />
                </svg>
                Movies
                
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onSelect("HomeCinemas");
                }}
                class="w-full flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group justify-start hover:text-black "
              >
                <svg
                  class="mr-3  flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,5h-2V3c0-1.654-1.346-3-3-3H8c-1.654,0-3,1.346-3,3v6H3c-1.654,0-3,1.346-3,3v12H24V8c0-1.654-1.346-3-3-3ZM6,19h-2v-2h2v2Zm0-4h-2v-2h2v2Zm5,4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm4,12h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm5,12h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Z" />
                </svg>
                Cinemas
                {/*
                <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
                */}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onSelect("Profile");
                }}
                class="w-full flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group justify-start hover:text-black"
              >
                <svg
                  class="mr-3  flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
               Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onSelect("BookedSeats");
                }}
                class="w-full flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group justify-start hover:text-black"
              >
                <svg
                  class="mr-3 flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23,11c0-2.206-1.794-4-4-4v-2c0-2.757-2.243-5-5-5h-4c-2.757,0-5,2.243-5,5v2c-2.206,0-4,1.794-4,4v5.5c0,1.379,1.121,2.5,2.5,2.5h7.5v3H7c-.552,0-1,.447-1,1s.448,1,1,1h10c.552,0,1-.447,1-1s-.448-1-1-1h-4v-3h7.5c1.379,0,2.5-1.121,2.5-2.5v-5.5ZM3.5,14c-.171,0-.338,.018-.5,.051v-3.051c0-1.103,.897-2,2-2v3h14v-3c1.103,0,2,.897,2,2v3.051c-.162-.033-.329-.051-.5-.051H3.5Z" />
                </svg>
                Booked Seats
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
