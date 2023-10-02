import React from "react";
import "tailwindcss/tailwind.css";
import Logo from "../../../Assets/Register/Logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="relative z-10  border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={Logo} className="h-20 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#C5E5DE]">
            SeatWave
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto " id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0   dark:border-gray-700">
            <Link to="/Login">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-[#C5E5DE] md:hover:text-white rounded md:hover:bg-transparent md:bg-transparent md:text-[#C5E5DE] md:p-0 dark:text-[#C5E5DE] md:dark:text-white"
                  aria-current="page"
                >
                  Login
                </a>
              </li>
            </Link>
            <Link to="/Register">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-[#C5E5DE] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-[#C5E5DE] md:dark:hover:text-white dark:hover:bg-white dark:hover:text-[#C5E5DE] md:dark:hover:bg-transparent"
                >
                  Register
                </a>
              </li>
            </Link>
            <Link to="/Movies">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-[#C5E5DE] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-[#C5E5DE] md:dark:hover:text-white dark:hover:bg-white dark:hover:text-[#C5E5DE] md:dark:hover:bg-transparent"
                >
                  Movies
                </a>
              </li>
            </Link>
            <Link to="/Cinemas">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-[#C5E5DE] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-[#C5E5DE] md:dark:hover:text-white dark:hover:bg-white dark:hover:text-[#C5E5DE] md:dark:hover:bg-transparent"
                >
                  Cinemas
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
