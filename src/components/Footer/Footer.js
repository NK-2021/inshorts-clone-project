import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/piyush-eon" target="__blank">
          Neena Khan
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        Demo Inshorts Clone using React & Material UIzz
      </div>
    </div>
  );
};

export default Footer;