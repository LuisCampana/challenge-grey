import { Link } from "react-router-dom";
import Tareas from "../Components/Tareas";
import Transcripcion from "../Components/Transcripcion";
import Video from "../Components/Video";
import datos from "../Datos.json";
export default function Nebula() {
  const pruebatranscripcion = datos[1].transcripcion;
  let expresiones = "<br>";
  let transcripcionmodif = pruebatranscripcion.split(expresiones);
  let i = 1;
  return (
    <div className="divcontainer  bg-red-900">
      <h1 className="text-center font-[georgia] text-[#FDFEFE] pt-[20px] text-[35px]">
        {datos[1].cliente.toUpperCase()}
      </h1>
      <div className="pageprincipalink pt-[30px]  hover:text-black font-[georgia] text-white text-center flex lg:ml-[85px]  ml-[15px] xl:ml-[85px] md:ml-[40px]">
        <Link to="/">Volver a pagina principal</Link>
      </div>
      <div className="containerTest pt-[50px]">
        <h2 className="text-[#FDFEFE] font-[georgia] md:ml-[40px] pt-[30px] text-[25px] lg:ml-[85px]  ml-[15px] xl:ml-[85px]">
          Test: Test sobre la funcionalidad de la pagina web de Nebula
        </h2>
        <div className="pt-[70px] pb-10">
          <Video datos={datos} i={i} />
        </div>
      </div>
      <h2 className="Transcripcion font-[georgia] lg:ml-[85px] pt-[35px] pb-[35px] text-[#FDFEFE] md:ml-[40px] text-[25px] ml-[15px] xl:ml-[85px]">
        Transcripcion
      </h2>
      <div className="text transcripcion font-[georgia] lg:ml[75px] sm:w-[330px] sm:h-[300px] w-[330px] h-[300px]  overflow-scroll md:w-[500px] md:h-[400px]	lg:w-[600px] lg:h-[300px] text-base pl-[45px] pr-[35px]  xl:ml-[75px]  mx-0 md:ml-[80px]">
        <Transcripcion transcripcionmodif={transcripcionmodif} />
      </div>
      <h2 className="pt-[40px] font-[georgia] pb-[25px] text-[#FDFEFE] md:ml-[80px] text-[25px] ml-[15px]">
        Tareas
      </h2>
      <div className="Nombre escenario">
        <p className="font-[georgia] md:w-[600px] xl:w-[600px] w-[250px] text-[#FDFEFE] md:ml-[80px]  ml-[15px]">
          Escenario: {datos[1].escenario}
        </p>
      </div>
      <div className="md:w-[600px] w-[250px]  pb-[px] sm:ml-[15px]  xl:w-[600px]  ">
        <div className=" border-b-2 md:ml-[80px] md:w-[600px] w-[280px] pt-[25px] ml-[15px]"></div>
      </div>
      <div className="md:ml-[80px] font-[georgia]">
        <Tareas datos={datos} i={i} />
      </div>
    </div>
  );
}
