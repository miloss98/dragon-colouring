import "./styles/color_pallete.css";
import "../pages/styles/svg_pages.css";
import { SvgContext } from "../context";
import { useContext } from "react";
const ColorPallete = () => {
  const { currentColor, setCurrentColor, colorsArray } = useContext(SvgContext);

  return (
    <div className="color-palette">
      {colorsArray.map((array, id) => {
        const { color, image } = array;
        const activeClass = currentColor === color ? "single-color-active" : "";
        return (
          <div
            className="crayons-container"
            key={id}
            onClick={() => setCurrentColor(color)}
          >
            <div
              className={`single-color ${activeClass}`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
                objectFit: "contain",
                backgroundColor: "white",
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default ColorPallete;
