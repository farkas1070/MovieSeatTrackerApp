import React, { useState, useEffect } from "react";
import Page2 from "../../../Assets/Homepage/page2.jpg";
import HomeNavbar from "./HomeNavbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { Link } from "react-router-dom";

const HomeMovies = () => {
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
    <div className="h-full ">
      <div class="p-2 sm:ml-64 h-full ">
        <HomeNavbar title="Movies" />
        <div class="text-2xl font-bold mb-4 text-white mt-20">
          Selected For you:
        </div>
        <hr class="mb-4 border-t-2 border-gray-300" />
        <div class="grid grid-cols-2 gap-4 mt-10">
          {movies.map((movie, index) => {
            if (index >= 0 && index <= 1) {
              return (
                <div className="relative h-80 rounded overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-70"
                    style={{
                      backgroundImage: `url(${movie.image})`,
                    }}
                  ></div>

                  <div className="absolute inset-0 bg-black opacity-20"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-2xl text-white">{movie.name}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div class=" p-4">
          <div class="text-2xl font-bold mb-4 text-white mt-20">
            Currently Trending:
          </div>
          <hr class="mb-4 border-t-2 border-gray-300" />

          <div class="flex overflow-x-auto space-x-4 justify-center">
            {movies.map((movie) => {
              return (
                <div class="w-64 h-70">
                  <div class="bg-white shadow-lg rounded-lg overflow-hidden h-full">
                    <Link
                      to={{
                        pathname: `/movies/${movie.name}`, // Adjust the pathname as needed
                        state: { movie },
                      }}
                    >
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
        <div class=" p-4">
          <div class="text-2xl font-bold mb-4 text-white mt-20">
            Limited Seats:
          </div>
          <hr class="mb-4 border-t-2 border-gray-300" />

          <div class="flex overflow-x-auto space-x-4 justify-center">
            {movies.map((movie) => {
              return (
                <div class="w-64 h-70">
                  <div class="bg-white shadow-lg rounded-lg overflow-hidden h-full">
                    <Link
                      to={{
                        pathname: `/movies/${movie.name}`, // Adjust the pathname as needed
                        state: { movie },
                      }}
                    >
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
      </div>
    </div>
  );
};
export default HomeMovies;
