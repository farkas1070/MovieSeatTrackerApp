import React, { useState, useEffect } from "react";
import Page2 from "../../../Assets/Homepage/page2.jpg";
import HomeNavbar from "./HomeNavbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { Link } from "react-router-dom";
import HomeCarousel from "./HomeCarousel";
import Card from "./Card";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [cinemas, setCinemas] = useState([]);
  useEffect(() => {
    const getAllMovies = async () => {
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

    getAllMovies();
    const getAllCinemas = async () => {
      const querySnapshot = await getDocs(collection(db, "Cinemas"));

      const tempCinemas = []; // Temporary array to store movie data

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const movieData = doc.data();
        tempCinemas.push(movieData); // Add movie data to the temporary array
      });

      // Set the movies state with the temporary array containing movie data
      setCinemas(tempCinemas);
    };

    getAllCinemas();
  }, []);
  return (
    <div>
      <div class="p-2 sm:ml-64">
        <div class="p-4 rounded-lg dark:border-gray-700">
          <HomeNavbar title="Home" />

          <HomeCarousel/>

          <div class=" p-4">
            <div class="text-2xl font-bold mb-4 text-white mt-20">
              Trending Movies
            </div>
            <hr class="mb-4 border-t-2 border-gray-300" />

            <div class="flex overflow-x-auto space-x-4 justify-center">
              {movies.map((movie) => {
                return <Card movie={movie} />;
              })}
            </div>
          </div>
          <div class="text-2xl font-bold mb-4 text-white mt-20">
            Trending Cinemas
          </div>
          <hr class="mb-4 border-t-2 border-gray-300" />
          <div class="grid grid-cols-4 gap-4 mb-4">
            {cinemas.map((cinema, index) => {
              if (index >= 0 && index <= 3) {
                return (
                  <div className="relative h-60 rounded overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-70"
                      style={{
                        backgroundImage: `url(${cinema.image})`, // Replace 'your-image.jpg' with your actual image URL
                      }}
                    ></div>

                    <div className="absolute inset-0 bg-black opacity-20"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-2xl text-white">{cinema.name}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>

          <div class="grid grid-cols-2 gap-4">
            {cinemas.map((cinema, index) => {
              if (index >= 4 && index <= 5) {
                return (
                  <div className="relative h-80 rounded overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-70"
                      style={{
                        backgroundImage: `url(${cinema.image})`,
                      }}
                    ></div>

                    <div className="absolute inset-0 bg-black opacity-20"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-2xl text-white">{cinema.name}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
