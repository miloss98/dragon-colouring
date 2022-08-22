import { NavLink } from "react-router-dom";
import "./styles/homepage.css";
import { useContext } from "react";
import { SvgContext } from "../context";
const Home = () => {
  const { pages } = useContext(SvgContext);

  return (
    <div className="homepage-wrapper ">
      <nav>
        <h1 className="app-title">Coloring Book </h1>
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
