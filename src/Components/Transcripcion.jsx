export default function Transcripcion({ transcripcionmodif }) {
  let i = 0;
  return (
    <div className="transcripcioncontainer ">
      <div className="text-[#FDFEFE]">
        {transcripcionmodif.map((element) => (
          <div key={(i = i + 1)}>
            <p>{element}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
