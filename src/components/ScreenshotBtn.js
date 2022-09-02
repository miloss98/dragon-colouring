import "./styles/screenshotbtn.css";
import { corner_splash } from "./../images/index";

export const ScreenshotBtn = ({ children, onPress }) => {
  return (
    <div className="ss-btn" onClick={onPress}>
      <img
        height="100%"
        width="100%"
        src={corner_splash}
        alt={corner_splash.toString()}
      />
      {children}
    </div>
  );
};
