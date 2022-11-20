import Tareas from "../Components/Tareas";
import Transcripcion from "../Components/Transcripcion";
import Video from "../Components/Video";
import datos from "../Datos.json";
export default function Viamo() {
  const pruebatranscripcion = datos[0].transcripcion;
  let expresiones = "<br>";
  let transcripcionmodif = pruebatranscripcion.split(expresiones);
  let i = 0;
  return (
    <div className="divcontainer bg-[#9E00FF]">
      <h1 className="text-center">Nuestro Cliente es: {datos[0].cliente}</h1>
      <h2>Test: Test sobre la funcionalidad de la pagina web de Viamo</h2>
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
      <p>{datos[0].escenario}</p>
      <div>
        <Tareas datos={datos} i={i} />
      </div>
    </div>
  );
}
/*
Este funciona perfecto

{datos[0].preguntas.map((pregunta) => (
        <div>{pregunta.texto}</div>
      ))}



--------------------------------
  {datos.map((dato, i) => (
        <div>
          {dato.cliente}
          {dato.id}
          {dato.idVideo}
          {dato.transcripcion}
        </div>
        -------------------------

{datos.map((dato) =>
        dato.preguntas.map((pregunta) => <div>{pregunta.texto}</div>)
      )}

      ))}*/
