import { IconButton } from "@material-tailwind/react";
const MovieHeader =({selectedMovie})=>{
return (
     
     <div className="h-full w-full relative">
     <img
       src={selectedMovie.detailPic}
       alt="card-image"
       className="h-full w-full object-cover"
     />
     {/* Darkened overlay */}
     <div className="absolute inset-0 bg-black opacity-40"></div>
     {/* Text in the top left corner */}
     <div className="absolute bottom-4 left-4 text-white">
       <p className="text-4xl  font-extrabold">{selectedMovie.name}</p>
       
     </div>
     <div className=" absolute top-6 left-6 flex items-center gap-4">
      
      <IconButton variant="filled" className="rounded-full" color="white">
        <i className="fas fa-heart" />
      </IconButton>
      
    </div>
     
   </div>
)

}
export default MovieHeader