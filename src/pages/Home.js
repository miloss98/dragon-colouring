import { NavLink } from "react-router-dom";
import "./styles/homepage.css";
import { useContext } from "react";
import { SvgContext } from "../context";
import title_image from "../title.png";
const Home = () => {
  const { pages } = useContext(SvgContext);

  return (
    <div className="homepage-wrapper ">
      <nav>
        <img width={"30%"} height={"100%"} src={title_image} alt="title" />
      </nav>
      <div className="content-container">
        <section className="content">
          {pages.map((item, index) => (
            <div key={index} className="single-item">
              <h1 className="single-item-title"> {item.title} </h1>
              <div className="img-container">
                <img className="images" src={item.image} alt={item.title} />
              </div>
              <NavLink className="link-styles" to={item.path}>
                Start
              </NavLink>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
