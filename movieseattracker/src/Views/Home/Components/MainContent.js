import React, { useState } from "react";
import HomeCinemas from "./HomeCinemas";
import HomeMovies from "./HomeMovies";

import Home from "./Home";
const MainContent = ({ selectedContent }) => {
  return (
    <div class=" p-4  bg-[#141415] flex-1 h-screen w-full overflow-y-auto">
      {selectedContent === "Home" && <Home />}
      {selectedContent === "HomeMovies" && <HomeMovies />}
      {selectedContent === "HomeCinemas" && <HomeCinemas />}
    </div>
  );
};
export default MainContent;
