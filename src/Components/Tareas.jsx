export default function Tareas({ datos, i }) {
  let tarea = 0;
  return (
    <div>
      <div className="pt-[15px]">
        {datos[i].preguntas.map((pregunta) => (
          <p className="box-border	w-[600px] text-[#FDFEFE]">
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
            <div className="pt-[15px] pb-[15px]">
              <p className="tareatiempo border-b-2 w-[600px] text-[#FBFF00] pb-[15px]">
                Duracion de la tarea: {pregunta.tiempo}
              </p>
            </div>
          </p>
        ))}
      </div>
    </div>
  );
}
