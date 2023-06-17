import Color from "color";

const TriadicColors = (props: Color) => {
  return (
    <div>
      <p className="text-xl m-4">Triadic Colors</p>
      <div className="flex flex-row m-4">
        <div className="flex flex-col w-full">
          <div
            className="w-full p-4"
            style={{ backgroundColor: props.color.rotate(-120) }}
          ></div>
          <div>{props.color.rotate(-120).hex()}</div>
        </div>
        <div className="flex flex-col w-full">
          <div
            className="w-full p-4"
            style={{ backgroundColor: props.color }}
          ></div>
          <div>{props.color.hex()}</div>
        </div>
        <div className="flex flex-col w-full">
          <div
            className="w-full p-4"
            style={{ backgroundColor: props.color.rotate(120) }}
          ></div>
          <div>{props.color.rotate(120).hex()}</div>
        </div>
      </div>
    </div>
  );
};

export default TriadicColors;
