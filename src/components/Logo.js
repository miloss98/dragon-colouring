import { title } from "../images/index";
import "./../pages/styles/svg_pages.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo-img" src={title} alt="title" />
    </div>
  );
};

export default Logo;
