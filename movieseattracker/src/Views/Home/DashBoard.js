import React, { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
const Home = () => {
  const [selectedContent, setSelectedContent] = useState("Home");

  const handleContentSelect = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="flex h-full">
      <Sidebar onSelect={handleContentSelect} />

      <MainContent selectedContent={selectedContent} />
    </div>
  );
};
export default Home;
