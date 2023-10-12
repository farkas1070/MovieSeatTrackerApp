import { createContext, useState } from "react";
export const ViewContext = createContext();
export const SingleMovieContext = createContext();

export const DataProvider = (props) => {
  const [selectedContent, setSelectedContent] = useState("Home");
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <ViewContext.Provider value={[selectedContent, setSelectedContent]}>
      <SingleMovieContext.Provider  value={[selectedMovie, setSelectedMovie]}>
        {props.children}
      </SingleMovieContext.Provider>
    </ViewContext.Provider>
  );
};
