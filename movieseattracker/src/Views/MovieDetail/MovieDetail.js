import React, { useContext } from "react";
import { SingleMovieContext } from "../../Context/GlobalContext";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  select,
} from "@material-tailwind/react";
import MovieSeatView from "./Components/MovieSeatView"
import MovieGenresChips from "./Components/MovieGenreChip";
import MovieHeader from "./Components/MovieHeader";

const MovieDetail = () => {
  const [selectedMovie, setSelectedMovie] = useContext(SingleMovieContext);

  return (
    <Card className="w-full bg-[#1e1f20] h-full">
      <CardHeader shadow={false} floated={false} className="h-96 relative">
       <MovieHeader selectedMovie={selectedMovie}></MovieHeader>
        
      </CardHeader>
      <CardBody>
      <MovieGenresChips genres={selectedMovie.genre} ></MovieGenresChips>
        <MovieSeatView/>
      </CardBody>
      <CardFooter className="pt-0">
        {/* Your card footer content */}
      </CardFooter>
    </Card>
  );
};

export default MovieDetail;
