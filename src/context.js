import React, { useState, useEffect } from "react";
import { DragonSVG } from "./components/index";

const SvgContext = React.createContext();

const SvgProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState("blue");

  const colorsArray = [
    "#0000ff",
    "#cc0099",
    "#993300",
    "#ff66cc",
    "#000000",
    "#FF0000",
    "#ff6600",
    "#00FFFF",
    "#00cc00",
    "#ffff00",
  ];
  //reset
  const reset = () => {
    const svg = document.querySelectorAll("path");
    svg.forEach(function (e) {
      e.setAttribute("fill", "white");
    });
  };

  //heights
  const [heights] = useState({
    headerHeight: 80,
    palleteHeight: 50,
    borders: 10,
  });
  const heightsSum =
    heights.headerHeight + heights.palleteHeight + heights.borders;
  const widths = 30;

  //scaling
  const [dimensions, setDimensions] = useState({
    height: Math.min(window.innerHeight) - heightsSum,
    width: Math.min(window.innerWidth) - widths,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: Math.min(window.innerHeight) - heightsSum,
        width: Math.min(window.innerWidth) - widths,
      });
    }
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  //coloring
  useEffect(() => {
    const svgPath = document.querySelectorAll("path");
    svgPath.forEach(function (e) {
      e.addEventListener("click", function () {
        e.setAttribute("fill", currentColor);
      });
    });
  });
  ///////// svg list ///////////
  const documents = [
    { component: DragonSVG, title: "Dragon", path: "/dragon" },
  ];
  //// pages ////
  const pages = [
    {
      title: "Dragon",
      path: "/dragon",
    },
  ];
  return (
    <SvgContext.Provider
      value={{
        currentColor,
        setCurrentColor,
        reset,
        dimensions,
        colorsArray,
        documents,
        pages,
      }}
    >
      {children}
    </SvgContext.Provider>
  );
};

export { SvgContext, SvgProvider };
