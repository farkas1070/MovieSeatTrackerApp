/**
 * inspiration repo: https://github.com/bradtraversy/vanillawebprojects
 * movie seat booking: https://github.com/bradtraversy/vanillawebprojects/tree/master/movie-seat-booking
 * but in react 🤓
 */

import React, { useState, useEffect, useContext } from "react";
import clsx from "clsx";
import "./MovieSeatView.css";
import {
  collection,
  query,
  where,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { auth, db } from "../../../firebase-config";
import { SingleMovieContext } from "../../../Context/GlobalContext";
const movies = [
  {
    name: "Avenger",
    price: 10,
    occupied: [20, 21, 30, 1, 2, 8],
  },
  {
    name: "Joker",
    price: 12,
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    name: "Toy story",
    price: 8,
    occupied: [37, 25, 44, 13, 2, 3],
  },
  {
    name: "the lion king",
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47],
  },
];

const seats = Array.from({ length: 8 * 8 }, (_, i) => i);

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [passedMovie, setPassedMovie] = useContext(SingleMovieContext);
  const [seats, setSeats] = useState([]);
  const [cinemas, setCinemas] = useState([]);
  useEffect(() => {
    const getSeats = async () => {
      const generalQuery = query(
        collection(db, "Seats"),
        where("movieId", "==", passedMovie.id)
      );
      const generalSnapshot = await getDocs(generalQuery);
      const generalData = generalSnapshot.docs.map((doc) => {
        const subdata = doc.data();
        return { ...subdata };
      });
      console.log(generalData.length);

      setSeats(generalData);
    };
    getSeats();
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
  }, []);

  return (
    <div className="App mt-20">
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        seats={seats}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={(selectedSeats) =>
          setSelectedSeats(selectedSeats)
        }
      />
    </div>
  );
}

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat selected" /> <p className="text">Selected</p>
      </li>
      <li>
        <span className="seat occupied" /> <p className="text">Occupied</p>
      </li>
    </ul>
  );
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange, seats }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat);
          const isOccupied = movie.occupied.includes(seat);
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                "seat",
                isSelected && "selected",
                isOccupied && "occupied"
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : (e) => {
                      if (e.key === "Enter") {
                        handleSelectedState(seat);
                      }
                    }
              }
            />
          );
        })}
      </div>
    </div>
  );
}
