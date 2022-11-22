export default function Transcripcion({ transcripcionmodif }) {
  return (
    <div className="transcripcioncontainer ">
      <div className="text-[#FDFEFE]">
        {transcripcionmodif.map((element) => (
          <div>
            <p>{element}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
