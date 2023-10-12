import { Chip } from "@material-tailwind/react";

const MovieGenresChips = ({ genres }) => {
    
  // Split the genres string into an array using the "|" delimiter
  const genreArray = genres.split("|");
    console.log(genreArray)
  return (
    <div className="flex space-x-2 relative">
      {genreArray.map((genre, index) => (
        <Chip key={index} color="amber" size="lg" value={genre}>
          
        </Chip>
      ))}
    </div>
  );
};

export default MovieGenresChips;
