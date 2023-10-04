import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
const Home = () => {
  const [selectedContent, setSelectedContent] = useState("Home");

  const handleContentSelect = (content) => {
    setSelectedContent(content);
  };
  return (
    <div>
      
      <Sidebar onSelect={handleContentSelect} />

      <MainContent selectedContent={selectedContent} />
    </div>
  );
};
export default Home;
