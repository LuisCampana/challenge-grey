export default function Tareas({ datos, i }) {
  let tarea = 0;
  return (
    <div>
      <div>
        {datos[i].preguntas.map((pregunta) => (
          <p>
            <strong>
              Tarea:{(tarea = tarea + 1)}
              <br></br>
              {pregunta.texto}
            </strong>
            <br></br>
          </p>
        ))}
      </div>
    </div>
  );
}
