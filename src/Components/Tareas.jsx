//let transcripcionmodif = pruebatranscripcion.split(expresiones);
export default function Tareas({ datos, i }) {
  let tareamodif;
  let tarea = 0;
  return (
    <div>
      <div className="pt-[5px] ">
        {datos[i].preguntas.map((pregunta, j) => {
          tareamodif = pregunta.texto.replace(/\\n/g, "");
          return (
            <div key={j}>
              <p className=" w-[260px]	md:w-[600px] text-[#FDFEFE] md:ml-[25px] pt-[10px] ml-[35px]">
                <strong className="">
                  Tarea:{(tarea = tarea + 1)}
                  <br></br>
                  {tareamodif}
                </strong>
                {pregunta.respuesta === "respuesta verbal" ? (
                  ""
                ) : (
                  <p className="pt-[10px]">{`Respuesta:${pregunta.respuesta}`}</p>
                )}
                <p className="tareatiempo  text-[#FBFF00] pb-[15px] pt-[15px]  ">
                  Duracion de la tarea: {pregunta.tiempo}
                </p>
              </p>
              <div className="border-b-2 md:w-[600px] w-[280px]  pb-[15px] ml-[15px] xl:w-[600px]"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
