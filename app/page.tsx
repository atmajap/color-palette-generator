"use client";
import { useRef, useState } from "react";
import Color from "color";
import AnalogousColor from "./components/analogousColors";

export default function Home() {
  const [primaryColor, setPrimaryColor] = useState(Color("#000000"));

  return (
    <div>
      <p>Color Palette Generator</p>
      <div>
        <label>Select Primary Color</label>
        <input
          type="color"
          onChange={(event) => {
            const currentColor = Color(event.target.value);
            setPrimaryColor(currentColor);
          }}
        ></input>
      </div>
      <AnalogousColor color={primaryColor} />
    </div>
  );
}
