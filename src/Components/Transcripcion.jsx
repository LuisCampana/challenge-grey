export default function Transcripcion({ transcripcionmodif }) {
  return (
    <div>
      <div>
        {transcripcionmodif.map((element) => (
          <div>
            <p>{element}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
