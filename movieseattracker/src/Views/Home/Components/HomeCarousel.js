import React from "react";
import { Carousel } from "@material-tailwind/react";

const HomeCinemas = () => {
  const carouselHeight = "30vh"; // Set the desired height for the carousel

  const carouselItems = [
    {
      src:
        "https://tourism.seefeld.com/media/infrastructure/animation/kino-seefeld.jpg",
      alt: "image 1",
      text: "Find Cinemas Next To You", // Add your text here
    },
    {
      src:
        "https://www.schladming-dachstein.at/Easy-Edit-Mode/kino%40dirninger.com/A-Z/Kino%20Gröbming-341479/3855991616-CHF_20180413_105353b.jpg",
      alt: "image 2",
      text: "Find With Limited Seats", // Add your text here
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/4/4e/Stadium_seating_digital_cinema.jpg",
      alt: "image 3",
      text: "Search For Best Deals", // Add your text here
    },
  ];

  return (
    <div className="p-2 ">
      <Carousel
        transition={{ duration: 2 }}
        className="rounded-xl"
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
    </div>
  );
};

export default HomeCinemas;
