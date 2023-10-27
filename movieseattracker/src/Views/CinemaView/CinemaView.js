import React,{useContext,useState,useEffect} from "react";
import { SelectedCinemaContext } from "../../Context/GlobalContext";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
  } from "@material-tailwind/react";
import CinemaHeader from "./Components/CinemaHeader"
import CardComponent from "../Home/Components/Card"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
const CinemaView = () => {
    const [movies, setMovies] = useState([]);

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
        
    
        
      }, []);

  return (
    <Card className="w-full bg-[#1e1f20] overflow-y-auto h-full">
      <CardHeader shadow={false} floated={false} className="h-96 relative">
        <CinemaHeader ></CinemaHeader>
      </CardHeader>
      <CardBody>
      <div class="text-2xl font-bold mb-4 text-white mt-10">
          Upcoming Movies:
        </div>
        <hr class="mb-4 border-t-2 border-gray-300" />
      <div class="flex overflow-x-auto space-x-4 justify-center">
            {movies.map((movie,index) => {
                if (index >= 0 && index <= 3) {
              return <CardComponent movie={movie} />;
            }
            })}
          </div>
      </CardBody>
      <CardFooter className="pt-0">{/* Your card footer content */}</CardFooter>
    </Card>
  );
};

export default CinemaView;
