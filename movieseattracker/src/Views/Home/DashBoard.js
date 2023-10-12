import React, {useContext } from "react";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
import { ViewContext } from "../../Context/GlobalContext";
const Home = () => {
  const [selectedContent, setSelectedContent] = useContext(ViewContext)

  const handleContentSelect = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="flex overflow-y-hidden">
      <Sidebar onSelect={handleContentSelect} />

      <MainContent selectedContent={selectedContent} />
    </div>
  );
};
export default Home;
