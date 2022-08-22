import React, { useEffect, useState, useContext } from "react";
import { ColorPallete } from "../components";
import { useNavigate } from "react-router-dom";
import "./../pages/styles/svg_pages.css";
import { SvgContext } from "../context";
import { FaArrowLeft } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

const Editor = ({ SVGComponent, title }) => {
  const { reset, setCurrentColor } = useContext(SvgContext);
  const navigate = useNavigate();

  const [element, setElement] = useState(null);

  useEffect(() => {
    const element = <SVGComponent />;
    setCurrentColor("#0000FF");
    setElement(element);
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <section className="header">
          <article className="back-container">
            <FaArrowLeft onClick={() => navigate(-1)} className="go-back" />
          </article>
          <article className="title-container">
            <h1 className="title">{title}</h1>
          </article>
          <article className="reset-container">
            <VscDebugRestart className="reset-btn" onClick={() => reset()} />
          </article>
        </section>
        <section className="svg-container">{element}</section>
        <section className="pallete-container">
          <ColorPallete />
        </section>
      </div>
    </div>
  );
};

export default Editor;
