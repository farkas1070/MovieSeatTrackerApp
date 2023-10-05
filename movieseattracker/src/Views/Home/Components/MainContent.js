import React, { useState } from "react";
import HomeCinemas from "./HomeCinemas";
import HomeMovies from "./HomeMovies";
import BookedSeats from "./BookedSeats";
import Profile from "./Profile";
import Home from "./Home";
const MainContent = ({ selectedContent }) => {
  return (
    <div class="p-4 sm:ml-64 bg-[#1e1f20] flex min-h-screen">
      {selectedContent === "Home" && <Home />}
      {selectedContent === "Profile" && <Profile />}
      {selectedContent === "HomeMovies" && <HomeMovies />}
      {selectedContent === "HomeCinemas" && <HomeCinemas />}
      {selectedContent === "BookedSeats" && <BookedSeats />}
    </div>
  );
};
export default MainContent;
