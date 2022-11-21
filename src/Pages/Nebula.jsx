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
    <div className="divcontainer bg-[#CB4335]">
      <h1 className="text-center text-[#FDFEFE] pt-[20px] text-[30px]">
        Nuestro Cliente es: {datos[1].cliente}
      </h1>
      <h2 className="text-[#FDFEFE] ml-[40px] pt-[30px] text-[25px]">
        Test: Test sobre la funcionalidad de la pagina web de Nebula
      </h2>
      <div className="pt-[70px] pb-10">
        <Video datos={datos} i={i} />
      </div>
      <h2 className="Transcripcion pt-[35px] pb-[35px] text-[#FDFEFE] ml-[40px] text-[25px]">
        Transcripcion
      </h2>
      <div className="text transcripcion overflow-scroll w-[600px] h-[300px] text-base pl-[45px] pr-[35px] ml-[40px]">
        <Transcripcion transcripcionmodif={transcripcionmodif} />
      </div>
      <h2 className="pt-[40px] pb-[25px] text-[#FDFEFE] ml-[40px] text-[25px]">
        Tareas
      </h2>
      <p className="border-b-2 w-[600px] text-[#FDFEFE] ml-[40px] pb-[15px]">
        Escenario: {datos[1].escenario}
      </p>
      <div className="ml-[50px]">
        <Tareas datos={datos} i={i} />
      </div>
    </div>
  );
}
