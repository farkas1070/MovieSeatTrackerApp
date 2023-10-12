import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./Context/GlobalContext";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
