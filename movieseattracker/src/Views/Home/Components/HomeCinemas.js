import React,{useState,useEffect,useContext} from "react";
import { Carousel } from "@material-tailwind/react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../../firebase-config";
import { ViewContext } from "../../../Context/GlobalContext";
const HomeCinemas = () => {
  const carouselHeight = "50vh"; // Set the desired height for the carousel
  const [cinemas, setCinemas] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedContent, setSelectedContent] = useContext(ViewContext);
  
  const carouselItems = [
    {
      src:
        "https://kep.cdn.indexvas.hu/1/0/1946/19464/194649/19464919_2161b0a613c92c010dbb14c5fcb1ae77_wm.jpg",
      alt: "image 1",
      text: "Buda Bed Cinema - Ágymozi", // Add your text here
    },
    {
      src:
        "https://kep.cdn.indexvas.hu/1/0/1946/19465/194651/19465127_25e9a2457875fbd6d68fcee4a51de271_wm.jpg",
      alt: "image 2",
      text: "Aréna VIP Mozi", // Add your text here
    },
    {
      src:
        "https://kep.cdn.indexvas.hu/1/0/1946/19465/194651/19465125_4b3048ba0138ba2e639f153bcd507820_wm.jpg",
      alt: "image 3",
      text: "MOM Park Cinema Pink", // Add your text here
    },
  ];
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
    const getAllCinemas = async () => {
      const querySnapshot = await getDocs(collection(db, "Cinemas"));

      const tempCinemas = []; // Temporary array to store movie data

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        const movieData = doc.data();
        tempCinemas.push(movieData); // Add movie data to the temporary array
      });

      // Set the movies state with the temporary array containing movie data
      setCinemas(tempCinemas);
    };

    getAllCinemas();

    
  }, []);

  return (
    <div className="p-2 ">
      <Carousel
        transition={{ duration: 2 }}
        className="rounded-xl"
        autoplayDelay={7000}
        style={{ height: carouselHeight }}
        autoplay={true} // Enable autoplay
        loop={true}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="relative h-full">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.src})` }}>
              <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-2xl font-bold">{item.text}</p> {/* Centered text */}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div class="text-2xl font-bold mb-4 text-white mt-20">
          Trending Cinemas
        </div>
        <hr class="mb-4 border-t-2 border-gray-300" />
        <div class="grid grid-cols-4 gap-4 mb-4">
          {cinemas.map((cinema, index) => {
            if (index >= 0 && index <= 3) {
              return (
                <button className="relative h-60 rounded overflow-hidden transition-transform hover:scale-105" onClick={()=>{setSelectedContent("CinemaView")}}>
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-70 "
                  style={{
                    backgroundImage: `url(${cinema.image})`,
                  }}
                ></div>
              
                <div className="absolute inset-0 bg-black opacity-20 transition duration-300 ease-in-out group-hover:opacity-100"></div>
              
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-2xl text-white">{cinema.name}</p>
                </div>
              </button>
              );
            }
          })}
        </div>

        <div class="grid grid-cols-2 gap-4">
          {cinemas.map((cinema, index) => {
            if (index >= 4 && index <= 5) {
              return (
                <button className="relative h-80 rounded overflow-hidden transition-transform hover:scale-105">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-70"
                    style={{
                      backgroundImage: `url(${cinema.image})`,
                    }}
                  ></div>

                  <div className="absolute inset-0 bg-black opacity-20"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-2xl text-white">{cinema.name}</p>
                  </div>
                </button>
              );
            }
          })}
        </div>
    </div>
  );
};

export default HomeCinemas;
