import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Page1 from "../../../Assets/Homepage/page1.jpg";
import Page2 from "../../../Assets/Homepage/page2.jpg";
import Page3 from "../../../Assets/Homepage/page3.jpg";
const Home = () => {
  return (
    <div class="flex">
      <div></div>
      <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} dynamicHeight={false}>
        <div className="h-30">
          
          <img src={Page1} className="h-full" />
        </div>
        
        <div  className="h-30" >
          <img src={Page3}  className="h-full" />
        </div>
      </Carousel>
    </div>
  );
};
export default Home;
