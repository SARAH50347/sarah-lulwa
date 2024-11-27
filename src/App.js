import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App font-mono ">
      <Navbar />
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
