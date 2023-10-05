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
    <div className="w-full h-full">
      <HomeNavbar/>
      <div class=" p-4">
        <div class="text-2xl font-bold mb-4 text-white mt-20">
          Trending Movies
        </div>
        <hr class="mb-4 border-t-2 border-gray-300" />

        <div class="flex overflow-x-auto space-x-4 justify-center">
          {movies.map((movie) => {
            return (
              <Link to={`/movies/${movie.name}`}>
                <div class="w-64 h-70">
                  <div class="bg-white shadow-lg rounded-lg overflow-hidden h-full">
                    <img
                      src={movie.image}
                      alt="Movie Poster"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
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
              <Link to={`/movies/${movie.name}`}>
                <div class="w-64 h-70">
                  <div class="bg-white shadow-lg rounded-lg overflow-hidden h-full">
                    <img
                      src={movie.image}
                      alt="Movie Poster"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default HomeMovies;
