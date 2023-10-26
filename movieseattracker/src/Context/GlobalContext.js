import { createContext, useState } from "react";
export const ViewContext = createContext();
export const SingleMovieContext = createContext();
export const UserTypeContext = createContext();
export const UserContext = createContext();

export const DataProvider = (props) => {
  const [selectedContent, setSelectedContent] = useState("Home");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [userType, setUserType] = useState("");
  const [userContext, setUserContext] = useState(null);

  return (
    <ViewContext.Provider value={[selectedContent, setSelectedContent]}>
      <SingleMovieContext.Provider value={[selectedMovie, setSelectedMovie]}>
        <UserTypeContext.Provider value={[userType, setUserType]}>
          <UserContext.Provider value={[userContext, setUserContext]}>
            {props.children}
          </UserContext.Provider>
        </UserTypeContext.Provider>
      </SingleMovieContext.Provider>
    </ViewContext.Provider>
  );
};
