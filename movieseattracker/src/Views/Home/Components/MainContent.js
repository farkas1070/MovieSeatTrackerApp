import React, { useState } from "react";
import HomeCinemas from "./HomeCinemas";
import HomeMovies from "./HomeMovies";
import MovieDetail from "../../MovieDetail/MovieDetail";
import Home from "./Home";
import AddMovie from "./AddMovie";
const MainContent = ({ selectedContent }) => {
  return (
    <div class=" p-4  bg-[#141415] flex-1 h-screen w-full overflow-y-auto">
      {selectedContent === "Home" && <Home />}
      {selectedContent === "HomeMovies" && <HomeMovies />}
      {selectedContent === "HomeCinemas" && <HomeCinemas />}
      {selectedContent === "MovieDetail" && <MovieDetail />}
      {selectedContent === "AddMovie" && <AddMovie />}
    </div>
  );
};
export default MainContent;
