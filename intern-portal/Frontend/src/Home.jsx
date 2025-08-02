import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Intern Portal</h1>
      <p className="home-intro">
        Welcome to Intern Portal — your gateway to internship opportunities and progress tracking.
      </p>

      <div className="home-buttons">
        <button className="btn signup-btn" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
        <button className="btn login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Home;
