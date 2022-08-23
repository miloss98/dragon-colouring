import React, { useState, useEffect } from "react";
import { DragonSVG } from "./components/index";
import { dragon_example } from "./images/index";
//crayons
import {
  black,
  blue,
  orange,
  red,
  purple,
  green,
  pink,
  lightblue,
  yellow,
  brown,
} from "./images/crayons/index";

const SvgContext = React.createContext();

const SvgProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState("blue");

  const colorsArray = [
    { color: "#0000ff", image: blue },
    { color: "#cc0099", image: purple },
    { color: "#993300", image: brown },
    { color: "#ff66cc", image: pink },
    { color: "#000000", image: black },
    { color: "#FF0000", image: red },
    { color: "#ff6600", image: orange },
    { color: "#00FFFF", image: lightblue },
    { color: "#00cc00", image: green },
    { color: "#ffff00", image: yellow },
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
      image: dragon_example,
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
