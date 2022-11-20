import "./index.css";
import datos from "./Datos.json";
import { Link, Route, Routes } from "react-router-dom";
import Nebula from "./Pages/Nebula";
import Viamo from "./Pages/Viamo";
import Home from "./Pages/Home";
function App() {
  console.log(datos);
  return (
    <div className="App ">
      <Link to="/">Page principal</Link>
      <Link to="/viamo">Aca vamos a Viamo</Link>
      <Link to="/nebula">Aca vamos a Nebula</Link>
      <Routes>
        <Route path="/nebula" element={<Nebula />}></Route>
        <Route path="/viamo" element={<Viamo />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
