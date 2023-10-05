import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Page1 from "../../../Assets/Homepage/page1.jpg";
import Page2 from "../../../Assets/Homepage/page2.jpg";
import Page3 from "../../../Assets/Homepage/page3.jpg";
import HomeCarousel from "./HomeCarousel";
const Home = () => {
  return (
    <div className="w-full" >
      <HomeCarousel/>
    </div>
  );
};
export default Home;
