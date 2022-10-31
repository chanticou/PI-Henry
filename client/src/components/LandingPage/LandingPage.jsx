import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
export const LandingPage = () => {
  return (
    <>
      <div className="landing_content"></div>
      <div className="landing_content_button">
        <h1 className="landing_title">Landing page</h1>
        <Link className="link_home" to="/home">
          Home
        </Link>
      </div>
    </>
  );
};
