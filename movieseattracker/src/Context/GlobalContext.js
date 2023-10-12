import { createContext, useState } from "react";
export const ViewContext = createContext();
export const SingleMovieContext = createContext();
export const UserTypeContext = createContext();

export const DataProvider = (props) => {
  const [selectedContent, setSelectedContent] = useState("Home");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [userType, setUserType] = useState("");

  return (
    <ViewContext.Provider value={[selectedContent, setSelectedContent]}>
      <SingleMovieContext.Provider value={[selectedMovie, setSelectedMovie]}>
        <UserTypeContext.Provider value={[userType, setUserType]}>
          {props.children}
        </UserTypeContext.Provider>
      </SingleMovieContext.Provider>
    </ViewContext.Provider>
  );
};
