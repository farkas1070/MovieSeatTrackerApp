import React from "react";
import { useLocation } from "react-router-dom";

const MovieDetail = () => {
  // Use useParams to get the movie ID from the URL
  const { state } = useLocation();
  const movie = state?.movie;
  console.log(movie)
  // Fetch the movie details using the movieId
  // ...

  return (
    <div class="flex w-full h-screen bg-[#1e1f20]">
      {/* Display movie details */}
      <div class="relative w-full">
        <div class="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-300"></div>

        <div class="relative z-10 w-full">
          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-1">
              <img
                src={``}
                alt="Image"
                class="w-full h-auto transform -skew-y-6"
              />
            </div>
            <div class="col-span-1 bg-white p-6">
              <h2 class="text-2xl font-semibold mb-4">Card Title</h2>
              <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
