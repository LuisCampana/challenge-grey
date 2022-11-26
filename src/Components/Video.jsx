export default function Video({ datos, i }) {
  return (
    <div className="border-2 border-black  justify-center ml-[40px] lg:ml-[85px] mr-[40px] lg:mr-[85px]	">
      <video
        className="border-2 border-black"
        src={datos[i].linkVideo}
        height="100%"
        width="100%"
        controls
      ></video>
    </div>
  );
}
