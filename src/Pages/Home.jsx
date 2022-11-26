import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container grid grid-cols-2  text-center h-screen max-w-[100%] font-[oswald] lg:text-[40px] text-[20px] md:text-[30px]">
      <div className="left  bg-[#1A4F66] flex place-items-center text-center justify-center text-white  hover:bg-sky-700	">
        <h1 className="hover:text-black	">
          <Link to="/viamo">Click aca para ir a Viamo</Link>
        </h1>
      </div>
      <div className="righ bg-red-900	 flex place-items-center text-center justify-center  text-white hover:bg-red-600">
        <h1 className="hover:text-black	">
          <Link to="/nebula">Click aca para ir a Nebula</Link>
        </h1>
      </div>
    </div>
  );
}
