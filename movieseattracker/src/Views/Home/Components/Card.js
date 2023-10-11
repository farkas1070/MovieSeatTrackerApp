import { Link } from "react-router-dom";
const Card = ({ movie }) => {
  return (
    <div class="da relative flex flex-col justify-center overflow-hidden ">
      <div class="absolute inset-0 bg-center dark:bg-black"></div>
      <div class="group relative m-0 flex h-80 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
        <div class="z-10 h-full w-full overflow-hidden rounded-xl  opacity-70 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-90">
          <Link
            to={{
              pathname: `/movies/${movie.name}`, // Adjust the pathname as needed
              state: { movie },
            }}
          >
            <img
              src={movie.image}
              class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-80 transition duration-300 group-hover:scale-110"
              alt="sdsad"
            />
          </Link>
        </div>
        <div class="absolute bottom-0 z-20 m-0 pb-4 ps-2 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
          <h1 class="font-serif text-2xl font-bold text-white shadow-xl">
            {movie.name}
          </h1>
          <h1 class="text-sm  text-gray-200 shadow-xl">
            {movie.genre.replace(/\|/g, " ")}
          </h1>
        </div>
        <div class="absolute top-2 z-20 m-0 pb-4 ps-2 transition duration-300 ease-in-out group-hover:translate-x-3 group-hover:scale-110 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="white"
          >
            <path d="M23,11c0-2.206-1.794-4-4-4v-2c0-2.757-2.243-5-5-5h-4c-2.757,0-5,2.243-5,5v2c-2.206,0-4,1.794-4,4v5c0,.017,0,.035,.001,.052,.028,1.63,1.362,2.948,2.999,2.948h7v3H7c-.552,0-1,.447-1,1s.448,1,1,1h10c.552,0,1-.447,1-1s-.448-1-1-1h-4v-3h7c1.637,0,2.971-1.318,2.999-2.948,0-.017,.001-.034,.001-.052v-5Zm-2,0v2.172c-.313-.111-.649-.172-1-.172h-1v-4c1.103,0,2,.897,2,2ZM7,5c0-1.654,1.346-3,3-3h4c1.654,0,3,1.346,3,3V13H7V5Zm-2,4v4h-1c-.351,0-.687,.061-1,.172v-2.172c0-1.103,.897-2,2-2Zm15,8H4c-.551,0-1-.448-1-1s.449-1,1-1H20c.551,0,1,.448,1,1s-.449,1-1,1Z" />
          </svg>

          <h1 class="text-xl text-gray-200 shadow-xl ml-1">
            {movie.availableSeats}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Card;
