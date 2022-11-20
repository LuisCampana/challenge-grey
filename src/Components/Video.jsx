export default function Video({ datos, i }) {
  return (
    <div className=" flex justify-center	">
      <video
        className="border-2 border-black"
        src={datos[i].linkVideo}
        poster={datos[i].idVideo}
        controls
        height="50%"
        width="50%"
      ></video>
    </div>
  );
}
