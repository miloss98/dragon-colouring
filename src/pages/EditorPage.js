import React, { useEffect, useState, useContext, useRef } from "react";
import { ColorPallete } from "../components";
import { useNavigate } from "react-router-dom";
import "./../pages/styles/svg_pages.css";
import "./../pages/styles/editor.css";
import { SvgContext } from "../context";
import { FaArrowLeft } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
//
import { Logo } from "../components/index";
import exportAsImage from "../utils/exportAsImage";
//
import { ss_button } from "../images/index";
import { ScreenshotBtn } from "../components/ScreenshotBtn";
import "./../components/styles/screenshotbtn.css";

const EditorPage = ({ SVGComponent, title }) => {
  const { reset, setCurrentColor } = useContext(SvgContext);
  const navigate = useNavigate();
  const exportRef = useRef();

  const [element, setElement] = useState(null);

  useEffect(() => {
    const element = <SVGComponent />;
    setCurrentColor("#0000FF");
    setElement(element);
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="editor-wrapper">
      <div className="editor-container">
        <section className="header">
          <article className="back-container">
            <FaArrowLeft onClick={() => navigate(-1)} className="go-back" />
          </article>
          <Logo />
          <article className="reset-container">
            <VscDebugRestart className="reset-btn" onClick={() => reset()} />
          </article>
        </section>
        <section ref={exportRef} className="svg-container">
          {element}
        </section>
        <ScreenshotBtn onPress={() => exportAsImage(exportRef.current, "test")}>
          <img
            className="ss-btn__icon"
            src={ss_button}
            alt={ss_button.toString()}
          />
        </ScreenshotBtn>

        <section className="pallete-container">
          <ColorPallete />
        </section>
      </div>
    </div>
  );
};

export default EditorPage;
