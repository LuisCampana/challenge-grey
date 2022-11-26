import "./index.css";
import { Route, Routes } from "react-router-dom";
import Nebula from "./Pages/Nebula";
import Viamo from "./Pages/Viamo";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/nebula" element={<Nebula />}></Route>
        <Route path="/viamo" element={<Viamo />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
