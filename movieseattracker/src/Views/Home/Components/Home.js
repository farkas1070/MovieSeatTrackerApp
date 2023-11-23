import React, { useState, useEffect, useContext } from "react";
import Page2 from "../../../Assets/Homepage/page2.jpg";
import HomeNavbar from "./HomeNavbar";
import { collection, getDocs,doc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../../firebase-config";

import HomeCarousel from "./HomeCarousel";
import Card from "./Card";
import {
  UserTypeContext,
  ViewContext,
  SelectedCinemaContext,
} from "../../../Context/GlobalContext";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [cinemas, setCinemas] = useState([]);
  const [seats,setSeats] = useState([]);
  const [selectedContent, setSelectedContent] = useContext(ViewContext);
  const [userType, setUserType] = useContext(UserTypeContext);
  const [selectedCinema, setSelectedCinema] = useContext(SelectedCinemaContext);
  useEffect(() => {
    const getAllMovies = async () => {
      const querySnapshot = await getDocs(collection(db, "Movies"));

      const tempMovies = []; // Temporary array to store movie data

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

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

        const movieData = doc.data();
        tempCinemas.push(movieData); // Add movie data to the temporary array
      });

      // Set the movies state with the temporary array containing movie data
      setCinemas(tempCinemas);
    };

    getAllCinemas();
    

    

    const checkForAdmin = () => {
      const AdminUID = "ur6xbOQZSha4wYX5bCfHVvs4MaE3";

      auth.currentUser.uid == AdminUID
        ? setUserType("Admin")
        : setUserType("Regular");
    };
    checkForAdmin();
  }, []);
  return (
    <div class="p-0">
      <div class="p-4 rounded-lg dark:border-gray-700">
        <HomeNavbar title="Home" />

        <HomeCarousel />

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
                <button
                  className="relative h-60 rounded overflow-hidden transition-transform hover:scale-105"
                  onClick={() => {
                    setSelectedContent("CinemaView");
                    setSelectedCinema(cinema);
                  }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-70 "
                    style={{
                      backgroundImage: `url(${cinema.image})`,
                    }}
                  ></div>

                  <div className="absolute inset-0 bg-black opacity-20 transition duration-300 ease-in-out group-hover:opacity-100"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-2xl text-white">{cinema.name}</p>
                  </div>
                </button>
              );
            }
          })}
        </div>

        <div class="grid grid-cols-2 gap-4">
          {cinemas.map((cinema, index) => {
            if (index >= 4 && index <= 5) {
              return (
                <button
                  className="relative h-80 rounded overflow-hidden transition-transform hover:scale-105"
                  onClick={() => {
                    setSelectedContent("CinemaView");
                    setSelectedCinema(cinema);
                  }}
                >
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
                </button>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
