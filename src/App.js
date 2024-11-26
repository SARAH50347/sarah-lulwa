import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App font-mono ">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
