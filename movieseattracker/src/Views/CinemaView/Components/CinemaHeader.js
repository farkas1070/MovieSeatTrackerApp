import { IconButton } from "@material-tailwind/react";
import React,{useContext} from "react"
import { SelectedCinemaContext,ViewContext } from "../../../Context/GlobalContext";

const MovieHeader = () => {
    const [selectedContent, setSelectedContent] = useContext(ViewContext)
    const [selectedCinema, setSelectedCinema] = useContext(SelectedCinemaContext)
    
    return (
    <div className="h-full w-full relative">
      <img
        src={selectedCinema.image}
        alt="card-image"
        className="h-full w-full object-cover"
      />
      {/* Darkened overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      {/* Text in the top left corner */}
      <div className="absolute bottom-4 left-4 text-white">
        <p className="text-4xl  font-extrabold">{selectedCinema.name}</p>
      </div>
      <div className=" absolute top-6 left-6 flex items-center gap-4">
        <IconButton onClick={()=>{setSelectedContent("HomeCinemas")}} variant="filled" className="rounded-full" color="white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="30"
            height="30"
          >
            <path d="M19,11H9l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-4.29,4.3A2,2,0,0,0,6,12H6a2,2,0,0,0,.59,1.4l4.29,4.3a1,1,0,1,0,1.41-1.42L9,13H19a1,1,0,0,0,0-2Z" />
          </svg>
        </IconButton>
      </div>
    </div>
  );
};
export default MovieHeader;
