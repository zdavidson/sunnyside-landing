import React from "react";

const Footer = () => {
  const marginLeft = "3rem";
  return (
    <div style={{ backgroundColor: "#99d8cd", padding: "5rem 0" }}>
      <h4 style={{ fontSize: "2rem", fontWeight: 700, opacity: 0.65 }}>
        sunnyside
      </h4>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
          alignItems: "center",
          opacity: 0.65,
          margin: "2rem",
        }}
      >
        <li>About</li>
        <li style={{ marginLeft: marginLeft }}>Services</li>
        <li style={{ marginLeft: marginLeft }}>Projects</li>
      </ul>
      <div style={{ margin: "4rem" }}>
        <img src="./images/icon-facebook.svg" alt="social-media-icon" />
        <img
          style={{ marginLeft: "1rem" }}
          src="./images/icon-instagram.svg"
          alt="social-media-icon"
        />
        <img
          style={{ marginLeft: "1rem" }}
          src="./images/icon-twitter.svg"
          alt="social-media-icon"
        />
        <img
          style={{ marginLeft: "1rem" }}
          src="./images/icon-pinterest.svg"
          alt="social-media-icon"
        />
        <img
          style={{ marginLeft: "1rem" }}
          src="./images/icon-pinterest.svg"
          alt="social-media-icon"
        />
      </div>
    </div>
  );
};

export default Footer;
