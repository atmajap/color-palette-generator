import Color from "color";

const MonochromaticColors = (props: Color) => {
  return (
    <div>
      <p className="text-xl m-4">Monochromatic Colors</p>
      <div className="flex flex-row m-4">
        <div className="flex flex-col w-full">
          <div
            className="w-full p-4"
            style={{ backgroundColor: props.color.darken(0.25) }}
          ></div>
          <div>{props.color.darken(0.25).hex()}</div>
        </div>
        <div className="flex flex-col w-full">
          <div
            className="w-full p-4"
            style={{ backgroundColor: props.color.darken(0.125) }}
          ></div>
          <div>{props.color.darken(0.125).hex()}</div>
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
            style={{ backgroundColor: props.color.lighten(0.125) }}
          ></div>
          <div>{props.color.lighten(0.125).hex()}</div>
        </div>
        <div className="flex flex-col w-full">
          <div
            className="w-full p-4"
            style={{ backgroundColor: props.color.lighten(0.25) }}
          ></div>
          <div>{props.color.lighten(0.25).hex()}</div>
        </div>
      </div>
    </div>
  );
};

export default MonochromaticColors;
