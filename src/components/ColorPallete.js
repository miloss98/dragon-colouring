import "./styles/pallete.css";
import { SvgContext } from "../context";
import { useContext } from "react";
const ColorPallete = () => {
  const { currentColor, setCurrentColor, colorsArray } = useContext(SvgContext);

  return (
    <div className="color-palette">
      {colorsArray.map((color, id) => {
        const activeClass = currentColor === color ? "single-color-active" : "";
        return (
          <div key={id} onClick={() => setCurrentColor(color)}>
            <div
              className={`single-color ${activeClass}`}
              style={{ backgroundColor: color }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default ColorPallete;
