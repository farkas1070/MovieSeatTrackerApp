import React from "react";
import { Carousel } from "@material-tailwind/react";

const HomeCinemas = () => {
  const carouselHeight = "30vh"; // Set the desired height for the carousel

  const carouselItems = [
    {
      src:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      alt: "image 1",
      text: "Find Cinemas Next To You", // Add your text here
    },
    {
      src:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      alt: "image 2",
      text: "Find With Limited Seats", // Add your text here
    },
    {
      src:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
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
