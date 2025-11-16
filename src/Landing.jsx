import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <div className="content">
        <div className="landing_content">
          <h1>Welcome To Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where Green Meets Serenity</p>

          <button
            className="get-started-button"
            onClick={() => navigate("/plants")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
