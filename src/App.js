import logo from "./logo.svg";
import "./App.css";
import NavigationMenu from "./NavigationMenu";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
