import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container grid grid-cols-2  text-center">
      <div className="left">
        <Link to="/viamo">Aca vamos a Viamo</Link>
      </div>
      <div className="righ">
        <Link to="/nebula">Aca vamos a Nebula</Link>
      </div>
    </div>
  );
}
