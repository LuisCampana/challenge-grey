export default function Tareas({ datos, i }) {
  let tarea = 0;
  return (
    <div>
      <div className="pt-[5px] ">
        {datos[i].preguntas.map((pregunta) => (
          <>
            <p className=" w-[200px]	md:w-[600px] text-[#FDFEFE] md:ml-[25px] pt-[10px] ml-[35px] ">
              <strong className="" key={i}>
                Tarea:{(tarea = tarea + 1)}
                <br></br>
                {pregunta.texto}
              </strong>
              {pregunta.respuesta === "respuesta verbal" ? (
                ""
              ) : (
                <p>{`Respuesta:${pregunta.respuesta}`}</p>
              )}
              <div className="pt-[15px] pb-[10px]">
                <p className="tareatiempo  text-[#FBFF00] pb-[15px] ">
                  Duracion de la tarea: {pregunta.tiempo}
                </p>
              </div>
            </p>
            <div className="border-b-2 md:w-[600px] w-[250px]  pb-[15px] ml-[15px] xl:w-[600px]"></div>
          </>
        ))}
      </div>
    </div>
  );
}
