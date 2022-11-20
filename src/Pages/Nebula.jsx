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
    <div>
      <h1 className="text-center">Nuestro Cliente es: {datos[1].cliente}</h1>
      <h2>Test: Test sobre la funcionalidad de la pagina web de Nebula</h2>
      <div className="pt-[70px] pb-10">
        <Video datos={datos} i={i} />
      </div>
      <br />
      <br></br>
      <h2 className="Transcripcion ">Transcripcion</h2>
      <div className="text transcripcion overflow-scroll	w-[500px] h-[500px] p-[30px]">
        <Transcripcion transcripcionmodif={transcripcionmodif} />
      </div>
      <h2>Tareas</h2>
      <p>{datos[1].escenario}</p>
      <div>
        <Tareas datos={datos} i={i} />
      </div>
    </div>
  );
}
