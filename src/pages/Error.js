import "./styles/errorpage.css";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error-wrapper">
      <div className="error-container">
        <section className="nav-container">
          <button onClick={() => navigate("/")}>
            {" "}
            <BiArrowBack className="back-home-icon" />
            <p className="back-text">back home?</p>
          </button>
        </section>
        <section className="error-content">
          <h1>Error 404!</h1>
          <p> Page not found! </p>
        </section>
      </div>
    </div>
  );
};

export default Error;
