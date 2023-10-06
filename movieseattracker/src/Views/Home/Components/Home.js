import React, { useState, useEffect } from "react";
import Page2 from "../../../Assets/Homepage/page2.jpg";
import HomeNavbar from "./HomeNavbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getAllDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, "Movies"));

      const tempMovies = []; // Temporary array to store movie data

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const movieData = doc.data();
        tempMovies.push(movieData); // Add movie data to the temporary array
      });

      // Set the movies state with the temporary array containing movie data
      setMovies(tempMovies);
    };

    getAllDocuments();
  }, []);
  return (
    <div>
      <HomeNavbar />

      <div class="relative h-60 mt-10">
        <div
          class="absolute inset-0  bg-cover bg-center"
          style={{
            backgroundImage: `url(${Page2})`,
          }}
        ></div>

        <div class="absolute inset-0 bg-black opacity-50"></div>

        <div class="absolute inset-0 flex flex-col justify-center items-start text-white ml-20">
          <div class="text-4xl font-bold text-left transform ">
            Terminator 5
          </div>
          <div class="text-2xl  text-left transform mt-2">Action, Drama</div>
          <div class="text-1xl font-bold text-left transform  flex flex-row">
            <button class="w-40 flex mt-12 mr-6 rounded-xl flex items-center justify-center bg-red-500 hover:bg-white text-white font-semibold hover:text-white py-0 px-4 ">
              Jump to movie
            </button>
            <button class="mt-12 rounded-xl flex items-center bg-black hover:bg-white text-white font-semibold hover:text-white py-2 px-4 ">
              <svg
                class="w-5 h-5  text-white"
                xmlns="http://www.w3.org/2000/svg"
                id="full"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class=" p-4">
        <div class="text-2xl font-bold mb-4 text-white mt-20">
          Trending Movies
        </div>
        <hr class="mb-4 border-t-2 border-gray-300" />

        <div class="flex overflow-x-auto space-x-4 justify-center">
          {movies.map((movie) => {
            return (
              <div class="w-64 h-70">
                <div class="bg-white shadow-lg rounded-lg overflow-hidden h-full">
                <Link to={{
    pathname: `/movies/${movie.name}`, // Adjust the pathname as needed
    state: { movie },
  }}>
                  <img
                    src={movie.image}
                    alt="Movie Poster"
                    class="w-full h-full object-cover"
                  />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div class="text-2xl font-bold mb-4 text-white mt-20">
        Our top Picks at the moment
      </div>
      <hr class="mb-4 border-t-2 border-gray-300" />
      <div class="flex space-x-4 w-full justify-center">
        <div class="flex mt-20 w-full justify-center">
          <div class="max-w-sm rounded overflow-hidden shadow-lg mr-10">
            <img
              class="w-full"
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kn28W24slBLyGr8ZIZnxNE5YZrY.jpg"
              alt="Card 1"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Card 1 Title</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-lg mr-10">
            <img
              class="w-full"
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kn28W24slBLyGr8ZIZnxNE5YZrY.jpg"
              alt="Card 2"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Card 2 Title</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kn28W24slBLyGr8ZIZnxNE5YZrY.jpg"
              alt="Card 3"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Card 3 Title</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
