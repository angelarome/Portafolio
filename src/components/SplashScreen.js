import logo from "../assets/logo.png";
import "./SplashScreen.css";

function SplashScreen({ fadeOut }) {
  return (
    <div className={`splash ${fadeOut ? "hide" : ""}`}>
      {/* ESTELA */}

      <div className="trail"></div>

      {/* LOGO */}
      <div className="bird-wrapper">
        <img src={logo} className="bird" alt="logo" />
      </div>
    </div>
  );
}

export default SplashScreen;
